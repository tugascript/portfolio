// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface IFormData {
  name: string;
  email: string;
  body: string;
  token: string;
}

interface IResponse {
  status: number;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function validateHuman(token: string): Promise<true> {
  const secret = process.env.RECAPTCHA_SECRET_KEY as string;

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();

  return data.success && data.score && data.score > 0.75;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
): Promise<void> {
  if (req.method === "POST") {
    const formData: IFormData = req.body;
    const isHuman = await validateHuman(formData.token);

    if (!isHuman) {
      res.status(400).json({ status: 400, message: "Something went wrong" });
      return;
    }

    try {
      await transporter.sendMail({
        from: '"TugaScript" <no-reply@tugascript.com>', // sender address
        to: "barracha.afonso@gmail.com", // list of receivers
        subject: `A new message from ${formData.name} with ${formData.email}`, // Subject line
        text: formData.body, // plain text body
      });
    } catch (error) {
      res.status(400).json({ status: 400, message: "Something went wrong" });
      return;
    }

    res.status(200).json({ status: 200, message: "Email sent successfully" });
  } else {
    res.status(400).json({ status: 400, message: "Something went wrong" });
  }
}

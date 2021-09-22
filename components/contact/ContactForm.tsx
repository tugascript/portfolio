import { styled } from "@mui/material/styles";
import type { FormikHelpers } from "formik";
import type { FC, SyntheticEvent } from "react";
import { useContext, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from "yup";
import type { IText } from "../../interfaces/text";
import AppForm from "../forms/AppForm";
import AppFormField from "../forms/AppFormField";
import AppSubmitButton from "../forms/AppSubmitButton";
import Alert from "../layout/Alert";
import { PreferencesCtx } from "../PreferencesContext";

interface IForm {
  name: string;
  email: string;
  body: string;
}

interface IState {
  status: "success" | "error";
  message: string;
  open: boolean;
}

const StyledForm = styled(AppForm)({
  "& .contact-form-field": {
    color: "#fff",
    borderColor: "#fff",
  },
});

const textArr: IText[] = [
  { en: "Name", pt: "Nome" },
  { en: "Email", pt: "Correio Eletrónico" },
  { en: "Message", pt: "Mensagem" },
];

const validationSchema: Yup.SchemaOf<IForm> = Yup.object().shape({
  name: Yup.string()
    .required()
    .matches(
      new RegExp("(^[\\p{L}'\\.\\s]*$)", "u"),
      "Name can only contain letters, dots and spaces"
    )
    .min(2)
    .max(50)
    .label("Name"),
  email: Yup.string().email().required().label("Email"),
  body: Yup.string().required().min(3).max(1000).label("Message"),
});

const ContactForm: FC = () => {
  const { language } = useContext(PreferencesCtx);
  const reRef = useRef<ReCAPTCHA | null>(null);
  const [state, setState] = useState<IState>({
    status: "success",
    message: "",
    open: false,
  });

  const initialValues: IForm = {
    name: "",
    email: "",
    body: "",
  };

  const handleClose = (e: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") return;

    setState((prevState) => ({ ...prevState, open: false }));
  };

  const handleSubmit = async (
    { name, email, body }: IForm,
    helpers: FormikHelpers<IForm>
  ) => {
    const token = await reRef.current?.executeAsync();
    reRef.current?.reset();

    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        body,
        token,
      }),
    });

    const data = await response.json();
    if (data.status === 400) {
      setState({
        status: "error",
        message:
          language === "en"
            ? "Something went wrong."
            : "Ocorreu algo de errado.",
        open: true,
      });
      return;
    }

    if (data.status === 200) {
      setState({
        status: "success",
        message:
          language === "en"
            ? "Message sent successfully!"
            : "Mensagem enviada com sucesso!",
        open: true,
      });
      helpers.setTouched({ name: false, email: false, body: false });
      helpers.setValues(initialValues);
    }
  };

  return (
    <StyledForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Alert
        severity={state.status}
        message={state.message}
        open={state.open}
        handleClose={handleClose}
      />
      <AppFormField
        className="contact-form-field"
        name="name"
        label={textArr[0][language]}
        loading={false}
      />
      <AppFormField
        className="contact-form-field"
        name="email"
        label={textArr[1][language]}
        type="email"
        loading={false}
      />
      <AppFormField
        className="contact-form-field"
        name="body"
        label={textArr[2][language]}
        rows={5}
        loading={false}
        multiline
      />
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        ref={reRef}
        size="invisible"
      />
      <AppSubmitButton text="Send" />
    </StyledForm>
  );
};

export default ContactForm;

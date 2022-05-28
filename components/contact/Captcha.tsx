import ReCAPTCHA from "react-google-recaptcha";
import React from "react";

const Captcha: React.FC<any> = ({ reRef }) => {
  const Component = ReCAPTCHA as React.ComponentType<any>;

  return (
    <Component
      sitekey={(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string) ?? "a"}
      ref={reRef}
      size="invisible"
    />
  );
};

export default Captcha;

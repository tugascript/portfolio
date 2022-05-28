import {styled} from "@mui/material/styles";
import type {FormikHelpers} from "formik";
import type {FC, SyntheticEvent} from "react";
import {useContext, useRef, useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from "yup";
import type {IText} from "../../interfaces/text";
import AppForm from "../forms/AppForm";
import AppFormField from "../forms/AppFormField";
import AppSubmitButton from "../forms/AppSubmitButton";
import Alert from "../layout/Alert";
import {PreferencesCtx} from "../PreferencesContext";
import Captcha from "./Captcha";

interface IForm {
    name: string;
    email: string;
    body: string;
}

interface IState {
    status: "success" | "error";
    message: string;
    open: boolean;
    loading: boolean;
}

const StyledForm = styled(AppForm)({
    "& .contact-form-field": {
        color: "#fff",
        borderColor: "#fff",
    },
});

const textArr: IText[] = [
    {en: "Name", pt: "Nome"},
    {en: "Email", pt: "Correio Eletrónico"},
    {en: "Message", pt: "Mensagem"},
    {en: "Send", pt: "Enviar"},
    {en: "Loading...", pt: "Aguarde..."},
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
    const {language} = useContext(PreferencesCtx);
    const reRef = useRef<ReCAPTCHA | null>(null);
    const [state, setState] = useState<IState>({
        status: "success",
        message: "",
        open: false,
        loading: false,
    });

    const initialValues: IForm = {
        name: "",
        email: "",
        body: "",
    };

    const handleClose = (e: SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") return;

        setState((prevState) => ({...prevState, open: false}));
    };

    const handleSubmit = async (
        {name, email, body}: IForm,
        helpers: FormikHelpers<IForm>
    ) => {
        setState((prevState) => ({...prevState, loading: true}));

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

        try {
            const data = await response.json();

            if (data.status === 200) {
                setState({
                    status: "success",
                    message:
                        language === "en"
                            ? "Message sent successfully!"
                            : "Mensagem enviada com sucesso!",
                    open: true,
                    loading: false,
                });
                helpers.setTouched({name: false, email: false, body: false});
                helpers.setValues(initialValues);
            } else {
                setState({
                    status: "error",
                    message:
                        language === "en"
                            ? "Something went wrong."
                            : "Ocorreu algo de errado.",
                    open: true,
                    loading: false,
                });
            }
        } catch (error) {
            setState({
                status: "error",
                message:
                    language === "en"
                        ? "Something went wrong."
                        : "Ocorreu algo de errado.",
                open: true,
                loading: false,
            });
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
                loading={state.loading}
            />
            <AppFormField
                className="contact-form-field"
                name="email"
                label={textArr[1][language]}
                type="email"
                loading={state.loading}
            />
            <AppFormField
                className="contact-form-field"
                name="body"
                label={textArr[2][language]}
                rows={5}
                loading={state.loading}
                multiline
            />
            <Captcha reRef={reRef}/>
            <AppSubmitButton
                text={state.loading ? textArr[4][language] : textArr[3][language]}
                loading={state.loading}
            />
        </StyledForm>
    );
};

export default ContactForm;

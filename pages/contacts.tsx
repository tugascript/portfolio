import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useContext } from "react";
import ContactCard from "../components/contact/ContactCard";
import BoxCenter from "../components/layout/BoxCenter";
import { PreferencesCtx } from "../components/PreferencesContext";

const Contacts: NextPage = () => {
  const { theme } = useContext(PreferencesCtx);
  return (
    <Fragment>
      <Head>
        <title>TugaScript | Contacts</title>
        <style>{`
          body {
            background-image: url("/${
              theme === "nodejs" ? "green" : "yellow"
            }-poly.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            background-attachment: fixed;
          }
        `}</style>
      </Head>
      <BoxCenter>
        <ContactCard />
      </BoxCenter>
    </Fragment>
  );
};

export default Contacts;

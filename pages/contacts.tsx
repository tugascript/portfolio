import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import ContactCard from "../components/contact/ContactCard";
import BoxCenter from "../components/layout/BoxCenter";

const Contacts: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>TugaScript | Contacts</title>
        <style>{`
          body {
            background-image: url("/green-poly.svg");
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

import Head from "next/head";
import React, { FC, useEffect } from "react";

const Header: FC = () => {
  useEffect(() => {
    document.documentElement.lang = "en-us";
  });

  return (
    <Head>
      <title>Title</title>
      <meta name="description" content="Description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;

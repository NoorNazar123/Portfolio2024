import React from "react";
import { Helmet } from "react-helmet";

const DynamicTitle = ({ title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Noor's Dev Excellence ({title}) </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
  );
};

export default DynamicTitle;

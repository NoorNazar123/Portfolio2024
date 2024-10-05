import React from "react";
import Paragraph from "./Paragraph";
import Skill from "./Skill";
import Heading from "./Heading";

const OfferSection = () => {
  return (
    <div className="pt-[40px] relative bg-gray-100">
      <div className="layout text-center mb-[50px]">
        <Paragraph
          className="text-[30px] my-4"
          labelText="Noor offers a wide range of services"
        />
        <Paragraph
          className="text-[30px] mb-[50px]"
          labelText="tailored to meet your project needs."
        />
        <Heading className="text-[45px] mb-[40px]" labelText="Skills" />
        <div className="mx-auto mb-[80px]">
          <Skill />
        </div>
      </div>
    </div>
  );
};

export default OfferSection;

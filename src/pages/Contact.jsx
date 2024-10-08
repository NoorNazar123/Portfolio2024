import React from "react";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import DynamicTitle from "../components/DynamicTitle";

const Contact = () => {
  return (
    <div className="py-12 px-6 md:px-12 ">
      <DynamicTitle title="Contact" />
      <div className=" layout max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mt-4">
            Feel free to contact me via the form below or reach out via the
            provided contact details.
          </p>
        </div>

        {/* Contact Form + Details */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-[60%] mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold  mb-6">Contact Form</h3>
            <form
              className="space-y-4"
              action="https://formsubmit.co/noor.nazar.programmer.prog@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_next"
                value="https://your-redirect-url.com"
              />
              <div className="flex flex-col">
                <label className="mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:shadow-md focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:shadow-md focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  required
                  className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:shadow-md focus:border-transparent"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                className="bg-white shadow-md py-3 px-6 rounded-lg hover:bg-[#f7f7f7] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-[35%] text-center md:text-left space-y-6">
            {/* Phone Number */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <AiOutlinePhone className=" scale-125 hover:scale-150 text-3xl" />
              <p className="text-lg text-gray-700">
                Call:{" "}
                <a
                  href="tel:+923178813001"
                  className="text-blue-500 hover:underline"
                >
                  +92 317 8813001
                </a>
              </p>
            </div>

            {/* Email Address */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <AiOutlineMail className=" scale-125 hover:scale-150 text-3xl" />
              <p className="text-lg text-gray-700">
                Email:{" "}
                <a
                  href="mailto:noorenazar.prog@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  noorenazar.prog@gmail.com
                </a>
              </p>
            </div>
            {/* WhatsApp Number */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <AiOutlineWhatsApp className=" scale-125 hover:scale-150 text-3xl" />
              <p className="text-lg text-gray-700">
                WhatsApp:{" "}
                <a
                  href="https://wa.me/923178813001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  +92 317 8813001
                </a>
              </p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <AiOutlineEnvironment className=" scale-125 hover:scale-150 text-3xl" />
              <p className="text-lg text-gray-700">Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import DynamicTitle from "../components/DynamicTitle";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-yellow-500 flex flex-col justify-center items-center py-10">
      <DynamicTitle title="404 page not font" />
      <h1 className="text-8xl font-bold text-white animate-bounce">404</h1>
      <p className="text-2xl text-white mt-4 animate-pulse">
        Oops! Page Not Found
      </p>
      <p className="text-lg text-white mt-2">
        It looks like you're lost, but don't worry, everything is still fun
        here!
      </p>
      <Link to="/">
        <Button
          className="mt-6 px-6 py-4 bg-white font-semibold rounded-lg shadow-lg  hover:scale-110 transition-transform duration-300"
          label="Take me Home"
        />
      </Link>

      <div className="mt-10">
        <img
          src="https://media.giphy.com/media/l378khQxt68syiWJy/giphy.gif"
          alt="fun gif"
          className="rounded-full border-4 border-white shadow-md"
        />
      </div>
    </div>
  );
};

export default NotFound;

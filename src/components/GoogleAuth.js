import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleAuth = () => {
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: process.env.CLIENT_ID,
        scope: "email",
      });
    });
  }, []);

  return (
    <>
      <div className="flex rounded-md px-5 py-3 mt-1 hover:opacity-75  bg-primarydark text-gray-300  font-medium text-2xl ">
        <FcGoogle className="mr-3 mt-1" /> <span>Login with Google</span>
      </div>
    </>
  );
};

export default GoogleAuth;

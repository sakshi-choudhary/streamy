import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn, signOut } from "../actions";
import { connect } from "react-redux";

const GoogleAuth = (props) => {
  const [isSignedIn, setIsSignedIn] = useState(null);

  const signedin = () =>
    toast.success("Signed In!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const signedout = () =>
    toast.error("Signed Out!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: `${process.env.REACT_APP_CLIENT_ID}`,
          scope: "email",
        })
        .then(() => {
          let auth = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      props.signIn();
    } else {
      props.signOut();
    }
  };

  const _renderAuthBtn = () => {
    if (isSignedIn === null) {
      return <div class="animate-pulse">Loading...</div>;
    } else if (isSignedIn) {
      return (
        <>
          <FiLogOut className="mr-3 mt-1" />
          <p>Sign Out</p>
        </>
      );
    } else {
      return (
        <>
          <FcGoogle className="mr-3 mt-1" />
          <p>Sign in with Google</p>
        </>
      );
    }
  };

  const _handleOnClick = () => {
    if (isSignedIn) {
      window.gapi.auth2.getAuthInstance().signOut();
      signedout();
    } else {
      window.gapi.auth2.getAuthInstance().signIn();
      signedin();
    }
  };

  return (
    <>
      <button
        disabled={isSignedIn === null}
        onClick={_handleOnClick}
        className="flex rounded-md cursor-pointer px-5 py-3 mt-1 hover:opacity-75  bg-primarydark text-gray-300  font-medium text-2xl "
      >
        {_renderAuthBtn()}
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default connect(null, { signIn, signOut })(GoogleAuth);

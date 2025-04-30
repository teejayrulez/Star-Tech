import React, { useEffect, useState } from "react";
import { CivicAuthProvider, UserButton } from "@civic/auth-web3/react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const [civicReady, setCivicReady] = useState(false);

  // Wait for Civic SDK to be ready
 useEffect(() => {
   let timeout;
   const checkCivicReady = () => {
     if (window.civic?.passport && window.civic?.sipLoaded) {
       setCivicReady(true);
     } else {
       timeout = setTimeout(checkCivicReady, 300);
     }
   };
   checkCivicReady();
   return () => clearTimeout(timeout);
 }, []);

  const handleVerification = (result) => {
    if (result?.status === "verified") {
      navigate("/dashboard");
    } else {
      alert("Verification failed");
    }
  };

  const handleClick = () => {
    if (civicReady) {
      window.civic.passport.present();
    } else {
      alert("Civic is not ready yet. Please try again in a few seconds.");
    }
  };

  return (
    <CivicAuthProvider
      clientId="7e91c464-d1e7-46a4-8ddc-75729d3b39b8"
      onVerified={handleVerification}
    >
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-orange-600 overflow-hidden">
        <div className="p-6 backdrop-blur-md bg-white/30 rounded-2xl p-8 max-w-md w-full shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4 text-orange-600">StarTech</h1>
          <p className="text-lg text-black">
            Get your Seminar, Football or Event Tickets
          </p>

          <div className="mt-6">
            <UserButton onClick={handleClick} className="hover:bg-orange-600  py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] disabled:opacity-50" />
          </div>
        </div>
      </div>
    </CivicAuthProvider>
  );
};

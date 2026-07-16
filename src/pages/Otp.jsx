import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OTP() {

  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const verifyOTP = () => {

    if (otp === "123456") {

      navigate("/videos");

    } else {

      alert("Invalid OTP");

    }

  };

  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">

          Verify OTP

        </h1>

        <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button
          onClick={verifyOTP}
          className="w-full bg-green-600 text-white py-3 rounded-lg"
        >
          Verify OTP
        </button>

      </div>

    </div>

  );
}

export default OTP;
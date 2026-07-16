import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name || !user.mobile) {
      alert("Fill all fields");
      return;
    }

    // localStorage.setItem("user", JSON.stringify(user));

    navigate("/otp");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >

        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Enter Mobile Number"
          value={user.mobile}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Send OTP
        </button>

      </form>

    </div>
  );
}

export default Register;
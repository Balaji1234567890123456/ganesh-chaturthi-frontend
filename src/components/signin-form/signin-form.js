import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";
import "./signin-form.css";

export const Signin = () => {
  const [userLoginDetails, setUserLoginDetails] = useState({
    userPhoneNumber: "",
    userPassword: ""
  });
  const navigate = useNavigate();

  const onChangeDetails = (e) => {
    setUserLoginDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const storeToken = (e) => {
    Cookies.set("token", e, { expires: 1 });
    navigate("/");
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3004/user/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(userLoginDetails)
    };
    const response = await fetch(url, options);
    try {
      if (response.ok) {
        const output = await response.json();
        if (output.msg === "Succesfully Found") {
          alert("సఫలంగా లాగిన్ అయ్యారు 🙏");
          storeToken(output.jwtToken);
        } else {
          alert("లాగిన్ వివరాలు సరైనవి కావు ❌");
        }
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2 className="signin-title">వినియోగదారుల లాగిన్</h2>
        <form className="signin-form" onSubmit={onHandleSubmit}>
          <label className="signin-label">
            📱 ఫోన్ నంబర్:
            <input
              className="signin-input"
              type="text"
              value={userLoginDetails.userPhoneNumber}
              name="userPhoneNumber"
              onChange={onChangeDetails}
              required
            />
          </label>
          <label className="signin-label">
            🔑 పాస్‌వర్డ్:
            <input
              className="signin-input"
              type="password"
              value={userLoginDetails.userPassword}
              name="userPassword"
              onChange={onChangeDetails}
              required
            />
          </label>
          <button type="submit" className="signin-btn">
            లాగిన్ చేయండి
          </button>
        </form>
        <p className="signin-note">
          కొత్త వినియోగదారా?{" "}
          <Link to="/signup" className="signin-link">
            దయచేసి రిజిస్టర్ అవ్వండి
          </Link>
        </p>
      </div>
    </div>
  );
};

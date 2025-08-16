import { useState } from "react";
import "./signup-form.css";
import {Link} from "react-router-dom"

export const Signupform = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    userPhoneNumber: "",
    userAddress: "",
    userPassword: ""
  });

  const onChangeDetails = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3004/user/registration";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(userDetails)
    };
    const response = await fetch(url, options);
    if (response.ok) {
      alert(await response.text());
    } else {
      alert("నమోదు విఫలమైంది");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-overlay">
        <div className="signup-form-container">
          <div className="signup-header-img">
            <img
              src="https://res.cloudinary.com/ddjsaoac6/image/upload/v1755146470/ganesh_l3ikjn.jpg"
              alt="Ganesh Idol"
              className="signup-ganesh-img"
            />
          </div>
         <h2 className="signup-title">వినియోగదారు నమోదు ఫారం</h2>

          <p className="signup-subtitle">
            మన కస్పా వీధి, రాజాం, విజయనగరం గణేష్ ఉత్సవానికి  
            విరాళం అందించేందుకు దయచేసి మీ వివరాలు నమోదు చేయండి 🙏
          </p>
          <form className="signup-form-wrapper" onSubmit={onHandleSubmit}>
            <label className="signup-label">
              పేరు:
              <input
                className="signup-input"
                type="text"
                name="userName"
                value={userDetails.userName}
                onChange={onChangeDetails}
                required
              />
            </label>
            <label className="signup-label">
              ఫోన్ నంబర్:
              <input
                className="signup-input"
                type="text"
                name="userPhoneNumber"
                value={userDetails.userPhoneNumber}
                onChange={onChangeDetails}
                required
              />
            </label>
            <label className="signup-label">
              చిరునామా:
              <input
                className="signup-input"
                type="text"
                name="userAddress"
                value={userDetails.userAddress}
                onChange={onChangeDetails}
                required
              />
            </label>
            <label className="signup-label">
              పాస్‌వర్డ్:
              <input
                className="signup-input"
                type="password"
                name="userPassword"
                value={userDetails.userPassword}
                onChange={onChangeDetails}
                required
              />
            </label>
            <button type="submit" className="signup-btn">
              నమోదు చేయండి
            </button>
            <p className="signup-note">
  ఇప్పటికే నమోదు చేసారా? <Link to="/login" className="signin-link"> <span className="signup-link">దయచేసి సైన్ ఇన్ చేయండి</span></Link>
</p>

          </form>
        </div>
      </div>
    </div>
  );
};

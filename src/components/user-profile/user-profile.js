import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./user-profile.css";
import { useState, useEffect } from "react";
import {jsPDF} from "jspdf"

export const Userprofile = () => {
  const token = Cookies.get("token");
  const [donationsArray, setDonationsArray] = useState([]);
  const navigate = useNavigate();
  const handlePrint=(e,i)=>{
    const doc=new jsPDF()
    doc.text(`Name:${e.user_name}`,20,40)
    doc.text(`DonatedAmount:${e.donated_amount}`,20,50)
    doc.text("Thank You For your Donation",20,60)
    
    doc.save(`donation_reciept_${i+1}.pdf`)

  }

  const fetchDetails = async (token) => {
    const url = "http://localhost:3004/get/donations";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, options);
    try {
      if (response.ok) {
        const output = await response.json();
        setDonationsArray(output);
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    if (token) {
      fetchDetails(token);
    }
  }, []);

  const location = useLocation();
  const userName = location.state?.userName || "";
  const phoneNumber = location.state?.userPhoneNumber || "";
  const userAddress = location.state?.userAddress || "";

  // ✅ Logout function
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="user avatar"
            className="profile-avatar"
          />
          <h2 className="profile-name">{userName}</h2>
        </div>

        <div className="profile-details">
          <div className="profile-field">
            <span className="profile-icon">📞</span>
            <span className="profile-value">ఫోన్ : {phoneNumber}</span>
          </div>
          <div className="profile-field">
            <span className="profile-icon">🏠</span>
            <span className="profile-value">చిరునామా : {userAddress}</span>
          </div>
        </div>

        {/* ✅ Logout button */}
        <button className="logout-btn" onClick={handleLogout}>
          🚪 లాగ్ అవుట్
        </button>
      </div>

      {donationsArray.length > 0 ? (
        <table className="donations-table">
          <thead>
            <tr>
              <th>క్రమ సంఖ్య</th>
              <th>దానం చేసిన మొత్తం</th>
              <th>చర్య</th>
            </tr>
          </thead>
          <tbody>
            {(donationsArray || []).map((each, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{each.donated_amount} /-</td>
                  <td className="print-btn" onClick={()=>handlePrint(each,index)}>PDF ముద్రించు</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <marquee>
          <p className="no-donations">⚠️ ఇంకా దానాలు లేవు</p>
        </marquee>
      )}
    </div>
  );
};

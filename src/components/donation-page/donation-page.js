import Cookies from "js-cookie";
import "./donation-page.css"; 
import { useState } from "react";

const donations = [500, 1000, 2000, 5000, 10000];

export const Donationpage = ({ setIsCustom, isCustom }) => {
  const token = Cookies.get("token");
  const [customAmount, setCustomAmount] = useState(null);

  const onChangeCustomAmount = (e) => {
    setCustomAmount(e.target.value);
  };

  const HandleDonate = async (each) => {
    const amount = parseInt(each);

    const url = "https://vercel.com/balaji1234567890123456s-projects/ganesh-chaturthi-backend";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ donationAmount: amount }),
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const output = await response.text();
        alert(output);
      } else {
        alert("దానం విఫలమైంది");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="donation-container">
      <h2 className="donation-title">🙏 దానం చేయండి 🙏</h2>
      <p className="donation-subtitle">
        మీ శక్తికి తగ్గట్టు భగవంతునికి దానం చేయండి
      </p>

      {isCustom ? (
        <div className="custom-donation-box">
          <input
            type="number"
            className="custom-input"
            onChange={onChangeCustomAmount}
            placeholder="మొత్తం నమోదు చేయండి"
          />
          <button
            className="donation-btn"
            value={customAmount}
            disabled={parseInt(customAmount) < 500 ? true : false}
            onClick={() => HandleDonate(customAmount)}
          >
            దానం చేయండి
          </button>
        </div>
      ) : (
        <table className="donation-table">
          <thead className="donation-table-head">
            <tr className="donation-table-row">
              <th className="donation-table-header">మొత్తం</th>
              <th className="donation-table-header">కార్యచరణ</th>
            </tr>
          </thead>
          <tbody className="donation-table-body">
            {donations.map((each) => (
              <tr key={each} className="donation-table-row">
                <td className="donation-table-data">₹{each}.00</td>
                <td className="donation-table-data">
                  <button
                    className="donation-btn"
                    onClick={() => HandleDonate(each)}
                  >
                    దానం చేయండి
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        className="toggle-btn"
        onClick={() => setIsCustom((prev) => !prev)}
      >
        {isCustom ? "⬅ వెనక్కి" : "💰 ప్రత్యేక మొత్తం దానం చేయండి"}
      </button>
    </div>
  );
};

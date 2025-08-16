import "./welcome-popup.css"
import { X } from "lucide-react"   // cross icon

export const Welcomepopup = ({ setIsPopup }) => {
  return (
    <div className="welcome-container">
      <div className="popup-container">
        {/* Close button */}
        <button className="popup-close" onClick={() => setIsPopup(false)}>
          <X size={24} />
        </button>

        <img 
          src="https://res.cloudinary.com/ddjsaoac6/image/upload/v1755161714/IMG-20250810-WA0005_1_ivrgpm.jpg" 
          className="popup-image" 
          alt="Ganesh Utsav"
        />
        <div className="popup-text">
          <h1 className="popup-title">🙏 శ్రీ గణేశ్ ఉత్సవం - 2025 🙏</h1>
          <h2 className="popup-subtitle">రాజాం - కస్పా వీధి యువజన సంఘం</h2>
          <p className="popup-message">
            భక్తి, ఆనందం, ఐకమత్యంతో జరుపుకునే గణేశ్ ఉత్సవానికి 
            మీ అందరికీ హృదయపూర్వక స్వాగతం.
          </p>
        </div>
      </div>
    </div>
  )
}

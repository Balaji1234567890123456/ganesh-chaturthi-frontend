import { FaUser } from "react-icons/fa";
import "./header.css";
import Cookies from "js-cookie"
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"

export const Header = () => {
    const token=Cookies.get('token')
    const [userName,setUserName]=useState("")
    const [userDetails,setUserDetails]=useState({
        userName:"",
        phoneNumber:"",
        Address:""
    })
    const fetchUserDetails=async(token)=>{
        const url="http://localhost:3004/get/data"
        const options={
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }
        const response=await fetch(url,options)
        try{
            if (response.ok){
                const output=await response.json()
                setUserName(output[0].user_name)
                setUserDetails({
                    userName:output[0].user_name,
                    phoneNumber:output[0].user_phone_number,
                    Address:output[0].user_address
                })
            }
        }
        catch(e){
            console.error(e.message)
        }
       
    }
     useEffect(()=>{
            if (token){
                fetchUserDetails(token)
            }
        },[])

  return (
    <header className="header-container">
        <div className="header-gradient">
<Link to="/" >
      <img src="https://res.cloudinary.com/ddjsaoac6/image/upload/v1755149667/ganesh-home_c7faiv.jpg" className="header-image"/></Link>
      <h1 className="header-title">
            శ్రీ గణేష్ ఉత్సవం - 2025, రాజాం - 532127
          </h1>
      <Link to={userName?"/user/profile":"/signup"} state={{userName:userDetails.userName,userPhoneNumber:userDetails.phoneNumber,userAddress:userDetails.Address}} style={{textDecoration:"none"}}><div className="user-container">
  <FaUser className="user-icon" />
  {userName ? (
    <p className="user-text">స్వాగతం {userName} 🙏</p>
  ) : (
    <p className="user-text"></p>
  )}
</div></Link>

      </div>
    </header>
  );
};

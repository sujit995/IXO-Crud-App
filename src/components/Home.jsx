import React from 'react'
import { useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        navigate("/");
      };


  return (
    <div>
        <button onClick={handleLogout} className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md">Logout</button>
    </div>
  )
}

export default Home
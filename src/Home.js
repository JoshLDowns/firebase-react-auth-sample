import React from 'react'
import app from "./base"

const Home = () => {
  
  const handleLogout = () => {
    app.auth().signOut()
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  )
}

export default Home;

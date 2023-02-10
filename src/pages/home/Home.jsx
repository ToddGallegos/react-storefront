import React from 'react'
import "./home.css"
import Candies from '../../components/candies/Candies'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Candies />
      </div>
    </>
  )
}

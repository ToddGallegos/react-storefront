import React from 'react'
import "./home.css"
import Candies from '../../components/candies/Candies'

export default function Home(props) {
  const {mugs} = props

  return (
    <>
      <div className="homeContainer">
        <Candies mugs={mugs}/>
      </div>
    </>
  )
}

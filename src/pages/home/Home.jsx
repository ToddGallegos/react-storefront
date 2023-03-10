import React from 'react'
import "./home.css"
import Candies from '../../components/candies/Candies'

export default function Home(props) {

  return (
    <>
      <div className="homeContainer">
        <Candies mugs={props.mugs} cart={props.cart} setCart={props.setCart} singleMug={props.singleMug} setMug={props.setMug}/>
      </div>
    </>
  )
}

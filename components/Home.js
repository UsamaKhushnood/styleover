import React from 'react'
import Header from './Header'

const Home = () => {

  return(
    <div className="homeMainContainer">
      <Header />

      <div className="homeContainer"> 
        <div className="homeGrid">
          <div className="homeGridItems homeGridTxt"> 
            <h1> Styleover </h1>
            <p>
              Styleover is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.
            </p>
          </div> 
          <div className="homeGridItems homeGridImg"> 
            <img src="https://res.cloudinary.com/dugbseecz/image/upload/v1573388344/styleoversinglelogo_wibhri.png" />
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Home
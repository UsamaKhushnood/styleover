import React from 'react'
import './header.css'



const Header = () => {


  return(

    <div className="headerContainer">
      <div className="headerFlexbox">
        <div className="headerflexitem headerLogo"> 
          <img  src="https://res.cloudinary.com/dugbseecz/image/upload/v1573381871/styleoverlogowhite_etlfer.png" /> 
        </div>
        <div className="headerflexitem"> Home</div>
        <div className="headerflexitem"> Documnetation</div>
        <div className="headerflexitem"> Examples</div>
        <div className="headerflexitem"> Themes</div>
        <div className="headerflexitem"> Blog</div>
      </div>
    </div>
  )
}

export default Header 
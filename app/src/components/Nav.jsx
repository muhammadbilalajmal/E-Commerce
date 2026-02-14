import React from 'react'

const Nav = () => {
  return (
    <nav>
      <div>
        <a href="#"><img src="{logo}" alt="logo" /></a>
      </div>
      <ul>
        <li className='link'><a href="#">Home</a></li>
        <li className='link'><a href="#">About</a></li>
        <li className='link'><a href="#">Skills</a></li>
        <li className='link'><a href="#">Education</a></li>
        <li className='link'><a href="#">Projects</a></li>
        <li className='link'><a href="#">Experience</a></li>
        <li className='link'><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav

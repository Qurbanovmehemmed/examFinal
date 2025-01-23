import React from 'react'
import { Link } from 'react-router'

const NotFoundPage = () => {
  return (
    <div style={{
        display:"flex" ,
        gap:"20px"
    }}>
      Not Found Page
      <Link to={"/"}>Go to Home</Link>
    </div>
  )
}

export default NotFoundPage

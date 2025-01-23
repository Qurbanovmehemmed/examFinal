import React from 'react'
import { Link } from 'react-router'

const NotFoundPage = () => {
  return (
    <div style={{
    }}>
      <p>Not Found Page</p>
      <Link to={"/"} style={{color:"blue"}}>Go to Back</Link>
    </div>
  )
}

export default NotFoundPage

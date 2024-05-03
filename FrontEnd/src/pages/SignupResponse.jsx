import React from 'react'
import { useParams } from 'react-router-dom'

function SignupResponse() {
    const {response} = useParams();

  return (
    <div>SignupResponse: {response}</div>
  )
}

export default SignupResponse
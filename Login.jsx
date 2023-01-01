import { Button } from '@mui/material'
import React from 'react'
import { auth, provider } from './firebase'
import { actionTypes } from './Reducer'
import { useStateValue } from './StateProvider'
import './Login.css'

function Login() {
  const [state, dispatch] = useStateValue()

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      console.log(result)
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      })
    }).catch((error) => {
      alert(error.message)
    })
  }
  return (
    <div className='login'>
      <div className="login__container">
        <img src="https://cdn.discordapp.com/attachments/1048226726796341258/1055817077824422021/slack-logo-icon.png" alt="" />
        <h1>Sign in to Slack Clone</h1>
        <p>Reks.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login
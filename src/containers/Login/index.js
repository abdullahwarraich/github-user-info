import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LoginCard from '../../components/LoginCard'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { InputDiv, ButtonDiv } from './style'
import { setUser, setUserDetails } from '../../store/user'
import { login } from '../../apis'
import ErrorMessage from '../../utils/errorMessage'

const LoginContainer = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(false)

  const userLogin = () => {
    setLoading(true)
    login(userName)
      .then(({ data }) => {
        setLoading(false)
        dispatch(setUser(userName))
        dispatch(setUserDetails(data))
        history.push('/profile')
      })
      .catch(({ response }) => {
        setLoading(false)
        if (response && response.data && response.data.message) {
          ErrorMessage(`User ${response.data.message.toLowerCase()}`)
        } else {
          ErrorMessage('Invalid user')
        }
      })
  }

  return (
    <LoginCard title='Please enter your github user name'>
      <InputDiv>
        <InputField
          inputPlaceholder='Enter user name'
          inputValue={userName}
          inputOnChange={e => setUserName(e.target.value)}
        />
      </InputDiv>
      <ButtonDiv>
        <Button
          buttonClick={userLogin}
          type='primary'
          disabled={!!!userName}
          loading={loading}
        >
          Login
        </Button>
      </ButtonDiv>
    </LoginCard>
  )
}

export default LoginContainer

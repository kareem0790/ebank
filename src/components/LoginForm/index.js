import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  AppContainer,
  LoginContainer,
  LeftContainer,
  LoginImage,
  RightContainer,
  FormContainer,
  LoginHeading,
  InputContainer,
  InputLabel,
  Input,
  LoginButton,
  ErrorMessage,
} from './styledComponent'

class LoginForm extends Component {
  state = {
    userId: '',
    userPin: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onSuccessApi = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailureApi = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, userPin} = this.state
    const userDetails = {user_id: userId, pin: userPin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccessApi(data.jwt_token)
    } else {
      this.onFailureApi(data.error_msg)
    }
  }

  onChangeInputUser = event => {
    this.setState({userId: event.target.value})
  }

  onChangeInputPin = event => {
    this.setState({userPin: event.target.value})
  }

  render() {
    const {userId, userPin, showErrorMsg, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <AppContainer>
        <LoginContainer>
          <LeftContainer>
            <LoginImage
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
            />
          </LeftContainer>
          <RightContainer>
            <FormContainer onSubmit={this.onSubmitForm}>
              <LoginHeading>Welcome Back!</LoginHeading>
              <InputContainer>
                <InputLabel htmlFor="user">User ID</InputLabel>
                <Input
                  type="text"
                  value={userId}
                  id="user"
                  placeholder="Enter User ID"
                  onChange={this.onChangeInputUser}
                />
              </InputContainer>
              <InputContainer>
                <InputLabel htmlFor="pin">PIN</InputLabel>
                <Input
                  type="password"
                  value={userPin}
                  id="pin"
                  placeholder="Enter PIN"
                  onChange={this.onChangeInputPin}
                />
              </InputContainer>
              <LoginButton type="submit">Login</LoginButton>
              {showErrorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
            </FormContainer>
          </RightContainer>
        </LoginContainer>
      </AppContainer>
    )
  }
}

export default LoginForm

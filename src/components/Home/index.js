import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  HomeContainer,
  HeaderContainer,
  LogoImage,
  LogoutButton,
  BodyContainer,
  Heading,
  CardImage,
} from './styledComponents'

const Home = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return (
    <HomeContainer>
      <HeaderContainer>
        <LogoImage
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <LogoutButton type="button" onClick={onLogout}>
          Logout
        </LogoutButton>
      </HeaderContainer>
      <BodyContainer>
        <Heading>Your Flexibility, Our Excellence</Heading>
        <CardImage
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </BodyContainer>
    </HomeContainer>
  )
}

export default Home

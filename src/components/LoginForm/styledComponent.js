import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #152850;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginContainer = styled.div`
  display: flex;
  width: 70%;
  height: 500px;
  background-color: #e0eefe;
  border-radius: 10px;
`
export const LeftContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginImage = styled.img`
  width: 70%;
`
export const RightContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  width: 40%;
`
export const FormContainer = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
`
export const LoginHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;
  font-weight: 600;
  color: #152850;
`
export const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`
export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: #1565d8;
  font-weight: 500;
`
export const Input = styled.input`
  font-family: 'Roboto';
  font-size: 16px;
  padding: 10px;
  color: #183b56;
  height: 40px;
  border: 1px solid #c3cad9;
  border-radius: 10px;
  outline: none;
`
export const LoginButton = styled.button`
  background-color: #1565d8;
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  height: 40px;
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  color: #ff0b37;
`

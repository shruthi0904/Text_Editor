import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AppContent = styled.div`
  height: 500px;
  width: 90%;
  max-width: 900px;
  background-color: #1b1c22;
  padding: 12px;
  display: flex;
`

export const ImgContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
`
export const Heading = styled.h1`
  font-size: 26px;
  font-family: 'Roboto';
  color: #f8fafc;
  margin-bottom: 60px;
`

export const Image = styled.img`
  width: 100%;
`
export const EditorContainer = styled.div`
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 12px;
  width: 55%;
`
export const OptionsContainer = styled.ul`
  display: flex;
  padding-left: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #334155;
  list-style-type: none;
`
export const Option = styled.li`
  margin-right: 8px;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
`
export const TextArea = styled.textarea`
  font-weight: ${props => (props.weight ? 'bold' : 'normal')};
  font-style: ${props => (props.fontDecor ? 'italic' : 'normal')};
  text-decoration: ${props => (props.decoration ? 'underline' : 'normal')};
  font-family: 'Roboto';
  font-size: 25px;
  color: #cbd5e1;
  background-color: red;
  outline: none;
  border: none;
  width: 100%;
  height: 400px;
`

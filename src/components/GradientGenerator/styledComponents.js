import styled from 'styled-components/macro'

export const GradientGeneratorApp = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const GradientGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 88%;
  max-width: 1110px;
  text-align: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 600;
  color: #ededed;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ededed;
`

export const DirectionsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88%;
  flex-wrap: wrap;
  max-width: 480px;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 64%;
  max-width: 320px;
  margin-bottom: 20px;
`

export const ColorValueAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ededed;
  font-weight: 600;
`

export const ColorInput = styled.input`
  height: 40px;
  width: 100px;
`

export const GenerateButton = styled.button`
  height: 48px;
  width: 120px;
  background-color: #00c9b7;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  outline: none;
  margin: 20px 0;
`

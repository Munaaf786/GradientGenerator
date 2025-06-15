import styled from 'styled-components/macro'

export const ListItem = styled.li`
  width: 49%;
  height: 40px;
  @media screen and (min-width: 767px) {
    width: 24%;
  }
  margin-bottom: 16px;
`

export const DirectionButton = styled.button`
  height: 100%;
  width: 100%;
  background-color: ${props => (props.isActive ? '#ededed' : '#ffffff79')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  color: #014f7b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  outline: none;
`

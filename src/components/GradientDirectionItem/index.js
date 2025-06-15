import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, isActive, gradientDirectionItemClicked} =
    props

  const {displayText, value} = gradientDirectionDetails
  const onClickGradientDirection = () => gradientDirectionItemClicked(value)

  return (
    <ListItem>
      <DirectionButton
        type="button"
        isActive={isActive}
        onClick={onClickGradientDirection}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem

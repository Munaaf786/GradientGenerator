import {Component} from 'react'

import {
  GradientGeneratorApp,
  GradientGeneratorContainer,
  Heading,
  Paragraph,
  DirectionsList,
  ColorPickerContainer,
  ColorValueAndInputContainer,
  ColorValue,
  ColorInput,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientButton: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  onClickGenerate = () => {
    const {firstColor, secondColor, activeGradientButton} = this.state
    this.setState({
      gradientValue: `to ${activeGradientButton}, ${firstColor}, ${secondColor}`,
    })
  }

  onClickGradientDirectionItem = value => {
    this.setState({activeGradientButton: value})
  }

  render() {
    const {activeGradientButton, firstColor, secondColor, gradientValue} =
      this.state

    return (
      <GradientGeneratorApp
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <GradientGeneratorContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <DirectionsList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionDetails={eachDirection}
                isActive={activeGradientButton === eachDirection.value}
                gradientDirectionItemClicked={this.onClickGradientDirectionItem}
              />
            ))}
          </DirectionsList>
          <Paragraph>Pick the Colors</Paragraph>
          <ColorPickerContainer>
            <ColorValueAndInputContainer>
              <ColorValue>{firstColor}</ColorValue>
              <ColorInput
                type="color"
                value={firstColor}
                onChange={this.onChangeFirstColor}
              />
            </ColorValueAndInputContainer>
            <ColorValueAndInputContainer>
              <ColorValue>{secondColor}</ColorValue>
              <ColorInput
                type="color"
                value={secondColor}
                onChange={this.onChangeSecondColor}
              />
            </ColorValueAndInputContainer>
          </ColorPickerContainer>
          <GenerateButton onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </GradientGeneratorContainer>
      </GradientGeneratorApp>
    )
  }
}

export default GradientGenerator

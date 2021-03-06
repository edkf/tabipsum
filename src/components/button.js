// Dependencies
import React, { Component } from 'react'
import styled from 'styled-components'
import Clipboard from 'react-clipboard.js'

// Styled Components
const ClipboardButton = styled(Clipboard)`
  font-family: 'Roboto Mono';
  color: #FFF;
  background-color: ${props => props.buttonColor};
  font-size: 24px;
  line-height: 1;
  font-weight: bold;
  padding: 30px;
  width: 100%;
  border: none;
  cursor: pointer;
  transition: .2s ease;
`

class Button extends Component {

  constructor (props) {
    super(props)
    this.onSuccess = this.onSuccess.bind(this)
    this.getRandomEmoji = this.getRandomEmoji.bind(this)

    this.state = {
      buttonLabel: 'Copy',
      buttonColor: '#000000'
    }
  }

  getRandomEmoji () {
    const emojis = ['😎', '🚀', '😀', '🙃', '😛', '🙏', '👍', '🙅', '💩', '📝']
    return emojis[Math.floor(Math.random()*emojis.length)]
  }

  onSuccess() {
    this.setState ({
      buttonLabel: 'Copied ' + this.getRandomEmoji(),
      buttonColor: '#00C492'
    })
    setTimeout(() => {
      this.setState({
        buttonLabel: 'Copy',
        buttonColor: '#000000'
      })
    }, 1000)
  }

  render () {

    const { buttonColor, buttonLabel } = this.state
    const { content } = this.props

    return (
      <ClipboardButton
        buttonColor={buttonColor}
        data-clipboard-text={content}
        onSuccess={this.onSuccess}
      >
        {buttonLabel}
      </ClipboardButton>
    )
  }
}

export default Button
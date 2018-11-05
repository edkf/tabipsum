// Dependencies
import React, { Component } from 'react'
import styled from 'styled-components'

// Assets
import Dots from './svg/dots.js'

const Container = styled.div`
  width: 100%;
  padding: 15px 25px;
  display: flex;
  justify-content: flex-end;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  pointer-events: none;
  right: 0;
  opacity: 0;
  `

  const Dropdown = styled.div`
  position: relative;
  &:hover {
    ${List} {
      pointer-events: auto;
      opacity: 1;
    }
  }
`

const Item = styled.li`
  width: 130px;
  font-family: 'Roboto Mono';
  text-align: right;
  cursor: pointer;
  padding: 0;
  font-size: 10px;
  list-style: none;
  margin-bottom: 7px;
  color: #AAA;

  &:hover {
    color: ${props => props.darkmode ? '#DADADA' : '#000'};
  }

  a {
    color: #AAA;
    text-decoration: none;

    &:hover {
      color: ${props => props.darkmode ? '#DADADA' : '#000'};
    }
  }
`

const items = [
  {
    text: 'Visit Website',
    url: 'http://tabipsum.com'
  }
]

class TopBar extends Component {
  render () {

    const { darkmode } = this.props

    return (
      <Container>
        <Dropdown >
          <Dots darkmode={darkmode} />
          <List>
            <Item onClick={this.props.switchUIMode} darkmode={darkmode}> { darkmode ? 'Disable' : 'Enable'} darkmode</Item>
            {
              items.map((item) => (
                <Item key={item.text} darkmode={darkmode}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">{item.text}</a>
                </Item>
              ))
            }
          </List>
        </Dropdown>
      </Container>
    )
  }
}

export default TopBar
// Dependencies
import React, { Component } from 'react'
import styled from 'styled-components'

// Assets
import Dots from './svg/dots.js'

import SwitchButton from './SwitchButton'

const Container = styled.div`
  width: 100%;
  padding: 15px 25px;
  display: flex;
  justify-content: flex-end;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 10px;
  background-color: ${props => props.darkmode ? '#353638' : '#FFFFFF'};
  position: absolute;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
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
  width: 180px;
  font-family: 'Roboto Mono';
  cursor: pointer;
  padding: 10px 5px;
  font-size: 10px;
  list-style: none;
  color: #AAA;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #AAA;
    text-decoration: none;
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
          <List darkmode={darkmode}>
            <Item
              onClick={this.props.switchUIMode}
              darkmode={darkmode}>
                Enable darkmode
                <SwitchButton darkmode={darkmode} />
            </Item>
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
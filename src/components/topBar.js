import React, { Component } from 'react'
import styled from 'styled-components'
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
  transition: .3s ease;
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

  a {
    transition: .3s ease;
    color: #AAA;
    text-decoration: none;

    &:hover {
      color: #000;
    }
  }
`

class TopBar extends Component {
  render () {
    return (
      <Container>
        <Dropdown >
          <Dots />
          <List>
            <Item>
              <a href="https://edkf.com.br" target="_blank" rel="noopener noreferrer">Created by @edkf</a>
            </Item>
            <Item>
              <a href="http://twitter.com/share?text=I Just Downloaded TabIpsum, a Fake content generator&url=http://tabipsum.com&hashtags=tabipsum" target="_blank" rel="noopener noreferrer">Share on Twitter</a>
            </Item>
          </List>
        </Dropdown>
      </Container>
    )
  }
}

export default TopBar
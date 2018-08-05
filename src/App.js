import React, { Component } from 'react'
import styled from 'styled-components'
import './components/styled-components/global.js'
import InputRange from 'react-input-range'
import { connect } from 'react-redux'

import TopBar from './components/topBar'
import Button from './components/button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 320px;
  height: 420px;
`

const MainContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`

const Number = styled.input`
  width: 100%;
  font-family: 'Roboto Mono';
  font-size: 120px;
  font-weight: 100;
  text-align: center;
  letter-spacing: -10px;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`

const List = styled.ul`
  padding: 0;
  margin: 15px 0;
  display: flex;
  justify-content: center;
  `
  
  const Item = styled.li`
  font-family: 'Roboto Mono';
  font-weight: 300;
  text-transform: capitalize;
  letter-spacing: -0.5px;
  cursor: pointer;
  padding: 10px;
  font-size: 14px;
  list-style: none;
  padding: 10px 5px;
  transition: .3s ease;
  color: ${props => props.isSelected ? '#000000' : '#AAA'};
  
  &.is-selected {
    color: #000;
    font-weight: bold;
  }
`

class App extends Component {

  render() {

    const { content, value, units } = this.props.state
    const { changeUnit, updateValue, updateFromValue } = this.props

    return (
      <Container>
        <TopBar />
        <MainContainer>
          <Number
            type='number'
            min='1'
            max='100'
            value={value}
            onChange={updateFromValue}
          />
          <List>
            {units.map((unit, index) => (
              <Item key={unit.name} isSelected={unit.isSelected} onClick={changeUnit}>{unit.name}</Item>
            ))}
          </List>
          <InputRange
            minValue={1}
            maxValue={100}
            value={value}
            onChange={updateValue}
          />
        </MainContainer>
        <Button content={content} />
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeUnit: (event) => {
      dispatch({
        type: 'CHANGE_UNIT',
        contentType: event.target.innerHTML
      })
    },
    updateValue: (value) => {
      dispatch({
        type: 'UPDATE_VALUE',
        value
      })
    },
    updateFromValue: (event) => {
      dispatch({
        type: 'UPDATE_VALUE',
        value: event.target.value
      })
    }
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

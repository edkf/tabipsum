// Dependencies
import React, { Component } from 'react'
import styled from 'styled-components'
import InputRange from 'react-input-range'
import { connect } from 'react-redux'

// Actions
import { changeUnit, updateValue, switchUIMode } from './actions'

// Components
import TopBar from './components/topBar'
import Button from './components/button'

// Styled Components
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

const units = [ 'words', 'sentences', 'paragraphs']

class App extends Component {

  render() {

    const { content, value, contentType, darkmode } = this.props.state
    const { changeUnit, updateValue, updateFromNumber, switchUIMode } = this.props

    return (
      <Container>
        <TopBar darkmode={darkmode} switchUIMode={switchUIMode} />
        <MainContainer>
          <Number
            type='number'
            min='1'
            max='100'
            value={value}
            onChange={updateFromNumber}
          />
          <List>
            {units.map((unit, index) => (
              <Item key={unit} isSelected={unit === contentType ? true : false } onClick={changeUnit}>{unit}</Item>
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
    changeUnit: (event) => { dispatch(changeUnit(event.target.innerHTML))},
    updateValue: (value) => { dispatch(updateValue(value)) },
    updateFromNumber: (event) => { dispatch(updateValue(event.target.value === '' ? false : event.target.value)) },
    switchUIMode: (darkmode) => { dispatch(switchUIMode(darkmode)) } 
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

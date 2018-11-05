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
  background: ${props => props.darkmode ? '#2E2F30' : '#FFFFFF'}

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type='number'] {
      -moz-appearance:textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      -webkit-appearance: none;
  }

  .input-range__slider {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    background: ${props => props.darkmode ? '#DADADA' : '#000000'};
    border: 1px solid ${props => props.darkmode ? '#DADADA' : '#000000'};
    border-radius: 100%;
    cursor: pointer;
    display: block;
    height: 1rem;
    margin-left: -0.5rem;
    margin-top: -0.65rem;
    outline: none;
    position: absolute;
    top: 50%;
    -webkit-transition: box-shadow 0.3s ease-out, -webkit-transform 0.3s ease-out;
    transition: box-shadow 0.3s ease-out, -webkit-transform 0.3s ease-out;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, -webkit-transform 0.3s ease-out;
    width: 1rem; }
    .input-range__slider:active {
      -webkit-transform: scale(1.3);
              transform: scale(1.3); }
    .input-range__slider:focus {
      box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2); }
    .input-range--disabled .input-range__slider {
      background: #cccccc;
      border: 1px solid #cccccc;
      box-shadow: none;
      -webkit-transform: none;
              transform: none; }
  
  .input-range__slider-container {
    -webkit-transition: left 0.3s ease-out;
    transition: left 0.3s ease-out; }
  
  .input-range__label {
    color: #aaaaaa;
    font-family: "Helvetica Neue", san-serif;
    font-size: 0.8rem;
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    white-space: nowrap; }
  
  .input-range__label--min,
  .input-range__label--max {
    bottom: -1.4rem;
    position: absolute; }
  
  .input-range__label--min {
    left: 0; }
  
  .input-range__label--max {
    right: 0; }
  
  .input-range__label--value {
    position: absolute;
    top: -1.8rem; }
  
  .input-range__label-container {
    display: none;
    left: -50%;
    position: relative; }
    .input-range__label--max .input-range__label-container {
      left: 50%; }
  
  .input-range__track {
    background: ${props => props.darkmode ? '#222222' : '#EEEEEE'};
    border-radius: 0.3rem;
    cursor: pointer;
    display: block;
    height: 0.3rem;
    position: relative;
    -webkit-transition: left 0.3s ease-out, width 0.3s ease-out;
    transition: left 0.3s ease-out, width 0.3s ease-out; }
    .input-range--disabled .input-range__track {
      background: #EEEEEE; }
  
  .input-range__track--background {
    left: 0;
    margin-top: -0.15rem;
    position: absolute;
    right: 0;
    top: 50%; }
  
  .input-range__track--active {
    background: ${ props => props.darkmode ? '#DDDDDD' : '#333333'}; }
  
  .input-range {
    height: 1rem;
    position: relative;
    width: 100%; }
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
  color: ${props => props.darkmode ? '#DADADA' : '#000000'}

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
  color: ${props => props.darkmode ? (props.isSelected ? '#DADADA' : '#666666' ) : (props.isSelected ? '#000000' : '#AAAAAA')};
  
  &.is-selected {
    color: #000;
    font-weight: bold;
  }
`

const units = [ 'words', 'sentences', 'paragraphs']

class App extends Component {

  constructor (props) {
    super(props)
    this.switchTheme = this.switchTheme.bind(this)
  }

  componentDidMount () {
    console.log(localStorage.getItem("darkmode"))
  }
  
  switchTheme () {
    localStorage.setItem('darkmode', !localStorage.getItem("darkmode"))
  }

  render() {

    const { content, value, contentType, darkmode } = this.props.state
    const { changeUnit, updateValue, updateFromNumber, switchUIMode } = this.props

    return (
      <Container darkmode={darkmode}>
        <TopBar darkmode={darkmode} switchUIMode={switchUIMode} />
        <MainContainer>
          <Number
            type='number'
            min='1'
            max='100'
            value={value}
            onChange={updateFromNumber}
            darkmode={darkmode}
          />
          <List>
            {units.map((unit, index) => (
              <Item key={unit} darkmode={darkmode} isSelected={unit === contentType ? true : false } onClick={changeUnit}>{unit}</Item>
            ))}
          </List>
          <InputRange
            minValue={1}
            maxValue={100}
            value={value}
            onChange={updateValue}
            darkmode={darkmode}
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

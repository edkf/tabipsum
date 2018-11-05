import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 35px;
  height: 20px;
  background: ${props => props.darkmode ? '#2FAADC' : '#EEEEEE'};
  border-radius: 20px;
  position: relative;
  `
  
  const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 15px;
  background: #FFFFFF;
  position: relative;
  top: 2px;
  transition: transform .3s ease;
  transform: ${props => props.darkmode ? 'translateX(16px)' : 'translateX(3px)'};
`

const SwitchButton = (props) => {
  return (
    <Container darkmode={props.darkmode}>
      <Circle darkmode={props.darkmode} />
    </Container>
  )
}

export default SwitchButton
// Dependencies
import loremIpsum from 'lorem-ipsum'

// Action types
import {CHANGE_UNIT, UPDATE_VALUE, SWITCH_UI_MODE } from '../actions'

// Initial state
import { initialState } from './initialState'

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case CHANGE_UNIT:
      const { contentType } = action
      return {
        ...state,
        contentType,
        content: loremIpsum({
          ...state.content,
          units: contentType,
          count: state.value
        }),
      }
    case UPDATE_VALUE:
      const { value } = action
      return {
        ...state,
        value: value,
        content: loremIpsum({
          ...state.content,
          units: state.contentType,
          count: value
        })
      }
    case SWITCH_UI_MODE:
      return {
        ...state,
        darkmode: !state.darkmode
      }
    default:
    return state
  }
}
export const CHANGE_UNIT = 'CHANGE_UNIT'
export const UPDATE_VALUE = 'UPDATE_VALUE'
export const SWITCH_UI_MODE = 'SWITCH_UI_MODE'

export function changeUnit(contentType) {
  return {
    type: CHANGE_UNIT,
    contentType
  }
}

export function updateValue(value) {
  return {
    type: UPDATE_VALUE,
    value
  }
}

export function switchUIMode(darkmode) {
  return {
    type: SWITCH_UI_MODE,
    darkmode: !darkmode
  }
}
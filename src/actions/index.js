export const CHANGE_UNIT = 'CHANGE_UNIT'
export const UPDATE_VALUE = 'UPDATE_VALUE'

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
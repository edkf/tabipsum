import loremIpsum from 'lorem-ipsum'

let units = [
  {name: 'words', isSelected: true},
  {name: 'sentences', isSelected: false},
  {name: 'paragraphs', isSelected: false},
]

const content = loremIpsum({
    count: 11,
    units: 'words', 
    sentenceLowerBound: 5,
    sentenceUpperBound: 15,
    paragraphLowerBound: 3,
    paragraphUpperBound: 7,
    format: 'plain',
  })

const initialState = {
  value: 14,
  contentType: 'words',
  content,
  units
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
     return {
       ...state,
      }
    default:
    return state
  }
}
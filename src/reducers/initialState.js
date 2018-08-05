import loremIpsum from 'lorem-ipsum'

const content = loremIpsum({
    count: 11,
    units: 'words', 
    sentenceLowerBound: 5,
    sentenceUpperBound: 15,
    paragraphLowerBound: 3,
    paragraphUpperBound: 7,
    format: 'plain',
  })

export const initialState = {
  value: 14,
  contentType: 'words',
  content
}
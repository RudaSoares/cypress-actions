const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1YzViZDk5LWYxYWUtNDQyMS04M2U4LTYwMzhkYzk2MDNiZS0xNjg2MTA5MzQ5NjM5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNzYwYWE3YWEtNDY1NS00NTY0LWJmOTMtYmYwZDQzYzI0ZWU5IiwidHlwZSI6InQifQ.3HFN0kdpw4tO8coR7UMY0Z8hQNfY0mqTij7FYjHigl4'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})

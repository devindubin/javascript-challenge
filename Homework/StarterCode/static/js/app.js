// from data.js
const tableData = data

// YOUR CODE HERE!
console.log(tableData)

let tbody = d3.select('tbody')

function buildTable (data) {
  data.forEach(element => {
    let row = tbody.append('tr')
    Object.entries(element).forEach(([key, value]) => {
      let cell = row.append('td')
      cell.text(value)
    })
  })
}



buildTable(tableData)

let button = d3.select('#filter-btn')
let form = d3.select('#form')

button.on('click', buttonFilter)
form.on('submit', buttonFilter)



function buttonFilter () {
  d3.event.preventDefault()
  tbody.html('')
  let input = d3.select('#datetime')
  let inputValue = input.property('value')

  let filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
  console.log(inputValue)
  console.log(filteredData)

  filteredData.forEach((ufodata) => {
    let row = tbody.append('tr')
    Object.entries(ufodata).forEach(([key, value]) => {
      let cell = row.append('td')
        cell.text(value)
    })
  })
}

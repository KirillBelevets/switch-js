function addEventOnTable () {
    let table = document.createElement('table')
    for (let i = 0; i < 100; i++) {
        let newRow = document.createElement('tr')
        for (let j = 0; j < 100; j++) {
            let newCell = document.createElement('td')
            newRow.appendChild(newCell)
        }
        table.appendChild(newRow)
    }
    table.addEventListener('click', function () {
        console.log('clicked')
    }, true)

    document.getElementById('root').appendChild(table)
}
console.time('1')
addEventOnTable()
console.timeEnd('1')
// returned 9.8798828125 ms
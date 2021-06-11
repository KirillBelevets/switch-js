function addEventOnEachCell () {
    let table = document.createElement('table')
    for (let i = 0; i < 100; i++) {
        let newRow = document.createElement('tr')
        for (let j = 0; j < 100; j++) {
            let newCell = document.createElement('td')
            newCell.addEventListener('click', function () {
                console.log("clicked")
            }, false)
            newRow.appendChild(newCell)
        }
        table.appendChild(newRow)
    }

    document.getElementById('root').appendChild(table)
}
console.time('1')
addEventOnEachCell()
console.timeEnd('1')
// returned 24.428955078125 ms
function cellsWithDragAndDrop () {
    let table = document.createElement('table')
    let dragElem
    for (let i = 0; i < 100; i++) {
        let newRow = document.createElement('tr')
        for (let j = 0; j < 100; j++) {
            let newCell = document.createElement('td')
            newCell.setAttribute('draggable', true)
            newRow.appendChild(newCell)
        }
        table.appendChild(newRow)
    }

    table.addEventListener('dragstart', function (e) {
        dragElem = e.target
    })

    table.addEventListener('dragover', function (e) {
        e.preventDefault()
    })

    table.addEventListener('drop', function (e) {
        e.stopPropagation()
        // dragElem.parentNode.parentNode -> 'table'
        if (e.target !== dragElem.parentNode.parentNode) {
            dragElem.parentNode.removeChild(dragElem)
            e.target.appendChild(dragElem)
        }
    })

    document.getElementById('root').appendChild(table)
}

cellsWithDragAndDrop ()
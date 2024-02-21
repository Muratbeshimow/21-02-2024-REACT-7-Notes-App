let notes = ["Welcome to Notes!", "This is a demo Notes", "For Support contact"]

function showNotes() {
    notes.map((val, i) => {
        let noteElement = document.createElement("textarea");
        noteElement.value = val
        document.getElementById("main").appendChild(noteElement)
    })

}
function add() {
    let noteElement = document.createElement("textarea");
    noteElement.value = ""
    document.getElementById("main").appendChild(noteElement)
}

showNotes()
let events = []
const list = document.querySelector(".list")


function render () {
    const html = events.map((events) => {
        return `
        <li>
        <h3>${events.name}</h3>
        <br/>
        <h4> Date: ${events.date}</h4>
        <br/>
        <h4> Location: ${events.location}</h4>
        <br/>
        ${events.description}
        </li>
        `
    })
    list.innerHTML = html.join("")
}

async function fetchEvents() {
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-ftb-et-web-ft/events")
    const data = await response.json()
    events = data.data
    render()
}

fetchEvents()
let homeScore = 0
let guestScore = 0
const homeScoreEl = document.getElementById("home-score-el")
const guestScoreEl = document.getElementById("guest-score-el")

function render() {
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}

function addOneHomePoint() {
    homeScore += 1
    render()
}

function addTwoHomePoints() {
    homeScore += 2
    render()
}

function addThreeHomePoints() {
    homeScore += 3
    render()
}

function addOneGuestPoint() {
    guestScore += 1
    render()
}

function addTwoGuestPoints() {
    guestScore += 2
    render()
}

function addThreeGuestPoints() {
    guestScore += 3
    render()
}

render()
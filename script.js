money = 0
moneyPerSec = 0

function addMoney(amu) {
	money += amu
	document.getElementById("money").innerHTML = Math.floor(money * 100) / 100
}
function addMoneyPerSec(amu) {
	moneyPerSec += amu
	document.getElementById("moneyPerSec").innerHTML = Math.floor(moneyPerSec * 100) / 100
}

function getMinner() {
	if (money < 5) {return}
	addMoney(-5)
	addMoneyPerSec(1)
}
function getDrill() {
	if (money < 100) {return}
	addMoney(-100)
	addMoneyPerSec(10)
}

function loop() {
	var now = Date.now()
	var dt = (now - lastUpdate) / 1000
	lastUpdate = now

	addMoney(moneyPerSec * dt)
}

lastUpdate = Date.now()
var t = setInterval(loop, 1000 / 30)

var img;

function setup() {
	createCanvas(windowWidth - 30, windowHeight)
	img = loadImage("mine.jpg")
}

function draw() {
	image(img, 0, 0)
}
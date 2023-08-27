const years = [1980, 1934, 2002, 2019]
const date = new Date()
let year = date.getFullYear()

function newYear(x) {
	return year - x
}
const newArrey = years.map(newYear)
console.log(newArrey)

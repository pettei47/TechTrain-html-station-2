function displayList(e) {
	const fruits = document.getElementById("fruits")
	console.log(fruits.innerHTML)
	console.log(fruits.innerHTML.search(/<ul>/))
	if (fruits.innerHTML.search(/<ul>/) !== 0) {
		fruits.innerHTML
		= `<ul>${fruits.innerHTML.replace(/p>/g, 'li>')}</ul>`
	}
}

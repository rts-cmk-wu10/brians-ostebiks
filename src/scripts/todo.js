import printList from "./printList"
import saveJSONtoLocalStorage from "./saveJSONtoLocalstorage"

export default (function() {
	if (!window.location.pathname.includes("todo.html")) return // guard clause

	const TODO_FORM = document.querySelector(".todoForm")

	TODO_FORM.addEventListener("submit", submitHandler)

	function submitHandler(event) {
		event.preventDefault()

		saveJSONtoLocalStorage("todo-items",
			{ name: event.target.item.value, done: false })
		printList()
	}

	printList()

	const CLEAR_LIST_BUTTON = document.querySelector(".clearListButton")
	CLEAR_LIST_BUTTON.addEventListener("click", function() {
		if (confirm("Delete all the things! Are you sure?")) {
			localStorage.setItem("todo-items", "[]")
			printList()
		}
	})

})()

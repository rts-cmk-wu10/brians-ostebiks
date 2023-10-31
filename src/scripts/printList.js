import deleteJSONfromLocalStorage from "./deleteJSONfromLocalstorage"
import getJSONfromLocalStorage from "./getJSONfromLocalstorage"
import updateJSONinLocalStorage from "./updateJSONinLocalstorage"

function printList() {
	const DATA = getJSONfromLocalStorage("todo-items")
	const ITEMS = document.querySelector(".items")

	ITEMS.innerHTML = ""

	DATA.forEach(function(item, index) {
		const LI = document.createElement("li")
		const CHECKBOX = document.createElement("input")
		const DELETE_BUTTON = document.createElement("button")
		DELETE_BUTTON.innerHTML = "X"
		DELETE_BUTTON.name = index
		CHECKBOX.type = "checkbox"
		CHECKBOX.name = index
		CHECKBOX.checked = item.done

		LI.append(CHECKBOX, item.name, DELETE_BUTTON)
		ITEMS.append(LI)

		CHECKBOX.addEventListener("click", clickHandler)
		DELETE_BUTTON.addEventListener("click", deleteHandler)

		function clickHandler(event) {
			updateJSONinLocalStorage("todo-items", parseInt(event.target.name))
		}

		function deleteHandler(event) {
			if (confirm("Delete this item?")) {
				deleteJSONfromLocalStorage("todo-items", parseInt(event.target.name))
				printList()
			}
		}
	})
}

export default printList
const newFormInput = document.querySelector(".new-form-input")


document.addEventListener('load', listsIndex())
document.querySelector(".new-list-button").addEventListener('click', function() {
  document.querySelector(".new-form").style.visibility = "visible";
})
document.querySelector(".new-form").addEventListener('submit', somethingElse(newFormInput.value))
// Add fat arrow function that prevents default. Maybe make a new function that calls JSON? or call listsIndex again?


function listsIndex() {
  const jsonData = fetch('http://localhost:3000/lists')
    .then(res => res.json())
    .then(newInfo => somethingElse(newInfo))
}

function somethingElse(arg) {
  let ulselect = document.querySelector('.full-list')
  arg.forEach(list => ulselect.insertAdjacentHTML('beforeend', `<li> ${list["name"]} </li>`))
}

// create a div with id

// iterate through the json data and an innerHTML to the div

// make all the values <li> elements in a <ul>, linked to <SOMETHING>
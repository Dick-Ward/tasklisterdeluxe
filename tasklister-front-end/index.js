const newFormInput = document.querySelector(".new-form-input")


document.addEventListener('load', listsIndex())
document.querySelector(".new-list-button").addEventListener('click', function() {
  document.querySelector(".form-div").style.visibility = "visible";
})
document.querySelector(".new-form").addEventListener('submit', createNewList)
// Add fat arrow function that prevents default. Maybe make a new function that calls JSON? or call listsIndex again?


function listsIndex() {
  const jsonData = fetch('http://localhost:3000/lists')
    .then(res => res.json())
    .then(newInfo => somethingElse(newInfo))
}

function somethingElse(arg) {
  let divSelect = document.querySelector('.full-list')
  arg.forEach(list => divSelect.insertAdjacentHTML('beforeend', `${list["name"]} <br>`))
}

function getTasks(id) {
  const jsonData = fetch(`http://localhost:3000/lists/${id}/tasks`)
    .then(res => res.json())
    .then(newInfo => somethingElse(newInfo))
}

function createNewList(event) {
  // event.preventDefault();
  fetch('http://localhost:3000/lists', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        list: {
          name: document.getElementsByClassName('new-form-input')[0].value
        }
      })
    })
    .then(res => res.json())
    .then(newInfo => somethingElse(newInfo))

}

// create a div with id

// iterate through the json data and an innerHTML to the div

// make all the values <li> elements in a <ul>, linked to <SOMETHING>
// If an li element is clicked, toggle the class "done" on the <li>
let todayList = document.querySelector('.today-list');

const toggleListener = e => {

  let parentListItem = e.target.closest('li');

  if (!parentListItem.classList.contains('done')) {
    parentListItem.classList.add('done');
  } else {
    parentListItem.classList.remove('done')
  }

};

const addListenerForToggle = () => {
  todayList.addEventListener('click', toggleListener);
}

addListenerForToggle();


// If a delete link is clicked, delete the li element / remove from the DOM
todayList.addEventListener('click', e => {

  let parentListItem = e.target.closest('li');

  if(e.target.classList.contains('delete')) {
    parentListItem.remove();
  }

});

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Create new list item with the text from the input
  const newListItem = document.createElement('li');
  const spanWrap = document.createElement('span');
  const listItemText = document.createTextNode(`${text} `);
  spanWrap.appendChild(listItemText);
  newListItem.appendChild(spanWrap);

  // Create a delete button
  const deleteButton = document.createElement('a'); 
  const deleteText = document.createTextNode('Delete');
  deleteButton.setAttribute('class', 'delete');
  deleteButton.appendChild(deleteText);

  // Add delete button to list item
  newListItem.append(deleteButton);

  // Add new list item to the list
  todayList.appendChild(newListItem);


  todayList = document.querySelector('.today-list');

  todayList.removeEventListener('click', toggleListener);

  addListenerForToggle();
};

const inputButton = document.querySelector('.add-item');

inputButton.addEventListener('click', addListItem);
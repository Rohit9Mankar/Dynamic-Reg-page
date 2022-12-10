var form = document.getElementById('addForm');
var itemList=document.getElementById('items');

form.addEventListener('submit',addItem);
itemList.addEventListener('click', removeItem);

function addItem(e)
{
    e.preventDefault();

    
    var newItem = document.getElementById('item').value;
  
   
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
  
    // Create del button element
    var deleteBtn = document.createElement('button');
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
  
    // Append button to li
    li.appendChild(deleteBtn);

    var editBtn=document.createElement('button');
    editBtn.className='btn btn-edit btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
  
    // Append li to list
    itemList.appendChild(li);


}

function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }

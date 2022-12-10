var form = document.getElementById('addForm');
var itemList=document.getElementById('items');

form.addEventListener('submit',addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup',searchStr)

function addItem(e)
{
    e.preventDefault();

    
    var newItem = document.getElementById('item').value;
    var descrip=document.getElementById('descrip').value;
    var br=document.createElement('br');
   
    var li = document.createElement('li');
    li.className='list-group-item';

    li.className = 'list-group-item';
  
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(br);
    li.appendChild(document.createTextNode(descrip));
    
    
    var deleteBtn = document.createElement('button');
  
    
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
    
    deleteBtn.appendChild(document.createTextNode('X'));
  
    
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
  function searchStr(e)
  {
      var text=e.target.value.toLowerCase();
      var items = itemList.getElementsByTagName('li');
  
      Array.from(items).forEach(function(item){
          var itemName = item.firstChild.textContent;
          var description=item.lastChild.textContent;
          if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
          
        });
  //console.log(items)
  }
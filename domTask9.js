var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

form.addEventListener('submit',addItem)
filter.addEventListener('keyup',searchStr)

function addItem(e)
{
    e.preventDefault();
   var new_item=document.getElementById('item').value;
   var descrip=document.getElementById('descrip').value;
   
   var li=document.createElement('li');
   li.appendChild(document.createTextNode(new_item));
   li.appendChild(document.createTextNode(descrip));
   
   itemList.appendChild(li);
   
}

function searchStr(e)
{
    var text=e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
        
      });
//console.log(items)
}

//create inut element
/*var descrip=document.createElement('input');
var submit=document.getElementById('sbt');
submit.parentElement.insertBefore(descrip,submit);
*/
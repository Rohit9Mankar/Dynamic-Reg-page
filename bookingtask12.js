const form=document.getElementById('my_form');
const itemslist=document.getElementById('users')

form.addEventListener('submit',store_to_local)

function store_to_local(e)
{
    e.preventDefault();
   var username=document.getElementById('name').value;
   var mobile=document.getElementById('email').value;

    const my_Obj={
        name_h: username,
        contact : mobile
    };
    var my_obj_stringed=JSON.stringify(my_Obj);
    

   localStorage.setItem('user detail'+username,my_obj_stringed);
   let li=document.createElement('li');
   li.appendChild(document.createTextNode(document.getElementById('name').value))
   li.appendChild(document.createTextNode(document.getElementById('email').value))

   itemslist.appendChild(li); 

  
   
   


}

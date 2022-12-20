const form=document.getElementById('my_form');
const itemslist=document.getElementById('users')

form.addEventListener('submit',store_to_local)

function store_to_local(e)
{
    e.preventDefault();
   
    const my_Obj={
        name_h: document.getElementById('name').value,
        contact : document.getElementById('email').value
    };
    var my_obj_stringed=JSON.stringify(my_Obj);
    
   localStorage.setItem('user detail'+JSON.stringify(my_Obj.name_h),my_obj_stringed);
   
   let li=document.createElement('li');
   li.appendChild(document.createTextNode(document.getElementById('name').value))
   li.appendChild(document.createTextNode(document.getElementById('emaiil').value))

   itemslist.appendChild(li);


}
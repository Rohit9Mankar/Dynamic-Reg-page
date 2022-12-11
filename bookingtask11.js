const form=document.getElementById('my_form');

form.addEventListener('submit',store_to_local)

function store_to_local(e)
{
    e.preventDefault();
   
    const my_Obj={
        name_h: document.getElementById('name').value,
        contact : document.getElementById('email').value
    };
    var my_obj_stringed=JSON.stringify(my_Obj);
    
   localStorage.setItem('user1',my_obj_stringed);
}
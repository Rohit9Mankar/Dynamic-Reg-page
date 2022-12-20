const form=document.getElementById('my_form');

form.addEventListener('submit',store_to_local)

function store_to_local(e)
{
    e.preventDefault();
    var name_h=document.getElementById('name').value;
   var email=document.getElementById('email').value;
    const my_Obj={
        user: name_h;
        contact: email;
    }
    var my_obj_stringed=JSON.stringify(my_Obj)
   localStorage.setItem("user1",my_obj_stringed);
}


const form=document.getElementById('my_form');

form.addEventListener('submit',store_to_local)

function store_to_local(e)
{
    e.preventDefault();
    var name_h=document.getElementById('name').value;
   var email=document.getElementById('email').value;

   localStorage.setItem(name_h,email);
}


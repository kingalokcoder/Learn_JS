const myForm =document.querySelector('#my-form');
const inputName= document.querySelector('#name');
const inputEmail =document.querySelector('#email');
const msg= document.querySelector('.msg');
const users = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);


function onSubmit(e)
{
    e.preventDefault();
    if(inputName.value==='' || inputEmail ==='')
    {
             msg.innerHTML='Please enter all fields';
             msg.classList.add('error');
          setTimeout(()=>msg.remove(),3000);   
    }
    else
    {
const li = document.createElement('li');
li.appendChild(document.createTextNode(`${inputName.value} : ${inputEmail.value}`));
   users.appendChild(li);

   //clear the fields
   inputName.value='';
   inputEmail.value='';
    }
}
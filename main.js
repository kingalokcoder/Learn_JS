const btn= document.querySelector('.btn');

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log('clicked');});

// btn.addEventListener('click',(e)=>{
//     console.log(e.target.className);
// });

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='red';
    // document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>'
})
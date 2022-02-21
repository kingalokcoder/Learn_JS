const ul =document.querySelector('.items');
// ul.remove();
console.log(ul);
// ul.lastElementChild.remove();
ul.firstElementChild.textContent='Gym';
ul.children[1].textContent='Java Script';
ul.lastElementChild.innerHTML='<h1>Holiday</h1>';

const btn= document.querySelector('.btn');
btn.style.background='red';
// delete an element from the dom
const list = document.querySelector('.toDoList ul');
list.addEventListener('click',function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li)
  }
});





// list.addEventListener('click', (e) => {
//   if(e.target.className == 'delete'){
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   }
// });

const itemList=document.querySelector('#items');
//console.log(itemList.parentElement)

const parentEle=itemList.parentElement;

var item1=itemList.firstElementChild;
//console.log(item1)
const item4=itemList.lastElementChild;
//console.log(item4)

var item_1=itemList.firstChild;
const item_4=itemList.lastChild;

const nextsibling=itemList.nextElementSibling;
const next_sibling=itemList.nextSibling;

const prevSibling=itemList.previousElementSibling;
const prev_Sibling=itemList.previousSibling;
//console.log(prevSibling)

var new_div=document.createElement('div')
new_div.setAttribute('title','For new element');

var text=document.createTextNode('Hello')
new_div.appendChild(text);




//Inserted 
parentEle.insertBefore(new_div,itemList)
itemList.innerHTML='<li>Hello</li>'+itemList.innerHTML;

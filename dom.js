var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].style.backgroundColor='green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeigth='bold';
}

var li=document.getElementsByTRagname('li');
console.log(li);
console.log(li[1]);
li[1].textContent='Hello';
li[1].style.fontWeigth='bold';
li[1].style.backgroundColour='yellow';
for(var i=0;i<items.length;i++){
    li[i].style.fontWeigth='bold';
}
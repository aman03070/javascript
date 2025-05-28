const a =document.getElementById('grey');
const b =document.getElementById('white');
const c =document.getElementById('blue');
const d =document.getElementById('yellow');
const body = document.querySelector('body');

a.addEventListener('click', function(e){
    if(e.target.id === 'grey'){
        body.style.backgroundColor = 'grey';
    }
});
b.addEventListener('click', function(e){
    if(e.target.id === 'white'){
        body.style.backgroundColor = 'white';
    }
});
c.addEventListener('click', function(e){
    if(e.target.id === 'blue'){
        body.style.backgroundColor = 'blue';
    }
});
d.addEventListener('click', function(e){
    if(e.target.id === 'yellow'){
        body.style.backgroundColor = 'yellow';
    }
});



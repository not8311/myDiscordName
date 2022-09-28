function toGoogle(){
   const googleBtn = document.getElementsByClassName('google');
   location.href ='http://www.google.com';
}

function toYahoo(){
   const yahooBtn = document.getElementsByClassName('yahoo');
   location.assign('http://www.yahoo.com/');
}

const linkUrl = 'https://www.hexschool.com/?recommend='
function btnTom(){
   const tom = document.querySelector('.tom').dataset;
   location.href = `${linkUrl}${tom.id}`;
}

function btnJohn(){
   const john = document.querySelector('.John').dataset;
   location.href = `${linkUrl}${john.id}`
}
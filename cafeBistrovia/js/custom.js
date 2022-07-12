// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

const burger=document.querySelector(".burger");
const coffee=document.querySelector(".coffee");
const shake=document.querySelector(".shake");

const gotoburger=document.querySelector(".gotoburger");
const gotocoffee=document.querySelector(".gotocoffee");
const gotoshake=document.querySelector(".gotoshake");

gotoburger.classList.add("activemenu");

coffee.style.display='none';
shake.style.display='none';



function openMenu(x){
    if(x==1){
        gotoburger.classList.add("activemenu");
        gotoshake.classList.remove("activemenu");
        gotocoffee.classList.remove("activemenu");
        burger.style.display='block';
        coffee.style.display='none';
        shake.style.display='none';
    }
    else if(x==2){
        gotoburger.classList.remove("activemenu");
        gotoshake.classList.remove("activemenu");
        gotocoffee.classList.add("activemenu");
        burger.style.display='none';
        coffee.style.display='block';
        shake.style.display='none';
    }
    else if(x==3){
        gotoburger.classList.remove("activemenu");
        gotoshake.classList.add
        gotocoffee.classList.remove("activemenu");
        burger.style.display='none';
        coffee.style.display='none';
        shake.style.display='block';
    }
}




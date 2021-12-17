var items=document.querySelectorAll(".cell");

var turn="X";
var gameover=false;
var cnt=0;
const changeturn= ()=>{
   return turn==="X"?"O":"X";
}

const checkwin= ()=>{
    var win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    win.forEach(e => {
        if( (items[e[0]].innerHTML!=="") && (items[e[0]].innerHTML===items[e[1]].innerHTML) && (items[e[1]].innerHTML===items[e[2]].innerHTML))
        {
            document.querySelectorAll(".heading")[0].innerHTML="Congratulations "+ items[e[0]].innerHTML+" Wins !";
            document.querySelectorAll("img")[0].style.display="inline-block";
            document.querySelectorAll("img")[1].style.display="inline-block";
            document.querySelector(".game-info").style.marginBottom="100px";
            gameover=true;
        }
    });
    if(!gameover && cnt===9)
    {
        document.querySelectorAll(".btn")[1].innerHTML="Ooops,Try Again For Win! ";
    }
}

items.forEach( (element)=> {
    element.addEventListener("click",()=>{
        if(!gameover && element.innerHTML==="")
        {
            ++cnt;
            element.innerHTML=turn;
            turn=changeturn();
            checkwin();
            if(!gameover && cnt<9){
            document.querySelectorAll(".btn")[1].innerHTML="Turn For "+turn;
            }
        }
    });
});

document.querySelectorAll(".btn")[0].addEventListener("click",()=>{
    items.forEach(element => {
        element.innerHTML="";
    });
    document.querySelectorAll(".heading")[0].innerHTML="";
    document.querySelectorAll("img")[0].style.display="none";
    document.querySelectorAll("img")[1].style.display="none";
    cnt=0;
    gameover=false;
    turn="X";
});


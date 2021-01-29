var color=generatecolor(6);
    // // "rgb(255, 0, 0)",
    // "rgb(255, 255, 0)",
    // "rgb(255, 45, 255)",
    // "rgb(255, 100, 155)",
    // // "rgb( 0, 0, 255)",
    // // "rgb(25, 255, 0)",
    // // "rgb( 0, 255, 255)",
    // "rgb(100, 10, 100)",
    // "rgb(25, 120, 205)",
    // "rgb(255, 58, 160)"

var squares=document.querySelectorAll(".square");
var pickedcolor=PickColor();
var disp=document.querySelector("h1");
var message=document.querySelector("span");
disp.textContent=pickedcolor;
var q=document.getElementById('special');
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var reset=document.querySelector("button");
q.style.background="linear-gradient(170deg,yellow,red,blue)";  

reset.addEventListener("click",function(){
    
    color=generatecolor(6);
    pickedcolor=PickColor();
    disp.textContent=pickedcolor;
    for(var k=0;k<squares.length;k++){
        squares[k].style.background=color[k];
        squares[k].style.display="block";
    }
    message.textContent=null;
    reset.textContent="NEW COLORS";
    easy.classList.remove("select");
    hard.classList.add("select");
    
    
    q.style.background="linear-gradient(170deg,yellow,red,blue)";  
});

hard.addEventListener("click",function(){
   
    easy.classList.remove("select");
    hard.classList.add("select");
    color=generatecolor(6);
    pickedcolor=PickColor();
    disp.textContent=pickedcolor;
    for(var k=0;k<squares.length;k++){
        squares[k].style.background=color[k];
        squares[k].style.display="block";
    }
    q.style.background="linear-gradient(170deg,yellow,red,blue)"; 

});
easy.addEventListener("click",function(){
    
    hard.classList.remove("select");
    easy.classList.add("select");
    color=generatecolor(3);
    pickedcolor=PickColor();
    disp.textContent=pickedcolor;
    for( var i=0 ; i< squares.length ; i++){
        if(color[i]){
            squares[i].style.background=color[i];
        }
        else
        squares[i].style.display="none";
    }
    q.style.background="linear-gradient(170deg,yellow,red,blue)"; 
    
});

for(var i=0 ; i< squares.length ; i++){
    squares[i].style.background=color[i];
    squares[i].addEventListener("click",function()  
    {
        var clicked=this.style.background ; 
        if(clicked === pickedcolor)
       { 
        message.textContent="Correct!";
       ChangeColor(pickedcolor);
       q.style.background=pickedcolor;
       reset.textContent="PLAY AGAIN ?"

    }
        else
        {
        this.style.background="black";
        message.textContent="Try Again";
        // this.style.color="red";
    }

    }
    );
}
function ChangeColor(colors){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=colors;
    }

}

function PickColor(){
  var z=  Math.floor(Math.random()*color.length);
    return color[z];
}
function generatecolor( no){
    var arr=[];
    for(var j=0;j<no;j++)
    {   
        arr.push(random());

    }
    return arr ;
}
function random(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    
   return "rgb(" + r +", " + g +", " + b +")";
}

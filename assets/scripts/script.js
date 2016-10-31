var posx = 0;
var posy = 0;
var i = 5;
function goback(){
  console.log("Yes I am working")
  document.getElementById('ball').style.left="2px";
  document.getElementById('ball').style.top="2px";
  posx=0;
  posy=0;
  i=5;
  document.getElementById('val').innerHTML= i;
  document.getElementById('Home').style.visibility="visible";
  document.getElementById('gameover').innerHTML="";
}
function myMove() {
  console.log("I am working");
  var x = event.key;
  if((x=="d" || x=="D" )&& posx<705 && i>0){
    posx = posx+5;
    document.getElementById('ball').style.left = posx+'px';
    console.log(posx);
    console.log(posy);
  }


  if((x=="a" || x=="A" )&& posx>0 && i>0){
    posx = posx-5;
    document.getElementById('ball').style.left = posx+'px';
    console.log(posx);
    console.log(posy);
  }
  if((x=="s" || x=="S")&& posy<475 && i>0){
    posy = posy+5;
    document.getElementById('ball').style.top = posy+'px';
    console.log(posx);
    console.log(posy);
  }
  if((x=="w" || x=="W")&& posy>0 && i>0){
    posy = posy-5;
    document.getElementById('ball').style.top = posy+'px';
    console.log(posx);
    console.log(posy);
  }

  if(posy==25 && posx<670){
    i=i-1;
    console.log("oops");
  }
  if(posy>30 && posx==670){
    i=i-1;
    console.log("oops");
  }
  
  if(posx<=660 && posx>=285 && posy==370){
    i=i-1;
    console.log("oops");
  }
  if(posx>0 && posx<=625 && posy==70){
    i=i-1;
    console.log("oops");
  }
  if(posy>=70 && posy<=325 && posx==625){
    i=i-1;
    console.log("oops");
  }
  if(posx<=625 && posx>=320 && posy==325){
    i=i-1;
    console.log("oops");
  }
  if(posy<=325 && posy>=105 && posx==320){
    i=i-1;
    console.log("oops");
  }
  if(posx>=285 && posx<=310 && posy==95){
    i=i-1;
    console.log("oops");
  }
  if(posy<=360 && posy>=105 && posx==275){
    i=i-1;
    console.log("oops");
  }
  if(i==0){
  document.getElementById('val').innerHTML= "0";
    document.getElementById('gameover').innerHTML="Game OVer";
    document.getElementById('Home').style.visibility="Hidden";

  }
  if(i>0){
    document.getElementById('val').innerHTML= i;

  }

}

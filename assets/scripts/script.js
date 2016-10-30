var posx = 0;
var posy = 0;

function myMove() {
var x = event.key;
if((x=="d" || x=="D" )&& posx<705){
posx = posx+5;
document.getElementById('ball').style.left = posx+'px';
}

if((x=="a" || x=="A" )&& posx>0){
posx = posx-5;
document.getElementById('ball').style.left = posx+'px';

}
if((x=="s" || x=="S")&& posy<475 ){
posy = posy+5;
document.getElementById('ball').style.top = posy+'px';

}
if((x=="w" || x=="W")&& posy>0 ){
posy = posy-5;
document.getElementById('ball').style.top = posy+'px';
}



}

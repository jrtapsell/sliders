var rows = 3;
var locations = [[1,2,3],[4,5,42],[7,8,6]];
var win = "1,2,3,4,5,6,7,8,42";
var stop = false;
function reset()
{	
navigator.app.exitApp();
}

function kingjulian(index)
{
if(!stop){
var blank;	
for( var i = 0, len = rows; i < len; i++ ) {
	for( var j = 0, len = rows; j < len; j++ ) {
    if( locations[i][j] === 42 ) {
        bx = i + 1;
        by = j + 1;
        break;
    }
}	
}
var clicked;	
for( var i = 0, len = rows; i < len; i++ ) {
	for( var j = 0, len = rows; j < len; j++ ) {
    if( locations[i][j] === index ) {
        cx = i + 1;
        cy = j + 1;
        break;
    }
}	
}
console.log("bx " + bx);
console.log("by " + by);
console.log("cx " + cx);
console.log("cy " + cy);
if(by == cy + 1 && bx == cx){
	$( "#move" + index ).animate({
	left: "+=" + String(100 / rows) +"%",
	});
	locations[bx - 1][by - 1] = index;
	locations[cx - 1][cy - 1] = 42;
}
	if(by == cy - 1 && bx == cx){
	$( "#move" + index ).animate({
	left: "-=" + String(100 / rows) +"%",
	});
	locations[bx - 1][by - 1] = index;
	locations[cx - 1][cy - 1] = 42;
}
	if(by == cy && bx == cx + 1){
	$( "#move" + index ).animate({
	top: "+=" + String(100 / rows) +"%",
	});
	locations[bx - 1][by - 1] = index;
	locations[cx - 1][cy - 1] = 42;
}
if(by == cy && bx == cx - 1){
	$( "#move" + index ).animate({
	top: "-=" + String(100 / rows) +"%",
	});
	locations[bx - 1][by - 1] = index;
	locations[cx - 1][cy - 1] = 42;
}
if (String(locations) === win){
	setTimeout(function(){alert("You Win")}, 1000);
	stop = true;
	
}else{
	console.log(String(locations));
}
}
}

for( var i = 0, len = rows; i < len; i++ ) {
for( var j = 0, len = rows; j < len; j++ ) {
	var target = locations[i][j];
	if(target !== 42){
	$( "#move" + target ).animate({
	top: "+=" + (i *  (100 / rows)) + "%",
	left: "+=" + (j * (100 / rows)) + "%",
});
}
}
}

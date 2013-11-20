	function reset()
	{
	
navigator.app.exitApp();
	}
	var locations = [[1,2,3],[4,5,9],[7,8,6]];
	var stop = false;
	function kingjulian(index)
	{
		if(!stop){
var blank;	
for( var i = 0, len = 3; i < len; i++ ) {
	for( var j = 0, len = 3; j < len; j++ ) {
    if( locations[i][j] === 9 ) {
        bx = i + 1;
        by = j + 1;
        break;
    }
}	
}
var clicked;	
for( var i = 0, len = 3; i < len; i++ ) {
	for( var j = 0, len = 3; j < len; j++ ) {
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
	left: "+=33%",
});
locations[bx - 1][by - 1] = index;
locations[cx - 1][cy - 1] = 9;
}
if(by == cy - 1 && bx == cx){
	$( "#move" + index ).animate({
	left: "-=33%",
});
locations[bx - 1][by - 1] = index;
locations[cx - 1][cy - 1] = 9;
}
if(by == cy && bx == cx + 1){
	$( "#move" + index ).animate({
	top: "+=33%",
});
locations[bx - 1][by - 1] = index;
locations[cx - 1][cy - 1] = 9;
}
if(by == cy && bx == cx - 1){
	$( "#move" + index ).animate({
	top: "-=33%",
});
locations[bx - 1][by - 1] = index;
locations[cx - 1][cy - 1] = 9;
}
if (String(locations) === "1,2,3,4,5,6,7,8,9"){
	setTimeout(function(){alert("You Win")}, 1000);
	stop = true;
	
}else{
	console.log(String(locations));
}
}
}

for( var i = 0, len = 3; i < len; i++ ) {
for( var j = 0, len = 3; j < len; j++ ) {
	var target = locations[i][j];
	if(target !== 9){
	$( "#move" + target ).animate({
	top: "+=" + i * 33 + "%",
	left: "+=" + j * 33 + "%",
});
}
}
}

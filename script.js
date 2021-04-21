function findPos(obj){
	let curleft = curtop = 0;
    if (obj.offsetParent) {
		curleft = obj.offsetLeft;
		curtop = obj.offsetTop;
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
    }
    return [curleft,curtop];
}

document.addEventListener("scroll",  function(){
	const winH = window.innerHeight;
	const square = document.getElementsByClassName("square");
	for (i=0; i<square.length; i++){
		const positionSquare = findPos(square[i]);
		if(positionSquare[1]<=scrollY+winH*0.9 && scrollY<=positionSquare[1]+square[i].offsetHeight-winH*0.1){
			square[i].style.visibility = `visible`;
			square[i].style.animation = `rotate180deg 1.5s ease-out`;
		}
	}
})

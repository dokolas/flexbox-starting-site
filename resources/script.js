let likespace = document.getElementById("spacebutton");
let i = 0;

let likespacefunc = () => {
    i++;
    if(i % 2 != 0){
        document.getElementById("spacesection").style.display = "flex"; 
        document.getElementById("spacebutton").innerHTML = "Click if you actually don't like space?";
    }
    else {
        document.getElementById("spacesection").style.display = "none";
        document.getElementById("spacebutton").innerHTML = "Click if you like space?"
    }
}

let reyesclick = document.getElementById("reyesbutton");

let reyesfunc = () => {
    document.getElementById("scrollforleader").style.display = "flex";
    document.getElementById("reyespic").src="./media/fearlessleader.gif";
    document.getElementById("reyesbutton").style.display = "none";
    document.getElementById("meme5words").innerHTML = "<h3>Blame Obama!</h3>";
}



likespace.addEventListener('click', likespacefunc);
reyesclick.addEventListener('click', reyesfunc);
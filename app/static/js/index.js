function iconClicked(){
    var navbar=document.getElementById('navbar-container');
    console.log(navbar);
    if (navbar.className != 'interactive'){
        navbar.className = 'interactive';
    } else {
        navbar.className= '';
    }

}


var current_carosel = 0;
const controllerElements = document.getElementsByClassName("far fa-circle");
const caroselElements = document.getElementsByClassName("carosel-item");
var caroselTimer;

//Fixes the onload state of the carosel.
function caroselOnload(){
    caroselTimer = setTimeout(caroselSwitch, 5000);
}
//Handling the onclick state of the carosel elements
function caroselControl(id){
    current_carosel = id;
    if (controllerElements[id].className != 'far fa-circle active'){
        controllerElements[id].className = 'far fa-circle active';
        caroselElements[id].className = 'carosel-item active';
        caroselElements[id].style.display="flex";
        for (var i = 0; i<controllerElements.length; i++){
            if (controllerElements[i].className =='far fa-circle active' && i!=id ){
                controllerElements[i].className = 'far fa-circle';
                caroselElements[i].className = 'carosel-item';
                caroselElements[i].style.display = 'none';
            }
        }
    }
    clearTimeout(caroselTimer);
    caroselTimer = setTimeout(caroselSwitch, 5000);
}



//Handling the next element within the carosel.
function caroselSwitch(){
    caroselElements[current_carosel].style.display = 'none';
    controllerElements[current_carosel].className = 'far fa-circle';
    caroselElements[current_carosel].className = 'carosel-item';
    current_carosel = (current_carosel+1)%5;
    controllerElements[current_carosel].className = 'far fa-circle active';
    caroselElements[current_carosel].className = 'carosel-item active';
    caroselElements[current_carosel].style.display = 'flex';
    caroselTimer = setTimeout(caroselSwitch, 5000);
}
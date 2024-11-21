const btn = document.getElementsByClassName("switch")[0];
const elementOne = Array.from(document.getElementsByClassName("box"));

btn.addEventListener('click', onSwitch)
function onSwitch(ev) {
    ev.preventDefault();


    elementOne.forEach((el) => el.classList.contains("absolute")
    
     ? el.classList.remove("absolute") 
     : el.classList.add("absolute"));

}
const keys = document.querySelectorAll('.key');
const regulars = document.querySelectorAll('.key.white');
const sharps = document.querySelectorAll('.key.black');
const whites = ['a','s','d','f','g','h','j'];
const blacks = ['w','e','r','t','y'];

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})
document.addEventListener('keydown', e=> {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = whites.indexOf(key)
    const blackKeyIndex = blacks.indexOf(key)

    if (whiteKeyIndex > -1) playNote(regulars[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(sharps[blackKeyIndex])
})
let playNote = (key) => {
    const noteSound = document.getElementById(key.dataset.note)
    noteSound.currentTime = 0
    noteSound.play()
    key.classList.add('active')
    noteSound.addEventListener('ended', () => {
        key.classList.remove('active')

    })
}
































/*let btn_prev = document.querySelector('#gallery .buttons .prev');
let btn_next = document.querySelector('#gallery .buttons .next');
let images = document.querySelectorAll('#gallery .photos img');
let i = 0; 
images[i].style.display = 'none'
i++ ;
if(i >= images.length){
    i = 0; 
}
btn_prev.onclick = function(){
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}
btn_next.onclick = function(){
    images[i].style.display = 'none';
    i = i + 1;
    if(i > 0){
        i = images.length + 1;
    }
    images[i].style.display = 'block';
}*/


















/*var images=["img/png.png","img/png2.png","img/png3.png"]
let a=0;
function myImages(){
    
    document.getElementById("images").src=images[a++]
}
let b=2;asdawwdasdasdsadasdasdasdasdd
function myImages_second(){
    
    document.getElementById("images").src=images[b--]
}*/






/*let a = ["apple","anor","nok",1,1,1,1,1,11,1]
document.getElementById("fruit").innerHTML=a;

function myfunction(element){
    a.pop();
    document.getElementById("fruit").innerHTML=a;
}*/
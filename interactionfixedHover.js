var interactivity = {
 buttons:document.getElementsByTagName('a'),
 sliders:document.getElementsByClassName('slider'),
 sounds:{
  hover:new Howl({'src':'ui/sounds/hover.ogg',preload:false}),
  presspos:new Howl({'src':'ui/sounds/presspos.ogg',preload:false}),
  pressneg:new Howl({'src':'ui/sounds/pressneg.ogg',preload:false}),
  dragslider:new Howl({'src':'ui/sounds/dragslider.ogg',preload:false}),
  select:new Howl({'src':'ui/sounds/select.ogg',preload:false}),
 }
}

for (let T in interactivity.sounds){
 interactivity.sounds[T].load()
}

for (let T = 0; T < interactivity.buttons.length;T++){
 interactivity.buttons[T]['addEventListener']('mouseover',()=>{playuisfx('hover')},false)
 let I=interactivity.buttons[T].className=='guiclass_return'||interactivity.buttons[T].className=='guiclass_return guiclass_RETURN'
 if(I){
  interactivity.buttons[T]['addEventListener']('click',()=>{playuisfx('pressneg')},false)
 }else{
  interactivity.buttons[T]['addEventListener']('click',()=>{playuisfx('presspos')},false)
 }
}

for (let T = 0; T < interactivity.sliders.length;T++){
interactivity.sliders[T]['addEventListener']('input',()=>{playuisfx('dragslider')},false)
}
function playuisfx(value){
 let y = interactivity.sounds[value]
 y.volume(settings.UIVol/100)
 if(settings.UIVol!==0){
  y.stop()
  y.play()
 }
}

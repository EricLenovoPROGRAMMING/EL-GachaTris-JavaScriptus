/**constructor
 * 
 */
function rectAnimationsSet2(){
 this.a=rectAni2Ctx
 this.b=rectAni2Canvas
 this.preloaderCanvas=$d('RAPreloader')
 this.preloaderCtx=this.preloaderCanvas.getContext('2d')
 this. preload= {
 
 }
 this.count={
  x:0,
  y:0,
  int:0
 },
 this.loadRA=true
 this.current='',
 //IIFE preload
 this.types=(()=>{
  var arrayObj={}
  var e=['spell1','spell2','spell3','spell4','spell5','counter','damage']
  for(let i of e){
   arrayObj[i]=document.getElementById(i)
  }
  return arrayObj
 })()/**/
 this.intrv=0
 this.max=50
}
rectAnimationsSet2.prototype={
 preloader:()=>{
  for (let i in this.preload){
   this.preloaderCtx.drawImage(
    this.preload[i],
    0,
    0,
    this.preloaderCanvas.width,
    this.preloaderCanvas.height
    )
  }
 },
 loop:function(){
  if(this.loadRA&&settings.RectAnimations==0){
  this.count.int-=2
  while(this.count.int<0){
   this.count.int+=5
  if(this.current!==''){
  clear(this.a)
  this.count.x++
  if(this.count.x>=5){
   this.count.x=0
   this.count.y++
  }
  if(this.count.y>=10){
   this.count.x=0
   this.count.y=0
   this.current=''
  }
this.switchpage(this.current,this.count.x, this.count.y)
/*if(this.count.x<2&&this.count.y==0){
 $d('rectAnimationTransition').style.opacity='0%'
  $d('rectAnimationTransition').style.transition='height 0s linear'
 setTimeout(()=>{ $d('rectAnimationTransition').style.transition='opacity 0.25s linear';$d('rectAnimationTransition').style.opacity='100%';},1)
}
if(this.count.x<1&&this.count.y==9){
  $d('rectAnimationTransition').style.opacity='0%'

}/**/
rectAni2Canvas.style.transform=`rotateX(${rectRotateTranslation(this.count.x,this.count.y)})`
}
}
}
},
fire:function(type){
 this.current=type
 this.count={
  x:0,
  y:0,
  int:0
 }
},
 /**EricLenovo: draw
  * rectangular animation frame
  */
 switchpage:function(type,x,y){
  try{
  this.a.drawImage(
  this.preload[type],
  this.preload[type].naturalWidth/**/*(x/5),
  this.preload[type].naturalHeight/**/*(y/10),
  this.preload[type].naturalWidth/5,
  this.preload[type].naturalHeight/10,
  0,
  0,
  this.b.width,
  this.b.height
  )
  }catch(e){} 
 },
 
}


function rectOpacityTranslation(hx, hy) {
 if (hy <= 0) {
  return `${((hx/4))*(cellSize*3)}px`
 }
 if (hy > 0 && hy <= 8) {
  return `${cellSize*3}px`
 }
 if (hy >= 9) {
  return `${(((4-hx)/4))*(cellSize*3)}px`
 }
}

function rectRotateTranslation(hx, hy) {
 if (hy >= 9) {
  return `${((hx/4))*90}deg`
 }
 if (hy > 0 && hy <= 8) {
  return `0deg`
 }
 if (hy <= 0) {
  return `${(((4-hx)/4))*-90}deg`
 }
}

var rectAnimations2=new rectAnimationsSet2()

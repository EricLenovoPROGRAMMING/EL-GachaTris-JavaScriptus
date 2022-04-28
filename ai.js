function gtAI(){
 this.counter=0
 this.KPSCap=1
 this.imaginary={
  x:0,
  y:0,
  rot:0,
  hold:false,
  index: 0
 }
 this.it_is_full=false
 this.prev_holes=false
 this.bestIndex={}
 this.fixedCounter=0
 this.PPSLimit=''
}
gtAI.prototype={
 run:function(){
  this.counter--
  if (keysDown2 == 0&&this.counter<=1/*&&(pieces2Set / ((frame-100) / 60))<this.PPSLimit/**/) {
   if(!this.imaginary.hold){
   
   }
   if (this.imaginary.hold) {
    keysDown2 |= flags.holdPiece
    //console.log('AI HOLD')
    this.imaginary.hold=false
   } else
   if (this.imaginary.x > Math.round(piece2.x) &&piece2.moveValid(1, 0, piece2.tetro)/**/) {
    keysDown2 |= flags.moveRight
   }
   else if(this.imaginary.x<Math.round(piece2.x)&&piece2.moveValid(-1,0,piece2.tetro)/**/){
   keysDown2 |=flags.moveLeft
   }
   
   else
   if (this.imaginary.rot == 1) {
    keysDown2 |= flags.rotRight
    //console.log('AI ROTRIGHT')
    this.imaginary.rot = 0
   } else
   if (this.imaginary.rot == 2) {
    keysDown2 |= flags.rot180
    //console.log('AI ROT180')
    this.imaginary.rot=0
   } else
   if (this.imaginary.rot == 3) {
    keysDown2 |= flags.rotLeft
    //console.log('AI ROTLEFT')
    this.imaginary.rot = 0
   }else /*if(piece2.x==this.imaginary.x&&piece2.y!=this.imaginary.y)/**/
 /* if(piece2.y!=this.imaginary.y) {
   keysDown2 |= flags.moveDown
   //this.eval(this.imaginary.index)
  }else/**/if((pieces2Set / ((frame-100) / 60))<this.PPSLimit||typeof this.PPSLimit!=='number')
   {
    keysDown2 |= flags.hardDrop
 // this.eval(piece2.index,piece2.held)
   }
 /*  else{
    keysDown2 |= flags.moveDown
    this.eval(this.imaginary.index)
   }*/
   this.counter=this.KPSCap
  }
  else {
   keysDown2 = 0
  }
 },
 eval:function(index,held){
  //if(this.imaginary.x>6)
//this.imaginary.x=Math.round(Math.random()*10)/**/
//else this.imaginary.x++
   // this.imaginary.rot=Math.round(Math.random()*3)/**/
gtrisAIPredictor.eval(index)
gtrisAIPredictor2.eval(preview2.grabBag[0])
if(hold2.piece!==void 0){
 gtrisAIPredictor3.eval(hold2.piece)
}
////console.table(gtrisAIPredictor.prediction)/**/
/*clear(stackCtx)
 draw(gtrisAIPredictor.grid,0,0,stackCtx)*/
 this.bestIndex={}
 let hold=false
 if(pieces2Set<1&&(index==4||index==6)){
  this.bestIndex = gtrisAIPredictor2.bestPrediction
  hold = true
 }else{
 if(hold2.piece==void 0){
 if(gtrisAIPredictor.bestPrediction.score<gtrisAIPredictor2.bestPrediction.score&&!held){
  this.bestIndex=gtrisAIPredictor2.bestPrediction
  hold=true
 }else this.bestIndex=gtrisAIPredictor.bestPrediction
 }else
 if(gtrisAIPredictor.bestPrediction.score<gtrisAIPredictor3.bestPrediction.score&&!held){
  this.bestIndex=gtrisAIPredictor3.bestPrediction
  hold=true
 }else {
  this.bestIndex=gtrisAIPredictor.bestPrediction
  hold=false
 }
}
 this.imaginary.x = this.bestIndex['x']
this.imaginary.rot = this.bestIndex['rot']
this.imaginary.y = this.bestIndex['y']
this.imaginary.index = this.bestIndex['index']
this.imaginary.hold = hold
}
 
}

var gtrisAI=new gtAI()

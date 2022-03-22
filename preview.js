
function Preview() {
  grabBag = this.gen();
}

var pieceList=[]

Preview.prototype.init = function() {
  //XXX fix ugly code lolwut
  
      this.grabBag = this.gen();
        
  this.grabBag.push.apply(this.grabBag, this.gen());
  this.draw();
};
Preview.prototype.next = function() {
    
  var next;
  if (varpiecedelay<=frame){
  next = this.grabBag.shift();
  
     this.grabBag.push.apply(this.grabBag, this.gen());
  
  this.draw();
  }
   return next;
  
  //TODO Maybe return the next piece?
};
/**
 * Creates a "grab bag" of the 7 tetrominos.
 */
/*Preview.prototype.gen = function() {
  pieceList = [0,1,2,3,4,5,6]
  return pieceList.sort(function() {
    return 0.5 - rng.next()
  });
};*/
Preview.prototype.gen = function() {
  var pieceList = void 0;
/*  if(gameparams && gameparams.pieceSet){
    switch(gameparams.pieceSet){
      case 1: pieceList=[1,2,3,4,5,6];break;
      case 2: pieceList=[0,0,0,0,0,0,0];break;
    }
  }else{*/
  if(gametype!==0){
    pieceList= [0, 1, 2, 3, 4, 5, 6];
  }else{
   pieceList=  {
     0: [0, 1, 2, 3, 4, 5, 6],
     1: [0, 0, 0, 0, 0, 0, 0],
     2: [1, 2, 3, 4, 5, 6]
    }[replayKeys.sprintParams.queueType]
  }
  //pieceList=[6,4,0,3,2,1,5]
  //return pieceList.sort(function() {return 0.5 - rng.next()});
  //THIS ALGORITHM WAS MADE BY FARTER (from farter.cn/tetr.js)
  /* farter */ // proven random shuffle algorithm
  for (var i=0;i<pieceList.length-1;i++)
  {
    var temp=pieceList[i];
    var rand=~~((pieceList.length-i)*rng2.next())+i;
    pieceList[i]=pieceList[rand];
    pieceList[rand]=temp;
  }
  return pieceList;
 }
/**
 * Draws the piece preview.
 */
Preview.prototype.draw = function() {
  clear(previewCtx);
  for (var i = 0; i < Math.min( replayKeys.PREV,this.grabBag.length); i++) {
   if (i==0){
   if (this.grabBag[i] === 0 || this.grabBag[i] === 3) {
    draw(
     pieces[this.grabBag[i]].tetro,
     pieces[this.grabBag[i]].x - 3,
     pieces[this.grabBag[i]].y + 2 + 0.1* 3,
     previewCtx,
    );
   } else {
    draw(
     pieces[this.grabBag[i]].tetro,
     pieces[this.grabBag[i]].x - 2.5,
     pieces[this.grabBag[i]].y + 2 + i * 3,
     previewCtx,
    );
   }
  }
   else
    if (this.grabBag[i] === 0 || this.grabBag[i] === 3) {
      draw(
        pieces[this.grabBag[i]].tetro,
        pieces[this.grabBag[i]].x - 3,
        pieces[this.grabBag[i]].y + 2 + i * 3,
        previewCtx,
      );
    } else {
      draw(
        pieces[this.grabBag[i]].tetro,
        pieces[this.grabBag[i]].x - 2.5,
        pieces[this.grabBag[i]].y + 2 + i * 3,
        previewCtx,
      );
    }
  }
};
var preview = new Preview();

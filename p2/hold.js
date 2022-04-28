function Hold2(NEW) {
  this.piece;
  this.held=NEW.held
}
Hold2.prototype.draw = function() {
  clear(holdCtx2);
  if(piece2.held){
  if (this.piece === 0 || this.piece === 3) {
    draw(
      pieces[this.piece].tetro,
      pieces[this.piece].x - 3,
      2 + pieces[this.piece].y,
      holdCtx2,
      8
    );
  } else {
    draw(
      pieces[this.piece].tetro,
      pieces[this.piece].x - 2.5,
      2 + pieces[this.piece].y,
      holdCtx2,
      8
    );
  }
}
  else
  if (this.piece === 0 || this.piece === 3) {
   draw(
    pieces[this.piece].tetro,
    pieces[this.piece].x - 3,
    2 + pieces[this.piece].y,
    holdCtx2
    
   );
  } else {
   draw(
    pieces[this.piece].tetro,
    pieces[this.piece].x - 2.5,
    2 + pieces[this.piece].y,
    holdCtx2
    
   );
  }
};
var hold2 = new Hold2(piece2);


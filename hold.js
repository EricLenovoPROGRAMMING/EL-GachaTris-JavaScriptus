function Hold(NEW) {
  this.piece;
  this.held=NEW.held
}
Hold.prototype.draw = function() {
  clear(holdCtx);
  if(piece.held){
  if (this.piece === 0 || this.piece === 3) {
    draw(
      pieces[this.piece].tetro,
      pieces[this.piece].x - 3,
      2 + pieces[this.piece].y,
      holdCtx,
      8
    );
  } else {
    draw(
      pieces[this.piece].tetro,
      pieces[this.piece].x - 2.5,
      2 + pieces[this.piece].y,
      holdCtx,
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
    holdCtx
    
   );
  } else {
   draw(
    pieces[this.piece].tetro,
    pieces[this.piece].x - 2.5,
    2 + pieces[this.piece].y,
    holdCtx
    
   );
  }
};
var hold = new Hold(piece);


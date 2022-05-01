function Stack2() {
 //this.grid;
 this.valid = false
 this.varren = 0;
 this.neutralline = 0
 this.garbagenumber = []
 this.voicegarbage = false
 this.voicestrength = 0;
 this.varpiecedelayadd = 100
 this.varpiecedelay = 0
 this.clearrows = []
 this.b2b = 0;
 this.B2BTemp = 0
 this.linevoice = 0;
 this.isSpin = false;
 this.isMini = false;
 this.spinCheckCount = 0
 this.miniSpinCount = 0
 this.mini2SpinCount = 0
 this.mini3SpinCount = 0
 this.mini3REVSpinCount = 0
 this.enablespin = false;
 this.spinrecog = false;
 this.spinrecogmini = false;
 this.linespinrecog = false;
 this.minispinrecog = false;
 this.once = false
 this.sensespin
 this.perfectboolvoice = false
 this.gtrisinput = false
 this.gtrisenable = false
 this.gtrisenableplus = false
 this.renstrengthinit = 0
 this.countervoice = false
 this.varseqvoice
 this.garbvoice = 0
 this.linesend = 0
 this.renenable = 0;
};




Stack2.prototype.sendGarbage = function(count, x, time) {
 for (let i = 0; i < count; i++) {
  /*for(var is in this.garbagenumber)
   /**/

  this.garbagenumber.push(Math.floor(x * 10))
 }
 console.log(this.garbagenumber)
}




//for TSD ONLY mode


var cleartext2 = '';
var cleartext2ren = '';
var cleartext2pc = '';

//recal score
var disappearduration2

var perfectbool = false




// new Array()?


/**
 * Creates a matrix for the playfield.
 */
Stack2.prototype.new = function(x, y) {
 /* var cells = [];
  for (var it=0;it<x;it++){
 	  cells[it]=[]
 	for (var i = 0; i < y; i++) {
 		cells[it][i]=undefined
 	}
  }*/
 var cells = makeArrayLength(x)
 for (var i = 0; i < x; i++) {
  cells[i] = makeArrayLength(y)
 }
 this.grid = cells
 this.grid2=cells
};

Stack2.prototype.newTemp = function(x, y) {
 var cells = makeArrayLength(x)
 for (var i = 0; i < x; i++) {
  cells[i] = new Array(y);
 }
 /*/
  var cells = [];
  for (var it = 0; it < x; it++) {
   cells[it] = []
   for (var i = 0; i < y; i++) {
    cells[it][i] = undefined
   }
  }*/
 this.StackTemp = cells;
};

/**
 * Adds tetro to the stack, and clears lines if they fill up.
 */
Stack2.prototype.testSpace = function(x, y) {

 if (this.grid[x] !== undefined && this.grid[x] !== 0) {
  if (y < 22) {
   if (this.grid[x][y] !== undefined && this.grid[x][y] !== 0) {
    return true;
   } else {
    return false;
   }
  } else {
   return true;
  }
 } else {
  return true;

 }
}





function showclear2() {

 disappearduration2 = frame + 100
 document.getElementById('divclear2').style.animation = "initial"

 //	document.getElementById('divclear').style.animation = "opencloseclear 1s infinite linear"

}


var minoesdetectwarning2=0


//GARBAGE NEUTRALIZATION
var booldetect2 = false

Stack2.prototype.spinCheck = function() {
 var booldetect = false
 var boolline = 0
 this.isSpin = false;
 this.isMini = false;

 if (piece2.landed == true && piece2.moved == false) {
  if (piece2.index == 5) {
   var checkPoints=0
   this.spinCheckCount = 0;
   var spinCount = this.spinCheckCount
   this.miniSpinCount = 0
   this.mini2SpinCount = 0
   this.mini3SpinCount = 0
   this.mini3REVSpinCount = 0
   for (var i = 0; i < pieces[5].spin.highX[0].length; i++) {
    if ((this.testSpace(piece2.x + pieces[5].spin.highX[piece2.pos][i], piece2.y + pieces[5].spin.highY[piece2.pos][i])) == true && piece2.landed == true) {

     this.miniSpinCount++;
checkPoints++
    }
   }

   for (var i = 0; i < pieces[5].spin.lowX[0].length * pieces[5].spin.highY[0].length; i++) {
    if ((!this.testSpace(piece2.x + pieces[5].spin.lowY[i][piece2.pos], piece2.y - 1 + pieces[5].spin.highY[i][piece2.pos])) && piece2.landed == true) {

     this.mini3SpinCount += 0.25 + (this.mini2SpinCount * 0.5) + (this.miniSpinCount * this.spinCheckCount / 0.1);

    }
   }
   for (var i = 0; i < pieces[5].spin.lowX[0].length * pieces[5].spin.highY[0].length; i++) {
    if ((!this.testSpace(piece2.x + (pieces[5].spin.lowY[i][piece2.pos] * -1), piece2.y - 1 + pieces[5].spin.highY[i][piece2.pos])) && piece2.landed == true) {

     this.mini3REVSpinCount += 0.25 + (this.mini2SpinCount * 0.5) + (this.miniSpinCount * this.spinCheckCount / 0.1);

    }
   }
   for (var i = 0; i < pieces[5].spin.highX[0].length * pieces[5].spin.lowY[0].length; i++) {
    if ((this.testSpace(piece2.x + pieces[5].spin.highX[i][piece2.pos], piece2.y + pieces[5].spin.lowY[i][piece2.pos])) == false && piece2.landed == true) {

     this.mini2SpinCount += 0.5 + (this.miniSpinCount * .2) * (this.spinCheckCount / 0.2);

    }
   }

   for (var i = 0; i < pieces[5].spin.lowX[0].length; i++) {
    if ((this.testSpace(piece2.x + pieces[5].spin.lowX[piece2.pos][i], piece2.y + pieces[5].spin.lowY[piece2.pos][i])) == true && piece2.landed == true) {
     this.spinCheckCount += 0.8
checkPoints++
     ;


    }
   }
   if (piece2.stsd.y == -2) {
    if (piece2.stsd.x == 1) {
     this.spinCheckCount += 0.6
    }
    if (piece2.stsd.x == -1) {
     this.spinCheckCount += 0.6
    }
   }
   if(checkPoints>=3){
   if (this.miniSpinCount >= 1 && this.spinCheckCount >= 0.7 && piece2.spinX == piece2.x && piece2.spinY == piece2.y) {
    if (this.miniSpinCount == 2) {
     this.isSpin = true;
     this.spinrecog = this.isSpin
     this.isMini = false
     this.spinrecogmini = this.isMini


    }
    if (this.miniSpinCount == 1 && this.spinCheckCount >= 1) {
     this.isSpin = false;
     this.spinrecog = this.isSpin
     this.isMini = true
     this.spinrecogmini = this.isMini


    }
   }
   if (this.miniSpinCount == 1 && this.spinCheckCount >= 1 && this.mini2SpinCount <= 1 && piece2.spinX == piece2.x && piece2.spinY == piece2.y) {
    this.isSpin = false;
    this.spinrecog = this.isSpin
    this.isMini = true
    this.spinrecogmini = this.isMini
   }
if (piece2.stsd.y == -2 && this.spinCheckCount >= 0.7 && this.miniSpinCount >= 1) {
 if (piece2.stsd.x == 1) {
  this.isSpin = true
  this.isMini = false
 }
 if (piece2.stsd.x == -1) {
  this.isSpin = true
  this.isMini = false
 }
}
  }
 }
  this.spinrecog = this.isSpin;
  this.spinrecogmini = this.isMini;
  /*if (boolline == 0 && this.sensespin == 1) {
   this.isSpin = false;
   this.spinrecog = false;
   this.isMini = false;
  }*/
 } else {
  this.isSpin = false
  this.isMini = false
  this.spinrecog = this.isSpin
  this.spinrecogmini = this.isMini
 }
}


var boolwarning2;
var whiletrigger2;

Stack2.prototype.addPiece = function(tetro) {

 //try {
 this.countervoice = false;
 whiletrigger2 = true
 var boolline=0
 var booldetect = false
 this.sensespin = 1
 this.enablespin = this.spinrecog;
 this.enablemini = this.spinrecogmini;
 this.once = false;
 var linesdetect = 0

 piece2.landed = true
 this.spinCheck()

 // Add the piece to the Stack2.
 var range = [];
 this.valid = false;

 for (var x = 0; x < tetro.length; x++) {
  for (var y = 0; y < tetro[x].length; y++) {
   if (tetro[x][y]) {
    this.grid[x + piece2.x][y + piece2.y] = tetro[x][y];
    this.grid2[x + piece2.x][y + piece2.y] = tetro[x][y];

    // Get this.column for finesse
    if (!this.once || x + piece2.x < this.column) {
     this.column = x + piece2.x;
     this.once = true;
    }
    // Check which lines get modified
    if (range.indexOf(y + piece2.y) === -1) {
     range.push(y + piece2.y);
     // This checks if any cell is in the play field. If there
     //  isn't any this is called a lock out and the game ends.
     if (y + piece2.y > 1) this.valid = true;
    }
   }
  }
 }
 // Lock out
 if (!this.valid) {
  endgame2('', 9, true, "lose")
  return;
 } else {

 }

 if (
  piece2.moveValid(-1, 0, piece2.tetro) ||
  piece2.moveValid(1, 0, piece2.tetro) ||
  piece2.moveValid(0, -1, piece2.tetro)
 ) {}



 this.spinCheck();



 // Check modified lines for full lines.
 /* range = */
 range.sort(function(a, b) {
  return a - b;
 });
 var row = -22
 for (row = range[0], len = row + range.length; row < len; row++) {

  var count = 0;
  for (var x = 0; x < 10; x++) {
   if (this.grid[x][row]) {

    count++;
    if (count > 9) {


    }

   }
  }
  // Clear the line. This basically just moves down the Stack2.
  // TODO Ponder during the day and see if there is a more elegant solution.
  if (count > 9) { //this.varpiecedelay=frame+this.varpiecedelayadd+40
   if (settings.Bounciness !== 0) {
    movedowntwt += 40 * settings.Bounciness * 0.69
   }
   if (gametype == 116 || feverActivate || gametype == 118) {
    this.clearrows.push(row)

   }
   if (gametype == 113) {




    for (var x = 0; x < 10; x++) {

     this.grid[x][-1] = 8;
    }
    for (var x = 3; x < 7; x++) {
     this.grid[x][-1] = 0
    }
   }

   
   if (gametype == 116 || feverActivate) requirelines--
   linesdetect++;
   if (gametype == 117) {
    marathonParameter.activity.LINESREQ--
   }
   if (gametype == 118) {
    masterParameter.activity.LINESREQ--
   }
   boolline = 1; // NOTE stats
   this.renenable = 3;
   booldetect = true;
   

   //down stack
   if (gametype !== 116 && !feverActivate && gametype !== 118)
   {
    for (var y = row; y >= -1; y--) {
     for (var x = 0; x < 10; x++) {
      {
       this.grid[x][y] = this.grid[x][y - 1];
      }
     }

    }


   } else {

    for (var x = 0; x < 10; x++) {

     this.grid[x][row] = 0

    }


   }
  }
  if (linesdetect == 0) {
   this.renenable -= 22.5;

  }
 }

 var linis = this.grid;
 //lini.innerHTML = this.clearrows.toString()
 if (gametype !== 116 && !feverActivate) {
  linos2 = linis.toString().replace(/0/g, '').replace(/\,/g, '').length
 }

 pieces2Set++; // NOTE Stats
 // TODO Might not need this (same for in init)
 this.column = 0;

 stats2Piece.innerHTML = pieces2Set;

 if (gametype == 0) statsLines.innerHTML = lineLimit - lines;
 if (gametype == 3) statsLines.innerHTML = digLines.length;
 /*if (this.varpiecedelay <= frame)*/
 this.draw();
 //if(feverActivate==false&&setting.Character[settings.Character]=='Agate Loran')gachatrises+=1


 if (this.enablespin == true && linesdetect >= 1) {
  while (this.isSpin == true) {
   this.linespinrecog = true;
   this.enablespin = false;
   //console.log('spinenabled');
   this.spinrecog = false;
   this.isSpin = false;
   this.isMini = false
  }

 }; //GARBAGE TO FIELD
 
 if ( gametype == 119) {
  if (linesdetect == 0 && !feverActivate) {
    if (this.garbagenumber.length > 0) {
     playsfx('garbageup')
     if (gametype == 112||gametype==119){
       while(this.garbagenumber.length>0) {
      

      this.garbvoice++
      if (gametype == 115) {
       this.garbrowcount++
      }

      for (var y = 0; y <= 22; y++) {
       for (var x = 0; x < 10; x++) {
        this.grid[x][y] = this.grid[x][y + 1]
       }
      }




      for (var x = 0; x < 10; x++) {

       this.grid[x][21] = 8;
       if (gametype == 112||gametype==119)
        this.grid[this.garbagenumber[0]][21] = 0

      }
this.garbagenumber.shift()
      
     }
    }
    this.voicegarbage = true
    this.draw()
   }
  }
 }

 if (booldetect == true) {
  while (this.isMini == true || this.enablemini == true) {
   this.minispinrecog = true;
   this.enablespin = false
   this.enablemini = false;
   //console.log('spinenabled');
   this.spinrecog = false;
   this.isMini = false;
   this.spinrecogmini = false
   this.spinCheckCount = 0;
   this.miniSpinCount = 0
  }
  this.spinCheckCount = 0;
  this.miniSpinCount = 0
 }









 if (this.enablespin == true || this.spinrecogmini == true && linesdetect == 0) {
  while (this.enablespin == true) {
   playsfx('spinzero');

   this.spinrecog = false;
   comset(0, true, false, false, false)
   this.enablespin = false;
   stackscore2 += 400 * (gametype !== 118 ? marathonParameter.activity.LEVEL : masterParameter.activity.LEVEL)
   cleartext2 = TransText('tspin0')
   showclear2();
  }
  while (this.enablemini == true && this.minispinrecog == false) {
   playsfx('minizero');

   this.spinrecogmini = false;
   comset(0, false, true, false, false)

   this.enablespin = false;
   this.enablemini = false
   stackscore2 += 100 * (gametype !== 118 ? marathonParameter.activity.LEVEL : masterParameter.activity.LEVEL)
   cleartext2 = TransText('mini0')
   showclear2();
  }
 }


 var spinenable = this.isSpin;
 var spinmini = this.isMini;
 var piececount = this.grid.length
 if (linesdetect == 0) {
  while (this.voicegarbage == true) {
   this.voicegarbage = false
   if (this.garbvoice >= 2 && this.garbvoice <= 3) {
    playvoice2('damage1')

   }
   if (this.garbvoice >= 4) {
    playvoice2('damage2')
    rectAnimations2.fire('damage')
   }
   this.garbvoice = 0
  }
 }



 // *================*/


 if (gametype == 118) {
  piece2.y = -89
  this.varpiecedelay = frame + ARERestrict(30, masterParameter.activity.LEVEL)
  dropscore = 0
 }


 ///lines
 while (booldetect) {

   if (linos2 <= 0 && gametype !== 116 && !feverActivate) {
    playsfx('perfectclear');
    stackscore2 += 3000 * (gametype !== 118 ? marathonParameter.activity.LEVEL : masterParameter.activity.LEVEL)
    perfectbool = true
    allclearshow2()
    this.linesend = 10;
   };


  this.clear_line(boolline, linesdetect, this.linespinrecog, this.minispinrecog, perfectbool, (gametype !== 118 ? marathonParameter.activity.LEVEL : masterParameter.activity.LEVEL))

  comset(linesdetect, this.enablespin || this.linespinrecog, this.enablemini || this.minispinrecog, perfectbool, this.b2b >= 1)


  linesdetect = 0

  boolline = 0
  if ([this.renenable >= 0.5] && boolline == 0) {
  if (this.varren >= 1) {
   if (gametype !== 116 && !feverActivate)
    comboren(this.varren)
   stackscore2 += 50 * this.varren * (gametype !== 118 ? marathonParameter.activity.LEVEL : masterParameter.activity.LEVEL)
   cleartext2ren = `${(this.varren < 10 ? '0' : '')}${this.varren} ${TransText('renInt')}`
   /*	cleartext2ren =this.varren<27 ? `${(function(){
   	 var a='ABCDEFGHIJKLMNOPQRSTUVWXYZ' //25
   	 var ji=[]
   	 for (var i=0;i<27;i++){
   	  ji[i]=a.charAt(i-1)
   	 }
   	 return ji
   	 })()[this.varren]} REN` : this.varren/**/



   // updating cleartext2ren 
   /*
   if(this.varren < 27)
       cleartext2ren = `${toCapitalLetter(this.varren - 1)} REN`;
   else
       cleartext2ren = this.varren; 
   */

  } else cleartext2ren = '';
 };

  this.linespinrecog = false;
  this.minispinrecog = false;
  while (this.minispinrecog == true) {
   this.linespinrecog = false;
   this.minispinrecog = false;
   enablemini = false
   this.isMini = false
  }
  booldetect = false
  perfectbool = false
  if (gametype !== 116 && !feverActivate) {

  if (this.linevoice >= 5) {
   this.voicestrength = 5;
  };
  if (this.linevoice == 4) {
   this.voicestrength = 4;
  };
  if (this.linevoice == 1) {
   this.voicestrength = 0
  };
  if (this.linevoice == 2) {
   this.voicestrength = 1
  };
  if (this.linevoice == 3) {
   this.voicestrength = 2
  };


  if (this.varren <= 0) {
   this.renstrengthinit = 0
  };
  if (this.varren == 1) {
   this.renstrengthinit = 1
  };
  if (this.varren >= 2 && this.varren <= 3) {
   this.voicestrength += 1
  };
  if (this.varren >= 4 && this.varren <= 5) {
   this.voicestrength += 2
  };
  if (this.varren >= 6 && this.varren <= 7) {
   this.voicestrength += 3
  };
  if (this.varren >= 8 && this.varren <= 10) {
   this.voicestrength += 4
  };
  if (this.varren >= 11) {
   this.voicestrength += 5
  };
  if (this.b2b >= 1) {
   this.voicestrength += 1
  };
  //voices
  if (this.voicestrength == 0) {
   if (this.renstrengthinit == 0) {
    playvoice2('initv1');

   };
   if (this.renstrengthinit == 1) {
    playvoice2('initv2');

   };
  };
  if (this.countervoice) {
   playvoice2('counter')
   rectAnimations2.fire('counter')
  } else {
   if (this.voicestrength == 1) {
    playvoice2('spellv1')
    rectAnimations2.fire('spell1')
   };
   if (this.voicestrength == 2) {
    playvoice2('spellv2')
    rectAnimations2.fire('spell2')
   };
   if (this.voicestrength == 3) {
    playvoice2('spellv3')
    rectAnimations2.fire('spell3')
   };
   if (this.voicestrength == 4) {
    rectAnimations2.fire('spell4')
    if (this.gtrisenable && this.linevoice == 4 && this.gtrisinput)
     playvoice2('gachatris')
    else if (this.gtrisenableplus && this.linevoice >= 5 && this.gtrisinput)
     playvoice2('gachatrisplus')
    else
     playvoice2('spellv4')

   };
   if (this.voicestrength >= 5) {
    rectAnimations2.fire('spell5')
    if (this.perfectboolvoice == false) {
     if (this.gtrisenable && this.linevoice == 4 && this.gtrisinput)
      playvoice2('gachatris')
     else if (this.gtrisenableplus && this.linevoice >= 5 && this.gtrisinput)
      playvoice2('gachatrisplus')
     else
      playvoice2('spellv5')


    } else {

     while (this.perfectboolvoice == true) {
      this.perfectboolvoice = false;
      if (this.gtrisenable && this.gtrisinput) {
       function repeatspell5() {
        playvoice2('gachatris')

       }
       for (var reee = 0; reee < 1; reee++) {

        let reee2 = reee * 300
        setTimeout(repeatspell5, reee2)
       }
      }
      else
       for (var reee = 0; reee < 4; reee++) {
        function repeatspell5() {
         playvoice2('spellv5')

        }
        let reee2 = reee * 200
        setTimeout(repeatspell5, reee2)
       }
     }
    }
   }
  }
 }
  break
 }




 if (this.renenable >= 0.5) {
  if (this.varren >= 1) {
   if (gametype !== 116 && !feverActivate)
    comboren(this.varren)
   stackscore2 += 50 * this.varren * (gametype !== 118 ? marathonParameter.activity.LEVEL : masterParameter.activity.LEVEL)
   cleartext2ren = `${(this.varren < 10 ? '0' : '')}${this.varren} ${TransText('renInt')}`
   /*	cleartext2ren =this.varren<27 ? `${(function(){
   	 var a='ABCDEFGHIJKLMNOPQRSTUVWXYZ' //25
   	 var ji=[]
   	 for (var i=0;i<27;i++){
   	  ji[i]=a.charAt(i-1)
   	 }
   	 return ji
   	 })()[this.varren]} REN` : this.varren/**/



   // updating cleartext2ren 
   /*
   if(this.varren < 27)
       cleartext2ren = `${toCapitalLetter(this.varren - 1)} REN`;
   else
       cleartext2ren = this.varren; 
   */

  } else cleartext2ren = '';
 };
 if (this.renenable <= 0.4) {
  if (this.varren >= 2) {
   playsfx('renend');

  }
  cleartext2ren = '';
  this.varren = -1

 };
 //GAMETYPE 113 IS REN C4W MODE
 if (gametype == 113) {
  while (this.varren > MAX_REN) {
   MAX_REN = this.varren
   statsLines.innerHTML = MAX_REN;
  }
 }

 /*
for(var i=0;i<1;i++)
gameState='wait'
setTimeout(function(args){gameState=0},1000)

		///GARBAGE NEUTRALIZATION

/*
flipgridcreate([
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
			 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
				]);
*/

 

 // voices
/*
 if (gametype !== 116 && boolline == 0 && !feverActivate) {

  if (this.linevoice >= 5) {
   this.voicestrength = 5;
  };
  if (this.linevoice == 4) {
   this.voicestrength = 4;
  };
  if (this.linevoice == 1) {
   this.voicestrength = 0
  };
  if (this.linevoice == 2) {
   this.voicestrength = 1
  };
  if (this.linevoice == 3) {
   this.voicestrength = 2
  };


  if (this.varren <= 0) {
   this.renstrengthinit = 0
  };
  if (this.varren == 1) {
   this.renstrengthinit = 1
  };
  if (this.varren >= 2 && this.varren <= 3) {
   this.voicestrength += 1
  };
  if (this.varren >= 4 && this.varren <= 5) {
   this.voicestrength += 2
  };
  if (this.varren >= 6 && this.varren <= 7) {
   this.voicestrength += 3
  };
  if (this.varren >= 8 && this.varren <= 10) {
   this.voicestrength += 4
  };
  if (this.varren >= 11) {
   this.voicestrength += 5
  };
  if (this.b2b >= 1) {
   this.voicestrength += 1
  };
  //voices
  if (this.voicestrength == 0) {
   if (this.renstrengthinit == 0) {
    playvoice2('initv1');

   };
   if (this.renstrengthinit == 1) {
    playvoice2('initv2');

   };
  };
  if (this.countervoice) {
   playvoice2('counter')
   rectAnimations2.fire('counter')
  } else {
   if (this.voicestrength == 1) {
    playvoice2('spellv1')
    rectAnimations2.fire('spell1')
   };
   if (this.voicestrength == 2) {
    playvoice2('spellv2')
    rectAnimations2.fire('spell2')
   };
   if (this.voicestrength == 3) {
    playvoice2('spellv3')
    rectAnimations2.fire('spell3')
   };
   if (this.voicestrength == 4) {
    rectAnimations2.fire('spell4')
    if (this.gtrisenable && this.linevoice == 4 && this.gtrisinput)
     playvoice2('gachatris')
    else if (this.gtrisenableplus && this.linevoice >= 5 && this.gtrisinput)
     playvoice2('gachatrisplus')
    else
     playvoice2('spellv4')

   };
   if (this.voicestrength >= 5) {
    rectAnimations2.fire('spell5')
    if (this.perfectboolvoice == false) {
     if (this.gtrisenable && this.linevoice == 4 && this.gtrisinput)
      playvoice2('gachatris')
     else if (this.gtrisenableplus && this.linevoice >= 5 && this.gtrisinput)
      playvoice2('gachatrisplus')
     else
      playvoice2('spellv5')


    } else {

     while (this.perfectboolvoice == true) {
      this.perfectboolvoice = false;
      if (this.gtrisenable && this.gtrisinput) {
       function repeatspell5() {
        playvoice2('gachatris')

       }
       for (var reee = 0; reee < 1; reee++) {

        let reee2 = reee * 300
        setTimeout(repeatspell5, reee2)
       }
      }
      else
       for (var reee = 0; reee < 4; reee++) {
        function repeatspell5() {
         playvoice2('spellv5')

        }
        let reee2 = reee * 200
        setTimeout(repeatspell5, reee2)
       }
     }
    }
   }
  }
 }/**/
 // lini.innerHTML=this.voicestrength
 this.enablespin = false
 this.linespinrecog = false
 this.isSpin = false
 if (preview2.grabBag.length == 0) endgame2('', 5, true)

 /*	function scorecheck() {
 		statsscore = stackscore2 + dropscore
 		scorestats.innerHTML = statsscore
 	}
 	setTimeout(scorecheck(), 1000)*/
}






Stack2.prototype.clear_line = function(boollinevv, LNSDTCT, LSR, MSR, PC, Multiplier) {
 if (boollinevv !== 0) {
  this.varren++
 }
 if ((!MSR && !LSR) && (LNSDTCT <= 3) && this.b2b >= 3) playsfx('b2b_end')

 if (LNSDTCT >= 4) {
  this.gtrisinput = true

 } else {
  this.gtrisinput = false
 }

 if (boollinevv == 1 && LNSDTCT === 1) {
  //SINGLE
  // 10
  //GAMETYPE 111 IS TSPIN DOUBLE ONLY MODE
  // IF THIS LINE CLEAR IS MADE IN GAMETYPE 111,
  // FAILTSD GOES TRUE AND CAUSES THE GAME TO END
  if (gametype == 111) {
   failTSD = true
  }
  /*LSR MEANS NORMAL LINE SPIN RECOGNITION IF
  REGULAR, 3-CORNER T-SPINS ARE RECOGNIZED, MSR MEANS
  MINI SPIN RECOGNITION IF MINI, 2-CORNER T-SPINS
  ARE RECOGNIZED. IF LSR AND MSR === FALSE
  (if (!(LSR) && !(MSR))), THEN IT'S A REGULAR
  LINE CLEAR*/
  if (LSR === false && MSR === false) {
   //REGULAR SINGLE
   playsfx('oneline');
   this.b2b = -1
   /*this.varren++*/
   ;
   stackscore2 += 100 * Multiplier;

   this.linevoice = LNSDTCT;
   this.linesend = 0;
   cleartext2 = TransText('single')
  }
  else /*if (LSR === true || MSR === true)*/ {
   if (LSR == true && MSR == false) {
    /*IF LSR IS ONLY TRUE, IT IS DECLARED AS
    A REGULAR T-SPIN SINGLE*/
    this.b2b++
    if (this.b2b >= 1) {
     playsfx('b2bonespin');
    }
    else playsfx('onespin');
    cleartext2 = TransText('tspin1')
    /*this.varren++*/
    ;
    this.linevoice = 3

    if (this.b2b < 1)
     stackscore2 += 800 * Multiplier;;
    this.linesend = 3

    //in case a back-to-back clear is achieved,
    //every difficult line clear, TSpins and quads,
    //adds up by half of their score as a bonus
    if (this.b2b >= 1) {
     stackscore2 += 1200 * Multiplier
     //    playsfx('this.b2bs');;
     //   cleartext2 += '<br/>Back-to-back X'.concat(this.b2b.toString(), '')
    };
   }
   else if (LSR == false && MSR == true) {
    /*IF MSR IS TRUE, IT'S DECLARED AS A 
    MINI T-SPIN*/
    this.b2b++
    if (this.b2b >= 1) {
     playsfx('b2bonemini');
    }
    else
     playsfx('onemini');
    cleartext2 = TransText('mini1')
    boollinevv = 0;
    /*this.varren++*/
    ;

    if (this.b2b < 1)
     stackscore2 += 200 * Multiplier

    this.linevoice = LNSDTCT;
    this.linesend = 0
    if (this.b2b >= 1) {
     stackscore2 += 300 * Multiplier
     //   playsfx('this.b2bs');;
     //   cleartext2 += '<br/>Back-to-back X'.concat(this.b2b.toString(), '')
    };

   }
  }
 }
 if (boollinevv == 1 && LNSDTCT === 2) {
  // 20
  if (LSR === false && MSR === false) {
   if (gametype == 111) {
    failTSD = true
   }
   this.b2b = -1
   if (this.b2b < 1)
    stackscore2 += 300 * Multiplier
   playsfx('twoline');


   /*this.varren++*/
   ;

   this.linevoice = LNSDTCT;
   this.linesend = 2

   cleartext2 = TransText('double')
  }
  else {
   if (gametype == 111) {
    failTSD = false
    TSD++
    statsLines.innerHTML = TSD
   }
   if(LSR===true&&MSR===false){
   this.b2b++
   if (this.b2b < 1)
    stackscore2 += 1200 * Multiplier
   if (this.b2b >= 1) {
    playsfx('b2btwospin');
   }
   else
    playsfx('twospin');



   /*this.varren++*/
   ;



   this.linevoice = 4;
   this.linesend = 4

   cleartext2 = TransText('tspin2')
   if (this.b2b >= 1) {
    stackscore2 += 1800 * Multiplier
    //  playsfx('this.b2bs');;
    // cleartext2 += '<br/>Back-to-back X'.concat(this.b2b.toString(), '')
   };
}
if (LSR === false && MSR === true) {
 this.b2b++
 if (this.b2b < 1)
  stackscore2 += 400 * Multiplier
 if (this.b2b >= 1) {
  playsfx('b2btwomini');
 }
 else
  playsfx('twomini');



 /*this.varren++*/
 ;



 this.linevoice = 2;
 this.linesend = 2

 cleartext2 = TransText('mini2')
 if (this.b2b >= 1) {
  stackscore2 += 600 * Multiplier
  //  playsfx('this.b2bs');;
  // cleartext2 += '<br/>Back-to-back X'.concat(this.b2b.toString(), '')
 };
  }
 }
 };
 if (boollinevv == 1 && LNSDTCT === 3) {
  // 30
  if (gametype == 111) {
   failTSD = true
  }
  if (LSR === false && MSR === false) {
   playsfx('threeline');
   this.b2b = -1
   if (this.b2b < 1)
    /*this.varren++*/
   ;
   stackscore2 += 500 * Multiplier

   this.linevoice = LNSDTCT;
   this.linesend = 3

   cleartext2 = TransText('triple')
  } else {
   if (this.b2b >= 1) {
    playsfx('b2bthreespin');
   }
   else
    playsfx('threespin');
   this.b2b++
   if (this.b2b < 1)
    stackscore2 += 1600 * Multiplier

   /*this.varren++*/
   ;

   ;
   this.linevoice = 6;
   this.linesend = 6;;

   cleartext2 = TransText('tspin3')
   if (this.b2b >= 1) {
    stackscore2 += 2400 * Multiplier


    //   playsfx('this.b2bs');;
    //  cleartext2 += '<br/>Back-to-back X'.concat(this.b2b.toString(), '')
   };

  }
 };
 if (boollinevv == 1 && LNSDTCT == 4) {
  ;
  // 40
  if (gametype == 111) {

   failTSD = true
  }
  this.b2b++
  if (this.b2b < 1)
   stackscore2 += 800 * Multiplier
  if (this.b2b >= 1) {
   playsfx('b2bfourline');
  }
  else
   playsfx('fourline');



  /*this.varren++*/
  ;



  this.linevoice = LNSDTCT;
  this.linesend = 4

  if (settings.Character !== 0) {
   cleartext2 = 'Gachatris'
  } else {
   cleartext2 = TransText('quad')
  }
  if (this.b2b >= 1) {

   stackscore2 += 1200 * Multiplier;
   //  playsfx('this.b2bs');


   //  cleartext2 += '<br/>Back-to-back X'.concat(this.b2b.toString(), '')
  }
 };
 if (boollinevv == 1 && LNSDTCT >= 5) {
  // 10 * LNSDTCT
  if (gametype == 111) {

   failTSD = true
  }
  this.b2b++
  if (this.b2b < 1)
   stackscore2 += 1000
  playsfx('fourline');



  /*this.varren++*/
  ;



  this.linevoice = LNSDTCT;
  this.linesend = 4

  if (settings.Character !== 0) {
   cleartext2 = 'Gachatris Plus'
  } else {
   cleartext2 = TransText('quadplus')
  }
  if (this.b2b >= 1) {

   stackscore2 += 500;
   //  playsfx('this.b2bs');


   //  cleartext2 += '<br/>Back-to-back X'.concat(this.b2b.toString(), '')
  }
 };
 if (this.b2b > 0) {
  cleartext2pc = (this.b2b !== 1 ?
   `${TransText('b2b')} X${this.b2b}` :
   TransText('b2b'))


  playsfx((function(b) {
   if (b < 3) return 'b2bs';
   if (b >= 3 && b < 8) return 'b2bs2';
   if (b >= 8 && b < 24) return 'b2bs3';
   if (b >= 24 && b < 63) return 'b2bs4';
   if (b >= 63) return 'b2bs5'
  })(this.b2b))
  //tetr.io style b2b sounding
  if (this.b2b == 3) { playsfx('b2b1') }
  if (this.b2b == 8) { playsfx('b2b2') }
  if (this.b2b == 24) { playsfx('b2b3') }
  if (this.b2b == 63) { playsfx('b2b4') }

  if (this.b2b == 3 || this.b2b == 8 || this.b2b == 24 || this.b2b == 63) {
   $d('clearstats2pc').style.opacity = 1
   $d('clearstats2pc').style.animation = 'B2Bblink 0.3s infinite linear'
   setTimeout(function() {
    $d('clearstats2pc').style.opacity = 1;
    $d('clearstats2pc').style.animation = 'clear'
   }, 700)
  }



 } else {
  cleartext2pc = ''
 }
 showclear2()


 if (gametype == 111) {

  while (failTSD == true) {

   endgame2('', 9, true, 'lose')

   failTSD = false;
  }
 }
 if (gametype == 115)
  if (frame in replayKeys.garbagesend)
   for (var i = 0; i < replayKeys.garbagesend[frame]; i++) {

    if ((this.garbagenumber <= 0)) {
     if (garbrowcount > 0) {
      for (var y = 22; y >= -1; y--) {
       if (garbrowcount == 0) break

       for (var x = 0; x < 10; x++) {
        if (!feverActivate)
        {
         this.grid[x][22] = 0

         this.grid[x][y] = this.grid[x][y - 1];
        }
        else {
         StackTemp[x][22] = 0

         StackTemp[x][y] = StackTemp[x][y - 1];
        }
       }
      }
      this.draw()
      garbrowcount--
     } else { this.garbagenumber-- } {}

    } else { this.garbagenumber-- }
   }




 if (gametype == 112 || gametype==119|| (gametype == 115 && watchingReplay == false)) {
  if (PC) {
   this.neutralline = 10
  } else {

   if (this.linesend == 6) {
    this.neutralline = 6;
   };
   if (this.linesend == 4) {
    this.neutralline = 4;
   };
   if (this.linesend == 3) {
    this.neutralline = 2
   }
   if (this.linesend <= 1) {
    this.neutralline = 0
   };
   if (this.linesend == 2) {
    this.neutralline = 1
   };
   if (this.linesend == 3) {
    this.neutralline = 2
   }
  }
  if (feverActivate && frame > feverTime) {
   this.neutralline += 140
  }




  if (this.varren >= 2 && this.varren <= 3) {
   this.neutralline += 1
  };
  if (this.varren >= 4 && this.varren <= 5) {
   this.neutralline += 2
  };
  if (this.varren >= 6 && this.varren <= 7) {
   this.neutralline += 3
  };
  if (this.varren >= 8 && this.varren <= 10) {
   this.neutralline += 4
  };
  if (this.varren >= 11) {
   this.neutralline += 5
  };
  if (this.b2b >= 1) {
   this.neutralline += 1
  };

  if (this.neutralline > this.garbagenumber.length && !PC && LNSDTCT >= 3 && this.garbagenumber.length > 0) {
   this.countervoice = true
  }

  if (watchingReplay == false && gametype == 115)
   replayKeys.garbagesend[frame] = 0
  var OOO = 0
while (this.neutralline > 0) {
 if (this.garbagenumber.length > 0){
  this.garbagenumber.splice(0,1)
 }
 else if (gametype == 119) OOO++

 if (!watchingReplay && gametype == 115) { replayKeys.garbagesend[frame]++ }

 /*     if (gametype==115){
      if (this.garbagenumber<0) {
              
              } 
              
      }*/
 this.neutralline--

}
if (OOO > 0)
 stack.sendGarbage(OOO, rng.next(), 30)





  /*if (garbrowcount>0){
                     for (var y = 22; y >= -1; y--) {
                       if (garbrowcount==0) break
                         for (var x = 0; x < 10; x++) {
                             {
                             }
                             this.grid[x][y] = this.grid[x][y - 1];
                         }
                     }
                     this.draw()
                     garbrowcount--
                 } 
               else */






 }



 MSR = false
 this.isMini = false;
 this.isSpin = false
 if (PC) {
  this.perfectboolvoice = true;
  this.linevoice = 10;
 }
}



/**
 * Draws the Stack2.
 */
Stack2.prototype.draw = function() {
 if (gamediff < 501 || gamediff == undefined) {
  clear(stack2Ctx);
  draw(this.grid, 0, 0, stack2Ctx);

  // Darken Stack
  // TODO wrap this with an option.
  stack2Ctx.globalCompositeOperation = 'source-atop';
  stack2Ctx.fillStyle = 'rgba(0,0,0,0.0)';
  stack2Ctx.fillRect(0, 0, stack2Canvas.width, stack2Canvas.height);
  stack2Ctx.globalCompositeOperation = 'source-over';

  if (settings.Outline) {
   var b = ~~(cellSize / 8);
   var c = cellSize;
   var lineCanvas = document.createElement('canvas');
   lineCanvas.width = stack2Canvas.width;
   
   lineCanvas.height = stack2Canvas.height;
   var lineCtx = lineCanvas.getContext('2d');
   lineCtx.fillStyle = 'rgba(255,255,255,0.5)';
   lineCtx.beginPath();
   for (var x = 0, len = this.grid.length; x < len; x++) {
    for (var y = 0, wid = this.grid[x].length; y < wid; y++) {
     if (this.grid[x][y]) {
         if (x < 9 && !this.grid[x + 1][y]) {
       lineCtx.fillRect(x * c + c - b, y * c - 2 * c, b, c);
      }
      if (x > 0 && !this.grid[x - 1][y]) {
       lineCtx.fillRect(x * c, y * c - 2 * c, b, c);
      }
      if (y < 21 && !this.grid[x][y + 1]) {
       lineCtx.fillRect(x * c, y * c - 2 * c + c - b, c, b);
      }
      if (!this.grid[x][y - 1]) {
       lineCtx.fillRect(x * c, y * c - 2 * c, c, b);
      }
      // Diags
      if (x < 9 && y < 21) {
       if (!this.grid[x + 1][y] && !this.grid[x][y + 1]) {
        lineCtx.clearRect(x * c + c - b, y * c - 2 * c + c - b, b, b);
        lineCtx.fillRect(x * c + c - b, y * c - 2 * c + c - b, b, b);
       } else if (
        !this.grid[x + 1][y + 1] &&
        this.grid[x + 1][y] &&
        this.grid[x][y + 1]
       ) {
        lineCtx.moveTo(x * c + c, y * c - 2 * c + c - b);
        lineCtx.lineTo(x * c + c, y * c - 2 * c + c);
        lineCtx.lineTo(x * c + c - b, y * c - 2 * c + c);
        lineCtx.arc(
         x * c + c,
         y * c - 2 * c + c,
         b,
         (3 * Math.PI) / 2,
         Math.PI,
         true,
        );
       }
      }
      if (x < 9) {
       if (!this.grid[x + 1][y] && !this.grid[x][y - 1]) {
        lineCtx.clearRect(x * c + c - b, y * c - 2 * c, b, b);
        lineCtx.fillRect(x * c + c - b, y * c - 2 * c, b, b);
       } else if (
        !this.grid[x + 1][y - 1] &&
        this.grid[x + 1][y] &&
        this.grid[x][y - 1]
       ) {
        lineCtx.moveTo(x * c + c - b, y * c - 2 * c);
        lineCtx.lineTo(x * c + c, y * c - 2 * c);
        lineCtx.lineTo(x * c + c, y * c - 2 * c + b);
        lineCtx.arc(
         x * c + c,
         y * c - 2 * c,
         b,
         Math.PI / 2,
         Math.PI,
         false,
        );
       }
      }
      if (x > 0 && y < 21) {
       if (!this.grid[x - 1][y] && !this.grid[x][y + 1]) {
        lineCtx.clearRect(x * c, y * c - 2 * c + c - b, b, b);
        lineCtx.fillRect(x * c, y * c - 2 * c + c - b, b, b);
       } else if (
        !this.grid[x - 1][y + 1] &&
        this.grid[x - 1][y] &&
        this.grid[x][y + 1]
       ) {
        lineCtx.moveTo(x * c, y * c - 2 * c + c - b);
        lineCtx.lineTo(x * c, y * c - 2 * c + c);
        lineCtx.lineTo(x * c + b, y * c - 2 * c + c);
        lineCtx.arc(
         x * c,
         y * c - 2 * c + c,
         b,
         Math.PI * 2,
         (3 * Math.PI) / 2,
         true,
        );
       }
      }
      if (x > 0) {
       if (!this.grid[x - 1][y] && !this.grid[x][y - 1]) {
        lineCtx.clearRect(x * c, y * c - 2 * c, b, b);
        lineCtx.fillRect(x * c, y * c - 2 * c, b, b);
       } else if (
        !this.grid[x - 1][y - 1] &&
        this.grid[x - 1][y] &&
        this.grid[x][y - 1]
       ) {
        lineCtx.moveTo(x * c + b, y * c - 2 * c);
        lineCtx.lineTo(x * c, y * c - 2 * c);
        lineCtx.lineTo(x * c, y * c - 2 * c + b);
        lineCtx.arc(
         x * c,
         y * c - 2 * c,
         b,
         Math.PI / 2,
         Math.PI * 2,
         true,
        );
       }
      }
     }
    }
   }
   lineCtx.fill();
   stack2Ctx.drawImage(lineCanvas, 0, 0);
  }
 }
};
var stack2 = new Stack2()

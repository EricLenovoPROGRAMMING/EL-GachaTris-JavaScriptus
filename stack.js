function Stack() {
 //this.grid;
};


var neutralline = 0
var garbagenumber = 0
var garbvoice = 0
var voicegarbage = false
var landed;
var linesend = 0
var minoesdetect;
var minoes;
var MAX_REN;
var sensespin = 0;
var linesdetect = 0;
var boolline = 0;
var booldetect = false
var b2b = 0;
var varren = 0;
var renenable = 0;
var minispinrecog = false;
var linevoice = 0;
var voicestrength = 0;
var renvoiceinit = 0;
var enablespin = false;
var linespinrecog = false;

var spinrecog = false;

var TSD;

var failTSD
//for TSD ONLY mode
var nontsdcondition = gametype == 111 && ![linespinrecog == true && linesdetect == 2]
var tsdcondition = linespinrecog == true && linesdetect == 2

var alertsoundactive = false;

var cleartext = '';
var cleartextren = '';
var cleartextpc = '';
var cleardetail;
var cleardetailren
var cleardetailpc
//recal score
var scorestats;
var stackscore = 0;
var frame;
var disappearduration

var perfectbool = false




// new Array()?
function makeArrayLength(int) {
 var i = []
 i.length = int
 return i
}

/**
 * Creates a matrix for the playfield.
 */
Stack.prototype.new = function(x, y) {
 /* var cells = [];
  for (var it=0;it<x;it++){
 	  cells[it]=[]
 	for (var i = 0; i < y; i++) {
 		cells[it][i]=undefined
 	}
  }*/
 var cells = makeArrayLength(x)
 for (var i = 0; i < x; i++) {
  cells[i] = new Array(y)
 }
 this.grid = cells
};

Stack.prototype.newTemp = function(x, y) {
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
 StackTemp = cells;
};

/**
 * Adds tetro to the stack, and clears lines if they fill up.
 */
function testSpace(x, y) {

 if (stack.grid[x] !== undefined && stack.grid[x] !== 0) {
  if (y < 22) {
   if (stack.grid[x][y] !== undefined && stack.grid[x][y] !== 0) {
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




var isSpin = false;
var isMini = false;
var spinrecogmini = false;
var movedowntwt = 0

function showclear() {

 disappearduration = frame + 100
 document.getElementById('divclear').style.animation = "initial"

 //	document.getElementById('divclear').style.animation = "opencloseclear 1s infinite linear"

}

var lineARE

var spinCheckCount = 0
var miniSpinCount = 0
var mini2SpinCount = 0
var mini3SpinCount = 0
var mini3REVSpinCount = 0
//GARBAGE NEUTRALIZATION
var booldetect = false

function spinCheck() {
 isSpin = false;
 isMini = false;
 if (landed == true && moved == false) {
  if (piece.index == 5) {

   spinCheckCount = 0;
   var spinCount = spinCheckCount
   miniSpinCount = 0
   mini2SpinCount = 0
   mini3SpinCount = 0
   mini3REVSpinCount = 0
   for (var i = 0; i < pieces[5].spin.highX[0].length; i++) {
    if ((testSpace(piece.x + pieces[5].spin.highX[piece.pos][i], piece.y + pieces[5].spin.highY[piece.pos][i])) == true && landed == true) {

     miniSpinCount++;

    }
   }

   for (var i = 0; i < pieces[5].spin.lowX[0].length * pieces[5].spin.highY[0].length; i++) {
    if ((!testSpace(piece.x + pieces[5].spin.lowY[i][piece.pos], piece.y - 1 + pieces[5].spin.highY[i][piece.pos])) && landed == true) {

     mini3SpinCount += 0.25 + (mini2SpinCount * 0.5) + (miniSpinCount * spinCheckCount / 0.1);

    }
   }
   for (var i = 0; i < pieces[5].spin.lowX[0].length * pieces[5].spin.highY[0].length; i++) {
    if ((!testSpace(piece.x + (pieces[5].spin.lowY[i][piece.pos] * -1), piece.y - 1 + pieces[5].spin.highY[i][piece.pos])) && landed == true) {

     mini3REVSpinCount += 0.25 + (mini2SpinCount * 0.5) + (miniSpinCount * spinCheckCount / 0.1);

    }
   }
   for (var i = 0; i < pieces[5].spin.highX[0].length * pieces[5].spin.lowY[0].length; i++) {
    if ((testSpace(piece.x + pieces[5].spin.highX[i][piece.pos], piece.y + pieces[5].spin.lowY[i][piece.pos])) == false && landed == true) {

     mini2SpinCount += 0.5 + (miniSpinCount * .2) * (spinCheckCount / 0.2);

    }
   }

   for (var i = 0; i < pieces[5].spin.lowX[0].length; i++) {
    if ((testSpace(piece.x + pieces[5].spin.lowX[piece.pos][i], piece.y + pieces[5].spin.lowY[piece.pos][i])) == true && landed == true) {
     spinCheckCount += 0.8

     ;


    }
   }
   if (miniSpinCount >= 1 && spinCheckCount >= 0.7 && spinX == piece.x && spinY == piece.y) {
    if (miniSpinCount == 2) {
     isSpin = true;
     spinrecog = isSpin
     isMini = false
     spinrecogmini = isMini


    }
    if (miniSpinCount == 1 && spinCheckCount >= 1) {
     isSpin = false;
     spinrecog = isSpin
     isMini = true
     spinrecogmini = isMini


    }
   }
   if (miniSpinCount == 1 && spinCheckCount >= 1 && mini2SpinCount <= 1 && spinX == piece.x && spinY == piece.y) {
    isSpin = false;
    spinrecog = isSpin
    isMini = true
    spinrecogmini = isMini
   }

  }
  spinrecog = isSpin;
  spinrecogmini = isMini;
  if (boolline == 0 && sensespin == 1) {
   isSpin = false;
   spinrecog = false;
   isMini = false;
  }
 } else {
  isSpin = false
  isMini = false
  spinrecog = isSpin
  spinrecogmini = isMini
 }
}

var varpiecedelayadd = 100
var boolwarning;
var whiletrigger;
var minoesdetectwarning = 0
var clearrows = []
lineARE = 0
Stack.prototype.addPiece = function(tetro) {

 try {
  whiletrigger = true

  booldetect = false
  var sensespin = 1
  var enablespin = spinrecog;
  var enablemini = spinrecogmini;
  var once = false;


  landed = true
  spinCheck()

  // Add the piece to the stack.
  var range = [];
  var valid = false;

  for (var x = 0; x < tetro.length; x++) {
   for (var y = 0; y < tetro[x].length; y++) {
    if (tetro[x][y]) {
     this.grid[x + piece.x][y + piece.y] = tetro[x][y];
     // Get column for finesse
     if (!once || x + piece.x < column) {
      column = x + piece.x;
      once = true;
     }
     // Check which lines get modified
     if (range.indexOf(y + piece.y) === -1) {
      range.push(y + piece.y);
      // This checks if any cell is in the play field. If there
      //  isn't any this is called a lock out and the game ends.
      if (y + piece.y > 1) valid = true;
     }
    }
   }
  }
  // Lock out
  if (!valid) {
   endgame(TransText('lockout'), 9, true)
   return;
  }

  if (
   piece.moveValid(-1, 0, piece.tetro) ||
   piece.moveValid(1, 0, piece.tetro) ||
   piece.moveValid(0, -1, piece.tetro)
  ) {}



  spinCheck();



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
      if (gametype == 116 || feverActivate||gametype==118) {
       clearrows.push(row)

      }

     }

    }
   }
   // Clear the line. This basically just moves down the stack.
   // TODO Ponder during the day and see if there is a more elegant solution.
   if (count > 9) { //varpiecedelay=frame+varpiecedelayadd+40
    if (settings.Bounciness !== 0) {
     movedowntwt += 40 * settings.Bounciness * 0.69
    }
    if (gametype == 113) {




     for (var x = 0; x < 10; x++) {

      this.grid[x][-1] = 8;
     }
     for (var x = 3; x < 7; x++) {
      this.grid[x][-1] = 0
     }
    }

    lines += 1;
    if (gametype == 116 || feverActivate) requirelines--
    linesdetect++;
    if (gametype == 117) {
     marathonParameter.activity.LINESREQ--
    }
    if (gametype == 118) {
     masterParameter.activity.LINESREQ--
    }
    var boolline = 1; // NOTE stats
    renenable = 3;
    booldetect = true;
    if (gametype === 3) {
     if (digLines.indexOf(row) !== -1) {
      digLines.splice(digLines.indexOf(row), 1);
     }
    }


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
    renenable -= 22.5;

   }
  }

  var linis = this.grid;
  //lini.innerHTML = clearrows.toString()
  if (gametype !== 116 && !feverActivate) {
   linos = linis.toString().replace(/0/g, '').replace(/\,/g, '').length
  }

  statsFinesse += piece.finesse - finesse[piece.index][piece.pos][column];
  piecesSet++; // NOTE Stats
  // TODO Might not need this (same for in init)
  column = 0;

  statsPiece.innerHTML = piecesSet;

  if (gametype == 0) statsLines.innerHTML = lineLimit - lines;
  if (gametype == 3) statsLines.innerHTML = digLines.length;
  /*if (varpiecedelay <= frame)*/
  this.draw();
  //if(feverActivate==false&&setting.Character[settings.Character]=='Agate Loran')gachatrises+=1


  if (enablespin == true && linesdetect >= 1) {
   while (isSpin == true) {
    linespinrecog = true;
    enablespin = false;
    //console.log('spinenabled');
    spinrecog = false;
    isSpin = false;
    isMini = false
   }

  }; //GARBAGE TO FIELD
  if (gametype == 112 || gametype == 115) {
   if (linesdetect == 0 && !feverActivate) {
    if (garbagenumber > 0) {
     playsfx('garbageup')
     if (gametype == 112)
      var randomHAR = Math.round(~~(rng.next() * 10));
     while (garbagenumber > 0) {
      garbagenumber--

      garbvoice++
      if (gametype == 115) {
       garbrowcount++
      }

      for (var y = 0; y <= 22; y++) {
       for (var x = 0; x < 10; x++) {
        this.grid[x][y] = this.grid[x][y + 1]
       }
      }




      for (var x = 0; x < 10; x++) {

       this.grid[x][21] = 8;
       if (gametype == 112)
        this.grid[randomHAR][21] = 0

      }

      if (gametype == 115 && garbvoice == 8) break

     }
    }
    voicegarbage = true
    this.draw()
   }
  }

  if (booldetect == true) {
   while (isMini == true || enablemini == true) {
    minispinrecog = true;
    enablespin = false
    enablemini = false;
    //console.log('spinenabled');
    spinrecog = false;
    isMini = false;
    spinrecogmini = false
    spinCheckCount = 0;
    miniSpinCount = 0
   }
   spinCheckCount = 0;
   miniSpinCount = 0
  }









  if (enablespin == true || spinrecogmini == true && linesdetect == 0) {
   while (enablespin == true) {
    playsfx('spinzero');

    spinrecog = false;
    comset(0, true, false, false, false)
    enablespin = false;
    stackscore += 400 * (gametype !== 118 ? marathonParameter.activity.LEVEL : masterParameter.activity.LEVEL)
    cleartext = TransText('tspin0')
    showclear();
   }
   while (enablemini == true && minispinrecog == false) {
    playsfx('minizero');

    spinrecogmini = false;
    comset(0, false, true, false, false)

    enablespin = false;
    enablemini = false
    stackscore += 100 * (gametype !== 118 ? marathonParameter.activity.LEVEL : masterParameter.activity.LEVEL)
    cleartext = TransText('mini0')
    showclear();
   }
  }


  var spinenable = isSpin;
  var spinmini = isMini;
  var piececount = stack.grid.length
  if (linesdetect == 0) {
   while (voicegarbage == true) {
    voicegarbage = false
    if (garbvoice >= 2 && garbvoice <= 3) {
     playvoice('damage1')

    }
    if (garbvoice >= 4) {
     playvoice('damage2')

    }
    garbvoice = 0
   }
  }

  if (gametype == 116) {
   if (frame < replayKeys.DAParams['timeframe'] + 101) {
    if (booldetect == false) {
     while (varpiecedelay <= frame) {
      varseqvoice = 0
      varpiecedelay = frame + 100
      piece.y = -505
      failsDA++
      if (failsDA >= replayKeys.DAParams['maxmiss']) {
       failToClear = false
       endgame(TransText('DAfailed'), 9, true)
       varpiecedelay = -1
       playvoice('fail')
       IRScount = 0
       break
      } else {
       failToClear = true
      }
      for (var y = 0; y < 22; y++)
       for (var x = 0; x < 10; x++) {
        if (stack.grid[x][y]) stack.grid[x][y] = 8;
       }
      stack.draw()
     }

    } else {
     if (booldetect == false) {
      failsDA++

      playvoice('fail')
     }
    }
   } else {
    endgame(TransText('timeup'), 9)
    failToClear = false
    playsfx('timeup')
    ClearSuccess = false
    varpiecedelay = -9
    timewarning = false
    if (requirelines <= 0) {
     successesDA++
     setTimeout(function() {
      playvoice('success')
     }, 1000)
    }
   }
  }

  // *================*/

  if (feverActivate) {
   if (frame < feverTime) {
    if (booldetect == false) {
     while (varpiecedelay <= frame) {
      varseqvoice = 0
      varpiecedelay = frame + 100
      failToClear = true
      for (var y = 0; y < 22; y++)
       for (var x = 0; x < 10; x++) {
        if (stack.grid[x][y]) stack.grid[x][y] = 8;
       }
      stack.draw()
     }

    }
    /*else {if(booldetect==false) {
    	

    		playvoice('fail')
    		varpiecedelay=frame+50
    		
    }
    	}*/
   } else {

    failToClear = false
    playsfx('timeup')
    ClearSuccess = false
    varpiecedelay = frame + 5
    feverAble = true
    //if(setting.Character[settings.Character]=='EricLenovo')for(let i=0;i=7200,gameState==0;i++)gameLoop();

    if (requirelines <= 0) {
     setTimeout(function() {
      playvoice('success')
     }, 1000)
    }
   }
  }

  if (gametype == 118) {
   piece.y = -89
   varpiecedelay=frame+ARERestrict(30,masterParameter.activity.LEVEL)
  dropscore=0
  }


  ///lines
  while (booldetect) {




   if (linos <= 0 && gametype !== 116 && !feverActivate) {
    playsfx('perfectclear');
    stackscore += 3000 * (gametype !== 118 ? marathonParameter.activity.LEVEL : masterParameter.activity.LEVEL)
    perfectbool = true
    allclearshow()
    linesend = 10;
   };
   clear_line(boolline, linesdetect, linespinrecog, minispinrecog, perfectbool, (gametype !== 118 ? marathonParameter.activity.LEVEL : masterParameter.activity.LEVEL))

   comset(linesdetect, enablespin || linespinrecog, enablemini || minispinrecog, perfectbool, b2b >= 1)

   if (!feverActivate && gametype !== 116 && gachatrises >= gachatrismax) {
    varpiecedelay = frame + 100
    feverAble = true
   }
   //frenzy

   if (requirelines > 0 && gametype == 116 || requirelines > 0 && feverActivate) {
    varpiecedelay = frame + 30
    piece.y = -28



    for (var g = 0, y = 0; g < 10; g++) {
     let j = g * 40

     setTimeout(function() {
      stackCtx.fillStyle = `rgba(255,255,255,${(((10-y)/10))})`

      for (var l = 0; l < 10; l++) {
       for (i of clearrows) {
        stackCtx.clearRect((l) * cellSize, (i) * cellSize - (2 * cellSize), cellSize, cellSize)

        stackCtx.fillRect((l) * cellSize, (i) * cellSize - (2 * cellSize), cellSize, cellSize)
       }

      }
      y++
     }, j)
    }
   }
   if (gametype == 116) {
    for (var Y = 0; Y < pieces[piece.index].tetro.length; Y++)
     for (var color = 0; color < pieces[piece.index].tetro[Y].length; color++)
      if (pieces[piece.index].tetro[color][Y] !== 0) $("#fevercolor").css('background-color', colorDA[pieces[piece.index].tetro[color][Y]][0])
    b2b = -1
    varseqvoice++
    if (requirelines <= 0) {
     if (frame < replayKeys.DAParams['timeframe'] + 101)
      while (varpiecedelay < frame) {
       varpiecedelay = frame + 100
       ClearSuccess = true
       for (var g = 0, y = 0; g < 10; g++) {
        let j = g * 40

        setTimeout(function() {
         stackCtx.fillStyle = `rgba(0,255,0,${(((10-y)/10))})`

         for (var l = 0; l < 10; l++) {
          for (i of clearrows) {
           stackCtx.clearRect((l) * cellSize, (i) * cellSize - (2 * cellSize), cellSize, cellSize)

           stackCtx.fillRect((l) * cellSize, (i) * cellSize - (2 * cellSize), cellSize, cellSize)
          }

         }
         y++
        }, j)
       }

      }

    }
   }
   if (feverActivate) {
    for (var Y = 0; Y < pieces[piece.index].tetro.length; Y++)
     for (var color = 0; color < pieces[piece.index].tetro[Y].length; color++)
      if (pieces[piece.index].tetro[color][Y] !== 0) $("#fevercolor").css('background-color', colorDA[pieces[piece.index].tetro[color][Y]][0])
    b2b = -1
    // $("bgFEVER").css("animation","feverrotate 1s infinite linear")
    varseqvoice++
    if (requirelines <= 0) {
     if (frame < feverTime) {
      while (varpiecedelay < frame) {
       varpiecedelay = frame + 100
       ClearSuccess = true
      }
     } else {}

    }
   }
   if (gametype === 116 || feverActivate) {
    if (requirelines > 0) {
     if (varseqvoice == 1)
      playvoice('initv1')
     if (varseqvoice == 2)
      playvoice('initv2')
     if (varseqvoice == 3)
      playvoice('initv3')
     if (varseqvoice == 4)
      playvoice('initv4')
     if (varseqvoice >= 5)
      playvoice('initv5')
    } else {
     if (frenzydifficulty >= 0 && frenzydifficulty < 4)
      playvoice('spellv1')
     if (frenzydifficulty >= 4 && frenzydifficulty < 7)
      playvoice('spellv2')
     if (frenzydifficulty >= 7 && frenzydifficulty < 10)
      for (var reee = 0; reee < 2; reee++) {
       function repeatspell5() {
        playvoice('spellv3')

       }
       let reee2 = reee * 200
       setTimeout(repeatspell5, reee2)
      }
     if (frenzydifficulty >= 10 && frenzydifficulty < 13)
      for (var reee = 0; reee < 3; reee++) {
       function repeatspell5() {
        playvoice('spellv4')

       }
       let reee2 = reee * 100
       setTimeout(repeatspell5, reee2)
      }
     if (frenzydifficulty >= 13)
      for (var reee = 0; reee < 4; reee++) {
       function repeatspell5() {
        playvoice('spellv5')
       }
       let reee2 = reee * 100
       setTimeout(repeatspell5, reee2)
      }
    }
   }

   linesdetect = 0

   boolline = 0
   linespinrecog = false;
   minispinrecog = false;
   while (minispinrecog == true) {
    linespinrecog = false;
    minispinrecog = false;
    enablemini = false
    isMini = false
   }
   booldetect = false
   perfectbool = false
   break
  }



  if ([renenable >= 0.5] && boolline == 0) {
   if (varren >= 1) {
    if (gametype !== 116 && !feverActivate)
     comboren(varren)
    stackscore += 50 * varren * (gametype !== 118 ? marathonParameter.activity.LEVEL : masterParameter.activity.LEVEL)
    cleartextren = `${(varren < 10 ? '0' : '')}${varren} ${TransText('renInt')}`
    /*	cleartextren =varren<27 ? `${(function(){
    	 var a='ABCDEFGHIJKLMNOPQRSTUVWXYZ' //25
    	 var ji=[]
    	 for (var i=0;i<27;i++){
    	  ji[i]=a.charAt(i-1)
    	 }
    	 return ji
    	 })()[varren]} REN` : varren/**/



    // updating cleartextren 
    /*
    if(varren < 27)
        cleartextren = `${toCapitalLetter(varren - 1)} REN`;
    else
        cleartextren = varren; 
    */

   } else cleartextren = '';
  };
  if (renenable <= 0.4) {
   if (varren >= 2) {
    playsfx('renend');

   }
   cleartextren = '';
   varren = -1

  };
  //GAMETYPE 113 IS REN C4W MODE
  if (gametype == 113) {
   while (varren > MAX_REN) {
    MAX_REN = varren
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

  if (gametype == 117) {
   while (marathonParameter.activity.LINESREQ <= 0 && lines < marathonParameter.LINELIMIT) {
    playsfx('levelUp')
    marathonParameter.activity.LEVEL += 1
    marathonParameter.activity.LINESREQ += replayKeys.marathonParams.linesRequire
    gravity = gravityUnit * 4 + ( /*+(((marathonParameter.activity.LEVEL-1)*(1/16))*(marathonParameter.activity.LEVEL-1)*(6/64))*/
     (marathonParameter.activity.LEVEL < 20 ? MarathonSpeed[marathonParameter.activity.LEVEL] : 20))
   }
   if (marathonParameter.LINELIMIT !== 'infinity')
    if (lines >= marathonParameter.LINELIMIT) {
     endgame(TransText('marathonsuccess'), 10)
    }
  }

  if (gametype == 118) {
   while (masterParameter.activity.LINESREQ <= 0 && lines < masterParameter.LINELIMIT) {
    playsfx('levelUp')
    masterParameter.activity.LEVEL += 1
    masterParameter.activity.LINESREQ += replayKeys.masterParams.linesRequire
   }
   if (masterParameter.LINELIMIT !== 'infinity')
    if (lines >= masterParameter.LINELIMIT) {
     endgame(TransText('marathonsuccess'), 10)
    }
  }


  // voices

  if (gametype !== 116 && boolline == 0 && !feverActivate) {

   if (linevoice >= 5) {
    voicestrength = 5;
   };
   if (linevoice == 4) {
    voicestrength = 4;
   };
   if (linevoice == 1) {
    voicestrength = 0
   };
   if (linevoice == 2) {
    voicestrength = 1
   };
   if (linevoice == 3) {
    voicestrength = 2
   };


   if (varren <= 0) {
    renstrengthinit = 0
   };
   if (varren == 1) {
    renstrengthinit = 1
   };
   if (varren >= 2 && varren <= 3) {
    voicestrength += 1
   };
   if (varren >= 4 && varren <= 5) {
    voicestrength += 2
   };
   if (varren >= 6 && varren <= 7) {
    voicestrength += 3
   };
   if (varren >= 8 && varren <= 10) {
    voicestrength += 4
   };
   if (varren >= 11) {
    voicestrength += 5
   };
   if (b2b >= 1) {
    voicestrength += 1
   };
   //voices
   if (voicestrength == 0) {
    if (renstrengthinit == 0) {
     playvoice('initv1');

    };
    if (renstrengthinit == 1) {
     playvoice('initv2');

    };
   };
   if (voicestrength == 1) {
    playvoice('spellv1')

   };
   if (voicestrength == 2) {
    playvoice('spellv2')

   };
   if (voicestrength == 3) {
    playvoice('spellv3')

   };
   if (voicestrength == 4) {
    if (gtrisenable && linevoice == 4 && gtrisinput)
     playvoice('gachatris')
    else if (gtrisenableplus && linevoice >= 5 && gtrisinput)
     playvoice('gachatrisplus')
    else
     playvoice('spellv4')

   };
   if (voicestrength >= 5) {
    if (perfectboolvoice == false) {
     if (gtrisenable && linevoice == 4 && gtrisinput)
      playvoice('gachatris')
     else if (gtrisenableplus && linevoice >= 5 && gtrisinput)
      playvoice('gachatrisplus')
     else
      playvoice('spellv5')


    } else {

     while (perfectboolvoice == true) {
      perfectboolvoice = false;
      if (gtrisenable && gtrisinput) {
       function repeatspell5() {
        playvoice('gachatris')

       }
       for (var reee = 0; reee < 1; reee++) {

        let reee2 = reee * 300
        setTimeout(repeatspell5, reee2)
       }
      }
      else
       for (var reee = 0; reee < 4; reee++) {
        function repeatspell5() {
         playvoice('spellv5')

        }
        let reee2 = reee * 200
        setTimeout(repeatspell5, reee2)
       }
     }
    }
   };
  }
  enablespin = false
  linespinrecog = false
  isSpin = false
  if (preview.grabBag.length == 0) endgame(TransText('noqueue'), 5, true)

  /*	function scorecheck() {
  		statsscore = stackscore + dropscore
  		scorestats.innerHTML = statsscore
  	}
  	setTimeout(scorecheck(), 1000)*/
  ;
 } catch (e) {
  var wt = 'error NOPE '
  alert(e)
 }
}
/**
 * Draws the stack.
 */
Stack.prototype.draw = function() {
 if (gamediff < 51 || gamediff == undefined) {
  clear(stackCtx);
  draw(this.grid, 0, 0, stackCtx);

  // Darken Stack
  // TODO wrap this with an option.
  stackCtx.globalCompositeOperation = 'source-atop';
  stackCtx.fillStyle = 'rgba(0,0,0,0.0)';
  stackCtx.fillRect(0, 0, stackCanvas.width, stackCanvas.height);
  stackCtx.globalCompositeOperation = 'source-over';

  if (settings.Outline) {
   var b = ~~(cellSize / 8);
   var c = cellSize;
   var lineCanvas = document.createElement('canvas');
   lineCanvas.width = stackCanvas.width;
   lineCanvas.height = stackCanvas.height;
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
   stackCtx.drawImage(lineCanvas, 0, 0);
  }
 }
};
var stack = new Stack()

function Piece() {
    this.x;
    this.y;
    this.pos = 0;
    this.tetro;
    this.index;
    this.kickData;
    this.lockDelay = 0;
    this.lockLimit = 0
    this.shiftDelay = 0;
    this.shiftDir;
    this.shiftReleased;
    this.arrDelay = 0;
    this.held = false;
    this.finesse = 0;
    this.dirty = false;
    this.spinX = 0
    this.spinY = 0
    this.landed
}


try {
    Piece.prototype.spinning=function() {
    	if (piece.index==5&&this.landed){
        if (stack.miniSpinCount >= 1 && stack.spinCheckCount >= 0.7 && this.spinX == piece.x && this.spinY == piece.y) {
            if (stack.miniSpinCount == 2) {
                playsfx('spinsound')
                


            }
            if (stack.miniSpinCount == 1 && stack.spinCheckCount >= 1) {
                playsfx('minispinsound')
                


            }
        }
        if (stack.miniSpinCount == 1 && stack.spinCheckCount == 1 && stack.mini2SpinCount <= 1 && this.spinX == piece.x && this.spinY == piece.y) {
            playsfx('minispinsound')
           

        }

    }
    }
} catch (e) {
    alert(e)
}
var statsscore
var is;
var dropsss = 0;
var instank = 0;
var dropscore = 0;
var stackscore;
var minoes = 0;
var onealarm = false;
var checkvalid = true;
var varalarm = false;
var rotatefail = false
Piece.prototype.clearPiece=function(){
	preview.grabBag=[null,null,null,null,null,null,null,null]
	this.new(preview.next())
}

Piece.prototype.initNew = function(index){
 this.new(index)
 if (IHScount !== 0) {
  playsfx('IHSSound')
  $iH('guitext_hold', TransText('hold'))
  piece.hold()
  IHScount = 0
 
 }
 if (IRScount!==0){
   playsfx('IRSSound')
   $iH('nextTXT', TransText('next'))
   if (IRScount<0){
      while (IRScount<0){
       this.rotate(-1)
       IRScount++
      }}
   else if (IRScount> 0){
       while (IRScount>0){
       this.rotate(1)
       IRScount--
       }}
   }
   this.y+=this.getDrop(Math.floor(gravity))

}
/**
 * Removes last active piece, and gets the next active piece from the grab bag.
 */
Piece.prototype.new = function(index) {
    // TODO if no arguments, get next grabbag piece
    try{
    if(index!==-1){
     this.held=false
    harddropenabled=false
    
    this.index = index;
    this.pos = 0;
    this.tetro = [];
    ;
    this.finesse = 0;
    this.dirty = true;
    this.lockDelay=0+(gametype!==118?MarathonLockLimit(marathonParameter.activity.LEVEL):(masterParameter.activity.LEVEL-1)*0.4)
 

    this.lockLimit=0
    //TODO change this
    this.landed = false;
    
    // TODO Do this better. Make clone object func maybe.
    //for property in pieces, this.prop = piece.prop
    
    this.tetro = pieces[index].tetro;
    this.kickData = pieces[index].kickData;
    
    
    playpiecesfx(preview.grabBag[0])
    this.drawGhost()
    this.x = pieces[index].x;
    this.y = pieces[index].y;
    this.held=false
    
    }
    // TODO ---------------- snip
		
    //TODO Do this better. (make grabbag object)
    // Preview.next(); == grabbag.next()
    // Preview.draw();
    //preview.next();


   
      
    // Check for blockout.
    if (!this.moveValid(0, 0, this.tetro)) {
        endgame(TransText('blockout'), 9, true, stack.valid?'lose':void 0)
       
        playsfx('KO')
     
    }
    
    if (this.index !== 0&&this.index !==7) {
        this.y = this.getDrop(1)//-garbrowcount
    } else {
        if (this.moveValid(0, 1, this.tetro))
            this.y = this.getDrop(0.5)//-garbrowcount
    }
    }catch(i){}
};
var rotatespin = false
Piece.prototype.rotate = function(direction) {
    // Rotates tetromino.

    moved = false


    var rotated = [];
    if (piece.y>-10){
    if (direction === -1) {


        for (var i = this.tetro.length - 1; i >= 0; i--) {
            rotated[i] = [];
            for (var row = 0; row < this.tetro.length; row++) {
                rotated[i][this.tetro.length - 1 - row] = this.tetro[row][i];

            }
        }
    } else if (direction===1){


        for (var i = 0; i < this.tetro.length; i++) {

            rotated[i] = [];
            for (var row = this.tetro.length - 1; row >= 0; row--) {
                rotated[i][row] = this.tetro[row][this.tetro.length - 1 - i];
            }
        }

    }
/*if (direction === 2) {

 for(var ttt=0;ttt<direction;ttt++)
 for (var i = 0; i < this.tetro.length; i++) {
 
  rotated[i] = [];
  for (var row = this.tetro.length - 1; row >= 0; row--) {
   rotated[i][row] = this.tetro[row][this.tetro.length - 1 - i];
  }
 }
}*/


    // Goes thorugh kick data until it finds a valid move.
    var curPos = this.pos.mod(4);
    var newPos = (this.pos + direction).mod(4);

    for (var x = 0, len = this.kickData[0].length; x < len; x++) {
        if (
            this.moveValid(
                this.kickData[curPos][x][0] - this.kickData[newPos][x][0],
                this.kickData[curPos][x][1] - this.kickData[newPos][x][1],
                rotated,
            )
        ) {

            rotatefail = false
            this.x += this.kickData[curPos][x][0] - this.kickData[newPos][x][0];
            this.y += this.kickData[curPos][x][1] - this.kickData[newPos][x][1];
            this.tetro = rotated;
            this.pos = newPos;
            // TODO make 180 rotate count as one or just update finess 180s
            //this.finesse++;
            break;
        } else {
            rotatefail = true
        }
    };
    if (rotatefail == false) {
        playsfx('rotatepiece');
        if(this.landed)
        this.lockLimit-=replayKeys.LCK*0.0001
        this.spinX = Math.floor(piece.x);
        this.spinY = Math.floor(piece.y);
        moved = false
        stack.isSpin = false;
        stack.isMini = false;
        stack.spinCheck();
        rotatespin = true
    } else {
     
    }
    while (rotatespin == true&&this.landed) {
     rotatespin = false
     this.spinning()
    }
}else
{
 playsfx('rotatepiece')
 IRScount+=direction
 if(IRScount==0)$iH('nextTXT', TransText('next'))
 if(IRScount==4||IRScount==-4){
  IRScount=0
  $iH('nextTXT', TransText('next'))
 }
 else if(IRScount==2||IRScount==-2){
 $iH('nextTXT', '180')

 }else{
  if(IRScount>=1) $iH('nextTXT', IRScount+'X CW')
  if(IRScount<=-1) $iH('nextTXT', (IRScount*-1)+'X CCW')

 }
 
}
};
Piece.prototype.checkShift = function() {
    // Shift key pressed event.
    if (keysDown & flags.moveLeft && !(lastKeys & flags.moveLeft)) {
        this.shiftDelay = 0;
        this.arrDelay = 0;
        this.shiftReleased = true;
        this.shiftDir = -1;
        this.finesse++;
    } else if (keysDown & flags.moveRight && !(lastKeys & flags.moveRight)) {
        this.shiftDelay = 0;
        this.arrDelay = 0;
        this.shiftReleased = true;
        this.shiftDir = 1;
        this.finesse++;
    }
    // Shift key released event.
    if (
        this.shiftDir === 1 &&
        !(keysDown & flags.moveRight) &&
        lastKeys & flags.moveRight &&
        keysDown & flags.moveLeft
    ) {
        this.shiftDelay = 0;
        this.arrDelay = 0;
        this.shiftReleased = true;
        this.shiftDir = -1;
    } else if (
        this.shiftDir === -1 &&
        !(keysDown & flags.moveLeft) &&
        lastKeys & flags.moveLeft &&
        keysDown & flags.moveRight
    ) {
        this.shiftDelay = 0;
        this.arrDelay = 0;
        this.shiftReleased = true;
        this.shiftDir = 1;
     } else 
         if (
        !(keysDown & flags.moveRight) &&
        lastKeys & flags.moveRight &&
        keysDown & flags.moveLeft
    ) {
        this.shiftDir = -1;
    } else if (
        !(keysDown & flags.moveLeft) &&
        lastKeys & flags.moveLeft &&
        keysDown & flags.moveRight
    ) {
        this.shiftDir = 1;
    } else if (
        (!(keysDown & flags.moveLeft) && lastKeys & flags.moveLeft) ||
        (!(keysDown & flags.moveRight) && lastKeys & flags.moveRight)
    ) {
        this.shiftDelay = 0;
        this.arrDelay = 0;
        this.shiftReleased = true;
        this.shiftDir = 0;
    }
     
     
    // Handle events
    if (this.shiftDir) {
        // 1. When key pressed instantly move over once.
        if (this.shiftReleased) {
            this.shift(this.shiftDir);
            this.shiftDelay++;
            this.shiftReleased = false;
            // 2. Apply DAS delay
        } else if (this.shiftDelay < replayKeys.DAS) {
            this.shiftDelay++;
            // 3. Once the delay is complete, move over once.
            //     Increment delay so this doesn't run again.
        } else
            
        if (this.shiftDelay === replayKeys.DAS && replayKeys.DAS !== 0) {
            this.shift(this.shiftDir);
            if (replayKeys.ARR !== 0) this.shiftDelay++;
            // 4. Apply ARR delay
        } else if (this.arrDelay < replayKeys.ARR) {
            this.arrDelay++;
            // 5. If ARR Delay is full, move piece, and reset delay and repeat.
        } else if (this.arrDelay === replayKeys.ARR && replayKeys.ARR !== 0) {
            this.shift(this.shiftDir);
        }
        }
    }

;
Piece.prototype.shift = function(direction) {
    this.arrDelay = 0;;
if (piece.y>-10){
    if (replayKeys.ARR === 0 && this.shiftDelay === replayKeys.DAS) {
        for (var i = 1;; i++) {
            if (!this.moveValid(i * direction, 0, this.tetro)) {

              
                this.x += i * direction - direction;
                break;
            } else{;}
            }; 
        
    } else if (this.moveValid(direction, 0, this.tetro)) {
        this.x += direction;
        if (direction== -1) {}
        playsfx('movesound')
        moved = true
        
        if (moved == true) {



            stack.miniSpinCount + 9
            stack.isMini = false
            stack.isSpin = false
        }
        //this.landed = false
        stack.miniSpinCount + 9
        stack.isMini = false
        stack.isSpin = false
    }
}
};
var moved = true
var softdropscore = 0
var gravscore = 0
var gravscore2 = 0
var gravscorehigh = 0
var gravscore2high = 0
Piece.prototype.shiftDown = function() {
    if (piece.y>-10){
    try {
        if (this.moveValid(0, 1, this.tetro)) {

            var grav = gravityArr[replayKeys.SFT + 1];
            if (grav > 1) {
                this.y += this.getDrop(grav);
                


                
                dropscore += softg
                playsfx('softdrops');


                statsscore = dropscore + stackscore
                //scorestats.innerHTML = statsscore
            } else if (grav == 1) {
            	this.y += this.getDrop(grav);
            
            
            
            
            	dropscore += 1
            	playsfx('softdrops');
            
            
            	statsscore = dropscore + stackscore
            	//scorestats.innerHTML = statsscore
            }
            else {
                gravscore += grav
                gravscore2 += Math.floor(gravscore)
                if (this.y >= Math.round(this.y)-grav&&this.y<=Math.round(this.y)){
                    gravscore2 -= 1
                    gravscore=0
                    dropscore += 1 
                    playsfx('softdrops');
                    

                }
                this.y += grav;


               //TODO delete this line
                dropscore += Math.floor(softdropscore)

                statsscore = dropscore + stackscore
                //scorestats.innerHTML = statsscore

            }
        }
    } catch (e) {
        alert(e)
    }
    }
};

var softg = 0
var softdropbool = false
var harddropenabled=false

Piece.prototype.hardDrop = function() {
if (piece.y>-10){
    if (this.landed == false) {
        stack.isSpin = false;
        stack.isMini = true;
        stack.spinCheck()
    }
    stack.spinCheck()
    this.y += this.getDrop(95)
    harddropenabled=true
   
       // if (this.landed== false)
    dropscore += instank
    this.lockDelay = replayKeys.LCK*7;
    /*for (var i = 0;; i++) {
    this.y+=this.getDrop(1)
    
        twicescore = i*2
        if (!this.moveValid(0, 1, this.tetro)) {
        	stack.grid+=this.tetro}
        
        if (!this.moveValid(0, 1, this.tetro)) {
       
        	
        
        	piece.new(preview.next());
        	piece.draw();
        	piece.drawGhost()

        	break
        };
        
        
       
    
    }*/
    
    
    
    
    statsscore = dropscore + stackscore
    //scorestats.innerHTML = statsscore

    playsfx('hdsound');
    
    
}

};
let twicescore
Piece.prototype.getDrop = function(distance) {
    for (var i = 1; i <= distance; i++) {
        twicescore = i
        if(this.lockLimit>=0){
        this.lockLimit-=0.02}
        
        
        
        
        if (!this.moveValid(0, i, this.tetro)) { stack.spinCheck();return i - 1;; instank*=0; break}
        instank = twicescore * 2
        softg = twicescore
        
    
    }

    return i - 1;
    if (this.landed == false) {
        stack.spinCheck()
        stack.isSpin = false;
        stack.isMini = false;
    }
};
Piece.prototype.hold = function() {
if (piece.y>-10&&gametype!==116&&feverAble==false&&feverActivate==false){
    var temp = hold.piece;
    IHScount=0
    if (!this.held) {
        if (hold.piece !== void 0) {
            hold.piece = this.index;
            this.initNew(temp);
            playsfx('noninithold')
        } else {
            hold.piece = this.index;
            this.initNew(preview.next());
            playsfx('inithold')
        }
        this.held = true;
        hold.draw();
    }
}
else if(feverActivate==false&&feverAble==false&&gametype!==116){
 IHScount++
 if(IHScount>=2)IHScount=0
 if(IHScount!==0){
  $iH('guitext_hold', TransText('inihold'))
 }else{
  $iH('guitext_hold', TransText('hold'))
 }
}
};
/**
 * Checks if position and orientation passed is valid.
 *  We call it for every action instead of only once a frame in case one
 *  of the actions is still valid, we don't want to block it.
 */
Piece.prototype.moveValid = function(cx, cy, tetro) {
	try{
    cx = cx + this.x;
    cy = Math.floor(cy + this.y);

    for (var x = 0; x < tetro.length; x++) {
        for (var y = 0; y < tetro[x].length; y++) {
            if (
                tetro[x][y] &&
                (cx + x < 0 ||
                    cx + x >= 10 ||
                    cy + y >= 22 ||
                    stack.grid[cx + x][cy + y])
            ) {
                return false;
            }
        }
    }
    if(!this.landed){
    //this.lockDelay -=(this.lockDelay>=0?replayKeys.LCK/3:0)
}else{
 this.lockLimit+=replayKeys.LCK*0.0025
 this.lockDelay=0+(this.lockLimit*0.4)+(gametype!==118?MarathonLockLimit(marathonParameter.activity.LEVEL):(masterParameter.activity.LEVEL-1)*0.5)
// this.lockDelay-=(this.lockDelay/3>=0?replayKeys.LCK/3:0)
}
    return true;
	}catch(e){}
};
Piece.prototype.update = function() {
	if(this.y!==undefined){

    stack.spinCheck()

if (piece.y>-10){
    if (this.moveValid(0, 1, this.tetro)) {
      
        stack.isSpin = false;
        stack.isMini = false;
        spinrecog = false
        stack.spinCheckCount = 9383827
        stack.spinCheck()
       
        
        this.landed = false;
        if (replayKeys.GRAV&&gametype!==117) {
            var grav = gravityArr[replayKeys.GRAV - 1];
            if (grav > 1) {this.y += this.getDrop(grav)}
            else{ this.y += grav};
        } else {
         if(gravity>=1){
          this.y+=this.getDrop(Math.floor(gravity))
         }else
            this.y += gravity;
        }
        if(this.lockLimit>=0){
        this.lockLimit-=0.006}
        while (varalarm == true) {
            varalarm = false;
            stopsfx('alarm')
            onealarm = false
        }

    } else {
       if (this.landed==false){
       	if(!harddropenabled){
       	playsfx('pieceLand')
       	instank*=0
}
        this.landed = true;
        
       }
       var yceil=Math.ceil(this.y)
       this.y = Math.floor(this.y);
        stack.spinCheck()
        
        if (yceil > 0) {
            checkvalid = true;


        } else { checkvalid = false }
        if (checkvalid == false) {
            while (onealarm == false) {
                playsfx('alarm');
               
                varalarm = true;
                onealarm = true
            }
        }
        
        if (this.lockDelay >= replayKeys.LCK) {
        	if (!harddropenabled)
        		playsfx('lockse')
if (true){
    
            stack.addPiece(this.tetro);
            piece.y=-33
            
           if(gametype!=116&&!feverActivate||piece.y==-10){piece.initNew(preview.next())} else piece.y=-38;
            piece.draw();
            piece.drawGhost()
            if(hold.piece!==void 0)
            hold.draw()
             
} 
                           
          //  minoes += 4;

        } else {
           this.lockDelay+=1+this.lockLimit+(gametype!==118?0:(masterParameter.activity.LEVEL-1)*0.02)

            if (stack.isSpin) {
                var rando = Math.random()
                var a = 1
                var b = 125 * rando
                activeCtx.globalCompositeOperation = 'source-atop';
                activeCtx.fillStyle = 'rgba(' + b + ',' + 0 + ',' + b * 2 + ',' + a + ')';
                activeCtx.fillRect(0, 0, activeCanvas.width, activeCanvas.height);
                activeCtx.globalCompositeOperation = 'source-over';
                this.lockDelay
            } else if (stack.isMini) {
                var rando = Math.random(0, 1)
                var a = 0.2

                var b = 125
                activeCtx.globalCompositeOperation = 'source-atop';
                activeCtx.fillStyle = 'rgba(' + b + ',' + 0 + ',' + b * 2 + ',' + a + ')';
                activeCtx.fillRect(0, 0, activeCanvas.width, activeCanvas.height);
                activeCtx.globalCompositeOperation = 'source-over';
                
            }

            else {
                var a = 2 / setting['Lock Delay'][replayKeys.LCK];
                var b = 0
                activeCtx.globalCompositeOperation = 'source-atop';
                activeCtx.fillStyle = 'rgba(' + b + ',' + b + ',0,' + a + ')';
                activeCtx.fillRect(0, 0, activeCanvas.width, activeCanvas.height);
                activeCtx.globalCompositeOperation = 'source-over';
                
            }

        }
    }
}
}
};
Piece.prototype.draw = function() {
	try{
	if(gamediff<51||gamediff==undefined){
    draw(this.tetro, this.x, this.y, activeCtx);
}
}catch(i){}
}
Piece.prototype.drawGhost = function() {
	try{
	if(gamediff<15||gamediff==undefined){
    if (!settings.Ghost) {
    	activeCtx.globalAlpha = 0.3
        draw(this.tetro, this.x, this.y + this.getDrop(22), activeCtx, 0);
        activeCtx.globalAlpha = 1
    } else if (settings.Ghost === 1) {
        activeCtx.globalAlpha = 0.3;
        draw(this.tetro, this.x, this.y + this.getDrop(22), activeCtx);
        activeCtx.globalAlpha = 1;
       
    }
};
}catch(i){}
}

var IHScount=0

var piece = new Piece();

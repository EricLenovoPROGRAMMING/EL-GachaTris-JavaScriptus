function Piece2() {
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
    this.statsscore
    this.instank = 0;
    this.dropscore = 0;
    this.onealarm = false;
    this.checkvalid = true;
    this.varalarm = false;
    this.rotatefail = false
    
    this.moved = true
    this.gravscore = 0
    this.gravscore2 = 0
    this.gravscorehigh = 0
    this.gravscore2high = 0
    
    this.rotatespin = false
    
    this.IHSCount=0
    this.IRSCount=0
    
    this.harddropenabled=false
    
    this.softg = 0
    this.moved=false
}


try {
    Piece2.prototype.spinning=function() {
    	if (this.index==5&&this.landed){
        if (stack2.miniSpinCount >= 1 && stack2.spinCheckCount >= 0.7 && this.spinX == this.x && this.spinY == this.y) {
            if (stack2.miniSpinCount == 2) {
                playsfx('spinsound')
                


            }
            if (stack2.miniSpinCount == 1 && stack2.spinCheckCount >= 1) {
                playsfx('minispinsound')
                


            }
        }
        if (stack2.miniSpinCount == 1 && stack2.spinCheckCount == 1 && stack2.mini2SpinCount <= 1 && this.spinX == this.x && this.spinY == this.y) {
            playsfx('minispinsound')
           

        }

    }
    }
} catch (e) {
    alert(e)
}

Piece2.prototype.clearPiece=function(){
	preview2.grabBag=[null,null,null,null,null,null,null,null]
	this.new(preview2.next())
}

Piece2.prototype.initNew = function(index){
 this.new(index)
 
 if (this.IHSCount !== 0) {
  playsfx('IHSSound')
  $iH('guitext_hold', TransText('hold'))
  this.hold()
  this.IHSCount = 0
 
 }
 if (this.IRSCount!==0){
   playsfx('IRSSound')
   $iH('nextTXT2', TransText('next'))
   if (this.IRSCount<0){
      while (this.IRSCount<0){
       this.rotate(-1)
       this.IRSCount++
      }}
   else if (this.IRSCount> 0){
       while (this.IRSCount>0){
       this.rotate(1)
       this.IRSCount--
       }}
   }
   this.y+=this.getDrop(Math.floor(gravity2))
   if (!this.moveValid(0, 0, this.tetro)) {
    endgame2( /*TransText('blockout')*/ '', 9, true, stack2.valid ? 'lose' : void 0)
   
    playsfx('KO')
   
   }
   try{
gtrisAI.eval(this.index,this.held)
}catch(i){}
}
/**
 * Removes last active piece, and gets the next active piece from the grab bag.
 */
Piece2.prototype.new = function(index) {
    // TODO if no arguments, get next grabbag piece
    try{
    if(index!==-1){
     this.held=false
    this.harddropenabled=false
    
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
    //for property in pieces, this.prop = this.prop
    
    this.tetro = pieces[index].tetro;
    this.kickData = pieces[index].kickData;
    
    
    playpiecesfx(preview2.grabBag[0])
    this.drawGhost()
    this.x = pieces[index].x;
    this.y = pieces[index].y;
    this.held=false
    
    }
    // TODO ---------------- snip
		
    //TODO Do this better. (make grabbag object)
    // preview2.next(); == grabbag.next()
    // preview2.draw();
    //preview2.next();


   
      
    // Check for blockout.
    
    
    if (this.index !== 0&&this.index !==7) {
        this.y = this.getDrop(1)//-garbrowcount
    } else {
        if (this.moveValid(0, 1, this.tetro))
            this.y = this.getDrop(0.5)//-garbrowcount
    }
    }catch(i){}
};

Piece2.prototype.rotate = function(direction) {
    // Rotates tetromino.

    this.moved = false

   this.rotatefail=false
    var rotated = [];
    if (this.y>-10){
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
        this.lockLimit-=replayKeys['1v1params'].LCK*0.0001
        this.spinX = Math.floor(this.x);
        this.spinY = Math.floor(this.y);
        this.moved = false
        stack2.isSpin = false;
        stack2.isMini = false;
        stack2.spinCheck();
        this.rotatespin = true
    } else {
     
    }
    while (this.rotatespin == true&&this.landed) {
     this.rotatespin = false
     this.spinning()
    }
}else
{
 playsfx('rotatepiece')
 this.IRSCount+=direction
 if(this.IRSCount==0)$iH('nextTXT', TransText('next'))
 if(this.IRSCount==4||this.IRSCount==-4){
  this.IRSCount=0
  $iH('nextTXT2', TransText('next'))
 }
 else if(this.IRSCount==2||this.IRSCount==-2){
 $iH('nextTXT2', '180')

 }else{
  if(this.IRSCount>=1) $iH('nextTXT', this.IRSCount+'X CW')
  if(this.IRSCount<=-1) $iH('nextTXT', (this.IRSCount*-1)+'X CCW')

 }
 
}
};
Piece2.prototype.checkShift = function() {
    // Shift key pressed event.
    if (keysDown2 & flags.moveLeft && !(lastKeys2 & flags.moveLeft)) {
        this.shiftDelay = 0;
        this.arrDelay = 0;
        this.shiftReleased = true;
        this.shiftDir = -1;
        this.finesse++;
    } else if (keysDown2 & flags.moveRight && !(lastKeys2 & flags.moveRight)) {
        this.shiftDelay = 0;
        this.arrDelay = 0;
        this.shiftReleased = true;
        this.shiftDir = 1;
        this.finesse++;
    }
    // Shift key released event.
    if (
        this.shiftDir === 1 &&
        !(keysDown2 & flags.moveRight) &&
        lastKeys2 & flags.moveRight &&
        keysDown2 & flags.moveLeft
    ) {
        this.shiftDelay = 0;
        this.arrDelay = 0;
        this.shiftReleased = true;
        this.shiftDir = -1;
    } else if (
        this.shiftDir === -1 &&
        !(keysDown2 & flags.moveLeft) &&
        lastKeys2 & flags.moveLeft &&
        keysDown2 & flags.moveRight
    ) {
        this.shiftDelay = 0;
        this.arrDelay = 0;
        this.shiftReleased = true;
        this.shiftDir = 1;
     } else 
         if (
        !(keysDown2 & flags.moveRight) &&
        lastKeys2 & flags.moveRight &&
        keysDown2 & flags.moveLeft
    ) {
        this.shiftDir = -1;
    } else if (
        !(keysDown2 & flags.moveLeft) &&
        lastKeys2 & flags.moveLeft &&
        keysDown2 & flags.moveRight
    ) {
        this.shiftDir = 1;
    } else if (
        (!(keysDown2 & flags.moveLeft) && lastKeys2 & flags.moveLeft) ||
        (!(keysDown2 & flags.moveRight) && lastKeys2 & flags.moveRight)
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
        } else if (this.shiftDelay < replayKeys['1v1params'].DAS) {
            this.shiftDelay++;
            // 3. Once the delay is complete, move over once.
            //     Increment delay so this doesn't run again.
        } else
            
        if (this.shiftDelay === replayKeys['1v1params'].DAS && replayKeys['1v1params'].DAS !== 0) {
            this.shift(this.shiftDir);
            if (replayKeys['1v1params'].ARR !== 0) this.shiftDelay++;
            // 4. Apply ARR delay
        } else if (this.arrDelay < replayKeys['1v1params'].ARR) {
            this.arrDelay++;
            // 5. If ARR Delay is full, move piece, and reset delay and repeat.
        } else if (this.arrDelay === replayKeys['1v1params'].ARR && replayKeys['1v1params'].ARR !== 0) {
            this.shift(this.shiftDir);
        }
        }
    }

;
Piece2.prototype.shift = function(direction) {
    this.arrDelay = 0;;
if (this.y>-10){
    if (replayKeys['1v1params'].ARR === 0 && this.shiftDelay === replayKeys['1v1params'].DAS) {
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
        this.moved = true
        
        if (this.moved == true) {



            stack2.miniSpinCount + 9
            stack2.isMini = false
            stack2.isSpin = false
        }
        //this.landed = false
        stack2.miniSpinCount + 9
        stack2.isMini = false
        stack2.isSpin = false
    }
}
};

Piece2.prototype.shiftDown = function() {
    if (this.y>-10){
    try {
        if (this.moveValid(0, 1, this.tetro)) {

            var grav = gravityArr[replayKeys['1v1params'].SFT + 1];
            if (grav > 1) {
                this.y += this.getDrop(grav);
                


                
                this.dropscore += this.softg
                playsfx('softdrops');


             //   statsscore = this.dropscore + stackscore
                //scorestats.innerHTML = statsscore
            } else if (grav == 1) {
            	this.y += this.getDrop(grav);
            
            
            
            
            	this.dropscore += 1
            	playsfx('softdrops');
            
            
            	//statsscore2 = this.dropscore + this.stackscore
            	//scorestats.innerHTML = statsscore
            }
            else {
                this.gravscore += grav
                this.gravscore2 += Math.floor(this.gravscore)
                if (this.y >= Math.round(this.y)-grav&&this.y<=Math.round(this.y)){
                    this.gravscore2 -= 1
                    this.gravscore=0
                    this.dropscore += 1 
                    playsfx('softdrops');
                    

                }
                this.y += grav;


               //TODO delete this line
                

               
                //scorestats.innerHTML = statsscore

            }
        }
    } catch (e) {
        console.warn(e)
    }
    }
};





Piece2.prototype.hardDrop = function() {
if (this.y>-10){
    if (this.landed == false) {
        stack2.isSpin = false;
        stack2.isMini = true;
        stack2.spinCheck()
    }
    stack2.spinCheck()
    this.y += this.getDrop(95)
    this.harddropenabled=true
   
       // if (this.landed== false)
    this.dropscore += this.instank
    this.lockDelay = replayKeys['1v1params'].LCK*7;
    /*for (var i = 0;; i++) {
    this.y+=this.getDrop(1)
    
        this.twicescore = i*2
        if (!this.moveValid(0, 1, this.tetro)) {
        	stack2.grid+=this.tetro}
        
        if (!this.moveValid(0, 1, this.tetro)) {
       
        	
        
        	this.new(preview2.next());
        	this.draw();
        	this.drawGhost()

        	break
        };
        
        
       
    
    }*/
    
    
    
    
    statsscore = this.dropscore + stackscore
    //scorestats.innerHTML = statsscore

    playsfx('hdsound');
    
    
}

};

Piece2.prototype.getDrop = function(distance) {
 this.twicescore=0
    for (var i = 1; i <= distance; i++) {
        this.twicescore = i
        if(this.lockLimit>=0){
        this.lockLimit-=0.02}
        
        
        
        
        if (!this.moveValid(0, i, this.tetro)) { stack2.spinCheck();return i - 1;; this.instank*=0; break}
        this.instank = this.twicescore * 2
        this.softg = this.twicescore
        
    
    }

    return i - 1;
    if (this.landed == false) {
        stack2.spinCheck()
        stack2.isSpin = false;
        stack2.isMini = false;
    }
};
Piece2.prototype.hold = function() {
if (this.y>-10&&gametype!==116&&feverAble==false&&feverActivate==false){
    var temp = hold2.piece;
    this.IHSCount=0
    if (!this.held) {
        if (hold2.piece !== void 0) {
            hold2.piece = this.index;
            this.initNew(temp);
            playsfx('noninithold')
        } else {
            hold2.piece = this.index;
            this.initNew(preview2.next());
            playsfx('inithold')
        }
        this.held = true;
        hold2.draw();
    }
}
else if(feverActivate==false&&feverAble==false&&gametype!==116){
 this.IHSCount++
 if(this.IHSCount>=2)this.IHSCount=0
 if(this.IHSCount!==0){
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
Piece2.prototype.moveValid = function(cx, cy, tetro) {
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
                    stack2.grid[cx + x][cy + y])
            ) {
                return false;
            }
        }
    }
    if(!this.landed){
    //this.lockDelay -=(this.lockDelay>=0?replayKeys['1v1params'].LCK/3:0)
}else{
 this.lockLimit+=replayKeys['1v1params'].LCK*0.0025
 this.lockDelay=0+(this.lockLimit*0.4)+(gametype!==118?MarathonLockLimit(marathonParameter.activity.LEVEL):(masterParameter.activity.LEVEL-1)*0.5)
// this.lockDelay-=(this.lockDelay/3>=0?replayKeys['1v1params'].LCK/3:0)
}
    return true;
	}catch(e){}
};
Piece2.prototype.update = function() {
	if(this.y!==undefined){

    stack2.spinCheck()

if (this.y>-10){
    if (this.moveValid(0, 1, this.tetro)) {
      
        stack2.isSpin = false;
        stack2.isMini = false;
        //spinrecog = false
        stack2.spinCheckCount = 9383827
        stack2.spinCheck()
       
        
        this.landed = false;
        if (replayKeys['1v1params'].GRAV&&gametype!==117) {
            var grav = gravityArr[replayKeys['1v1params'].GRAV - 1];
            if (grav > 1) {this.y += this.getDrop(grav)}
            else{ this.y += grav};
        } else {
         if(gravity2>=1){
          this.y+=this.getDrop(Math.floor(gravity2))
         }else
            this.y += gravity2;
        }
        if(this.lockLimit>=0){
        this.lockLimit-=0.006}
        while (this.varalarm == true) {
            this.varalarm = false;
            stopsfx('alarm')
            this.onealarm = false
        }

    } else {
       if (this.landed==false){
       	if(!this.harddropenabled){
       	playsfx('pieceLand')
       	this.instank*=0
}
        this.landed = true;
        
       }
       var yceil=Math.ceil(this.y)
       this.y = Math.floor(this.y);
        stack2.spinCheck()
        
        if (yceil > 0) {
            this.checkvalid = true;


        } else { this.checkvalid = false }
        if (this.checkvalid == false) {
            while (this.onealarm == false) {
                playsfx('alarm');
               
                this.varalarm = true;
                this.onealarm = true
            }
        }
        
        if (this.lockDelay >= replayKeys['1v1params'].LCK) {
        	if (!this.harddropenabled)
        		playsfx('lockse')
if (true){
    
            stack2.addPiece(this.tetro);
            this.y=-33
            
           if(gametype!=116&&!feverActivate||this.y==-10){this.initNew(preview2.next())} else this.y=-38;
            this.draw();
            this.drawGhost()
            if(hold2.piece!==void 0)
            hold2.draw()
             
} 
                           
          //  minoes += 4;

        } else {
           this.lockDelay+=1+this.lockLimit+(gametype!==118?0:(masterParameter.activity.LEVEL-1)*0.02)

            if (stack2.isSpin) {
                var rando = Math.random()
                var a = 1
                var b = 125 * rando
                activeCtx2.globalCompositeOperation = 'source-atop';
                activeCtx2.fillStyle = 'rgba(' + b + ',' + 0 + ',' + b * 2 + ',' + a + ')';
                activeCtx2.fillRect(0, 0, activeCanvas2.width, activeCanvas2.height);
                activeCtx2.globalCompositeOperation = 'source-over';
                this.lockDelay
            } else if (stack2.isMini) {
                var rando = Math.random(0, 1)
                var a = 0.2

                var b = 125
                activeCtx2.globalCompositeOperation = 'source-atop';
                activeCtx2.fillStyle = 'rgba(' + b + ',' + 0 + ',' + b * 2 + ',' + a + ')';
                activeCtx2.fillRect(0, 0, activeCanvas2.width, activeCanvas2.height);
                activeCtx2.globalCompositeOperation = 'source-over';
                
            }

            else {
                var a = 2 / setting['Lock Delay'][replayKeys['1v1params'].LCK];
                var b = 0
                activeCtx2.globalCompositeOperation = 'source-atop';
                activeCtx2.fillStyle = 'rgba(' + b + ',' + b + ',0,' + a + ')';
                activeCtx2.fillRect(0, 0, activeCanvas2.width, activeCanvas2.height);
                activeCtx2.globalCompositeOperation = 'source-over';
                
            }

        }
    }
}
}
};
Piece2.prototype.draw = function() {
	try{
	if(gamediff<510||gamediff==undefined){
    draw(this.tetro, this.x, this.y, activeCtx2);
}
}catch(i){}
}
Piece2.prototype.drawGhost = function() {
	try{
	if(gamediff<510||gamediff==undefined){
    if (!settings.Ghost) {
    	activeCtx2.globalAlpha = 0.3
        draw(this.tetro, this.x, this.y + this.getDrop(22), activeCtx2, 0);
        activeCtx2.globalAlpha = 1
    } else if (settings.Ghost === 1) {
        activeCtx2.globalAlpha = 0.3;
        draw(this.tetro, this.x, this.y + this.getDrop(22), activeCtx2);
        activeCtx2.globalAlpha = 1;
       
    }
};
}catch(i){}
}



var piece2 = new Piece2();

function gtAIPredict() {

 this.grid = []
 this.x = 0
 this.y = 0
 this.tetro = []
 this.landed = false;
 this.index = null;
 this.prediction = {};
 this.predictionCount = 0;
 this.rotationTrials = 0;
 this.aggregateHeight = 0; // sum of each column's height
 this.columnHeights = []; // array individual columns' height
 this.bumpiness = 0; // sum of absolute height differences between two adjacent columns
 this.holes = 0; // atleast one empty space above an existing block counts
 this.completeLines = 0; // the number of lines (rows filled with 10 blocks) to be made
 this.column = 0
 this.pos=0
 
 this.heuristicsWeight={
  aggregateHeight:-0.510066,
  bumpiness:-0.184483,
  completeLines:1.760666,
  holes:-1.00035663,
  blockades:-0.0666,
  overall:-0.00004
 }
}



function $copy(arr) {
	var ARR = []
	for (let a = 0; a < arr.length; a++) {
		if (typeof arr[a] == "object" && arr[a] instanceof Array) {
			ARR.push([])
			for (let b = 0; b < arr[a].length; b++) {
				ARR[a].push(arr[a][b])
			}
		}
		else {
			ARR.push(arr[a])
		}
	}
	return ARR
}




gtAIPredict.prototype = {
  returnStack: function() {
   var cells = makeArrayLength(11)
   for (var x = 0; x < 10; x++) {
    cells[x] = makeArrayLength(22)
    for (var y = 0; y < 22; y++)
     cells[x][y] = stack2.grid[x][y]
   }
   return cells
  },
  eval: function(Piece) {
   this.tetro = pieces[Piece].tetro
   this.index = Piece
   this.kickData = pieces[Piece].kickData
   this.x = pieces[Piece].x/**/
   this.y = 0
   this.pos = 0
   /*if (this.index !== 0 && this.index !== 7) {
    this.y = this.getDrop(1) //-garbrowcount
   } else {
    if (this.moveValid(0, 1, this.tetro))
     this.y = this.getDrop(0.5) //-garbrowcount
   }*/

   if (this.index == 3) this.rotationTrials = 0
   if (this.index == 4 || this.index == 0 || this.index == 6) this.rotationTrials = 1
   if (this.index == 2 || this.index == 1 || this.index == 5) this.rotationTrials = 3
   this.prediction = []
   this.predictionCount = 0


   /*  {
       let direction = -1
       let rotated = [];
     if (direction === 1) {
        for (var i = 0; i < this.tetro.length; i++) {
         rotated[i] = [];
         for (var row = this.tetro.length - 1; row >= 0; row--) {
          rotated[i][row] = this.tetro[row][this.tetro.length - 1 - i];
         }
        }
       }
       
       
       
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
       
       
         this.x += this.kickData[curPos][x][0] - this.kickData[newPos][x][0];
         this.y += this.kickData[curPos][x][1] - this.kickData[newPos][x][1];
         this.tetro = rotated;
         this.pos = newPos;
         // TODO make 180 rotate count as one or just update finess 180s
         //this.finesse++;
         break;
        } else {
       
        }
       };
      }*/


   for (let rot = 0; rot <= this.rotationTrials; rot++) {
    //if (this.rotationTrials!==0&&rot!==0) this.rotate(1)
   this.x=pieces[Piece].x
   this.y=pieces[Piece].y
    for (let uuu = 0; uuu < 15; uuu++) {
 // if(minoesdetectwarning2>4){
     if (this.moveValid(-1, 0, this.tetro)) {
      this.x -= 1;
     }}
     /*else
     if (this.moveValid(-1, 0, this.tetro)) {
      this.x -= 1;
     }}*/

     if(rot!=0){
      const direction = 1
      let rotated = [];
      if (direction === 1) {
       for (var i = 0; i < this.tetro.length; i++) {
        rotated[i] = [];
        for (var row = this.tetro.length - 1; row >= 0; row--) {
         rotated[i][row] = this.tetro[row][this.tetro.length - 1 - i];
        }
       }
      }



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


        this.x += this.kickData[curPos][x][0] - this.kickData[newPos][x][0];
        this.y += this.kickData[curPos][x][1] - this.kickData[newPos][x][1];
        this.tetro = rotated;
        this.pos = newPos;
        // TODO make 180 rotate count as one or just update finess 180s
        //this.finesse++;
        break;
       } else {

       }
      };
     }

for (let uuu = 0; uuu < 15; uuu++) {
 if(minoesdetectwarning2>4){
     if (this.moveValid(0, 0, this.tetro)) {
      this.x -= 1;
     }}
     else
     if (this.moveValid(0, 0, this.tetro)) {
      this.x -= 1;
     }}
     //   if(this.moveValid( -1,0,this.tetro))break
    
    for (let move = 0; move < 30 /*&&!this.moveValid(1, 0, this.tetro)/**/ ; move++) {
     //  if(!this.moveValid(1,0,this.tetro))
     //if (this.moveValid(move, 0, this.tetro)) continue
     // this.new(10,22)
     /*for (var r = 0; r < 22; r++) {
      for (var c = 0; c < 10; c++) {
       this.grid[r][c] = 
      }
     }*/
     //   for(var uuud=0;uuud<rot;uuud++)this.rotate(1)

     this.grid = $copy(stack2.grid)
     for(let GX = 0; GX<10;GX++){
      for(let GY = 0; GY<22; GY++){
       if (typeof this.grid[GX][GY]=="undefined")this.grid[GX][GY]=0
      }
     }
     this.y=-2
     //if(this.shift('step',1)==false)break

    if (this.moveValid(1, 0, this.tetro)) {
      this.x += 1;
     }

     this.y += this.getDrop(79)
     this.columnHeights = []
     this.completeLines = 0
     //this.lineCount=0
     this.lines = 0
     {

      let tetro = this.tetro

      this.once = false
      // Add the piece to the Stack2.
      let range = [];

      for (var x = 0; x < this.tetro.length; x++) {
       for (var y = 0; y < this.tetro[x].length; y++) {
        if (tetro[x][y]) {
         
         this.grid[x + this.x][y + this.y] = this.tetro[x][y];
       
        if (!this.once || x + this.x < this.column) {
         this.column = x + this.x;
         this.once = true;
        }
         // Get this.column for finesse
         /*if (!this.once || x + this.x < this.column) {
          this.column = x + this.x;
          this.once = true;
         }*/
         // Check which lines get modified
         if (range.indexOf(y + this.y) === -1) {
          range.push(y + this.y);
          
          // This checks if any cell is in the play field. If there
          //  isn't any this is called a lock out and the game ends.
         // if (!(y + this.y > 1)) this.completeLines-=9338383839;
         }
        }
       }

      }
             
            
                  
     
     
      
             range = range.sort(function(a, b) {
    return a - b;
  });
  for (let row = 0, len = 22; row < len; row++) {
               let count=0
               for (var x = 0; x < 10; x++) {
                if (this.grid[x][row]!==0&&typeof this.grid[x][row]=='number') {
                 count++
                 this.lineCount++
                 
                }else{
                
               }}
           
               
                
               // Clear the line. This basically just moves down the stack.
               // TODO Ponder during the day and see if there is a more elegant solution.
               if(count >9)
               {
                ; // NOTE stats
                //this.lineCount-=10
                this.completeLines++
                this.lines++
              for (var y = row; y >= -1; y--) {
                 for (var x = 0; x < 10; x++) {
                  {
                   this.grid[x][y] = this.grid[x][y - 1];
                  }
                 }
                
                }/**/
               }
              }
              
     }
    
  /*  if (this.lines < 4 && this.lines >= 1) this.score -= NaN
else
if (this.lines == 0) this.completeLines -= 3838/**/

    
      this.aggregateHeight = 0
    // console.log(this.lineCount)
      for (let gx = 0; gx < 10; gx++) {
       for (let gy = 0; gy < 22 /*&&!(this.grid[gx][gy])*/ ; gy++) {
       }
        //   try{
      /*  if (this.grid[gx][gy] !== 0 || typeof this.grid[gx][gy] !== "undefined") break
        //}catch(e){}/*/
        var r = 0;
        for (; r < 22 && (this.grid[gx][r] == 0||typeof this.grid[gx][r]=="undefined"); r++);
        this.columnHeights[gx] = 21 - r;
       
      }
      for (let value of this.columnHeights)
       this.aggregateHeight += value

      this.bumpiness = 0
      for (var c = 0; c < this.columnHeights.length - 1; c++) {
       this.bumpiness += Math.abs(this.columnHeights[c] - this.columnHeights[c + 1]);
      }

      this.holes = 0
      {
      for (var x = 0; x < 10; x++) {
       var block = false;
       for (var y = 0; y < 21; y++) {
        if (this.grid[x][y]) {
         block = true;
        } else if (this.grid[x][y] == 0 && block) {
         this.holes++;
        }
       }
      }
}
this.blockades=0;{
let count = 0;
for (var c = 0; c <10; c++) {
 var hole = false;
 for (var r = 22; r >= 0; r--) {
  if (this.grid[c][r] == 0||typeof this.grid[c][r]=="undefined") {
   hole = true;
  } else if ((this.grid[c][r] != 0&&hole||typeof this.grid[c][r]!=="undefined" && hole)) {
   count++;
  }
 }
}
this.blockades=count;
}





      this.score = ((this.heuristicsWeight.aggregateHeight* (this.aggregateHeight))) + (this.heuristicsWeight.completeLines*(this.completeLines))+(this.heuristicsWeight.holes * (this.holes)) + (this.heuristicsWeight.bumpiness * (this.bumpiness)) + (this.heuristicsWeight.blockades*(this.blockades)) 
     + (this.completeLines*this.holes*this.aggregateHeight*this.blockades*this.bumpiness*this.heuristicsWeight.overall)


if((this.lines>1)||this.lines<=0)/**/{
      this.prediction.push({
       index: this.predictionCount,
       x: this.x,
       columnHeights: this.columnHeights,
       aggregateHeight: this.aggregateHeight,
       bumpiness: this.bumpiness,
       holes: this.holes,
       lines: this.completeLines,
       rot: rot,
       pieceIndex: this.index,
       score: this.completeLines>1?this.score*-50:this.score,
       y:this.y
      })
      //console.log(this.prediction)
      this.predictionCount++}
      //if([0,3].indexOf(this.index))

     }

     let highestScore = -888833883778
     let highestLine=-3848883
     this.selectedIndex = 0
     for (let HIGH of this.prediction) {
      let evalS = HIGH['score']//+(HIGH['lines']*50)
      if (highestScore < evalS) {
       highestScore = evalS
       this.selectedIndex = HIGH['index']
      }
      if(highestLine<HIGH['lines']){
       
      }
      
     }
     this.bestPrediction=this.prediction[this.selectedIndex]
     
    }
//console.table(this.prediction[this.selectedIndex])
 
    this.score = 0

   },

   new: function(x, y) {
    var cells = makeArrayLength(x)
    for (var i = 0; i < x; i++) {
     cells[i] = makeArrayLength(y)
    }
    this.grid = cells
   },

   rotate: function(direction) {
     // Rotates tetromino
     var rotated = [];
     if (direction === -1) {
      for (var i = this.tetro.length - 1; i >= 0; i--) {
       rotated[i] = [];
       for (var row = 0; row < this.tetro.length; row++) {
        rotated[i][this.tetro.length - 1 - row] = this.tetro[row][i];
       }
      }
     } else if (direction === 1) {
      for (var i = 0; i < this.tetro.length; i++) {
       rotated[i] = [];
       for (var row = this.tetro.length - 1; row >= 0; row--) {
        rotated[i][row] = this.tetro[row][this.tetro.length - 1 - i];
       }
      }

     }



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


       this.x += this.kickData[curPos][x][0] - this.kickData[newPos][x][0];
       this.y += this.kickData[curPos][x][1] - this.kickData[newPos][x][1];
       this.tetro = rotated;
       this.pos = newPos;
       // TODO make 180 rotate count as one or just update finess 180s
       //this.finesse++;
       break;
      } else {

      }
     };



    },

    shift: function(way, direction) {
     if (way == 'full') {
      for (var i = 1; i < 30; i++) {
       if (!this.moveValid(i * direction, 0, this.tetro)) {
        this.x += i * direction - direction;
        break;
       } else {;
        this.x += i * direction - direction }
      }

     }
     else
     if (this.moveValid(direction, 0, this.tetro)) {
      this.x += direction;
      return true
     } else return false

    },

    getDrop: function(distance) {

     for (var i = 1; i <= distance; i++) {
      if (!this.moveValid(0, i, this.tetro)) {; return i - 1; break }
     }
     return i - 1
    },


    moveValid: function(cx, cy, tetro) {
     try {
      cx = cx + this.x;
      cy = Math.floor(cy + this.y);

      for (var x = 0; x < tetro.length; x++) {
       for (var y = 0; y < tetro[x].length; y++) {
        if (
         tetro[x][y] &&
         (cx + x < 0 ||
          cx + x >= 10 ||
          cy + y >= 22 ||
          this.grid[cx + x][cy + y])
        ) {
         return false;
        }
       }
      }

      return true;
     } catch (e) {}
    },

    addPieces: function(tetro) {

     this.once = false
     // Add the piece to the Stack2.
     let range = [];

     for (var x = 0; x < tetro.length; x++) {
      for (var y = 0; y < tetro[x].length; y++) {
       if (tetro[x][y]) {
        this.grid[x + this.x][y + this.y] = tetro[x][y];

        // Get this.column for finesse
        if (!this.once || x + this.x < this.column) {
         this.column = x + this.x;
         this.once = true;
        }
        // Check which lines get modified
        if (range.indexOf(y + this.y) === -1) {
         range.push(y + this.y);
         // This checks if any cell is in the play field. If there
         //  isn't any this is called a lock out and the game ends.
         ;
        }
       }
      }
     }
     // Lock out





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


       }
      }
      // Clear the line. This basically just moves down the Stack2.
      // TODO Ponder during the day and see if there is a more elegant solution.
      if (count > 9) { //this.varpiecedelay=frame+this.varpiecedelayadd+40
    
      }
     }
    },

  }







  var gtrisAIPredictor = new gtAIPredict()
var gtrisAIPredictor2 = new gtAIPredict()
var gtrisAIPredictor3 = new gtAIPredict()

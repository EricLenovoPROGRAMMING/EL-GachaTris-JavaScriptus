(function(){
class aiWorkspace{
constructor(rows, columns){
 this.grid=[]
 this.rows = rows;
 this.columns = columns;
 
 //this.grid. = this.columns
 for (var r = 0; r < this.columns; r++) {
  this.grid[r] = []
  this.grid[r].length = this.rows
  for (var c = 0; c < this.rows; c++) {
   this.grid[r][c] = 0;
  }
}}/**/

 clone(grid){
  var _grid = new aiWorkspace(22,10);
  for (var r = 0; r < this.columns; r++) {
   _grid.grid[r].length=this.rows
   for (var c = 0; c < this.rows; c++) {
    _grid.grid[r][c] = grid.grid[r][c];
   }
  }
  return _grid;
 }
 
}

var workspace_ai = new aiWorkspace()

 })()

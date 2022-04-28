/*
Author: Simon Laroche
Site: http://simon.lc/
Demo: http://simon.lc/tetr.js

Note: Before looking at this code, it would be wise to do a bit of reading about
the game so you know why some things are done a certain way.
*/
var submessage = document.getElementById('msgr2')

//this is how i would do it:
// assuming cleartextren and stack.varren are declared

// helper to get the Nth letter





'use strict';
var characters_folder



/**
 * Playfield.
 */
 

var soundfilelibrary;
var randomNumbergarbage = new Array();
var randomNumbertimegarbage = new Array()
var garbagesequence;
var MAX_REN = 0
var framedelay = 0
var randomGARBAGE = 0
var alertsoundactive = false;
var frameSkipped
let linosbool
var scorestats2 = $d('score2')
var stats2Piece=$d('piece2')
var linos, linos2
var cleartext
var cleartextren
var cleartextpc;
var disappearduration;
var spinCount
var statsscore, statsscore2
var TSD;
var cellSize;
var column;
var failTSD;
/**
 * Get html elements.
 */
 var msg = document.getElementById('msg');
var stats = document.getElementById('stats');
var statsTime = document.getElementById('time');
var msg2 = document.getElementById('msg2');
var stats2 = document.getElementById('stats2');
var statsTime2 = document.getElementById('time2');
var statsType = document.getElementById('linetsd')
var statsLines = document.getElementById('line'),statsLines2 = document.getElementById('line2');
var statsPiece = document.getElementById('piece'),statsPiece2 = document.getElementById('piece2');
var h3 = document.getElementsByTagName('h3');
var set = document.getElementById('settings');

// Get canvases and contexts
var holdCanvas = document.getElementById('hold');
var bgStackCanvas = document.getElementById('bgStack');
var stackCanvas = document.getElementById('stack');
var rectAniCanvas = document.getElementById('rectAnimations');

var activeCanvas = document.getElementById('active');
var previewCanvas = document.getElementById('preview');
var previewCanvas2 = document.getElementById('preview2');

var holdCanvas2 = document.getElementById('hold2');
var bgStackCanvas2 = document.getElementById('bgStack2');
var stack2Canvas = document.getElementById('stack2');
var rectAni2Canvas = document.getElementById('rectAnimations2');

var activeCanvas2 = document.getElementById('active2');
var preview2Canvas = document.getElementById('preview20');
var preview2Canvas2 = document.getElementById('preview22');


var spriteCanvas = document.getElementById('sprite');
var spriteCustom = document.getElementById('customSprite');
var spriteDIV = document.getElementById('customSpriteDiv');


var holdCtx = holdCanvas.getContext('2d');
var bgStackCtx = bgStackCanvas.getContext('2d');
var stackCtx = stackCanvas.getContext('2d');
var rectAniCtx = rectAniCanvas.getContext('2d');
var activeCtx = activeCanvas.getContext('2d');
var previewCtx = previewCanvas.getContext('2d');
var previewCtx2 = previewCanvas2.getContext('2d');

var holdCtx2 = holdCanvas2.getContext('2d');
var bgStackCtx2 = bgStackCanvas2.getContext('2d');
var stack2Ctx = stack2Canvas.getContext('2d');
var rectAni2Ctx = rectAni2Canvas.getContext('2d');
var activeCtx2 = activeCanvas2.getContext('2d');
var preview2Ctx = preview2Canvas.getContext('2d');
var preview2Ctx2 = preview2Canvas2.getContext('2d');



var spriteCtx = spriteCanvas.getContext('2d');

/**
 * Piece data
 */

// NOTE y values are inverted since our matrix counts from top to bottom.
var kickData = [
  [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]],
  [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]],
];
var kickDataT = [
  [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]],
  [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]],
];
var kickDataI = [
  [[0, 0], [-1, 0], [2, 0], [-1, 0], [2, 0]],
  [[-1, 0], [0, 0], [0, 0], [0, -1], [0, 2]],
  [[-1, -1], [1, -1], [-2, -1], [1, 0], [-2, 0]],
  [[0, -1], [0, -1], [0, -1], [0, 1], [0, -2]],
];
// TODO get rid of this lol.
var kickDataO = [[[0, 0]], [[0, 0]], [[0, 0]], [[0, 0]]];

var SpinCheckI = {
 highX: [[9, 7, 9, 1], [1, 3, 1, 3], [1, 2, 2, 1], [0, 2, 0, 2]],
 highY: [[0, 2, 0, 2], [1, 2, 2, 1], [1, 3, 1, 3], [1, 2, 2, 1]],
 lowX: [[-1, 4, -1, 4], [2, 2, 2, 2], [-1, 4, -1, 4], [1, 1, 1, 1]],
 lowY: [[1, 1, 1, 1], [-1, 4, -1, 4], [2, 2, 2, 2], [-1, 4, -1, 4]]
}
var SpinCheck1 = {
 highX: [[1, 2], [2, 2], [1, 0], [0, 0]],
 highY: [[1, 0], [1, 2], [2, 2], [1, 0]],
 lowyX: [[0, 2], [0, 0], [2, 0], [2, 2]],
 lowyY: [[2, 2], [0, 2], [0, 0], [2, 0]]
}
var SpinCheck1 = {
 highX: [[1, 0], [2, 2], [1, 2], [0, 0]],
 highY: [[0, 0], [1, 0], [2, 2], [1, 2]],
 lowX: [[2, 0], [0, 0], [0, 2], [2, 2]],
 lowY: [[2, 2], [2, 0], [0, 0], [0, 3]]
}
var SpinCheck0 = {
 highX: [[0, 2], [2, 2], [0, 2], [0, 0]],
 highY: [[0, 0], [0, 2], [2, 2], [0, 2]],
 lowX: [[0, 2], [0, 0], [0, 2], [2, 2]],
 lowY: [[2, 2], [0, 2], [0, 0], [0, 2]]
}
var SpinCheckT = {
 highX: [[0, 2], [2, 2], [0, 2], [0, 0]],
 highY: [[0, 0], [0, 2], [2, 2], [0, 2]],
 lowX: [[0, 2], [0, 0], [0, 2], [2, 2]],
 lowY: [[2, 2], [0, 2], [0, 0], [0, 2]]
}
var SpinCheckST = {
 highX: [[0, 2], [2, 2], [0, 2], [0, 0]],
 highY: [[0, 0], [0, 2], [2, 2], [0, 2]],
 lowX: [[0, 2], [0, 0], [0, 2], [2, 2]],
 lowY: [[2, 2], [0, 2], [0, 0], [0, 2]]
}
var SpinCheckZ = {
 highX: [[2, 0], [2, 1], [0, 2], [0, 1]],
 highY: [[0, 1], [2, 0], [2, 1], [0, 2]],
 lowX: [[-1, 3], [2, 1], [3, -1], [0, 1]],
 lowY: [[0, 1], [-1, 3], [2, 1], [3, -1]]
}

// Define shapes and spawns.
var PieceI = {
 index: 0,
 x: 2,
 y: -1,
 spin: SpinCheck0,
 kickData: kickDataI,
 tetro: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
};

var PieceJ = {
 index: 1,
 x: 3,
 y: 0,
 kickData: kickData,
 spin: SpinCheck0,
 tetro: [
  [2, 2, 0], //1st column
  [0, 2, 0],
  [0, 2, 0]], //Lst column
};
var PieceL = {
 index: 2,
 x: 3,
 y: 0,
 spin: SpinCheck0,
 kickData: kickData,
 tetro: [
  [0, 3, 0], 
  [0, 3, 0], 
  [3, 3, 0]],
};
var PieceO = {
 index: 3,
 x: 4,
 y: 0,
 kickData: kickDataO,
 tetro: [
  [4, 4],
  [4, 4]],
};
var PieceS = {
 index: 4,
 x: 3,
 y: 0,
 spin: SpinCheck1,
 kickData: kickData,
 tetro: [[0, 5, 0], [5, 5, 0], [5, 0, 0]],
};
var PieceT = {
 index: 5,
 x: 3,
 y: 0,
 spin: SpinCheckST,
 kickData: kickData,
 tetro: [[0, 6, 0], [6, 6, 0], [0, 6, 0]],
};
var PieceZ = {
 index: 6,
 x: 3,
 y: 0,
 spin: SpinCheck0,
 kickData: kickData,
 tetro: [[7, 0, 0], [7, 7, 0], [0, 7, 0]],
};
var pieces = [PieceI, PieceJ, PieceL, PieceO, PieceS, PieceT, PieceZ];

// Finesse data
// index x orientatio x column = finesse
// finesse[0][0][4] = 1
// TODO double check these.
var finesse = [
  [
    [1, 2, 1, 0, 1, 2, 1],
    [2, 2, 2, 2, 1, 1, 2, 2, 2, 2],
    [1, 2, 1, 0, 1, 2, 1],
    [2, 2, 2, 2, 1, 1, 2, 2, 2, 2],
  ],
  [
    [1, 2, 1, 0, 1, 2, 2, 1],
    [2, 2, 3, 2, 1, 2, 3, 3, 2],
    [2, 3, 2, 1, 2, 3, 3, 2],
    [2, 3, 2, 1, 2, 3, 3, 2, 2],
  ],
  [
    [1, 2, 1, 0, 1, 2, 2, 1],
    [2, 2, 3, 2, 1, 2, 3, 3, 2],
    [2, 3, 2, 1, 2, 3, 3, 2],
    [2, 3, 2, 1, 2, 3, 3, 2, 2],
  ],
  [
    [1, 2, 2, 1, 0, 1, 2, 2, 1],
    [1, 2, 2, 1, 0, 1, 2, 2, 1],
    [1, 2, 2, 1, 0, 1, 2, 2, 1],
    [1, 2, 2, 1, 0, 1, 2, 2, 1],
  ],
  [
    [1, 2, 1, 0, 1, 2, 2, 1],
    [2, 2, 2, 1, 1, 2, 3, 2, 2],
    [1, 2, 1, 0, 1, 2, 2, 1],
    [2, 2, 2, 1, 1, 2, 3, 2, 2],
  ],
  [
    [1, 2, 1, 0, 1, 2, 2, 1],
    [2, 2, 3, 2, 1, 2, 3, 3, 2],
    [2, 3, 2, 1, 2, 3, 3, 2],
    [2, 3, 2, 1, 2, 3, 3, 2, 2],
  ],
  [
    [1, 2, 1, 0, 1, 2, 2, 1],
    [2, 2, 2, 1, 1, 2, 3, 2, 2],
    [1, 2, 1, 0, 1, 2, 2, 1],
    [2, 2, 2, 1, 1, 2, 3, 2, 2],
  ],
];

/**
 * Gameplay specific vars.
 */
var gravityUnit = /*0.00390625/**/ 1 / 256; //1/256
var gravity,gravity2;
var gravityArr = (function() {
 var array = []
 array.push(0);
 for (var i = 1; i < 64; i++) array.push(i / 64);
 for (var i = 1; i <= 20; i++) array.push(i);
 return array;
})();

var settings = {
 DAS: 7,
 ARR: 1,
 Gravity: 0,
 'Soft Drop': 82,
 'Lock Delay': 30,
 Previews: 5,
 //Slowdown: 0,
 '60FPS Sync':0,
 RectAnimations:0,
 Size: 0,
 Character: 0,
 Sound: 1,
 Voice: 1,
 VFXVol: 100,
 SoundType: 0,
 Volume: 100,
 Commentary: 0,
 CMVol: 100,
 PieceSFX: 0,
 PieceVol: 100,
 Music:0,
 MFXVol:50,
 UIVol:50,
 Block: 0,
 Ghost: 0,
 Grid: 0,
 Outline: 0,
 Language: 0,
 
};

var setting = {
 DAS: range(0, 101),
 ARR: range(0, 12),
 Gravity: (function() {
  var array = [];
  array.push('Auto');
  array.push('0G');
  for (var i = 1; i < 64; i++) array.push(i + '/64G');
  for (var i = 1; i <= 20; i++) array.push(i + 'G');
  return array;
 })(),
 'Soft Drop': (function() {
  var array = [];
  for (var i = 1; i < 64; i++) array.push(i + '/64G');
  for (var i = 1; i <= 20; i++) array.push(i + 'G');
  return array;
 })(),
 'Lock Delay': range(0, 101),
 Previews: range(0,10),
//Slowdown: [60, 1, 6, 8, 10, 40],
RectAnimations:['ON','OFF'],
 Size: ['Auto', 'Small', 'Medium', 'Large'],
 Character: ['No Character', 'Flotalendy', 'ElishDimensions', 'Nyx4tune', 'Epicman33456', 'Tsukii', 'Paulina-Sena ZJ', 'Edxy', 'PandaLover', 'ArgoGacha', 'Alix', 'EricLenovo', 'KailyDimensions', 'Agate Loran', 'Beowulf', 'LeoSnowy', 'DaWildOne', 'ItsBreezeyFears', 'Starshine','GloriaFam'],
 '60FPS Sync':['Sync', 'Async'],
 Sound: ['Off', 'On'],
 Voice: ['Off', 'On'],
 VFXVol: range(0, 101),
 SoundType: ['GTJS', 'TGM3','TetraLegends','Farter-Memes','TETR.IO','PPT','Nullpomino'],
 Volume: range(0, 101),
 Commentary: ['TTS', 'FloSpin Double'],
 CMVol: range(0, 101),
 PieceSFX: ['OFF', 'GTJS', 'TGM3'],
 PieceVol: range(0, 101),
 Music:['OFF','Korobeiniki'],
 MFXVol:range(0,101),
 UIVol:range(0,101),
 Block: ['Shaded', 'Solid', 'Glossy', 'Arika', 'World', 'Block of Flotalendy','Gloss and JS'],
 Ghost: ['Normal', 'Colored', 'Off'],
 Grid: ['Off', 'On'],
 Outline: ['Off', 'On'],
 Language: ['English', 'Filipino', 'French'],
};


//voices
var characters_folder = 'NO CHAR'

$d('playernamequery').oninput=()=>{
 localStorage['playerName']=$d('playernamequery').value
}
$d('playernamequery').value=localStorage['playerName']






var frame;

/**
 *Pausing variables
 */

var startPauseTime;
var pauseTime;

/**
 * 0 = Normal
 * 1 = win
 * 2 = countdown
 * 3 = game not played
 * 9 = loss
 */
var gameState = 3;

var paused = false;
var lineLimit = 40

var replayKeys={};
var watchingReplay = false;
var toGreyRow;
var gametype;
//TODO Make dirty flags for each canvas, draw them all at once during frame call.
// var dirtyHold, dirtyActive, dirtyStack, dirtyPreview;
var lastX, lastY, lastPos
var lastX2, lastY2, lastPos2

// Stats
var lines;
var statsFinesse;
var piecesSet;
var pieces2Set
var startTime;
var digLines;
var minoes;

// Keys
var keysDown, keysDown2, keysDownKeyboard
var lastKeys, lastKeys2;
var released, released2;

var binds = {
 pause: 27,
 moveLeft: 37,
 moveRight: 39,
 moveDown: 40,
 hardDrop: 32,
 holdPiece: 67,
 rotRight: 88,
 rotLeft: 90,
 rot180: 16,
 retry: 82,
};
var flags = {
 hardDrop: 1,
 moveRight: 2,
 moveLeft: 4,
 moveDown: 8,
 holdPiece: 16,
 rotRight: 32,
 rotLeft: 64,
 rot180: 128,
};

function resize() {
 var a = document.getElementById('a');
 var b = document.getElementById('b');
 var bA = document.getElementById('bA');
 var c = document.getElementById('c');
 var content = document.getElementById('content');
 var GM = document.getElementById('garbagemeter');
 var GM2 = document.getElementById('active_GM');
 var FM = document.getElementById('active_FM');
 var mainmenu = document.getElementById('menumain')
 var iconCHAR=$d('iconCHAR')
  var iconCHARAI=$d('iconCHARAI')
 let selectorS=(args)=>{return $d(`selector${args}`)}
 var nameplate=$d('nameplate')
 var diaDIV=$d('dialogueDLC')
 var aniDIV=$d('rectAnimationDIV')
 
 var nameplate2 = $d('nameplate2')
 var aniDIV2 = $d('rectAnimationDIV2')
 
 var a2 = document.getElementById('a2');
 var b2 = document.getElementById('b2');
 var bA2 = document.getElementById('bA2');
 var c2 = document.getElementById('c2');
 var content2 = document.getElementById('content2');
 var GMt = document.getElementById('garbagemeter2');
 var GMt2 = document.getElementById('active_GM2');
 
 
 // TODO Finalize this.
 // Aspect ratio: 1.024
 var screenHeight = window.innerHeight - 34;
 var screenWidth = ~~(screenHeight * 2);
 if (screenWidth > window.innerWidth){
  screenHeight = ~~(window.innerWidth / 1.024);
  
 }else{
  
 }
 
 if(window.innerHeight>window.innerWidth||!('1v1params' in replayKeys)){
  content2.style.display='none'
  content.style.width='100%'
 }else{
  content2.style.display='flex'
  content.style.width='50%'
  content2.style.width='50%'
 }

 if (settings.Size === 1 && screenHeight > 602) cellSize = 5;
 else if (settings.Size === 2 && screenHeight > 602) cellSize = 20;
 else if (settings.Size === 3 && screenHeight > 902) cellSize = 40;
 else cellSize = Math.max(~~(screenHeight / 22), 8);

 var padnum = (window.innerHeight - (cellSize * 20 + 2)) / 3;
 var padnum2 = (window.innerHeight - (cellSize * 20 + 2)) / 1.5
var padnum3 = (window.innerHeight - (cellSize * 20)) / 3

 var pad = padnum + 'px'
 content.style.padding = content2.style.padding = `${pad} 0`;
 stats.style.bottom = stats2.style.bottom= padnum2 + 'px';
// stats.style.left = /*(cellSize*0.003)*/ /**/ d.style.marginLeft * padnum + 'px'
 
 mainmenu.style.height = 100 + '%'
 mainmenu.style.width = 100 + '%' 
 // Size elements
 a.style.padding = a2.style.padding = '0 0.5rem ' + ~~(cellSize / 2) + 'px';
 
 rectAniCanvas.width=rectAni2Canvas.width=aniDIV.style.width=aniDIV2.style.width=cellSize*11
 rectAniCanvas.height=rectAni2Canvas.height=aniDIV.style.height=aniDIV2.style.height=cellSize*3
/*rectAniCanvas.style.height=rectAniCanvas.style.width='100%'
rectAni2Canvas.style.height=rectAni2Canvas.style.width='100%'
*/

 stackCanvas.width = activeCanvas.width = bgStackCanvas.width = cellSize * 10;
 stackCanvas.height = activeCanvas.height = bgStackCanvas.height =
  cellSize * 20;
 b.style.width = stackCanvas.width + (cellSize * 0.5) + 'px';
 b.style.height = stackCanvas.height + 'px';
 bA.style.width = stackCanvas.width + 'px';
 bA.style.height = stackCanvas.height + 'px';
 GM.style.width = cellSize * 0.5 + 'px';
 GM.style.height = stackCanvas.height + 'px';
 GM2.style.width = cellSize * 0.5 + 'px';
 GM2.style.height = 100 + '%';
 FM.style.width = cellSize * 0.5 + 'px';
 FM.style.height = 100 + '%';
 
 nameplate.style.top=stackCanvas.height+padnum3+5+'px'
 nameplate.style.width=b.style.width
 nameplate.style.height=cellSize*1+'px'
 aniDIV.style.top=stackCanvas.height+padnum3+5+'px'

stack2Canvas.width = activeCanvas2.width = bgStackCanvas2.width = cellSize * 10;
 stack2Canvas.height = activeCanvas2.height = bgStackCanvas2.height =
  cellSize * 20;
 b2.style.width = stack2Canvas.width + (cellSize * 0.5) + 'px';
 b2.style.height = stack2Canvas.height + 'px';
 bA2.style.width = stack2Canvas.width + 'px';
 bA2.style.height = stack2Canvas.height + 'px';
 GMt.style.width = cellSize * 0.5 + 'px';
 GMt.style.height = stack2Canvas.height + 'px';
 GMt2.style.width = cellSize * 0.5 + 'px';
 GMt2.style.height = 100 + '%';
 
 
 nameplate2.style.top=stack2Canvas.height+padnum3+5+'px'
 nameplate2.style.width=b2.style.width
 nameplate2.style.height=cellSize*1+'px'
 aniDIV2.style.top=stack2Canvas.height+padnum3+5+'px'




// diaDIV.style.marginBottom=~~(window.innerHeight)- diaDIV.style.height+'px'
 diaDIV.style.height=cellSize*3+'px'
 
iconCHAR.style.height=iconCHARAI.style.height=$d('selectorICON').style.height = $d('selectorICONAI').style.height = /* (cellSize * 5) + 'px';*/ `${cellSize*5}px`

//iconCHAR.style.height = $d('selectorICON').style.height;

 holdCanvas.width = cellSize * 4;
 holdCanvas.height = cellSize * 2;
 a.style.width = holdCanvas.width + 'px';
 a.style.height = holdCanvas.height + 'px';

 previewCanvas.width = cellSize * 4;
 previewCanvas.height = stackCanvas.height;
 previewCanvas2.width = cellSize * 4;
 previewCanvas2.height = cellSize * 2;
 c.style.width = previewCanvas.width + 'px';
 stats.style.left=stackCanvas.width/1
 c.style.height = b.style.height;
 
 // Scale the text so it fits in the thing.
 // TODO get rid of extra font sizes here.
 msg.style.marginTop=`${cellSize*10}px`;
 msg.style.fontSize = ~~(stackCanvas.width / 6) + 'px';
 stats.style.fontSize = ~~(stackCanvas.width / 11) + 'px';
 
 //(((((((((())))))))))
 
 holdCanvas2.width = cellSize * 4;
 holdCanvas2.height = cellSize * 2;
 a2.style.width = holdCanvas2.width + 'px';
 a2.style.height = holdCanvas2.height + 'px';
//nameplate2.style.transform=`translateX(${a2.width}px)`


 preview2Canvas.width = cellSize * 4;
 preview2Canvas.height = stack2Canvas.height;
 preview2Canvas2.width = cellSize * 4;
 preview2Canvas2.height = cellSize * 2;
 c2.style.width = previewCanvas2.width + 'px';
 stats2.style.left=stack2Canvas.width
 c2.style.height = b2.style.height;
 
 // Scale the text so it fits in the thing.
 // TODO get rid of extra font sizes here.
 msg2.style.marginTop=`${cellSize*10}px`;
 msg2.style.fontSize = ~~(stack2Canvas.width / 6) + 'px';
 stats2.style.fontSize = ~~(stack2Canvas.width / 11) + 'px';

 
 
 
 document.documentElement.style.fontSize = ~~(stackCanvas.width / 16) + 'px';

 stats.style.width = a.style.width;
 ;stats2.style.width = a2.style.width;
// nameplate2.style.transform=`translateX(${a2.width}px)`


 for (var i = 0, len = h3.length; i < len; i++) {
  h3[i].style.lineHeight = a.style.height;
  h3[i].style.fontSize = stats.style.fontSize;
 }

 // Redraw graphics
 makeSprite();

 if (settings.Grid === 1) {
  bg(bgStackCtx);
  bg(bgStackCtx2);

 }
 if (gameState === 0) {
  piece.drawGhost();
  piece.draw();
  stack.draw();
  preview.draw();
  if (hold.piece) {
   hold.draw();
  }
 }
}
addEventListener('resize', resize, false);

//addEventListener('keydown',function(e){$iH('DEBUGTEXT', e.keyCode)}, false)/**/


var replaysettings;
var lini = document.getElementById('DEBUGTEXT')
var gametime;
/**
 * ========================== Model ===========================================
 */
var intid;
/**
 * Resets all the settings and starts the game.
 */
function init(gt, gamep) {
 gameRunning=true
 if (gt === 'replay') {
  watchingReplay = true;
  if (gamep !== void 0) { gametype = gamep }

 } else {
  gamediff = undefined
  watchingReplay = false;

  replayKeys = {
   MFX:settings.Music
  };
  if($d('playernamequery').value!==''){
  replayKeys.name=$d('playernamequery').value
  }else replayKeys.name=``
  replayKeys.keys = {}
  if (gt == 115) {
   replayKeys.garbagesend = {}
   replayKeys.garbagereceive = {}
  }
  if (gt == 116) {
   replayKeys.DAParams = {}
   replayKeys.DAParams['timeframe'] = customtime
   replayKeys.DAParams['maxmiss'] = mistakeDA
   replayKeys.DAParams['level'] = mapdifficulty
  }
  // TODO Make new seed and rng method.
  replayKeys.seed = ~~(Math.random() * 2147483645) /**/ //~~(`1355396022`);
  replayKeys.DAS = settings.DAS
  replayKeys.ARR = settings.ARR
  replayKeys.GRAV = settings.Gravity
  replayKeys.SFT = settings['Soft Drop']
  replayKeys.LCK = settings['Lock Delay']
  replayKeys.PREV = settings.Previews
  lineLimit = 40
  if (gt == 0) {
   replayKeys.sprintParams = {}
   replayKeys.sprintParams.queueType = sprintParameter.QUEUETYPE
   replayKeys.sprintParams.lineLimit = sprintParameter.LINELIMIT
  }
  replayKeys.gameparameter = gt

  if (gt === 117) {
   replayKeys.marathonParams = {
    level: marathonParameter.LEVEL,
    lineLimit: marathonParameter.LINELIMIT == 'infinity' ? 'infinity' : marathonParameter.LINELIMIT,
    linesRequire: marathonParameter.LINESREQ
   }
  }
   if (gt === 118) {
    replayKeys.masterParams = {
     level: masterParameter.LEVEL,
     lineLimit: masterParameter.LINELIMIT == 'infinity' ? 'infinity' : masterParameter.LINELIMIT,
     linesRequire: masterParameter.LINESREQ
    }
    
   }
   if (gt==119) {
    replayKeys['1v1params'] = {
     DAS: 7,
     ARR: 1,
     GRAV: 0,
     SFT: 32,
     LCK: replayKeys.LCK,
     PREV: 5,
     keys: {},
     seed: ~~(Math.random() * 2147483645),
     character:vsParameter.CHARACTER,
     name:`${vsParameter.NAME}`,
     pps:vsParameter.PPSLIMIT,
     kps:vsParameter.KEYSPEED
    }
    
   }


   gametype = gt;

  }
  loadMFX()
  playmfx('stop','start')
  playmfx('stop','loop')

  resetfieldposition()
  $("#SHOWFEVER").css('visibility', 'hidden')
  document.getElementById('active_GM').style.top = '100%'
  document.getElementById('active_FM').style.top = '100%'
  document.getElementById('active_FM').style.color = '#0ff'

  minoesdetectwarning = 0

  document.getElementById('b').style.animation = "clear"
  document.getElementById('active_FM').style.animation = "clear"

 $d('nameplayer').innerHTML=replayKeys.name==''?`??? (${setting.Character[settings.Character]})`: replayKeys.name
if('1v1params' in replayKeys){
  $d('nameplayer2').innerHTML=replayKeys['1v1params'].name==''?`??? (${setting.Character[replayKeys['1v1params'].character]})`: replayKeys['1v1params'].name
  gtrisAI.KPSCap=replayKeys['1v1params'].kps
    gtrisAI.PPSLimit=replayKeys['1v1params'].pps


}else $d('nameplayer2').innerHTML=''

  IRStime = 0
  failToClear = false
  ClearSuccess = false
  stack.varpiecedelay = -82
  var retryquickprevent = false
  var replaytime = 0
  $iH('nextTXT', TransText('next'))
  if(gametype!==116)
    $iH('guitext_hold', TransText('hold'))
  else
    $iH('guitext_hold', '')
  function st() {
   /*for (var i=0;i<1500;i++) {gameLoop(); if (piecesSet==1) break}*/
   watchingReplay;
   while (retryquickprevent == true) {
    retryquickprevent = false
    for (var i = 0; i < 5; i++)
     clearInterval(intid)
    if (true) {
     intid = setInterval(function() {
      if(gameRunning){
      /* if (settings.Slowdown !== 0 && gametype == 0 && !paused) {
        playsfx('movesound')
        if (frame in replayKeys.keys && replayKeys.keys[frame] == 0) playsfx('spinsound')
       } /**/
      if (toGreyRow <= 0) clearInterval('intid')
      if (watchingReplay || setting['60FPS Sync'][settings['60FPS Sync']]=='Sync') {
       if (paused == true) {
        replaytime++
/*  */
       } else
        gametime = Math.floor((Date.now() - startTime - (pauseTime)) / (1000 / 60))

       gamediff = gametime - (replaytime + 1 + frame) //(startPauseTime - startTime - (pauseTime) / (1000 / 60));
       for (i = 0; i < gamediff; i++) gameLoop()
      } else {
    /*  if (settings.Slowdown !== 0) { if ((piece.y < -10 || piece.index == 'reset') && (gameState == 2 || gameState == 0)) { for (; piece.index == 'reset' || piece.y < -10;) { gameLoop() } } else gameLoop() } else /**/ gameLoop()
      }
      }
     }, 1000 / 60 /*setting.Slowdown[settings.Slowdown]/**/ )
    }
    
   }
  }

  function ou() {

   while (retryquickprevent == false) {


    retryquickprevent = true
    setTimeout(st, 1)
   }
  }
  ou()
  document.getElementById("readybar").value = 0
  document.getElementById("readybar").max = 150
  try {
   characterinit(stack)


  } catch (e) {
   alert(e)
  }

  document.getElementById('b').style.border = "0.2em solid #fff"

  lineLimit = (replayKeys.sprintParams !== undefined ? replayKeys.sprintParams.lineLimit : 40);

  //Reset
statsLines.innerHTML=
PENDTXT.innerHTML=
PENDNUM.innerHTML=''
  column = stack2.column = 0;
  
  keysDown = 0;
  keysDown2 = 0
  keysDownKeyboard = 0
  lastKeys = lastKeys2 = 0;
  released = released2 = 255;
  //TODO Check if needed.
  piece.shiftDir = piece2.shiftDir = 0;
  piece.shiftReleased = piece2.shiftReleased = true;

  startPauseTime = 0;
  pauseTime = 0;
  paused = false;
  garbrowcount = 0
  marathonParameter.activity.LEVEL = 1
  masterParameter.activity.LEVEL = 1

  if (gametype == 117 && replayKeys.marathonParams !== undefined) {
   marathonParameter.activity.LINESREQ = replayKeys.marathonParams.linesRequire * replayKeys.marathonParams.level
   marathonParameter.activity.LEVEL = replayKeys.marathonParams.level
  }

  if (gametype == 118 && replayKeys.masterParams !== undefined) {
   masterParameter.activity.LINESREQ = replayKeys.masterParams.linesRequire * replayKeys.masterParams.level
   masterParameter.activity.LEVEL = replayKeys.masterParams.level
  }
  

  rng.seed = replayKeys.seed;
  
  if('1v1params' in replayKeys || gametype == 119)
  rngp2.seed = replayKeys['1v1params'].seed;
  
  rng2.seed = replayKeys.seed /**/ /*1641392488/**/ //1355396022
  toGreyRow = 21;
  toGreyRow2 = 21
  frame = 0;
  frameSkipped = 0
  FAILS = 0
  whiletrigger = true
  whiletrigger2 = true
  lastPos = 'reset';
  piece.index = 'reset'
  
  lastPos2 = 'reset';
  piece2.index = 'reset'
  
  stack.new(10, 22);
  stack.newTemp(10, 22);
  
  stack2.new(10, 22);
  stack2.newTemp(10, 22);
  
  IRScount = 0
  IHScount = 0
  HoldTemp = void 0
  RENTemp = -1
  stack.B2BTemp = -1
  PreviewGrabTemp = []
  HoldTemp = void 0

  feverActivate = false
  feverAble = false
  feverTimeEnable = false
  feverTime = 0
  feverTimeNow = -1
  gachatrises = 0
  
  hold.piece = hold2.piece = void 0;
  if (replayKeys.GRAV === 0 && gametype !== 117) { gravity = gravityUnit * 4; }
  if (gametype == 117) { gravity = gravityUnit * 4 + (marathonParameter.activity.LEVEL < 20 ? MarathonSpeed[marathonParameter.activity.LEVEL - 1] : 20) }
  if (gametype == 118) { gravity = gravityUnit * 4 + 22 }

  if('1v1params' in replayKeys)
  if (replayKeys['1v1params'].GRAV === 0) { gravity2 = gravityUnit * 4; }


  startTime = Date.now();
  stack.clearrows = []
  preview.init();
  
  stack2.clearrows = []
  preview2.init();
  //preview.draw();

  statsFinesse = 0;
  lines = 0;
  piecesSet = 0;
  pieces2Set=0
  gameState = 3
  statsPiece.innerHTML = piecesSet;
  statsPiece2.innerHTML = pieces2Set;
  statsLines.innerHTML = lineLimit - lines;
  boardnum = 0
  failsDA = 0
  successesDA = 0
  statistics();
  clear(stackCtx);
  clear(activeCtx);
  clear(holdCtx);
  

  
    statistics2();
    clear(stack2Ctx);
    clear(activeCtx2);
    clear(holdCtx2);

  if (varfieldenable) {
   document.getElementById('bgFIELD').src = fieldload
   document.getElementById('bgFIELD').style = "width:100%;height:100%;opacity:1"
  } else {
   document.getElementById('bgFIELD').style.opacity = 0
   document.getElementById('bgFIELD').style = "width:100%;height:100%"
  }
  
    if (varfieldenable2) {
     document.getElementById('bgFIELD2').src = fieldload2
     document.getElementById('bgFIELD2').style = "width:100%;height:100%;opacity:1"
    } else {
     document.getElementById('bgFIELD2').style.opacity = 0
     document.getElementById('bgFIELD2').style = "width:100%;height:100%"
    }
  
  
  piece.y = piece2.y = -93
  statsLines.style.color =statsLines2.style.color= "#fff"
  timewarning = false
  stack.varpiecedelay = -80
  stack.b2b = -1;
  renenable = -4;
  stack.varren = -1;
  
  stack2.varpiecedelay = -80
  stack2.b2b = -1;
  stack2.renenable = -4;
  stack2.varren = -1;
  
  minoes = 0;
  stackscore = 0
  dropscore = 0
  piece2.dropscore=0
  disappearduration = 0;disappearduration2=-38
  statsscore = 0
  statsscore2 = 0
  garbagesequence = 0
  stack.garbagenumber = []
  
  stackscore2 = 0
  dropscore2 = 0
  
  stack2.garbagenumber = []
  
  randomGARBAGE = 0
  framedelay = 0
  


  linos = 1
  linos2 = 1
  if (gt == 117) {
   statsLines.innerHTML = `LV. ${marathonParameter.activity.LEVEL}`
   if (replayKeys.marathonParams.lineLimit !== 'infinity') {
    statsType.innerHTML = `${lines}/${replayKeys.marathonParams.lineLimit} ${TransText('line')}`
   } else {
    statsType.innerHTML = `${lines} LINE(S)`
   }
  }
  if (gametype == 118) {
   statsLines.innerHTML = `M${masterParameter.activity.LEVEL}`
   if (replayKeys.masterParams.lineLimit !== 'infinity') {
    statsType.innerHTML = `${lines}/${replayKeys.masterParams.lineLimit} ${TransText('line')}`
   } else {
    statsType.innerHTML = `${lines} ${TransText('line')}`
   }
  }
  if(gametype==119){
   statsLines.innerHTML=''
  }
  if (gametype === 3) {
   // Dig Race
   // make ten random numbers, make sure next isn't the same as last?
   //TODO make into function or own file.

   //digLines = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
   digLines = range(12, 22)
   minoes = 90
   statsLines.innerHTML = 10;
   // statsLines.innerHTML = 10;
   var randomNums = []
   for (var i = 0; i < 10; i++) {
    var random = ~~(rng.next() * 10);
    if (random !== randomNums[i - 1]) randomNums.push(random);
    else i--;
   }
   for (var y = 21; y > 11; y--) {
    for (var x = 0; x < 10; x++) {
     if (randomNums[y - 12] !== x) {
      stack.grid[x][y] = 8;
     }
    }
   }
   stack.draw();
  }

  if (gametype === 113) {
   // TSD only
   // make ten random numbers, make sure next isn't the same as last?
   //TODO make into function or own file.


   MAX_REN = 0
   statsLines.innerHTML = MAX_REN;

   statsType.innerHTML = TransText('renmax')

   for (var xz = -1; xz < 22; xz++) {
    for (var cx = 0; cx < 10; cx++) {
     stack.grid[cx][xz] = 8
    }

   }
   for (var xz = -1; xz < 22; xz++) {
    for (var cx = 3; cx < 7; cx++) {
     stack.grid[cx][xz] = 0

    }

   }
   stack.grid[3][21] = 3
   stack.grid[3][20] = 3
   stack.grid[4][20] = 3
   stack.draw()

  }
  if (gametype == undefined) {
   statsType.innerHTML = '';
   statsLines.innerHTML = '';
  }
  if (gametype == 0 || gametype == 3) {
   statsType.innerHTML = TransText('line');
  }
  if (gametype == 114 || gametype == 115) {
   statsLines.innerHTML = '2:00.00'
   statsType.innerHTML = TransText('timer')

  }
  if (gametype === 115) {
   PENDTXT.innerHTML = TransText('pending')
   PENDNUM.innerHTML = 0
  } else {
   PENDTXT.innerHTML = ''
   PENDNUM.innerHTML = ''
  }
  if (gametype === 116) {
   var time = replayKeys.DAParams['timeframe']
   var seconds = ((time / 60) % 60).toFixed(2);
   var minutes = (Math.floor((time) / 3600)).toFixed(0);
   statsLines.innerHTML =
    minutes + (seconds < 10 ? ':0' : ':') + seconds;
   statsType.innerHTML = TransText('timer')
   PENDTXT.innerHTML = `${TransText('boards')}: ${boardnum}<br/>${TransText('phases')}: ${replayKeys.DAParams['level']}<br/>${TransText('successes')}: ${successesDA}<br/>${TransText('fails')}: ${failsDA}/${replayKeys.DAParams['maxmiss']}`
  }
  if (gametype === 111) {
   // TSD only
   // make ten random numbers, make sure next isn't the same as last?
   //TODO make into function or own file.


   TSD = 0;
   statsLines.innerHTML = TSD;

   statsType.innerHTML = 'T-SPIN DOUBLES'

  }
  if (gametype === 112) {
   // TSD only
   // make ten random numbers, make sure next isn't the same as last?
   //TODO make into function or own file.


   stack.garbagenumber = [];
   statsLines.innerHTML = stack.garbagenumber.length;

   statsType.innerHTML = TransText('pending')

  }



  if (window.innerHeight > window.innerWidth ||!('1v1params' in replayKeys)) {
   $d('content2').style.display = 'none'
   $d('content2').style.visibility = 'none'

   $d('content').style.width = '100%'
  } else {
   $d('content2').style.visibility = 'show'

   $d('content2').style.display = 'flex'
   $d('content').style.width = '50%'
   $d('content2').style.width = '50%'
  }
  menu();


  // Only start a loop if one is not running already.
  if (gameState === 3) {
   gameState = 2;
   gameLoop();
  } else {
   gameState = 2;
  }
 }

 function range(start, end, inc) {
  inc = inc || 1;
  var array = []
  for (var i = start; i < end; i += inc) {
   array.push(i);
  }
  return array;
 }

 /**
  * Add divisor method so we can do clock arithmetics. This is later used to
  *  determine tetromino orientation.
  */
 Number.prototype.mod = function(n) {
  return ((this % n) + n) % n;
 };

 /**
  * Shim.
  */
 window.requestAnimFrame = (function() {

  return (
   function(callback) {
    //  
    setTimeout(callback, 1000/60)

   } ||
   window.requestAnimationFrame ||
   window.mozRequestAnimationFrame ||
   window.webkitRequestAnimationFrame

  );
 })();

 function pause() {
  if (gameState === 0 || gameState === 2) {
   paused = true;
   if (startPauseTime == 0) {
    startPauseTime = Date.now()
   };
   msg.innerHTML = 'Paused';
   menu(4);
  }
 }

 function unpause() {
  if (startPauseTime == 0)
   pauseTime = Date.now() - startPauseTime;
  else frameSkipped = Date.now() / (1000 / 60)
  while (gamediff < -1)
   gamediff += 3
  paused = false;
  playmfx('stop', 'start')
       playmfx('play', 'start')
  msg.innerHTML = '';
  warningalarm()
  alertsoundactive = false

  menu()
  morefunction()
 }

 /**
  * Park Miller "Minimal Standard" PRNG.
  */
 //TODO put random seed method in here.
 var rng = new function() {
  this.seed = 1;
  this.next = function() {
   // Returns a float between 0.0, and 1.0
   return this.gen() / 2147483647;
  };
  this.gen = function() {
   return (this.seed = (this.seed * 16807) % 2147483647);
  };
 }();

 /**
  * EricLenovo: added another PRNG of the same kind.
  */
 var rng2 = new function() {
  this.seed = 1;
  this.next = function() {
   // Returns a float between 0.0, and 1.0
   return this.gen() / 2147483647;
  };
  this.gen = function() {
   return (this.seed = (this.seed * 16807) % 2147483647);
  };
 }();
 
 var rngp2 = new function() {
  this.seed = 1;
  this.next = function() {
   // Returns a float between 0.0, and 1.0
   return this.gen() / 2147483647;
  };
  this.gen = function() {
   return (this.seed = (this.seed * 16807) % 2147483647);
  };
 }();

 /**
  * Draws the stats next to the tetrion.
  */
 function statistics() {
  if (gameState == 0) {
   var time = frame - 100
   var seconds = ((time / 60) % 60).toFixed(2);
   var minutes = (Math.floor((time) / 3600)).toFixed(0);
   statsTime.innerHTML =
    minutes + (seconds < 10 ? ':0' : ':') + seconds;
   var pps = piecesSet / (time / 60)
   document.getElementById('pps').innerHTML = pps.toFixed(2).concat(' PPS')
  }
 }
 
  function statistics2() {
   if (gameState == 0) {
    var time = frame - 100
    var seconds = ((time / 60) % 60).toFixed(2);
    var minutes = (Math.floor((time) / 3600)).toFixed(0);
    statsTime2.innerHTML =
     minutes + (seconds < 10 ? ':0' : ':') + seconds;
    var pps = pieces2Set / (time / 60)
    document.getElementById('pps2').innerHTML = pps.toFixed(2).concat(' PPS')
   }
  }

 // ========================== View ============================================

 /**
  * Draws grid in background.
  */
 function bg(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = '#000000';
  for (var x = -1; x < ctx.canvas.width + 1; x += cellSize) {
   ctx.fillRect(x, 0, 10 / cellSize, ctx.canvas.height);
  }
  for (var y = -1; y < ctx.canvas.height + 1; y += cellSize) {
   ctx.fillRect(0, y, ctx.canvas.width, 10 / cellSize);
  }
 }

 /**
  * Draws a pre-rendered mino.
  */
 function drawCell(x, y, color, ctx) {
  x = x * cellSize;
  x = ~~x;
  y = ~~y * cellSize - 2 * cellSize;
  ctx.drawImage(
   spriteCanvas,
   color * cellSize,
   0,
   cellSize,
   cellSize,
   x,
   y,
   cellSize,
   cellSize,
  );
 }


 //sound files


 var colorDA = [
    // 0         +10        -10        -20
    ['#888888', '#dddddd', '#a6a6a6', '#8b8b8b'],
    ['#00aaaa', '#4cd7b6', '#009f81', '#008568'],
    ['#0000dd', '#57b1f6', '#007dbd', '#0064a2'],
    ['#dd4400', '#ff993f', '#c86400', '#a94b00'],
    ['#aaaa00', '#ffdf3a', '#d1a800', '#b38e00'],
    ['#00aa00', '#b9e955', '#81b214', '#659700'],
    ['#aa0044', '#b873d4', '#81409d', '#672782'],
    ['#aa0000', '#ff6853', '#c62c25', '#a70010'],
    ['#111111', '#a3a3a3', '#6f6f6f', '#575757'],
    ['rgba(255,255,255,1)']
  ];





 /**
  * Pre-renders all mino types in all colors.
  */
 function makeSprite() {
  var shaded = [
    // 0         +10        -10        -20
    ['#c1c1c1', '#dddddd', '#a6a6a6', '#8b8b8b'],
    ['#25bb9b', '#4cd7b6', '#009f81', '#008568'],
    ['#3397d9', '#57b1f6', '#007dbd', '#0064a2'],
    ['#e67e23', '#ff993f', '#c86400', '#a94b00'],
    ['#efc30f', '#ffdf3a', '#d1a800', '#b38e00'],
    ['#9ccd38', '#b9e955', '#81b214', '#659700'],
    ['#9c5ab8', '#b873d4', '#81409d', '#672782'],
    ['#e64b3c', '#ff6853', '#c62c25', '#a70010'],
    ['#898989', '#a3a3a3', '#6f6f6f', '#575757'],
  ];
  var solid = [
    // 0         +10        -10        -20
    ['#cccccc', '#dddddd', '#a6a6a6', '#8b8b8b'],
    ['#00ffff', '#4cd7b6', '#009f81', '#008568'],
    ['#0000ff', '#57b1f6', '#007dbd', '#0064a2'],
    ['#ff7700', '#ff993f', '#c86400', '#a94b00'],
    ['#ffff00', '#ffdf3a', '#d1a800', '#b38e00'],
    ['#00ff00', '#b9e955', '#81b214', '#659700'],
    ['#ff0077', '#b873d4', '#81409d', '#672782'],
    ['#ff0000', '#ff6853', '#c62c25', '#a70010'],
    ['#555555', '#a3a3a3', '#6f6f6f', '#575757'],
    ['rgba(255,255,255,1)']
  ];
  var glossy = [
    //25         37         52         -21        -45
    ['#ffffff', '#ffffff', '#ffffff', '#888888', '#4d4d4d'],
    ['#7bffdf', '#9fffff', '#ccffff', '#008165', '#00442e'],
    ['#6cdcff', '#93feff', '#c2ffff', '#00629f', '#002c60'],
    ['#ffc166', '#ffe386', '#ffffb0', '#aa4800', '#650500'],
    ['#ffff6a', '#ffff8c', '#ffffb8', '#b68a00', '#714f00'],
    ['#efff81', '#ffffa2', '#ffffcd', '#6b9200', '#2c5600'],
    ['#dc9dfe', '#ffbeff', '#ffe9ff', '#5d287e', '#210043'],
    ['#ff9277', '#ffb497', '#ffe0bf', '#a7000a', '#600000'],
    ['#cbcbcb', '#ededed', '#ffffff', '#545454', '#1f1f1f'],
  ];
  var tgm = [
    ['#7b7b7b', '#303030', '#6b6b6b', '#363636'],
    ['#f08000', '#a00000', '#e86008', '#b00000'],
    ['#00a8f8', '#0000b0', '#0090e8', '#0020c0'],
    ['#f8a800', '#b84000', '#e89800', '#c85800'],
    ['#e8e000', '#886800', '#d8c800', '#907800'],
    ['#f828f8', '#780078', '#e020e0', '#880088'],
    ['#00e8f0', '#0070a0', '#00d0e0', '#0080a8'],
    ['#78f800', '#007800', '#58e000', '#008800'],
    ['#7b7b7b', '#303030', '#6b6b6b', '#363636'],
  ];
  var world = []
  world[0] = tgm[0];
  world[1] = tgm[6];
  world[2] = tgm[2];
  world[3] = tgm[3];
  world[4] = tgm[4];
  world[5] = tgm[7];
  world[6] = tgm[5];
  world[7] = tgm[1];
  world[8] = tgm[8];
  var custom = [
    	new Image(),
    	'block.png'
    	]

  spriteCanvas.width = cellSize * 9;
  spriteCanvas.height = cellSize;
  spriteDIV.style.width = spriteCanvas.width + 'px'
  spriteDIV.style.height = spriteCanvas.height + 'px'
  spriteCustom.style.width = /* cellSize * 9 + 'px'/**/ '100%'
  spriteCustom.style.height = /* cellSize + 'px'/**/ '100%'

  for (var i = 0; i < 9; i++) {
   var x = i * cellSize;
   if (settings.Block === 0) {
    // Shaded
    spriteCtx.fillStyle = shaded[i][1];
    spriteCtx.fillRect(x, 0, cellSize, cellSize);

    spriteCtx.fillStyle = shaded[i][3];
    spriteCtx.fillRect(x, cellSize / 2, cellSize, cellSize / 2);

    spriteCtx.fillStyle = shaded[i][0];
    spriteCtx.beginPath();
    spriteCtx.moveTo(x, 0);
    spriteCtx.lineTo(x + cellSize / 2, cellSize / 2);
    spriteCtx.lineTo(x, cellSize);
    spriteCtx.fill();

    spriteCtx.fillStyle = shaded[i][2];
    spriteCtx.beginPath();
    spriteCtx.moveTo(x + cellSize, 0);
    spriteCtx.lineTo(x + cellSize / 2, cellSize / 2);
    spriteCtx.lineTo(x + cellSize, cellSize);
    spriteCtx.fill();
   } else if (settings.Block === 1) {
    // Flat
    spriteCtx.fillStyle = solid[i][0];
    spriteCtx.fillRect(x, 0, cellSize, cellSize);
   } else if (settings.Block === 2) {
    // Glossy
    var k = Math.max(~~(cellSize * 0.083), 1);

    var grad = spriteCtx.createLinearGradient(x, 0, x + cellSize, cellSize);
    grad.addColorStop(0.5, glossy[i][3]);
    grad.addColorStop(1, glossy[i][4]);
    spriteCtx.fillStyle = grad;
    spriteCtx.fillRect(x, 0, cellSize, cellSize);

    var grad = spriteCtx.createLinearGradient(x, 0, x + cellSize, cellSize);
    grad.addColorStop(0, glossy[i][2]);
    grad.addColorStop(0.5, glossy[i][1]);
    spriteCtx.fillStyle = grad;
    spriteCtx.fillRect(x, 0, cellSize - k, cellSize - k);

    var grad = spriteCtx.createLinearGradient(
     x + k,
     k,
     x + cellSize - k,
     cellSize - k,
    );
    grad.addColorStop(0, shaded[i][0]);
    grad.addColorStop(0.5, glossy[i][0]);
    grad.addColorStop(0.5, shaded[i][0]);
    grad.addColorStop(1, glossy[i][0]);
    spriteCtx.fillStyle = grad;
    spriteCtx.fillRect(x + k, k, cellSize - k * 2, cellSize - k * 2);
   } else if (settings.Block === 3 || settings.Block === 4) {
    // Arika
    if (settings.Block === 4) tgm = world;
    var k = Math.max(~~(cellSize * 0.125), 1);

    spriteCtx.fillStyle = tgm[i][1];
    spriteCtx.fillRect(x, 0, cellSize, cellSize);
    spriteCtx.fillStyle = tgm[i][0];
    spriteCtx.fillRect(x, 0, cellSize, ~~(cellSize / 2));

    var grad = spriteCtx.createLinearGradient(x, k, x, cellSize - k);
    grad.addColorStop(0, tgm[i][2]);
    grad.addColorStop(1, tgm[i][3]);
    spriteCtx.fillStyle = grad;
    spriteCtx.fillRect(x + k, k, cellSize - k * 2, cellSize - k * 2);

    var grad = spriteCtx.createLinearGradient(x, k, x, cellSize);
    grad.addColorStop(0, tgm[i][0]);
    grad.addColorStop(1, tgm[i][3]);
    spriteCtx.fillStyle = grad;
    spriteCtx.fillRect(x, k, k, cellSize - k);

    var grad = spriteCtx.createLinearGradient(x, 0, x, cellSize - k);
    grad.addColorStop(0, tgm[i][2]);
    grad.addColorStop(1, tgm[i][1]);
    spriteCtx.fillStyle = grad;
    spriteCtx.fillRect(x + cellSize - k, 0, k, cellSize - k);
   } else if (settings.Block >= 5) {
    /*  const img = custom[0]
      img.src = custom[1]
      img.width = cellSize
      img.height = cellSize*/
    $d('customSprite').src=`tetrimino/${setting.Block[settings.Block]}.png`
    spriteCtx.drawImage(spriteCustom, /*x*cellSize*/ 0, 0, spriteCustom.width /**/ , spriteCustom.height /*  */ )


   }
  }
 }
 window.addEventListener("resize", function() {
  setTimeout(function() {
   makeSprite();
   stack.draw()
  }, 10)
 })
 window.addEventListener("load", function() {
  makeSprite();
  
  
  document.getElementById('b').style.transform = 'translateY(0)'
 })
 resize()
 translate()
 /**
  * Clear canvas.
  */
 function clear(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
 }

 /**
  * Draws a 2d array of minos.
  */
 function draw(tetro, cx, cy, ctx, color) {

  for (var x = 0, len = tetro.length; x < len; x++) {
   for (var y = 0, wid = tetro[x].length; y < wid; y++) {
    if (tetro[x][y])
     drawCell(x + cx, y + cy, color !== void 0 ? color : tetro[x][y], ctx);
   }
  }
 }

 // ========================== Controller ======================================
/*
 addEventListener(
  'keydown',
  function(e) {
   // TODO send to menu or game depending on context.
   if ([32, 37, 38, 39, 40].indexOf(e.keyCode) !== -1) e.preventDefault();
   //TODO if active, prevent default for binded keys
   //if (bindsArr.indexOf(e.keyCode) !== -1)
   //  e.preventDefault();
   if (e.keyCode === binds.pause) {
    if (paused) {
     unpause();
    } else {
     pause();
    }
   }
   if (e.keyCode === binds.retry) {
   
    if(!(moremodeselect[1].classList.contains('on')||menus[1].classList.contains('on')||menus[11].classList.contains('on')))
    init(gametype);
   }
   if (!watchingReplay) {
    if (e.keyCode === binds.moveLeft) {
     keysDown |= flags.moveLeft;
     //piece.finesse++
    } else if (e.keyCode === binds.moveRight) {
     keysDown |= flags.moveRight;
    } else if (e.keyCode === binds.moveDown) {
     keysDown |= flags.moveDown;
    } else if (e.keyCode === binds.hardDrop) {
     keysDown |= flags.hardDrop;
    } else if (e.keyCode === binds.rotRight) {
     keysDown |= flags.rotRight;
    } else if (e.keyCode === binds.rotLeft) {
     keysDown |= flags.rotLeft;
    } else if (e.keyCode === binds.rot180) {
     keysDown |= flags.rot180;
    } else if (e.keyCode === binds.holdPiece) {
     keysDown |= flags.holdPiece;
    }
   }
  },
  false,
 );
 addEventListener(
  'keyup',
  function(e) {
   if (!watchingReplay) {
    if (e.keyCode === binds.moveLeft && keysDown & flags.moveLeft) {
     keysDown ^= flags.moveLeft;
    } else if (e.keyCode === binds.moveRight && keysDown & flags.moveRight) {
     keysDown ^= flags.moveRight;
    } else if (e.keyCode === binds.moveDown && keysDown & flags.moveDown) {
     keysDown ^= flags.moveDown;
    } else if (e.keyCode === binds.hardDrop && keysDown & flags.hardDrop) {
     keysDown ^= flags.hardDrop;
    } else if (e.keyCode === binds.rotRight && keysDown & flags.rotRight) {
     keysDown ^= flags.rotRight;
    } else if (e.keyCode === binds.rotLeft && keysDown & flags.rotLeft) {
     keysDown ^= flags.rotLeft;
    } else if (e.keyCode === binds.rot180 && keysDown & flags.rot180) {
     keysDown ^= flags.rot180;
    } else if (e.keyCode === binds.holdPiece && keysDown & flags.holdPiece) {
     keysDown ^= flags.holdPiece;
    }
   }
  },
  false,
 );

 /**/
function keyCodeToKeyFlag(keyCode) {
  if (keyCode === binds.moveLeft) {
    return flags.moveLeft;
  } else if (keyCode === binds.moveRight) {
    return flags.moveRight;
  } else if (keyCode === binds.moveDown) {
    return flags.moveDown;
  } else if (keyCode === binds.hardDrop) {
    return flags.hardDrop;
  } else if (keyCode === binds.rotRight) {
    return flags.rotRight;
  } else if (keyCode === binds.rotLeft) {
    return flags.rotLeft;
  } else if (keyCode === binds.rot180) {
    return flags.rot180;
  } else if (keyCode === binds.holdPiece) {
    return flags.holdPiece;
  } else {
    return 0;
  }
}

function keyUpDown(e) {
  // TODO send to menu or game depending on context.
  if ([32,37,38,39,40].indexOf(e.keyCode) !== -1)
    e.preventDefault();
  //TODO if active, prevent default for binded keys
  //if (bindsArr.indexOf(e.keyCode) !== -1)
  //  e.preventDefault();
  if (e.type === "keydown" && e.keyCode === binds.pause) {
    if (paused) {
      unpause();
    } else {
      pause();
    }
  }
  if (e.type === "keydown" && e.keyCode === binds.retry) {
   if(!(moremodeselect[1].classList.contains('on')||menus[1].classList.contains('on')||menus[11].classList.contains('on')||menus[15].classList.contains('on')))

    init(gametype);
  }
  if (!watchingReplay) {
    var flag = keyCodeToKeyFlag(e.keyCode);
    if (e.type === "keydown") {
      keysDown |= flag;
    } else if (e.type === "keyup") {
      keysDown &= ~flag;
    }
  }
}
addEventListener('keydown', keyUpDown, false);
addEventListener('keyup', keyUpDown, false);

 // ========================== Loop ============================================

 //TODO Cleanup gameloop and update.
 /**
  * Runs every frame.
  */
 function update() {

  //TODO Das preservation broken.

  if (lastKeys !== keysDown && !watchingReplay) {
   replayKeys.keys[frame] = keysDown;
  } else if (frame in replayKeys.keys) {
   keysDown = replayKeys.keys[frame];

  };
  if (replayKeys.keys[frame] == 'END' && gameState == 0) {
   endgame(TransText('repended'), 9)
  }

  if (!(lastKeys & flags.holdPiece) && flags.holdPiece & keysDown) {
   piece.hold();
  }

  if (flags.rotLeft & keysDown && !(lastKeys & flags.rotLeft)) {
   piece.rotate(-1);
   piece.finesse++;
  } else if (flags.rotRight & keysDown && !(lastKeys & flags.rotRight)) {
   piece.rotate(1);
   piece.finesse++;
  } else if (flags.rot180 & keysDown && !(lastKeys & flags.rot180)) {
   /* for (var u = 0; u < 2; u++) */
   piece.rotate(1);
   piece.rotate(1)
   piece.finesse++;
  }

  piece.checkShift();

  if (flags.moveDown & keysDown) {
   piece.shiftDown();
   //piece.finesse++;
  }
  if (!(lastKeys & flags.hardDrop) && flags.hardDrop & keysDown) {
   piece.hardDrop();
  }

  piece.update();








  // Win
  // TODO
  

  statistics();

  if (lastKeys !== keysDown) {
   lastKeys = keysDown;
  }
  
  
 }
 
 function update2() {
 
  //TODO Das preservation broken.
 
  if (lastKeys2 !== keysDown2 && !watchingReplay) {
   replayKeys[`1v1params`].keys[frame] = keysDown2;
  } else if (frame in replayKeys[`1v1params`].keys) {
   keysDown2 = replayKeys['1v1params'].keys[frame];
 
  };
  if (replayKeys[`1v1params`].keys[frame] == 'END' && gameState == 0) {
  
  }
 
  if (!(lastKeys2 & flags.holdPiece) && flags.holdPiece & keysDown2) {
   piece2.hold();
  }
 
  if (flags.rotLeft & keysDown2 && !(lastKeys2 & flags.rotLeft)) {
   piece2.rotate(-1);
   piece2.finesse++;
  } else if (flags.rotRight & keysDown2 && !(lastKeys2 & flags.rotRight)) {
   piece2.rotate(1);
   piece2.finesse++;
  } else if (flags.rot180 & keysDown2 && !(lastKeys2 & flags.rot180)) {
   /* for (var u = 0; u < 2; u++) */
   piece2.rotate(1);
   piece2.rotate(1)
   piece2.finesse++;
  }
 
  piece2.checkShift();
 
  if (flags.moveDown & keysDown2) {
   piece2.shiftDown();
   //piece.finesse++;
  }
  if (!(lastKeys2 & flags.hardDrop) && flags.hardDrop & keysDown2) {
   piece2.hardDrop();
  }
 
  piece2.update();
 
 
 
 
 
 
 
 
  // Win
  // TODO
 
 
  statistics2();
 
  if (lastKeys2 !== keysDown2) {
   lastKeys2 = keysDown2;
  }
 
 
 }
 
 var piecenextbool = false
 var timewarning = false
 var gamediff = 0
 var igtvar = 0
 var IRScount = 0

 function gameLoop() {
  
  if (!paused){
   frame += 1;
   rectAnimations.loop()
   if('1v1params' in replayKeys)rectAnimations2.loop()
   }
  var fps = 60
  if (gametype == 112 || gametype == 115||gametype ==119)
   document.getElementById('active_GM').style.top = 100 - ((Math.min(stack.garbagenumber.length, 20) / 20) * 100) + '%'
  if (gametype == 0)
   document.getElementById('active_GM').style.top = (((Math.max(lineLimit - lines, 0)) / lineLimit) * 100) + '%'
  if (gametype == 3)
   document.getElementById('active_GM').style.top = 100 - ((digLines.length / 10) * 100) + '%'
  if (gametype == 111)
   document.getElementById('active_GM').style.top = 100 - ((Math.min(20, TSD) / 20) * 100) + '%'

if(gametype==119)
document.getElementById('active_GM2').style.top = 100 - ((Math.min(stack2.garbagenumber.length, 20) / 20) * 100) + '%'



  if (gametype == 117) {
   statsLines.innerHTML = `${TransText('level')} ${marathonParameter.activity.LEVEL}`
   if (replayKeys.marathonParams.lineLimit !== 'infinity') {
    statsType.innerHTML = `${lines}/${replayKeys.marathonParams.lineLimit} ${TransText('line')}`
   } else {
    statsType.innerHTML = `${lines} ${TransText('line')}`
   }
  }

  if (gametype == 118) {
   statsLines.innerHTML = `M${masterParameter.activity.LEVEL}`
   if (replayKeys.masterParams.lineLimit !== 'infinity') {
    statsType.innerHTML = `${lines}/${replayKeys.masterParams.lineLimit} ${TransText('line')}`
   } else {
    statsType.innerHTML = `${lines} ${TransText('line')}`
   }
  }
  
  if(gametype==118){
   if(stack.varpiecedelay==frame){
    if(stack.clearrows.length==0){
     piece.initNew(preview.next())
    }else{
     var ds = false
     for (var i of stack.clearrows) {
     
      for (var y = i; y >= -1; y--) {
     
       for (var x = 0; x < 10; x++) {
        if (stack.grid[x][y] && stack.grid[x][y] !== 0) ds = true
        stack.grid[x][y] = stack.grid[x][y - 1];
       }
      }
     
     }
     stack.clearrows = []
     if (ds) playsfx('linedown')
     stack.draw()
     linos = stack.grid.toString().replace(/0/g, '').replace(/\,/g, '').length
     whiletrigger=true
     stack.varpiecedelay=frame+ARERestrict(45,masterParameter.activity.LEVEL)
    }
   }
  }
  
  /*if (watchingReplay == false)/**/
  //  if (frame == 1390 && setting.Character[settings.Character] == 'Alix') document.getElementById('bgFIELD').src = 'characters/Alix/what.png'
  statsscore = dropscore + stackscore
  statsscore2 = piece2.dropscore + stackscore2
  // scorestats.innerHTML = statsscore
  //TODO check to see how pause works in replays.
  //TODO use ARE in downstack attack
  if (gametype == 116) {
   if (frame > 100) PENDTXT.innerHTML = `${TransText('boards')}: ${boardnum}<br/>${TransText('phases')}: ${frenzydifficulty>=13?'MAX':frenzydifficulty}<br/>${TransText('successes')}: ${successesDA}<br/>${TransText('fails')}: ${failsDA}/${replayKeys.DAParams['maxmiss']}`

   if (frame == 100) {
    playvoice('frenzystart')
    flashfield();
    $('#fevercolor').css('background-color', colorDA[0][0])
    frenzydifficulty = replayKeys.DAParams['level'];
    varseqvoice = 0;
    createmapDA(rng.next(), rng.next(), rng.next(), frenzydifficulty)
    //createmapDA(5, 1, true, 7)
    boardnum++
   }
   if (frame == 150) {
    piece.initNew(preview.next());
    stack.draw()
   };
  }
  else if (frame == 100) {
   piece.initNew(preview.next());
   if('1v1params' in replayKeys || gametype == 119){
    piece2.initNew(preview2.next());
    gtrisAI.eval(piece2.index)/**/
 
 
   }
  }

if('1v1params' in replayKeys&&!watchingReplay&&frame>100){
 gtrisAI.run()
 //keysDown2=keysDown
}


  if (!feverActivate && feverAble) {

   if (stack.varpiecedelay - 50 == frame) {
    playvoice('frenzystart')
    StackTemp = stack.grid
    stack.new(10, 22)
    gtrisAIPredictor.new(10,22)
    RENTemp = stack.varren
    PreviewGrabTemp = preview.grabBag
    HoldTemp = hold.piece
    hold.piece = void 0
    stack.B2BTemp = stack.b2b
    frenzydifficulty = 4
    stack.b2b = -1
    clear(holdCtx)
    stack.varren = -1
    feverTime = frame + (24 * 60)
    feverTimeNow = frame
    feverTimeEnable = true
    gachatrises = 0
    flashfield();
    $('#fevercolor').css('background-color', colorDA[0][0])
    //   frenzydifficulty = 4;
    varseqvoice = 0;
    createmapDA(rng.next(), rng.next(), rng.next(), frenzydifficulty)

   }
   if (stack.varpiecedelay == frame) {

    feverActivate = true
    feverAble = false

    stack.draw()
   };
  }

  //nested stateent though
  /*
    if (stack.varpiecedelayadd !== 0) {
        if (stack.varpiecedelay <= frame){
            while (1) {

                gameState=0
                piece.new(piece.index)
                var rowdrop = new Audio("sounds/nuisanceL.wav")
                rowdrop.play()
                
                

                break
            }
        }
            else {gameState='wait';frame--
            stack.varpiecedelay--}
    }
*/
  if (!feverTimeEnable)
   document.getElementById('active_FM').style.top = `${Math.max(0,(Math.min(100,100-(((gachatrises/gachatrismax))) * 100)))}%`

  if (feverTimeEnable) {
   if (gameState == 0) {
    if (true) {
     var time = Math.max(0, feverTime - frame)

     document.getElementById('active_FM').style.top = `${Math.max(0,(Math.min(100,100-(((time+feverTime-feverTimeNow) /(feverTime-feverTimeNow))) * 100) +100))}%`

     switch (time) {
      case 60 * 30: {
       playsfx('timer');
       break;
      };

     case 660: {
      playsfx('timer');
      break;
     };
     case 600: {
      playsfx('timer');
      break;
     };
     case 540: {
      playsfx('timer');
      break;
     };
     case 480: {
      playsfx('timer');
      break;
     };
     case 420: {
      playsfx('timer');
      break;
     };
     case 360: {
      playsfx('timer');
      break;
     };
     case 300: {
      playsfx('timer');
      break;
     };
     case 240: {
      playsfx('timer');
      break;
     };
     case 180: {
      playsfx('timer');
      break;
     };
     case 120: {
      playsfx('timer');
      break;
     };
     case 60: {
      playsfx('timer');
      break;
     };
     case 0: {



     };
     }
    }
   }
  }




ctscmain.simultaneous(function(){
 
 
})

  if (gametype == 116) {

   if (frame < stack.varpiecedelay && frame !== stack.varpiecedelay - 40 && frame !== stack.varpiecedelay - 5) {


    piece.y = -50
   } else if (frame == stack.varpiecedelay - 40) {
    stack.clearrows = []

    while (failToClear || ClearSuccess) {
     boardnum++
     varseqvoice = 0
     while (failToClear) {

      failToClear = false
      playvoice('fail')
      createmapDA(rng.next(), rng.next(), rng.next(), frenzydifficulty)
      stack.draw()

     }
     while (ClearSuccess) {
      successesDA++
      ClearSuccess = false
      playvoice('success')
      frenzydifficulty++
      createmapDA(rng.next(), rng.next(), rng.next(), frenzydifficulty)
      stack.draw()

     }
    }
   } else if (frame == stack.varpiecedelay) {
    if (frame > feverTime) {
     piece.initNew(preview.next())
    }
   } else if (frame == stack.varpiecedelay - 5) {
    var ds = false
    for (var i of stack.clearrows) {

     for (var y = i; y >= -1; y--) {

      for (var x = 0; x < 10; x++) {
       if (stack.grid[x][y] && stack.grid[x][y] !== 0) ds = true
       stack.grid[x][y] = stack.grid[x][y - 1];
      }
     }

    }
    stack.clearrows = []
    if (ds) playsfx('linedown')
    stack.draw()
   }

  }
  {
   if (feverActivate) {

    if (frame < stack.varpiecedelay && frame !== stack.varpiecedelay - 40 && frame !== stack.varpiecedelay - 5) {


     piece.y = -50
    } else if (frame == stack.varpiecedelay - 40) {
     stack.clearrows = []

     while (failToClear || ClearSuccess) {

      varseqvoice = 0
      while (failToClear) {

       failToClear = false
       playvoice('fail')
       createmapDA(rng.next(), rng.next(), rng.next(), frenzydifficulty)
       stack.draw()

      }
      while (ClearSuccess) {

       ClearSuccess = false
       playvoice('success')
       frenzydifficulty++
       createmapDA(rng.next(), rng.next(), rng.next(), frenzydifficulty)
       stack.draw()

      }
     }
    } else if (frame == stack.varpiecedelay)
    {
     if (!feverAble)
      piece.initNew(preview.next())
    }
    else if (feverActivate && feverAble)
    {
     if (stack.varpiecedelay + 10 == frame) {
      hidefield()

      stack.new(10, 22)
      feverTimeEnable = false
      stack.grid = StackTemp
      stack.draw()
      stack.newTemp(10, 22)
      hold.piece = HoldTemp
      stack.varren = RENTemp
      stack.b2b = stack.B2BTemp
      hold.draw()
      try {
       stack.clearrows = []
      } catch (e) { document.write(e) }
      preview.grabBag = PreviewGrabTemp
      preview.draw()
     }
     if (frame == stack.varpiecedelay + 70) {
      piece.initNew(preview.next())
      feverActivate = false
      feverAble = false
     }

    } else if (frame == stack.varpiecedelay - 5) {
     var ds = false
     for (var i of stack.clearrows) {

      for (var y = i; y >= -1; y--) {

       for (var x = 0; x < 10; x++) {
        if (stack.grid[x][y] && stack.grid[x][y] !== 0) ds = true
        stack.grid[x][y] = stack.grid[x][y - 1];
       }
      }

     }
     stack.clearrows = []
     if (ds) playsfx('linedown')
     stack.draw()
    }

   }

  }


  
  document.getElementById("readybar").value = frame + 50

  try {
   if (gametype == 112 && gameState == 0) {
    statsLines.innerHTML = Math.max(stack.garbagenumber.length, 0)
    if (frame >= 500) {

     if (frame >= framedelay) {
      //var randomHARN = ~~(rng.next() * 3);
      //var randomTIMEHARN = ~~(rng.next() * [10000 + frame])
      //var TIMEHARN = frame + randomTIMEHARN +10
      framedelay += 120
      //if (randomTIMEHARN !== randomNumbertimegarbage){ randomNumbertimegarbage.push(TIMEHARN)}
      //if (randomHARN !== randomNumbergarbage){ randomNumbergarbage.push(randomHARN);}
      //}
      //var isTIMEEXIST = randomNumbertimegarbage.indexOf(frame)
      //if (isTIMEEXIST!==-1){
      //var gbsh=randomNumbergarbage[garbagesequence]
      //stack.garbagenumber+= Number(randomNumbergarbage[garbagesequence])
      //garbagesequence++
      //}
      var randomGARBAGE = Math.round(~~(rng.next() * 5))
      stack.sendGarbage(randomGARBAGE,rng.next(),30)
     }
    }
   }


   if (gametype == 114 || gametype == 115) {
    if (gameState == 0) {
     if (true) {
      var time = Math.max(0, 101 + 7200 - frame)
      var seconds = ((time / 60) % 60).toFixed(2);
      var minutes = (Math.floor((time) / 3600)).toFixed(0);
      statsLines.innerHTML =
       minutes + (seconds < 10 ? ':0' : ':') + seconds;
      if (time <= 900 && time >= 1) {
       statsLines.style.color = "#f00"
       timewarning = true
      } else {
       statsLines.style.color = "#fff"
       timewarning = false
      }
      switch (time) {
       case 60 * 30: {
        playsfx('timer');
        break;
       };

      case 660: {
       playsfx('timer');
       break;
      };
      case 600: {
       playsfx('timer');
       break;
      };
      case 540: {
       playsfx('timer');
       break;
      };
      case 480: {
       playsfx('timer');
       break;
      };
      case 420: {
       playsfx('timer');
       break;
      };
      case 360: {
       playsfx('timer');
       break;
      };
      case 300: {
       playsfx('timer');
       break;
      };
      case 240: {
       playsfx('timer');
       break;
      };
      case 180: {
       playsfx('timer');
       break;
      };
      case 120: {
       playsfx('timer');
       break;
      };
      case 60: {
       playsfx('timer');
       break;
      };
      case 0: {
       paused = true
       submessage.innerHTML = `${TransText ('score')}: ${statsscore}`
       endgame(TransText('timeup'), 9, false)
       playsfx('timeup')

      };
      }
     }
    }
   }
   if (gametype == 116) {
    if (gameState == 0) {
     if (true) {
      var time = Math.max(0, 101 + replayKeys['DAParams']['timeframe'] - frame)
      document.getElementById('active_FM').style.top = 100 - ((time / replayKeys.DAParams['timeframe']) * 100) + '%'

      var seconds = ((time / 60) % 60).toFixed(2);
      var minutes = (Math.floor((time) / 3600)).toFixed(0);
      statsLines.innerHTML =
       minutes + (seconds < 10 ? ':0' : ':') + seconds;
      if (time <= 900 && time >= 0 && gameState == 0) {
       statsLines.style.color = "#f00"
       timewarning = true
      } else {
       statsLines.style.color = "#fff"
       timewarning = false
      }
      switch (time) {
       case 60 * 30: {
        playsfx('timer');
        break;
       };

      case 660: {
       playsfx('timer');
       break;
      };
      case 600: {
       playsfx('timer');
       break;
      };
      case 540: {
       playsfx('timer');
       break;
      };
      case 480: {
       playsfx('timer');
       break;
      };
      case 420: {
       playsfx('timer');
       break;
      };
      case 360: {
       playsfx('timer');
       break;
      };
      case 300: {
       playsfx('timer');
       break;
      };
      case 240: {
       playsfx('timer');
       break;
      };
      case 180: {
       playsfx('timer');
       break;
      };
      case 120: {
       playsfx('timer');
       break;
      };
      case 60: {
       playsfx('timer');
       break;
      };
      case 0: {



      };
      }
     }
    }
   }


   linosbool = boolwarning == true || stack.garbagenumber.length * 9 + linos >= 120
   linosbool2 = boolwarning2 == true || stack2.garbagenumber.length * 9 + linos2 >= 120

   while (whiletrigger == true && gametype !== 116 && !feverActivate) {
    minoesdetectwarning = 0;
    for (var x = 0; x < 10; x++) {
     for (var y = 1; y < 8; y++) {
      if (stack.grid[x][y]) minoesdetectwarning++;
     }
    }
    if (minoesdetectwarning !== 0) { boolwarning = true } else { boolwarning = false }

    whiletrigger = false

   }
   
   if('1v1params' in replayKeys || gametype == 119)
   while (whiletrigger2 == true && gametype !== 116 && !feverActivate) {
    minoesdetectwarning2 = 0;
    for (var x = 0; x < 10; x++) {
     for (var y = 1; y < 8; y++) {
      if (stack2.grid[x][y]) minoesdetectwarning2++;
     }
    }
    if (minoesdetectwarning2 !== 0) { boolwarning2 = true } else { boolwarning2 = false }

    whiletrigger2 = false

   }

   if (frame > -1000) {
    warningalarm()
    
    if('1v1params' in replayKeys || gametype == 119)
    warningalarm2()

   }
   if (gametype === 115) {
    PENDNUM.innerHTML = Math.max(stack.garbagenumber, 0)

   }
   if (gametype === 116) {
    //	PENDNUM.innerHTML = successesnumber +'/'+ boardnumber
   }
   if (frame <= disappearduration) {
    cleardetail.innerHTML = cleartext
    cleardetailren.innerHTML = cleartextren
    cleardetailpc.innerHTML = cleartextpc


   }
   else {

    cleardetail.innerHTML = '';
    cleardetailren.innerHTML = '';
    cleardetailpc.innerHTML = '';
    cleartext = ''
    cleartextpc = ''
   }
   if (frame <= disappearduration2) {
    cleardetail2.innerHTML = cleartext2
    cleardetail2ren.innerHTML = cleartext2ren
    cleardetail2pc.innerHTML = cleartext2pc
   
   
   }
   else {
   
    cleardetail2.innerHTML = '';
    cleardetail2ren.innerHTML = '';
    cleardetail2pc.innerHTML = '';
    cleartext2 = ''
    cleartextpc2 = ''
   }

   //	lini.innerHTML=setPattern + ' \| ' + piececolor + ' \| ' + flip
   //lini.innerHTML = startPauseTime + ' \| ' + pauseTime + ' \| ' + gametime + ' \| ' + gamediff
   //lini.innerHTML=spinCheckCount + ' \| ' + miniSpinCount + ' \| ' + mini2SpinCount  + ' \| ' + mini3SpinCount  + ' \| ' +  mini3REVSpinCount
   ////$iH('DEBUGTEXT',"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))
  } catch (e) {
   //document.write('INTERNAL ERROR!!! ')
   //  endgame('NOPE', 3)

   for (let i = 0; i < 7; i++)
    clearInterval(intid)
   console.error(e)
   return
  }

  scorestats.innerHTML = `${(statsscore < 10000000 ? '0' : '')}${(statsscore < 1000000 ? '0' : '')}${(statsscore < 100000 ? '0' : '')}${(statsscore < 10000 ? '0' : '')}${(statsscore < 1000 ? '0' : '')}${(statsscore < 100 ? '0' : '')}${(statsscore < 10 ? '0' : '')}${statsscore}`
  scorestats2.innerHTML = `${(statsscore2 < 10000000 ? '0' : '')}${(statsscore2 < 1000000 ? '0' : '')}${(statsscore2 < 100000 ? '0' : '')}${(statsscore2 < 10000 ? '0' : '')}${(statsscore2 < 1000 ? '0' : '')}${(statsscore2 < 100 ? '0' : '')}${(statsscore2 < 10 ? '0' : '')}${statsscore2}`



  if (gameState === 0) {
   // Playing

   if (!paused) {
    update();
    if('1v1params' in replayKeys || gametype == 119)
    update2()
   } else {

   }

   // TODO improve this with 'dirty' flags.
   if (
    piece.x !== lastX ||
    Math.floor(piece.y) !== lastY ||
    piece.pos !== lastPos ||
    piece.dirty
   ) {
    clear(activeCtx);
    piece.drawGhost();
    piece.draw();
   }
   lastX = piece.x;
   lastY = Math.floor(piece.y);
   lastPos = piece.pos;
   piece.dirty = false;
   
   
   if('1v1params' in replayKeys || gametype == 119){
   if (
    piece2.x !== lastX2 ||
    Math.floor(piece2.y) !== lastY2 ||
    piece2.pos !== lastPos2 ||
    piece2.dirty
   ) {
    clear(activeCtx2);
    piece2.drawGhost();
    piece2.draw();
    
   }
   lastX2 = piece2.x;
   lastY2 = Math.floor(piece2.y);
   lastPos2 = piece2.pos;
   piece2.dirty = false;
}

  } else if (gameState === 2) {
   // Count Down
   if (frame < 50) {
    if (msg.innerHTML !== TransText('ready')) {
     msg.innerHTML = TransText('ready');
     submessage.innerHTML = ''
     playsfx('ready')
    };
    frame += 0





   } else if (frame < 100) {
    if (msg.innerHTML !== TransText('go')){
     playsfx('ready2')
     msg.innerHTML = TransText('go');}
    frame += 0
   } else {
    msg.innerHTML = '';
    gameState = 0;
    
   if(frame==100) {playsfx('start')
   MusicParameter.active = true
     playmfx('play', 'start')}
   }


   // DAS Preload
   if('1v1params' in replayKeys || gametype == 119){
   if (lastKeys2 !== keysDown2 && !watchingReplay) {
    replayKeys[`1v1params`].keys[frame] = keysDown2;
   } else if (frame in replayKeys[`1v1params`].keys) {
    keysDown2 = replayKeys[`1v1params`].keys[frame];
   }
   
   if (keysDown2 & flags.moveLeft) {
    lastKeys2 = keysDown2;
    piece2.shiftDelay = replayKeys[`1v1params`].DAS;
    piece2.shiftReleased = false;
    piece2.shiftDir = -1;
   } else if (keysDown2 & flags.moveRight) {
    lastKeys2 = keysDown2;
    piece2.shiftDelay = replayKeys[`1v1params`].DAS;
    piece2.shiftReleased = false;
    piece2.shiftDir = 1;
   }
   }
   
   if (lastKeys !== keysDown && !watchingReplay) {
    replayKeys.keys[frame] = keysDown;
   } else if (frame in replayKeys.keys) {
    keysDown = replayKeys.keys[frame];
   }

   if (keysDown & flags.moveLeft) {
    lastKeys = keysDown;
    piece.shiftDelay = settings.DAS;
    piece.shiftReleased = false;
    piece.shiftDir = -1;
   } else if (keysDown & flags.moveRight) {
    lastKeys = keysDown;
    piece.shiftDelay = settings.DAS;
    piece.shiftReleased = false;
    piece.shiftDir = 1;
   }
  } else if (toGreyRow >= 2) {
   /**
    * Fade to grey animation played when player loses.
    */
   if (gameState !== 0 && gameState !== 2 && gameState !== 'wait') {
    if (toGreyRow === 21&&!('1v1params'in replayKeys)) clear(activeCtx);
    if (frame % 30) {
     for (var x = 0; x < 10; x++) {
      if (stack.grid[x][toGreyRow]&&!('1v1params'in replayKeys)) stack.grid[x][toGreyRow] = gameState - 1;
     }
     stack.draw();
     toGreyRow--;
    }
    if(toGreyRow<0){gameRunning=false
     return false
    }
   }
   //if (gameState == 'wait') clear(activeCtx)
  }

 }
 var FAILS = 0

 function curreplay() {
  if (!watchingReplay)
   document.getElementById('replaydata').value = JSON.stringify(replayKeys)
  morefunction(1)
 }

 function executereplay() {
  try {
   var biol = true
   var json = document.getElementById('replaydata').value
   var parse = JSON.parse(json)



   replayKeys = {
    MFX:parse.MFX
   }
   if(parse.name!==void 0||parse.name==''){
    if(parse.name.length<21){
replayKeys.name=parse.name
}else throw TransText('maxname')
}else replayKeys.name=``

   replayKeys.seed = parse.seed

   var ts = 0
   replayKeys.keys = parse.keys
   replayKeys.DAS = parse.DAS
   replayKeys.ARR = parse.ARR
   replayKeys.GRAV = parse.GRAV
   replayKeys.SFT = parse.SFT
   replayKeys.LCK = parse.LCK
   replayKeys.PREV = parse.PREV
   replayKeys.gameparameter = parse.gameparameter
   if (parse.gameparameter == 115) {
    replayKeys.garbagereceive = {}
    replayKeys.garbagesend = {}
    replayKeys.garbagesend = parse.garbagesend
    replayKeys.garbagereceive = parse.garbagereceive
   }

   if (parse.gameparameter == 0) {
    if (typeof parse.sprintParams === 'object') {
     replayKeys.sprintParams = {}
     if (
      parse.sprintParams.queueType !== void 0 &&
      parse.sprintParams.lineLimit !== void 0
     ) {
      replayKeys.sprintParams.queueType = parse.sprintParams.queueType
      replayKeys.sprintParams.lineLimit = parse.sprintParams.lineLimit
     } else {
      throw TransText('sprint_warn2')
     }
    } else {
     throw TransText('sprint_warn1')
    }
   }

   if (parse.gameparameter === 117) {
    if (typeof parse.marathonParams === 'object') {
     if (
      parse.marathonParams.level !== void 0 &&
      parse.marathonParams.linesRequire !== void 0 &&
      parse.marathonParams.lineLimit !== void 0
     ) {
      replayKeys.marathonParams = {
       level: parse.marathonParams.level,
       linesRequire: parse.marathonParams.linesRequire,
       lineLimit: parse.marathonParams.lineLimit
      }
     } else { throw TransText('marathon_warn2') }
    } else { throw TransText('marathon_warn1') }
   }

   if (parse.gameparameter === 118) {
    if (typeof parse.masterParams === 'object') {
     if (
      parse.masterParams.level !== void 0 &&
      parse.masterParams.linesRequire !== void 0 &&
      parse.masterParams.lineLimit !== void 0
     ) {
      replayKeys.masterParams = {
       level: parse.masterParams.level,
       linesRequire: parse.masterParams.linesRequire,
       lineLimit: parse.masterParams.lineLimit
      }
     } else { throw TransText('master_warn2') }
    } else { throw TransText('master_warn1') }
   }


   for (var s in replayKeys.keys)
    ts = ~~(s) + 100
   replayKeys.keys[ts] = 'END'
   if (parse.gameparameter == 116) {
    if (typeof parse.DAParams === 'object') {
     replayKeys.DAParams = {}
     if (
      parse.DAParams['timeframe'] !== void 0 &&
      parse.DAParams['maxmiss'] !== void 0 &&
      parse.DAParams['level'] !== void 0
     ) {
      replayKeys.DAParams['timeframe'] = parse.DAParams['timeframe']
      replayKeys.DAParams['maxmiss'] = parse.DAParams['maxmiss']
      replayKeys.DAParams['level'] = parse.DAParams['level']
     } else {
      biol = false
      throw TransText('DA_warn2')


     }
    } else {
     biol = false

     throw TransText('DA_warn2')


    }
   }
   if (parse.gameparameter == 119) {
    let arrayReq = [
     'DAS',
     'ARR',
     'GRAV',
     'SFT',
     'LCK',
     'PREV',
     'keys',
     'seed',
     'character',
     'name',
     'pps',
     'kps'
    ]
    let REQ_ERROR=[]
    replayKeys['1v1params']={}
    
    if('1v1params' in parse){
     for(let REQ of arrayReq){
      if(REQ in parse['1v1params']){
       replayKeys['1v1params'][REQ]=parse['1v1params'][REQ]
      }
      else REQ_ERROR.push(REQ)
      }
      if(REQ_ERROR.length!==0)throw TransText('vs_warn2',REQ_ERROR.toString().replace(/,/gm, ', '))

    }else{
     throw TransText('vs_warn1')
     }
    
   }


  } catch (end) {

   alert('ERROR: ' + end)
   biol = false
  } finally {

   if (biol == true) {
    init('replay', parse.gameparameter)
    moremodeselect[1].classList.remove('on')
    replaystring = document.getElementById('replaydata').value
   }
   else {}
  }
  var parametersingame = {}
 }

 function endgame(TITLE, STATE, DOWNFALL, SOUND) {
  gameState = STATE
  
  msg.innerHTML = TITLE
    playmfx('stop', 'start')
    playmfx('stop', 'loop')
    MusicParameter.active = true
    
  if (!watchingReplay)
   document.getElementById('replaydata').value = replaystring = JSON.stringify(replayKeys)
  if (DOWNFALL !== void 0 && DOWNFALL == true) {
   fallboard()
  }
  var _SOUND=SOUND
 
  if (_SOUND !== void 0){
  if(_SOUND == 'win') {playsfx('win')}
  if(_SOUND == 'lose') {playsfx('lose')}

}
   menu(5);
  
 }

 function endgame2(TITLE, STATE, DOWNFALL, SOUND) {
  gameState = STATE

  msg.innerHTML = TITLE
  playmfx('stop', 'start')
  playmfx('stop', 'loop')
  MusicParameter.active = true

  if (!watchingReplay)
   document.getElementById('replaydata').value = replaystring = JSON.stringify(replayKeys)
  if (DOWNFALL !== void 0 && DOWNFALL == true) {
   fallboard2()
  }
  var _SOUND = SOUND

  if (_SOUND !== void 0) {
   if (_SOUND == 'win') { playsfx('win') }
   if (_SOUND == 'lose') { playsfx('lose') }

  }
  menu(5);

 }



 var replaystring

 /*DELFTSTACK'S DOWNLOADER SYSTEM*/
 function download(filename, _textInput) {
  let textinnnput = _textInput
  var blobs = new Blob([textinnnput], { type: 'text/plain' })
  var blobURL = URL.createObjectURL(blobs)
  var element = document.createElement('a');
  element.setAttribute('href', blobURL)
  element.setAttribute('download', filename);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
 }

 function downloadreplay() {
  if (replaystring !== void 0) {
   var text = replaystring
   var filename = "gachatris_replay_" + Date.now() + ".gtrd-json";
   download(filename, text);
  }
 }

 function uploadreplay() {
  var input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('multiple', 'true')
  input.onchange = function(e) {
   var filedetect = e.target.files;
   var file
   if (filedetect.length == 1) {
    file = filedetect[0]

    if (file.name.endsWith('.gtrd-json')) {
     let reader = new FileReader();
     reader.readAsText(file, 'UTF-8');

     // here we tell the reader what to do when it's done reading...
     reader.onload = function(ReaderEv) {
      var con = ReaderEv.target.result; // this is the content!

      replaystring = con
      document.getElementById('replaydata').value = con

     }
    } else alert(TransText('gtrdenderror', file.name))
   } else {
    
   }
  }
  input.click();
 }
/**EricLenovo - Once Listener
 */
function addEventListenerOnce(node, event, functionVar){
 node.
 addEventListener
 (event,
 function
 listener
 ()
 {
  functionVar
  ();
  node
  .removeEventListener(
   event, 
   listener
   )
 }, false)
}
/* /**EricLenovo - Once Listener
 *
function addEventListenerOnce(node, event, functionVar){
 node.addEventListener(event, function listener(){
  functionVar();
  node.removeEventListener(event, listener)
 }, false)
}
 */

window.addEventListener('load',() => {document.title=`Gachatris JavaScriptus ${version}`})

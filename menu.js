var version = '1.0.0Final Gachatris';
var setLoop;
var sfx
var arrowReleased = true;
var arrowDelay = 0;
var minoesdetect=document.getElementById('DEBUGTEXT')
var scorestats = document.getElementById('score')
var varalarm;
var alertsoundactive;
var cleardetail=document.getElementById('clearstats')
var cleardetailren=document.getElementById('clearstatsren')
var cleardetailpc=document.getElementById('clearstatspc')

var cleardetail2=document.getElementById('clearstats2')
var cleardetail2ren=document.getElementById('clearstats2ren')
var cleardetail2pc=document.getElementById('clearstats2pc')


try{



window.onblur=function(){
    if ((gameState==0||gameState==2)&&!paused)
    pause()
}
/*
window.onfocus=function(){
	if (gameState==0&&gameState!==2){
		unpause()
	}
}/*  */

}catch(e){
alert(e)
}
var key = {
  8: 'Backspace',
  9: 'Tab',
  13: 'Enter',
  16: 'Shift',
  17: 'Ctrl',
  18: 'Alt',
  19: 'Pause',
  20: 'Caps Lock',
  27: 'Esc',
  32: 'Space',
  33: 'PgUp',
  34: 'PgDn',
  35: 'End',
  36: 'Home',
  37: '←',
  38: '↑',
  39: '→',
  40: '↓',
  45: 'Insert',
  46: 'Delete',
  48: '0',
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',
  59: ';',
  61: '=',
  65: 'A',
  66: 'B',
  67: 'C',
  68: 'D',
  69: 'E',
  70: 'F',
  71: 'G',
  72: 'H',
  73: 'I',
  74: 'J',
  75: 'K',
  76: 'L',
  77: 'M',
  78: 'N',
  79: 'O',
  80: 'P',
  81: 'Q',
  82: 'R',
  83: 'S',
  84: 'T',
  85: 'U',
  86: 'V',
  87: 'W',
  88: 'X',
  89: 'Y',
  90: 'Z',
  96: '0kpad',
  97: '1kpad',
  98: '2kpad',
  99: '3kpad',
  100: '4kpad',
  101: '5kpad',
  102: '6kpad',
  103: '7kpad',
  104: '8kpad',
  105: '9kpad',
  106: '*',
  107: '+',
  109: '-',
  110: '.',
  111: '/',
  112: 'F1',
  113: 'F2',
  114: 'F3',
  115: 'F4',
  116: 'F5',
  117: 'F6',
  118: 'F7',
  119: 'F8',
  120: 'F9',
  121: 'F10',
  122: 'F11',
  123: 'F12',
  173: '-',
  187: '=',
  188: ',',
  190: '.',
  191: '/',
  192: '`',
  219: '[',
  220: '\\',
  221: ']',
  222: "'",
};

//var voice = new Pizzicato.Sound({ source: 'input' }).play();

/**
 * Show and hide menus.
 */
 var menudef=0
var menus = document.getElementsByClassName('menu')
var moremodeselect = document.getElementsByClassName('moremodes');
function menu(menuIndex) {
   /* if(menuIndex!==void 0&&menuIndex!==4&menuIndex!==5){
     $d('NAVMENU').style.background='rgba(0,0,0,1)'
    }/**/
  for (var i = 0, len = menus.length; i < len; i++) {
            menus[i].classList.remove('on');
            
  }
  if (menuIndex !== void 0) {menus[menuIndex].classList.add('on');} 
  for (var MMM=0; MMM<3; MMM++){
      moremodeselect[MMM].classList.remove('on')}
     try{
      if(typeof SoundFX['alertsoundslow']!=='undefined')
      stopsfx('alertsoundslow')
      if(typeof SoundFX['alarm']!=='undefined')

      stopsfx('alarm')
     }catch(U){}
      onealarm=false
      varalarm=false;
      
      if(menuIndex!==void 0)  playmfx('stop', 'start')
        playmfx('stop', 'loop')

            
      
      if (menuIndex==5&&!(watchingReplay)){
          replayKeys.keys[frame+3]='END'
      }
   menudef=menuIndex
         
}
function morefunction(menuIndex2){
    for (var i = 0, len = menus.length; i < len; i++) {
        menus[i].classList.remove('on')
    }
    
        if (menuIndex2 !== void 0) moremodeselect[menuIndex2].classList.add('on')

    if (menuIndex2==2)loadeasysettings()
    
}
function backtomoremodes(){
 for (var i = 0, len = menus.length; i < len; i++) {
        menus[i].classList.remove('on')
    }
    
       moremodeselect[0].classList.add('on')

}
HowlerGlobal.html5PoolSize = 100
/**
 * Controls Menu
 */
var newKey,
  currCell,
  tempKey,
  controls = document.getElementById('controls'),
  controlCells = controls.getElementsByTagName('td');
// Give controls an event listener.
for (var i = 0, len = controlCells.length; i < len; i++) {
  controlCells[i].onclick = function() {
    // First check if we're already waiting for an input.
    if (currCell) {
      // TODO Dry
      // Make this into a function and call it when we press Esc.
      binds[currCell.id] = tempKey;
      currCell.innerHTML = key[tempKey];
    }
    tempKey = binds[this.id];
    this.innerHTML = 'Press key';
    currCell = this;
  };
}
// Listen for key input if a control has been clicked on.
addEventListener(
  'keydown',
  function(e) {
    // if click outside of cell or press esc clear currCell
    // reset binds button.
    if (currCell) {
      // Checks if key already in use, and unbinds it.
      for (var i in binds) {
        if (e.keyCode === binds[i]) {
          binds[i] = void 0;
          document.getElementById(i).innerHTML = binds[i];
        }
      }
      // Binds the key and saves the data.
      binds[currCell.id] = e.keyCode;
      currCell.innerHTML = key[e.keyCode];
      localStorage.setItem('gtris333_binds', JSON.stringify(binds));
      currCell = 0;
    }
  },
  false,
);

/**
 * Settings Menu
 */
function settingsLoop() {
  if (arrowReleased || arrowDelay >= 6) {
    if (settingsArrow)
      settings[s] = settings[s] === 0 ? setting[s].length - 1 : settings[s] - 1;
    else
      settings[s] = settings[s] === setting[s].length - 1 ? 0 : settings[s] + 1;
    saveSetting(s);
    arrowReleased = false;
  } else {
    arrowDelay++;
  }
  setLoop = setTimeout(settingsLoop, 50);
}
var s;
var settingsArrow;
// TODO DRY this.
function arrowRelease() {
  resize();
  arrowReleased = true;
  arrowDelay = 0;
  clearTimeout(setLoop);
}
function left() {
  settingsArrow = 1;
  s = this.parentNode.id;
  this.onmouseup = arrowRelease;
  this.onmouseout = arrowRelease;
  settingsLoop();
}
function right() {
  settingsArrow = 0;
  s = this.parentNode.id;
  this.onmouseup = arrowRelease;
  this.onmouseout = arrowRelease;
  settingsLoop();
}

/**
 * LocalStorage functions
 */
function saveSetting(s) {
  localStorage['gtris333_version'] = version;

  document.getElementById(s).getElementsByTagName('span')[0].innerHTML =
    setting[s][settings[s]];

  localStorage['gtris333_settingsse'] = JSON.stringify(settings);
  localStorage['gtris333_settings'] = JSON.stringify(settings)
  translate()
}
function loadLocalData() {
      if (localStorage['gtris333_binds']) {
    binds = JSON.parse(localStorage.getItem('gtris333_binds'));
    for (var i = 0, len = controlCells.length; i < len; i++) {
      controlCells[i].innerHTML = key[binds[controlCells[i].id]];
    }
  }
  // TODO When new version just update with new stuff, rest stays unchanged.
  if (localStorage['gtris333_version'] !== version) {
      try{
            localStorage['gtris333_version'] = version
    localStorage.removeItem('gtris333_settingsse');
    //localStorage.removeItem('gtris333_binds');
    
    var settingsload =JSON.parse(localStorage.getItem('gtris333_settings'))

    for (var i in settingsload){
     if(!(i in settings))continue
        if (settingsload[i]!==void 0||settingsload[i]!==undefined){
        settings[i]=settingsload[i]
        }else if(setings[i]!==void 0){
            settings[i]=0
        }
    }
      }catch(e){/*alert(e)*/}
  }
  if (typeof localStorage['gtris333_settingsse']==='string') {
      settings = JSON.parse(localStorage.getItem('gtris333_settingsse'));
  }
  translate()
}
if(localStorage['gtris333_vsSettings']!==null&&typeof localStorage['gtris333_vsSettings'] !=='undefined')
vsParameter=JSON.parse(localStorage.getItem("gtris333_vsSettings"))
else
localStorage['gtris333_vsSettings']=JSON.stringify(vsParameter)

if(localStorage['gtris333_vsSliderSettings']!==null&&typeof localStorage['gtris333_vsSliderSettings'] !=='undefined')
VSInputs.savestate=JSON.parse(localStorage.getItem("gtris333_vsSliderSettings"))
else
localStorage['gtris333_vsSliderSettings']=JSON.stringify(VSInputs.savestate)


loadLocalData();
function loadsettinginit(){
 try{
  try{
  var playername=localStorage.getItem("gtris_playerName")
 if(playername!==void 0&&playername!==undefined){
  $d('playernamequery').value=playername
 }
  }catch(e){}
for (let s in settings) {
 if(s=='Character'||typeof s == 'object')continue
 try{
  var div = document.createElement('div');
  var b = document.createElement('b');
  var iLeft = document.createElement('i');
  var span = document.createElement('span');
  var iRight = document.createElement('i');

  div.id = s;
  b.innerHTML = s + ':';
  span.innerHTML = setting[s][settings[s]];
  iLeft.className = 'left';
  iRight.className = 'right';
  iLeft.onmousedown = left;
  iRight.onmousedown = right;

  set.appendChild(div);
  div.appendChild(b);
  div.appendChild(iLeft);
  div.appendChild(span);
  div.appendChild(iRight);
 }catch(e){
  localStorage['gtris333_settingsse'][s]=undefined
 }
  
 }
}catch(e){
  for (var s in settings) {
  
   var div = document.createElement('div');
   var b = document.createElement('b');
   var iLeft = document.createElement('i');
   var span = document.createElement('span');
   var iRight = document.createElement('i');
  
   div.id = s;
   b.innerHTML = s + ':';
   span.innerHTML = setting[s][settings[s]];
   iLeft.className = 'left';
   iRight.className = 'right';
   iLeft.onmousedown = left;
   iRight.onmousedown = right;
  
   set.removeChild(div);
   div.removeChild(b);
   div.removeChild(iLeft);
   div.removeChild(span);
   div.removeChild(iRight);
  
  
  }
  /*localStorage['gtris_settings']=null
  localStorage['gtris_settingsse']=null;*/
  loadLocalData();
  loadsettinginit()
  alert(e)
}
}
loadsettinginit()
resize();

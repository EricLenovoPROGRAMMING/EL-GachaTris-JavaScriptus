var SoundFX = {
 renend: new Howl({ src: 'sounds/GTJS/endren.ogg' }),
 b2bs: new Howl({ src: 'sounds/GTJS/b2b.ogg' }),
 b2bs2: new Howl({ src: 'sounds/GTJS/b2b-low.ogg' }),
 b2bs3: new Howl({ src: 'sounds/GTJS/b2b-med.ogg' }),
 b2bs4: new Howl({ src: 'sounds/GTJS/b2b-high.ogg' }),
 b2bs5: new Howl({ src: 'sounds/GTJS/b2b-exhigh.ogg' }),
 spinsound: new Howl({ src: 'sounds/GTJS/spinrot.ogg' }),
 minispinsound: new Howl({ src: 'sounds/GTJS/spinrotmini.ogg' }),
 minizero: new Howl({ src: 'sounds/GTJS/mini0.ogg' }),
 onemini: new Howl({ src: 'sounds/GTJS/mini1.ogg' }),
 hdsound: new Howl({ src: 'sounds/GTJS/harddrop.ogg' }),
 garbageup: new Howl({ src: 'sounds/GTJS/lineup.ogg' }),
 minisound: new Howl({ src: 'nuisanceL.ogg' }),
 spinzero: new Howl({ src: 'sounds/GTJS/spin0.ogg' }),
 perfectclear: new Howl({ src: 'sounds/GTJS/perfect.wav' }),
 // alertsoundslow: new Howl({ src: 'sounds/GTJS/alertsound.ogg' }),
 KO: new Howl({ src: 'sounds/GTJS/KO.ogg' }),
 timeup: new Howl({ src: 'sounds/GTJS/timerunout.ogg' }),
 oneline: new Howl({ src: 'sounds/GTJS/single.ogg' }),
 twoline: new Howl({ src: 'sounds/GTJS/double.ogg' }),
 threeline: new Howl({ src: 'sounds/GTJS/triple.ogg' }),
 fourline: new Howl({ src: 'sounds/GTJS/tetris.ogg' }),
 onespin: new Howl({ src: 'sounds/GTJS/spin1.ogg' }),
 twospin: new Howl({ src: 'sounds/GTJS/spin2.ogg' }),
 threespin: new Howl({ src: 'sounds/GTJS/spin3.ogg' }),
 IRSSound: new Howl({ src: 'sounds/GTJS/irs.ogg' }),
IHSSound: new Howl({ src: 'sounds/GTJS/ihs.ogg' }),

 b2b1: new Howl({ src: 'sounds/GTJS/b2b-1.ogg' }),
 b2b2: new Howl({ src: 'sounds/GTJS/b2b-2.ogg' }),
 b2b3: new Howl({ src: 'sounds/GTJS/b2b-3.ogg' }),
 b2b4: new Howl({ src: 'sounds/GTJS/b2b-4.ogg' }),
 b2b_end: new Howl({ src: 'sounds/GTJS/b2b-end.ogg' }),


 place: new Howl({ src: 'sounds/GTJS/place.ogg' }),
 softdrops: new Howl({ src: 'sounds/GTJS/softdrop.ogg' }),
 hdsound: new Howl({ src: 'sounds/GTJS/harddrop.ogg' }),
 alarm: new Howl({ src: 'sounds/GTJS/tapoutalarm.ogg', loop: true}),
 rotatepiece: new Howl({ src: 'sounds/GTJS/rotate.ogg' }),
 movesound: new Howl({ src: 'sounds/GTJS/moves.ogg' }),
 noninithold: new Howl({ src: 'sounds/GTJS/nith.ogg' }),
 inithold: new Howl({ src: 'sounds/GTJS/ith.ogg' }),
 lockse: new Howl({ src: 'sounds/GTJS/lock.ogg' }),
 alertsoundslow: new Howl({ src: 'sounds/GTJS/alertsound.ogg', loop: true}),
 pieceLand: new Howl({ src: 'sounds/GTJS/land.mp3',}),
 levelUp: new Howl({ src: 'sounds/GTJS/levelup.ogg', html5: true }),

 timer: new Howl({ src: 'sounds/GTJS/timerwarn.ogg', html5: true }),
 linedown: new Howl({ src: 'sounds/GTJS/linedown.ogg', html5: true })
}
var REN = {}
var musicbgm = new Howl({ src: 'music/original.mp3', html5: true })



var reninit = '/GTJS/ren/' /*  */
for (let k = 0; k < 21; k++) {
 REN[k] = new Howl({
  src: ['sounds' + reninit + 'ren' + k + '.mp3'],
 })
 var tloadk =
  /*new Howl({
   src: ['sounds' + reninit + 'ren' + k + '.mp3'],
  })*/
  REN[k].load()

}
/**
 * EricLenovo:
 ** Returns document.getElementById with an 
 * HTMLElement ID string, hence simplified.
 */
var $d = function(id) {
 return document.getElementById(id)
}


var $iH = function(id, text) {
 document.getElementById(id).innerHTML = text
}

function comboren(_combo) {
 let combomax = Math.min(Math.floor(_combo), 20)

 if (REN !== void 0)
  stopsfxJSO(REN[combomax])
 /* REN = new Howl({
      src: ['sounds' + reninit + 'ren' + combomax + '.mp3'],
      html5: true
  })/***/

 playsfxJSO(REN[combomax])


}
HowlerGlobal.html5 = true

for (var SFX in SoundFX) {
 SoundFX[SFX].load()
}

var comvoice = {
 /*
     line1: new Howl({ src: 'commentary/TTS/single.ogg', html5:true,preload:false}),
     line2: new Howl({ src: 'commentary/TTS/double.ogg', html5:true,preload:false}),
     line3: new Howl({ src: 'commentary/TTS/triple.ogg', html5:true,preload:false}),
     line4: new Howl({ src: 'commentary/TTS/quad.ogg', html5:true,preload:false}),
     gtris: new Howl({ src: 'commentary/TTS/gquad.ogg', html5:true,preload:false}),
     spin0: new Howl({ src: 'commentary/TTS/tspin0.ogg', html5:true,preload:false}),
     mini0: new Howl({ src: 'commentary/TTS/tmini0.ogg', html5:true,preload:false}),
     mini1: new Howl({ src: 'commentary/TTS/tmini1.ogg', html5:true,preload:false}),

     spin1: new Howl({ src: 'commentary/TTS/tspin1.ogg', html5:true,preload:false}),
     pc: new Howl({ src: 'commentary/TTS/pc.ogg', html5:true,preload:false}),
     spin2: new Howl({ src: 'commentary/TTS/tspin2.ogg', html5:true,preload:false}),
     spin3: new Howl({ src: 'commentary/TTS/tspin3.ogg', html5:true,preload:false}),
     b2bline4: new Howl({ src: 'commentary/TTS/b2bquad.ogg', html5:true,preload:false}),
     b2bgtris: new Howl({ src: 'commentary/TTS/b2bgquad.ogg', html5:true,preload:false}),
     b2bspin0: new Howl({ src: 'commentary/TTS/b2btspin0.ogg', html5:true,preload:false}),
     b2bmini1: new Howl({ src: 'commentary/TTS/b2btmini1.ogg', html5:true,preload:false}),
     b2bspin1: new Howl({ src: 'commentary/TTS/b2btspin1.ogg', html5:true,preload:false}),
     b2bspin2: new Howl({ src: 'commentary/TTS/b2btspin2.ogg', html5:true,preload:false}),
     b2bspin3: new Howl({ src: 'commentary/TTS/b2btspin3.ogg', html5:true,preload:false}),/***/
}
var PENDTXT = document.getElementById('pendin')
var PENDNUM = document.getElementById('pendum')
var StackTemp = []
var HoldTemp = 0
var PreviewGrabTemp =[]
var RENTemp = 0
var feverActivate = false
var feverAble = false
var feverTimeEnable = false
var feverTime = 0
var B2BTemp = -1

function comset(line, spin, mini, pc, b2b) {
 if (pc === true) {
  if (line == 4) {
   if (settings.Character !== 0) {
    if (b2b) {
     playcom('b2bgtris').once('end', function() {
      playcom('pc')
     })
    } else {
     playcom('gtris').once('end', function() {
      playcom('pc')
     })
    }
   } else {
    if (b2b) {
     playcom('b2bline4').once('end', function() {
      playcom('pc')
     })
    } else {
     playcom('line4').once('end', function() {
      playcom('pc')
     })
    }
   }
  }
 } else {
  if (spin) {
   if (b2b) {
    if (line == 1) playcom('b2bspin1');
    if (line == 2) playcom('b2bspin2');
    if (line == 3) playcom('b2bspin3');

   } else {
    if (line == 0) playcom('spin0');
    if (line == 1) playcom('spin1');
    if (line == 2) playcom('spin2');
    if (line == 3) playcom('spin3');
   }
  }

  else if (mini)
  {
   if (b2b) {
    if (line == 1) playcom('b2bmini1');
    if (line == 2) playcom('b2bspin2');

   }
   else {
    if (line == 0) playcom('mini0');
    if (line == 1) playcom('mini1');
    if (line == 2) playcom('spin2');
   }

  } else {
   if (b2b) {
    if (settings.Character !== 0) {
     if (line == 4) playcom('b2bgtris');
    }
    else { if (line == 4) playcom('b2bline4'); }
   } else {
    if (line == 1) playcom('line1');
    if (line == 2) playcom('line2');
    if (line == 3) playcom('line3');
    if (settings.Character !== 0) {
     if (line == 4) playcom('gtris');
    }
    else {
     if (line == 4) playcom('line4');



    }

   }
  }
 }
}





var fieldimgenable = true;
var fieldimg2enable = true
var fieldimg3enable = true
var feverenable = true

var fieldload = ''

var characters_folder, dsfever;

var voiceset = {
 /* initv1: new Howl({ src: 'characters/voices/init1.ogg' }),
  initv2: new Howl({ src: 'characters/voices/init2.ogg' }),
  spellv1: new Howl({ src: 'characters/voices/spell1.ogg' }),
  spellv2: new Howl({ src: 'characters/voices/spell2.ogg' }),
  spellv3: new Howl({ src: 'characters/voices/spell3.ogg' }),
  spellv4: new Howl({ src: 'characters/voices/spell4.ogg' }),
  spellv5: new Howl({ src: 'characters/voices/spell5.ogg' }),
  vwin: new Howl({ src: 'characters/voices/win.ogg' }),
  damage1: new Howl({ src: 'characters/voices/damage1.ogg' }),
  damage2: new Howl({ src: 'characters/voices/damage2.ogg' }),*/
}
var fieldwarningload
var fieldsleepload
var fieldimg = new Image()
var fieldimg3 = new Image()
var fieldimg2 = new Image()
var feverChar = new Image()

function characterinit() {
 /*
 for (var UNLOAD in comvoice)
 if(UNLOAD in comvoice) comvoice[UNLOAD].unload()
 /*  */
 if(currentCOMVoice!=settings.Commentary){
 comvoice = {
  line1: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/single.ogg', html5: true, preload: false }),
  line2: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/double.ogg', html5: true, preload: false }),
  line3: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/triple.ogg', html5: true, preload: false }),
  line4: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/quad.ogg', html5: true, preload: false }),
  gtris: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/gquad.ogg', html5: true, preload: false }),
  spin0: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/tspin0.ogg', html5: true, preload: false }),
  mini0: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/tmini0.ogg', html5: true, preload: false }),
  mini1: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/tmini1.ogg', html5: true, preload: false }),

  spin1: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/tspin1.ogg', html5: true, preload: false }),
  pc: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/pc.ogg', html5: true, preload: false }),
  spin2: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/tspin2.ogg', html5: true, preload: false }),
  spin3: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/tspin3.ogg', html5: true, preload: false }),
  b2bline4: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/b2bquad.ogg', html5: true, preload: false }),
  b2bgtris: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/b2bgquad.ogg', html5: true, preload: false }),
  b2bspin0: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/b2btspin0.ogg', html5: true, preload: false }),
  b2bmini1: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/b2btmini1.ogg', html5: true, preload: false }),
  b2bspin1: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/b2btspin1.ogg', html5: true, preload: false }),
  b2bspin2: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/b2btspin2.ogg', html5: true, preload: false }),
  b2bspin3: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/b2btspin3.ogg', html5: true, preload: false }),
 }
  currentCOMVoice=settings.Commentary
 }
 
 if(currentCharacter!=settings.Character){
  
 currentCharacter=settings.Character
 
 /* for (var T in comvoice /**/
 /*var T=0;T<comvoice.length;T++*/
 /* ) {
   //if(comvoice[T].on==true){

   comvoice[T].load()
   comvoice[T].on('loaderror', function() {
    //console.log('NOT FOUND'+T)
   })
   comvoice[T].on('load', function() {
    // console.log('FOUND' + T)
   })

   //}
  }*/



 var settingchar = settings.Character.toString()
 characters_folder;
 if (settingchar == '0') { characters_folder = NaN }
 else characters_folder = setting.Character[settings.Character];

 fieldwarningload = 'characters/'.concat(characters_folder, '/fieldwarning.png')
 fieldload = 'characters/'.concat(characters_folder, '/field.png')
 fieldsleepload = 'characters/'.concat(characters_folder, '/fieldsleep.png')
 dsfever = 'characters/'.concat(characters_folder, '/startfever.png')


 fieldimg.src = fieldload
 fieldimg2.src = fieldwarningload
 fieldimg3.src = fieldsleepload
 feverChar.src = dsfever

 fieldimg.onerror = function() {
  fieldimgenable = false

  document.getElementById('SHOWFIELD').style.visibility = "hidden";
 }
 fieldimg2.onerror = function() {
  fieldimg2enable = false

  document.getElementById('SHOWFIELD').style.visibility = "hidden";
 }
 fieldimg3.onerror = function() {
  fieldimg3enable = false

  document.getElementById('SHOWFIELD').style.visibility = "hidden";
 }
 feverChar.onerror = function() {
  feverenable = false

  document.getElementById('divFEVER').style.visibility = "hidden";
 }

 fieldimg.onload = function() {
  fieldimgenable = true
  document.getElementById('bgFIELD').style.opacity = 1
  document.getElementById('SHOWFIELD').style.visibility = "visible";
 }
 fieldimg2.onload = function() {
  fieldimg2enable = true
  document.getElementById('bgFIELD').style.opacity = 1
  document.getElementById('SHOWFIELD').style.visibility = "visible";
 }
 fieldimg3.onload = function() {
  fieldimg3enable = true
  document.getElementById('bgFIELD').style.opacity = 1
  document.getElementById('SHOWFIELD').style.visibility = "visible";
 }
 feverChar.onload = function() {
  feverenable = true
  document.getElementById('divFEVERI').style.opacity = 1
  document.getElementById('divFEVER').style.visibility = "visible";
 }



 if (feverenable) {
  document.getElementById('feverIMG').src = dsfever
  document.getElementById('feverIMG').style.opacity = 0
 } else {
  document.getElementById('divFEVERI').style.opacity = 0
  document.getElementById('divFEVERI').style = "width:100%;height:100%"
 }




 try {
  voiceset['initv1'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/init1.ogg') });
  voiceset['initv2'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/init2.ogg') });
  voiceset['initv3'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/init3.ogg') });
  voiceset['initv4'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/init4.ogg') });
  voiceset['initv5'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/init5.ogg') });
  voiceset['success'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/frenzysuccess.ogg') });
  voiceset['fail'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/frenzyfail.ogg') });
  voiceset['frenzystart'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/frenzy.ogg') });

  voiceset['spellv1'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/spell1.ogg') });
  voiceset['spellv2'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/spell2.ogg') });
  voiceset['spellv3'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/spell3.ogg') });
  voiceset['spellv4'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/spell4.ogg') });
  voiceset['spellv5'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/spell5.ogg') });
  voiceset['damage1'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/damage1.ogg') });
  voiceset['damage2'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/damage2.ogg') });
  voiceset['gachatris'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/gtris.ogg') })
  voiceset['gachatrisplus'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/gtrisplus.ogg') })

 } catch (e) {
  // alert(e)
 }
 voiceset['gachatris'].once('loaderror', function() { gtrisenable = false })
 voiceset['gachatris'].once('load', function() { gtrisenable = true })
 voiceset['gachatrisplus'].once('loaderror', function() { gtrisenableplus = false })
 voiceset['gachatrisplus'].once('load', function() { gtrisenableplus = true })
}
}




var varfieldenable = fieldimgenable == true && fieldimg2enable == true && fieldimg3enable == true
var frenzydifficulty = 4

function warningalarm() {
 if (linosbool && !paused && gameState == 0 && gametype !== 113 || timewarning) {

  if (!alertsoundactive) {
   sfxRETURN('alertsoundslow').off('end', function() {
    stopsfx('alertsoundslow')
   }) /**/
   playsfx('alertsoundslow');

   alertsoundactive = true;
   document.getElementById('b').style.boxShadow = "0 0 32px rgba(255,0,0,1)"
   if (gameState == 4 || gameState >= 3) {
    if (varfieldenable) {
     document.getElementById('bgFIELD').src = fieldsleepload
     document.getElementById('bgFIELD').style = "width:100%;height:100%;opacity:1"
    } else {
     document.getElementById('bgFIELD').style.opacity = 0
     document.getElementById('bgFIELD').style = "width:100%;height:100%"
    }
   } else if (paused !== true && gameState == 0) {
    if (varfieldenable) {
     document.getElementById('bgFIELD').src = fieldwarningload
     document.getElementById('bgFIELD').style = "width:100%;height:100%;opacity:1"
    } else {
     document.getElementById('bgFIELD').style.visibility = opacity = 0
     document.getElementById('bgFIELD').style = "width:100%;height:100%"
    }
   }
  }
 }
 else {
  if (alertsoundactive == true) {
   alertsoundactive = false;
   document.getElementById('b').style.boxShadow = "0 0 4px rgba(255,255,255,1)"
   {
    if (varfieldenable) {
     if (document.getElementById('bgFIELD').src !== fieldload) {
      document.getElementById('bgFIELD').src = fieldload
      document.getElementById('bgFIELD').style = "width:100%;height:100%;opacity:1"
     }

    } else {
     document.getElementById('bgFIELD').style.opacity = 0
     document.getElementById('bgFIELD').style = "width:100%;height:100%"
    }

    sfxRETURN('alertsoundslow').once('end', function() {
     stopsfx('alertsoundslow')
    }) /**/
   }

  }
  if (varfieldenable) {

   if (document.getElementById('bgFIELD').loaded) {
    document.getElementById('bgFIELD').src = fieldload
    document.getElementById('bgFIELD').style = "width:100%;height:100%;opacity:1"
   }
  } else {
   document.getElementById('bgFIELD').style.opacity = 0
   document.getElementById('bgFIELD').style = "width:100%;height:100%"
  }

  if (gameState == 4 || gameState >= 3) {
   if (varfieldenable) {

    document.getElementById('bgFIELD').src = fieldsleepload
    document.getElementById('bgFIELD').style = "width:100%;height:100%;opacity:1"
   } else {
    document.getElementById('bgFIELD').style.opacity = 0
    document.getElementById('bgFIELD').style = "width:100%;height:100%"
   }
  }
 }
}
var gtrisenable = false
var gtrisenableplus = false
var gtrisinput = false
try {
 var piecesound = {
  'OFF': {},
  'GT.JS': {
   0: new Howl({ src: 'piece-sounds/1/Piece-0.mp3', html5: true }),
   1: new Howl({ src: 'piece-sounds/1/Piece-1.mp3', html5: true }),
   2: new Howl({ src: 'piece-sounds/1/Piece-2.mp3', html5: true }),
   3: new Howl({ src: 'piece-sounds/1/Piece-3.mp3', html5: true }),
   4: new Howl({ src: 'piece-sounds/1/Piece-4.mp3', html5: true }),
   5: new Howl({ src: 'piece-sounds/1/Piece-5.mp3', html5: true }),
   6: new Howl({ src: 'piece-sounds/1/Piece-6.mp3', html5: true }),
  },
  'TETR.IO': {
   0: new Howl({ src: 'piece-sounds/2/Piece-0.mp3', html5: true }),
   1: new Howl({ src: 'piece-sounds/2/Piece-1.mp3', html5: true }),
   2: new Howl({ src: 'piece-sounds/2/Piece-2.mp3', html5: true }),
   3: new Howl({ src: 'piece-sounds/2/Piece-3.mp3', html5: true }),
   4: new Howl({ src: 'piece-sounds/2/Piece-4.mp3', html5: true }),
   5: new Howl({ src: 'piece-sounds/2/Piece-5.mp3', html5: true }),
   6: new Howl({ src: 'piece-sounds/2/Piece-6.mp3', html5: true }),
  }
 }
} catch (ell) { alert(ell) }

var gachatrismax = 40




function clear_line(boollinevv, LNSDTCT, LSR, MSR, PC, Multiplier) {
 if (boollinevv !== 0) {
  varren++
 }
 if ((!MSR&&!LSR)&&(LNSDTCT<=3)&&b2b>=3)playsfx('b2b_end')

 if (LNSDTCT >= 4) {
  gtrisinput = true
  gachatrises += 0
 } else {
  gtrisinput = false
 }

 if (boollinevv == 1 && LNSDTCT === 1) {
  //SINGLE
  minoes -= 10
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
   b2b = -1
   /*varren++*/
   ;
   stackscore += 100 * Multiplier;

   linevoice = LNSDTCT;
   linesend = 0;
   cleartext = TransText('single')
  }
  else /*if (LSR === true || MSR === true)*/ {
   if (LSR == true && MSR == false) {
    /*IF LSR IS ONLY TRUE, IT IS DECLARED AS
    A REGULAR T-SPIN SINGLE*/
    playsfx('onespin');
    cleartext = TransText('tspin1')
    /*varren++*/
    ;
    b2b++
    if (b2b < 1)
     stackscore += 800 * Multiplier;;
    linevoice = 3;
    linesend = 3
    //in case a back-to-back clear is achieved,
    //every difficult line clear, TSpins and quads,
    //adds up by half of their score as a bonus
    if (b2b >= 1) {
     stackscore += 1200 * Multiplier
     //    playsfx('b2bs');;
     //   cleartext += '<br/>Back-to-back X'.concat(b2b.toString(), '')
    };
   }
   else if (LSR == false && MSR == true) {
    /*IF MSR IS TRUE, IT'S DECLARED AS A 
    MINI T-SPIN*/
    playsfx('onemini');
    cleartext = TransText('mini1')
    boollinevv = 0;
    /*varren++*/
    ;
    b2b++
    if (b2b < 1)
     stackscore += 200 * Multiplier

    linevoice = LNSDTCT;
    linesend = 0
    if (b2b >= 1) {
     stackscore += 300 * Multiplier
     //   playsfx('b2bs');;
     //   cleartext += '<br/>Back-to-back X'.concat(b2b.toString(), '')
    };

   }
  }
 }
 if (boollinevv == 1 && LNSDTCT === 2) {
  minoes -= 20
  if (LSR === false && MSR === false) {
   if (gametype == 111) {
    failTSD = true
   }
   b2b = -1
   if (b2b < 1)
    stackscore += 300 * Multiplier
   playsfx('twoline');


   /*varren++*/
   ;

   linevoice = LNSDTCT;
   linesend = 2

   cleartext = TransText('double')
  }
  else {
   if (gametype == 111) {
    failTSD = false
    TSD++
    statsLines.innerHTML = TSD
   }
   b2b++
   if (b2b < 1)
    stackscore += 1200 * Multiplier
   playsfx('twospin');



   /*varren++*/
   ;



   linevoice = 4;
   linesend = 4

   cleartext = TransText('tspin2')
   if (b2b >= 1) {
    stackscore += 1800 * Multiplier
    //  playsfx('b2bs');;
    // cleartext += '<br/>Back-to-back X'.concat(b2b.toString(), '')
   };

  }
 };
 if (boollinevv == 1 && LNSDTCT === 3) {
  minoes -= 30
  if (gametype == 111) {
   failTSD = true
  }
  if (LSR === false && MSR === false) {
   playsfx('threeline');
   b2b = -1
   if (b2b < 1)
    /*varren++*/
   ;
   stackscore += 500 * Multiplier

   linevoice = LNSDTCT;
   linesend = 3

   cleartext = 'Triple'
  } else {

   playsfx('threespin');
   b2b++
   if (b2b < 1)
    stackscore += 1600 * Multiplier

   /*varren++*/
   ;

   ;
   linevoice = 6;
   linesend = 6;;

   cleartext = TransText('tspin3')
   if (b2b >= 1) {
    stackscore += 2400 * Multiplier


    //   playsfx('b2bs');;
    //  cleartext += '<br/>Back-to-back X'.concat(b2b.toString(), '')
   };

  }
 };
 if (boollinevv == 1 && LNSDTCT == 4) {
  minoes -= 40
  if (gametype == 111) {

   failTSD = true
  }
  b2b++
  if (b2b < 1)
   stackscore += 800 * Multiplier
  playsfx('fourline');



  /*varren++*/
  ;



  linevoice = LNSDTCT;
  linesend = 4

  if (settings.Character !== 0) {
   cleartext = 'Gachatris'
  } else {
   cleartext = TransText('quad')
  }
  if (b2b >= 1) {

   stackscore += 1200 * Multiplier;
   //  playsfx('b2bs');


   //  cleartext += '<br/>Back-to-back X'.concat(b2b.toString(), '')
  }
 };
 if (boollinevv == 1 && LNSDTCT >= 5) {
  minoes -= 10 * LNSDTCT
  if (gametype == 111) {

   failTSD = true
  }
  b2b++
  if (b2b < 1)
   stackscore += 1000
  playsfx('fourline');



  /*varren++*/
  ;



  linevoice = LNSDTCT;
  linesend = 4

  if (settings.Character !== 0) {
   cleartext = 'Gachatris Plus'
  } else {
   cleartext = TransText('quadplus')
  }
  if (b2b >= 1) {

   stackscore += 500;
   //  playsfx('b2bs');


   //  cleartext += '<br/>Back-to-back X'.concat(b2b.toString(), '')
  }
 };
 if (b2b > 0) {
  cleartextpc = (b2b!==1?
   `${TransText('b2b')} X${b2b}`:
 TransText('b2b'))
 
  playsfx((function(b){
   if(b<3) return 'b2bs';
   if(b>=3&&b<8) return 'b2bs2';
   if(b>=8&&b<24) return 'b2bs3';
   if(b>=24&&b<63) return 'b2bs4';
   if(b>=63) return 'b2bs5'
  })(b2b))
  //tetr.io style b2b sounding
  if(b2b==3){playsfx('b2b1')}
  if(b2b==8){playsfx('b2b2')}
  if(b2b==24){playsfx('b2b3')}
  if(b2b==63){playsfx('b2b4')}
  
  if(b2b==3||b2b==8||b2b==24||b2b==63){
   $d('clearstatspc').style.opacity=1
   $d('clearstatspc').style.animation='B2Bblink 0.3s infinite linear'
   setTimeout(function(){
   $d('clearstatspc').style.opacity=1;
   $d('clearstatspc').style.animation='clear'
}, 700)
  }
  
  
  
 } else {
  cleartextpc = ''
 }
 showclear()


 if (gametype == 111) {

  while (failTSD == true) {

   endgame(TransText('nottsd'), 9, true)

   failTSD = false;
  }
 }
 if (gametype == 115)
  if (frame in replayKeys.garbagesend)
   for (var i = 0; i < replayKeys.garbagesend[frame]; i++) {

    if ((garbagenumber <= 0)) {
     if (garbrowcount > 0) {
      for (var y = 22; y >= -1; y--) {
       if (garbrowcount == 0) break

       for (var x = 0; x < 10; x++) {
        if (!feverActivate)
        {
         stack.grid[x][22] = 0

         stack.grid[x][y] = stack.grid[x][y - 1];
        }
        else {
         StackTemp[x][22] = 0

         StackTemp[x][y] = StackTemp[x][y - 1];
        }
       }
      }
      stack.draw()
      garbrowcount--
     } else { garbagenumber-- } {}

    } else { garbagenumber-- }
   }




 if (gametype == 112 || (gametype == 115 && watchingReplay == false)) {
  if (PC) {
   neutralline = 10
  } else {

   if (linesend == 6) {
    neutralline = 6;
   };
   if (linesend == 4) {
    neutralline = 4;
   };
   if (linesend == 3) {
    neutralline = 2
   }
   if (linesend <= 1) {
    neutralline = 0
   };
   if (linesend == 2) {
    neutralline = 1
   };
   if (linesend == 3) {
    neutralline = 2
   }
  }
  if (feverActivate && frame > feverTime) {
   neutralline += 140
  }




  if (varren >= 2 && varren <= 3) {
   neutralline += 1
  };
  if (varren >= 4 && varren <= 5) {
   neutralline += 2
  };
  if (varren >= 6 && varren <= 7) {
   neutralline += 3
  };
  if (varren >= 8 && varren <= 10) {
   neutralline += 4
  };
  if (varren >= 11) {
   neutralline += 5
  };
  if (b2b >= 1) {
   neutralline += 1
  };
  if (watchingReplay == false && gametype == 115)
   replayKeys.garbagesend[frame] = 0
  while (neutralline > 0) {
   if (garbagenumber > 0)
    garbagenumber--

   if (!watchingReplay && gametype == 115) { replayKeys.garbagesend[frame]++ }

   /*     if (gametype==115){
        if (garbagenumber<0) {
                
                } 
                
        }*/
   neutralline--

  }






  /*if (garbrowcount>0){
                     for (var y = 22; y >= -1; y--) {
                       if (garbrowcount==0) break
                         for (var x = 0; x < 10; x++) {
                             {
                             }
                             stack.grid[x][y] = stack.grid[x][y - 1];
                         }
                     }
                     stack.draw()
                     garbrowcount--
                 } 
               else */






 }



 MSR = false
 isMini = false;
 isSpin = false
 if (PC) {
  perfectboolvoice = true;
  linevoice = 10;
 }

}
var perfectboolvoice = false
var GARBSEQ = 0
var garbrowcount = 0
var PENDTXT = document.getElementById('pendin')
var PENDNUM = document.getElementById('pendum')
var feverTimeNow = 0
var gachatrises = 0

function allclearshow() {
 var initid = 0

 document.getElementById('allcleartext').style.transition = "top .0s linear"
 document.getElementById('allcleartext').style.top = "-30%"
 setTimeout(function() {
  document.getElementById('allcleartext').style.transition = "top .1s linear"
  document.getElementById('allcleartext').style.top = "40%"
 }, 2)

 initid = 1200
 try {
  clearTimeout(initids)
 } catch {} finally {
  initids = setTimeout(function() {
   document.getElementById('allcleartext').style.transition = "top 1s cubic-bezier(0.1,-0.4,1,0)"

   document.getElementById('allcleartext').style.top = "-50%"
  }, initid)
 }

}

function matrixmove(property, number) {
 var movePartial = number * (settings.Bounciness)
 document.getElementById('b').style = property + ':' + movePartial + 'px'

 setTimeout(function() {
  document.getElementById('b').style = property + ':' + 0 + 'px'

 }, 500)
}

function flashfield() {
 varpiecedelayadd = 5
 document.getElementById('fieldflash').style.opacity = 1
 document.getElementById('fieldflash').style.transition = "opacity 0s linear"
 document.getElementById('b').style.animation = "flashThing 1s infinite linear"
 document.getElementById('active_FM').style.animation = "flashThing2 1s infinite linear"
 document.getElementById('bgFEVER').style.animation = "feverrotate 2.4s infinite linear"
 $("#feverIMG").animate({ top: '0%', opacity: 1 }, 10)
 $("#feverIMG").animate({ top: '-3%', opacity: 1 }, 800)
 $("#feverIMG").animate({ top: '-40%', opacity: 0 }, 300)
 $("#feverTXT").animate({ top: '20%', opacity: 1 }, 10)
 $("#feverTXT").animate({ opacity: 1 }, 800)
 $("#feverTXT").animate({ top: '-30%', opacity: 0 }, 300)
 $("#SHOWFEVER").css('visibility', 'visible')




 /*	if (feverenable) 
 		document.getElementById('divFEVER').style.opacity=1

 		document.getElementById('divFEVERI').style.transition="opacity 0.05s linear"
 document.getElementById('divFEVERI').style.transition="top 0s linear"
 		
 		document.getElementById('feverTXT').style.transition='opacity 0.05s linear'
 		
 			document.getElementById('divFEVERI').style.top = 3+'%'

 	
 	document.getElementById('divFEVERI').style.opacity=1
 	document.getElementById('feverIMG').style.opacity=1
  
 	document.getElementById('feverTXT').style.opacity=1
 	
 		 setTimeout(function() {
 		 	document.getElementById('divFEVERI').style.top = -10+'%';

 			document.getElementById('divFEVERI').style.transition = "top 800ms linear"
 					}, 2)
 					setTimeout(function() {
 						document.getElementById('divFEVERI').style.transition = "top 1s linear"

 						document.getElementById('divFEVERI').style.top = -10 + '%';
 					
 												document.getElementById('divFEVERI').style.opacity=0

 						document.getElementById('divFEVERI').style.transition="opacity 0.5s linear"
 document.getElementById('feverTXT').style.opacity=0
 document.getElementById('feverTXT').style.transition='opacity 0.5s linear'

 					}, 800)


 } else {
 	document.getElementById('divFEVER').style.opacity = 0
 	
 }//*/
 var time2 = setTimeout(function() {
  document.getElementById('fieldflash').style.transition = "opacity 1s linear"

  document.getElementById('fieldflash').style.opacity = 0
 }, 1)
}

function startMode(type) {
 if (type == "DA") {
  mapdifficulty = ~~(MLSlider.value)
  mistakeDA = ~~(MissSlider.value)
  customtime = ~~(TimeSlider.value) * 60
  init(116)
 }
 if (type == "Sprint") {
  sprintParameter.QUEUETYPE = ~~($d('typeset').value)
  sprintParameter.LINELIMIT = ~~($d('lineset').value)
  init(0)
 }
 if (type == "Marathon") {
  marathonParameter.LEVEL = ~~($d('marathon-levelset').value)
  marathonParameter.LINELIMIT = ~~($d('marathon-lineset').value)==301?'infinity':~~($d('marathon-lineset').value)
  marathonParameter.LINESREQ = ~~($d('marathon-linereqset').value)

  init(117)
 }
 if (type == "Master") {
  masterParameter.LEVEL = ~~($d('master-levelset').value)
  masterParameter.LINELIMIT = ~~($d('master-lineset').value) == 601 ? 'infinity' : ~~($d('master-lineset').value)
  masterParameter.LINESREQ = ~~($d('master-linereqset').value)
 
  init(118)
 }
}





function hidefield() {
 $("bgFEVER").css("animation", "clear")
 document.getElementById('fieldflash').style.opacity = 1
 document.getElementById('fieldflash').style.transition = "opacity 0s linear"
 document.getElementById('b').style.animation = "flashThing 1s infinite linear"
 document.getElementById('active_FM').style.animation = "flashThing2 1s infinite linear"

 document.getElementById('b').style.animation = "clear"
 document.getElementById('active_FM').style.animation = "clear"

 $("#SHOWFEVER").css('visibility', 'hidden')
 document.getElementById('active_FM').style.color = '#0ff'
 document.getElementById('b').style.boxShadow = '0 0 3px #fff'

 var time2 = setTimeout(function() {
  document.getElementById('fieldflash').style.transition = "opacity 1s linear"

  document.getElementById('fieldflash').style.opacity = 0
 }, 1)

}

function resetfieldposition() {
 var initid = 0
 var initids

 document.getElementById('b').style.transition = "transform .0s ease-in"
 document.getElementById('b').style.transform = "translate(0,0) rotateZ(0deg)"

 initid = 0
 try {
  clearTimeout(initids)
 } catch {} finally {
  initids = setTimeout(function() {
   document.getElementById('b').style.transition = "transform 2s ease-in"
   document.getElementById('b').style.transform = "translate(0,0) rotateZ(0deg)"
  }, initid)
 }
}

function fallboard() {
 // document.getElementById('b').style.transition = "transform 2s linear"
 document.getElementById('b').style.transform = "translate(91px,2300px) rotateZ(100deg)"

}


const MarathonSpeed = {
 '-1': -2,
 0: 0,
 1: 2 / 158,
 2: 2 / 84,
 3: 3 / 64,
 4: 4 / 64,
 5: 6 / 64,
 6: 8 / 64,
 7: 14 / 64,
 8: 20 / 64,
 9: 32 / 64,
 10: 46 / 64,
 11: 1.88,
 12: 3,
 13: 4,
 14: 5,
 15: 6,
 16: 8,
 17: 10,
 18: 14,
 19: 18
}
function MarathonLockLimit(int){
 if(int<20){
  return 0
 }
 else{
  return (int-20)
 }
}

var currentCharacter=0, currentCOMVoice=0

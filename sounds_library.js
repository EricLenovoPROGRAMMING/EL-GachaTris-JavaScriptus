var SoundFX = {/*
 renend: new Howl({ src: 'sounds/UNDEFINED/endren.ogg' }),
 b2bs: new Howl({ src: 'sounds/UNDEFINED/b2b.ogg' }),
 b2bs2: new Howl({ src: 'sounds/UNDEFINED/b2b-low.ogg' }),
 b2bs3: new Howl({ src: 'sounds/UNDEFINED/b2b-med.ogg' }),
 b2bs4: new Howl({ src: 'sounds/UNDEFINED/b2b-high.ogg' }),
 b2bs5: new Howl({ src: 'sounds/UNDEFINED/b2b-exhigh.ogg' }),
 spinsound: new Howl({ src: 'sounds/UNDEFINED/spinrot.ogg' }),
 minispinsound: new Howl({ src: 'sounds/UNDEFINED/spinrotmini.ogg' }),
 minizero: new Howl({ src: 'sounds/UNDEFINED/mini0.ogg' }),
 onemini: new Howl({ src: 'sounds/UNDEFINED/mini1.ogg' }),
 hdsound: new Howl({ src: 'sounds/UNDEFINED/harddrop.ogg' }),
 garbageup: new Howl({ src: 'sounds/UNDEFINED/lineup.ogg' }),
 minisound: new Howl({ src: 'nuisanceL.ogg' }),
 spinzero: new Howl({ src: 'sounds/UNDEFINED/spin0.ogg' }),
 perfectclear: new Howl({ src: 'sounds/UNDEFINED/perfect.ogg' }),
 // alertsoundslow: new Howl({ src: 'sounds/UNDEFINED/alertsound.ogg' }),
 KO: new Howl({ src: 'sounds/UNDEFINED/KO.ogg' }),
 timeup: new Howl({ src: 'sounds/UNDEFINED/timerunout.ogg' }),
 oneline: new Howl({ src: 'sounds/UNDEFINED/single.ogg' }),
 twoline: new Howl({ src: 'sounds/UNDEFINED/double.ogg' }),
 threeline: new Howl({ src: 'sounds/UNDEFINED/triple.ogg' }),
 fourline: new Howl({ src: 'sounds/UNDEFINED/tetris.ogg' }),
 onespin: new Howl({ src: 'sounds/UNDEFINED/spin1.ogg' }),
 twospin: new Howl({ src: 'sounds/UNDEFINED/spin2.ogg' }),
 threespin: new Howl({ src: 'sounds/UNDEFINED/spin3.ogg' }),
 IRSSound: new Howl({ src: 'sounds/UNDEFINED/irs.ogg' }),
IHSSound: new Howl({ src: 'sounds/UNDEFINED/ihs.ogg' }),

 b2b1: new Howl({ src: 'sounds/UNDEFINED/b2b-1.ogg' }),
 b2b2: new Howl({ src: 'sounds/UNDEFINED/b2b-2.ogg' }),
 b2b3: new Howl({ src: 'sounds/UNDEFINED/b2b-3.ogg' }),
 b2b4: new Howl({ src: 'sounds/UNDEFINED/b2b-4.ogg' }),
 b2b_end: new Howl({ src: 'sounds/UNDEFINED/b2b-end.ogg' }),
 
 ready: new Howl({ src: 'sounds/UNDEFINED/state-ready.ogg' }),
 ready2: new Howl({ src: 'sounds/UNDEFINED/state-ready2.ogg' }),
 start: new Howl({ src: 'sounds/UNDEFINED/state-go.ogg' }),
 
 win: new Howl({ src: 'sounds/UNDEFINED/game-win.ogg' }),
 lose: new Howl({ src: 'sounds/UNDEFINED/game-lose.ogg' }),


 place: new Howl({ src: 'sounds/UNDEFINED/place.ogg' }),
 softdrops: new Howl({ src: 'sounds/UNDEFINED/softdrop.ogg' }),
 hdsound: new Howl({ src: 'sounds/UNDEFINED/harddrop.ogg' }),
 alarm: new Howl({ src: 'sounds/UNDEFINED/tapoutalarm.ogg', loop: true}),
 rotatepiece: new Howl({ src: 'sounds/UNDEFINED/rotate.ogg' }),
 movesound: new Howl({ src: 'sounds/UNDEFINED/moves.ogg' }),
 noninithold: new Howl({ src: 'sounds/UNDEFINED/nith.ogg' }),
 inithold: new Howl({ src: 'sounds/UNDEFINED/ith.ogg' }),
 lockse: new Howl({ src: 'sounds/UNDEFINED/lock.ogg' }),
 alertsoundslow: new Howl({ src: 'sounds/UNDEFINED/alertsound.ogg', loop: true}),
 pieceLand: new Howl({ src: 'sounds/UNDEFINED/land.ogg',}),
 levelUp: new Howl({ src: 'sounds/UNDEFINED/levelup.ogg', html5: true }),

 timer: new Howl({ src: 'sounds/UNDEFINED/timerwarn.ogg', html5: true }),
 linedown: new Howl({ src: 'sounds/UNDEFINED/linedown.ogg', html5: true })
/**/}
var REN = {}
var musicbgm = new Howl({ src: 'music/original.mp3', html5: true })



var soundsinit = 'GTJS' /*  */
for (let k = 0; k < 21; k++) {
 REN[k] = new Howl({
  src: [`sounds/${soundsinit}/ren/ren${k}.ogg`],
 })
 var tloadk =
  /*new Howl({
   src: ['sounds' + reninit + 'ren' + k + '.mp3'],
  })*/
  REN[k].load()
 REN[k].once('loaderror',function(){
  REN[k] = new Howl({
   src: [`sounds/${soundsinit}/ren/ren${k}.mp3`],

  })
 })
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
  else{
   playcom('pc')
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
    if (line == 2) playcom('b2bmini2');

   }
   else {
    if (line == 0) playcom('mini0');
    if (line == 1) playcom('mini1');
    if (line == 2) playcom('mini2');
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

var field2imgenable = true;
var field2img2enable = true
var field2img3enable = true

var feverenable = true

var fieldload = ''
var fieldload2 = ''

var characters_folder, characters_folder2 , dsfever;

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
}, voiceset2={}
var fieldwarningload
var fieldsleepload
var fieldimg = new Image()
var fieldimg3 = new Image()
var fieldimg2 = new Image()

var fieldwarningload2
var fieldsleepload2
var field2img = new Image()
var field2img3 = new Image()
var field2img2 = new Image()

var feverChar = new Image()

function characterinit(NEW) {
 /*
 for (var UNLOAD in comvoice)
 if(UNLOAD in comvoice) comvoice[UNLOAD].unload()
 /*  */
 loadSFX()
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
mini2: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/tmini2.ogg', html5: true, preload: false }),

  spin1: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/tspin1.ogg', html5: true, preload: false }),
  pc: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/pc.ogg', html5: true, preload: false }),
  spin2: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/tspin2.ogg', html5: true, preload: false }),
  spin3: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/tspin3.ogg', html5: true, preload: false }),
  b2bline4: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/b2bquad.ogg', html5: true, preload: false }),
  b2bgtris: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/b2bgquad.ogg', html5: true, preload: false }),
  b2bspin0: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/b2btspin0.ogg', html5: true, preload: false }),
  b2bmini1: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/b2btmini1.ogg', html5: true, preload: false }),
  b2bmini2: new Howl({ src: 'commentary/' + setting.Commentary[settings.Commentary] + '/b2btmini2.ogg', html5: true, preload: false }),

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
 if('1v1params' in replayKeys)
 var settingchar2 = replayKeys['1v1params'].character.toString()
 
 
 if (currentCharacter == '0') { characters_folder = NaN }
 else characters_folder = setting.Character[currentCharacter];

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
 rectAnimations.loadRA=true
 var eee = ['spell1', 'spell2', 'spell3', 'spell4', 'spell5', 'counter', 'damage']
 for (let i of eee) {
  $d(i).src=`characters/${characters_folder}/rectAnimations/${i}.png`
  rectAnimations.preload[i]=new Image()
  rectAnimations.preload[i].src=`characters/${characters_folder}/rectAnimations/${i}.png`
  rectAnimations.preload[i].onloaderror=()=>{rectAnimations.loadRA=fail}
 }
 rectAnimations.preloader()


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
  voiceset['counter'] = new Howl({ src: 'characters/'.concat(characters_folder, '/voices/counterspell.ogg') });

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
 voiceset['gachatris'].once('loaderror', function() { stack.gtrisenable = false })
 voiceset['gachatris'].once('load', function() { stack.gtrisenable = true })
 voiceset['gachatrisplus'].once('loaderror', function() { stack.gtrisenableplus = false })
 voiceset['gachatrisplus'].once('load', function() { stack.gtrisenableplus = true })
}

if ('1v1params' in replayKeys) {
 if(currentCharacter2!==replayKeys['1v1params'].character){
  currentCharacter2=replayKeys['1v1params'].character
 if (currentCharacter2 == '0') { characters_folder2 = NaN }
 else characters_folder2 = setting.Character[currentCharacter2];

 fieldwarningload2 = 'characters/'.concat(characters_folder2, '/fieldwarning.png')
 fieldload2 = 'characters/'.concat(characters_folder2, '/field.png')
 fieldsleepload2 = 'characters/'.concat(characters_folder2, '/fieldsleep.png')


 field2img.src = fieldload2
 field2img2.src = fieldwarningload2
 field2img3.src = fieldsleepload2


 field2img.onerror = function() {
  field2imgenable = false

  document.getElementById('SHOWFIELD').style.visibility = "hidden";
 }
 field2img2.onerror = function() {
  field2img2enable = false

  document.getElementById('SHOWFIELD').style.visibility = "hidden";
 }
 field2img3.onerror = function() {
  field2img3enable = false

  document.getElementById('SHOWFIELD').style.visibility = "hidden";
 }


 field2img.onload = function() {
  field2imgenable = true
  document.getElementById('bgFIELD2').style.opacity = 1
  document.getElementById('SHOWFIELD2').style.visibility = "visible";
 }
 field2img2.onload = function() {
  field2img2enable = true
  document.getElementById('bgFIELD2').style.opacity = 1
  document.getElementById('SHOWFIELD2').style.visibility = "visible";
 }
 field2img3.onload = function() {
  field2img3enable = true
  document.getElementById('bgFIELD2').style.opacity = 1
  document.getElementById('SHOWFIELD2').style.visibility = "visible";
 }

 rectAnimations2.loadRA = true
 let eee = ['spell1', 'spell2', 'spell3', 'spell4', 'spell5', 'counter', 'damage']
 for (let i of eee) {
  $d(i).src = `characters/${characters_folder2}/rectAnimations/${i}.png`
  rectAnimations2.preload[i] = new Image()
  rectAnimations2.preload[i].src = `characters/${characters_folder2}/rectAnimations/${i}.png`
  rectAnimations2.preload[i].onloaderror = () => { rectAnimations2.loadRA = false }
 }
 rectAnimations.preloader()
 try {
  voiceset2['initv1'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/init1.ogg') });
  voiceset2['initv2'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/init2.ogg') });
  voiceset2['initv3'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/init3.ogg') });
  voiceset2['initv4'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/init4.ogg') });
  voiceset2['initv5'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/init5.ogg') });
  voiceset2['success'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/frenzysuccess.ogg') });
  voiceset2['fail'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/frenzyfail.ogg') });
  voiceset2['frenzystart'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/frenzy.ogg') });
  voiceset2['counter'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/counterspell.ogg') });

  voiceset2['spellv1'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/spell1.ogg') });
  voiceset2['spellv2'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/spell2.ogg') });
  voiceset2['spellv3'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/spell3.ogg') });
  voiceset2['spellv4'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/spell4.ogg') });
  voiceset2['spellv5'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/spell5.ogg') });
  voiceset2['damage1'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/damage1.ogg') });
  voiceset2['damage2'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/damage2.ogg') });
  voiceset2['gachatris'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/gtris.ogg') })
  voiceset2['gachatrisplus'] = new Howl({ src: 'characters/'.concat(characters_folder2, '/voices/gtrisplus.ogg') })

 } catch (e) {
  // alert(e)
 }
 voiceset2['gachatris'].once('loaderror', function() { stack2.gtrisenable = false })
 voiceset2['gachatris'].once('load', function() { stack2.gtrisenable = true })
 voiceset2['gachatrisplus'].once('loaderror', function() { stack2.gtrisenableplus = false })
 voiceset2['gachatrisplus'].once('load', function() { stack2.gtrisenableplus = true })

 
 
}
}
}




var varfieldenable = fieldimgenable == true && fieldimg2enable == true && fieldimg3enable == true
var varfieldenable2 = fieldimgenable == true && fieldimg2enable == true && fieldimg3enable == true
var frenzydifficulty = 4
var alertsoundactive2
function warningalarm() {
 try{
 if (linosbool && !paused && gameState == 0 && gametype !== 113 &&gametype!==116 || timewarning) {

  if (!alertsoundactive) {
   if(!('1v1params'in replayKeys))
   playsfx('alertsoundslow');
   

   alertsoundactive = true;
   document.getElementById('b').style.border = "0.2em solid #f00"
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
   document.getElementById('b').style.border = "0.2em solid #fff"
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

  //  while(sfxRETURN('alertsoundslow').playing())
     if(!('1v1params'in replayKeys))
     sfxRETURN('alertsoundslow').fade(1,0,500)
     /**/
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

  if ((gameState == 4 || gameState >= 3)&&!('1v1params'in replayKeys)) {
   if (varfieldenable) {

    document.getElementById('bgFIELD').src = fieldsleepload
    document.getElementById('bgFIELD').style = "width:100%;height:100%;opacity:1"
   } else {
    document.getElementById('bgFIELD').style.opacity = 0
    document.getElementById('bgFIELD').style = "width:100%;height:100%"
   }
  }
 }
 }catch(e){}
}


function warningalarm2() {
 try {
  if (linosbool2 && !paused && gameState == 0 && gametype !== 113 && gametype !== 116 || timewarning) {

   if (!alertsoundactive2) {

  //  playsfx('alertsoundslow');


    alertsoundactive2 = true;
    document.getElementById('b2').style.border = "0.2em solid #f00"
    if ((gameState == 4 || gameState >= 3)) {
     if (varfieldenable2) {
      document.getElementById('bgFIELD2').src = fieldsleepload2
      document.getElementById('bgFIELD2').style = "width:100%;height:100%;opacity:1"
     } else {
      document.getElementById('bgFIELD2').style.opacity = 0
      document.getElementById('bgFIELD2').style = "width:100%;height:100%"
     }
    } else if (paused !== true && gameState == 0) {
     if (varfieldenable2) {
      document.getElementById('bgFIELD2').src = fieldwarningload2
      document.getElementById('bgFIELD2').style = "width:100%;height:100%;opacity:1"
     } else {
      document.getElementById('bgFIELD2').style.visibility = opacity = 0
      document.getElementById('bgFIELD2').style = "width:100%;height:100%"
     }
    }
   }
  }
  else {
   if (alertsoundactive2 == true) {
    alertsoundactive2 = false;
    document.getElementById('b2').style.border = "0.2em solid #fff"
    {
     if (varfieldenable2) {
      if (document.getElementById('bgFIELD2').src !== fieldload2) {
       document.getElementById('bgFIELD2').src = fieldload2
       document.getElementById('bgFIELD2').style = "width:100%;height:100%;opacity:1"
      }

     } else {
      document.getElementById('bgFIELD2').style.opacity = 0
      document.getElementById('bgFIELD2').style = "width:100%;height:100%"
     }

     //  while(sfxRETURN('alertsoundslow').playing())

     
     /**/
    }

   }
   if (varfieldenable2) {

    if (document.getElementById('bgFIELD2').loaded) {
     document.getElementById('bgFIELD2').src = fieldload2
     document.getElementById('bgFIELD2').style = "width:100%;height:100%;opacity:1"
    }
   } else {
    document.getElementById('bgFIELD2').style.opacity = 0
    document.getElementById('bgFIELD2').style = "width:100%;height:100%"
   }

   if ((gameState == 4 || gameState >= 3)&&!('1v1params'in replayKeys)) {
    if (varfieldenable2) {

     document.getElementById('bgFIELD2').src = fieldsleepload2
     document.getElementById('bgFIELD2').style = "width:100%;height:100%;opacity:1"
    } else {
     document.getElementById('bgFIELD2').style.opacity = 0
     document.getElementById('bgFIELD2').style = "width:100%;height:100%"
    }
   }
  }
 } catch (e) {}
}


var gtrisenable = false
var gtrisenableplus = false
var gtrisinput = false
var piecesound = {
  /*'OFF': {},
  'GTJS': {
   0: new Howl({ src: 'piece-sounds/1/Piece-0.mp3', html5: true }),
   1: new Howl({ src: 'piece-sounds/1/Piece-1.mp3', html5: true }),
   2: new Howl({ src: 'piece-sounds/1/Piece-2.mp3', html5: true }),
   3: new Howl({ src: 'piece-sounds/1/Piece-3.mp3', html5: true }),
   4: new Howl({ src: 'piece-sounds/1/Piece-4.mp3', html5: true }),
   5: new Howl({ src: 'piece-sounds/1/Piece-5.mp3', html5: true }),
   6: new Howl({ src: 'piece-sounds/1/Piece-6.mp3', html5: true }),
  },
  'TGM3': {
   0: new Howl({ src: 'piece-sounds/2/Piece-0.ogg', html5: true }),
   1: new Howl({ src: 'piece-sounds/2/Piece-1.ogg', html5: true }),
   2: new Howl({ src: 'piece-sounds/2/Piece-2.ogg', html5: true }),
   3: new Howl({ src: 'piece-sounds/2/Piece-3.ogg', html5: true }),
   4: new Howl({ src: 'piece-sounds/2/Piece-4.ogg', html5: true }),
   5: new Howl({ src: 'piece-sounds/2/Piece-5.ogg', html5: true }),
   6: new Howl({ src: 'piece-sounds/2/Piece-6.ogg', html5: true }),
  }*/
}
var gachatrismax = 40



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

function allclearshow2() {
 var initid = 0

 document.getElementById('allcleartext2').style.transition = "top .0s linear"
 document.getElementById('allcleartext2').style.top = "-30%"
 setTimeout(function() {
  document.getElementById('allcleartext2').style.transition = "top .1s linear"
  document.getElementById('allcleartext2').style.top = "40%"
 }, 2)

 initid = 1200
 try {
  clearTimeout(initids2)
 } catch {} finally {
  initids2 = setTimeout(function() {
   document.getElementById('allcleartext2').style.transition = "top 1s cubic-bezier(0.1,-0.4,1,0)"

   document.getElementById('allcleartext2').style.top = "-50%"
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
 document.getElementById('active_FM').style.animation = "flashThing2 1s  linear"
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
  marathonParameter.LINELIMIT = ~~($d('marathon-lineset').value)==151?'infinity':~~($d('marathon-lineset').value)
  marathonParameter.LINESREQ = ~~($d('marathon-linereqset').value)

  init(117)
 }
 if (type == "Master") {
  masterParameter.LEVEL = ~~($d('master-levelset').value)
  masterParameter.LINELIMIT = ~~($d('master-lineset').value) == 301 ? 'infinity' : ~~($d('master-lineset').value)
  masterParameter.LINESREQ = ~~($d('master-linereqset').value)
  init(118)
 }
  if (type == "VS AI") {
   //making sure everything is secure
   init(119)
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
 document.getElementById('b').style.border = '0.2em solid #fff'

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

 initid = 1
 try {
  clearTimeout(initids)
 } catch {} finally {
  initids = setTimeout(function() {
   document.getElementById('b').style.transition = "transform 2s ease-in"
   document.getElementById('b').style.transform = "translate(0,0) rotateZ(0deg)"
  }, initid)
 }
 
 
  document.getElementById('b2').style.transition = "transform .0s ease-in"
  document.getElementById('b2').style.transform = "translate(0,0) rotateZ(0deg)"
 
  try {
   clearTimeout(initids)
  } catch {} finally {
  
  setTimeout(function() {
    document.getElementById('b2').style.transition = "transform 2s ease-in"
    document.getElementById('b2').style.transform = "translate(0,0) rotateZ(0deg)"
   }, 1)}
  
 
 
}

function fallboard() {
  document.getElementById('b').style.transition = "transform 2s ease-in"
 document.getElementById('b').style.transform = "translate(91px,2300px) rotateZ(100deg)"

}

function fallboard2() {
  document.getElementById('b2').style.transition = "transform 2s ease-in"
 document.getElementById('b2').style.transform = "translate(91px,2300px) rotateZ(100deg)"

}



function editnum(){}

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

var currentCharacter=null, currentCOMVoice=null, currentCharacter2=null

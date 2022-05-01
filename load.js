function loadSFX(){
 if(currentSFX!==settings.SoundType){
 currentSFX=settings.SoundType
 try{
  for(let c in SoundFX)SoundFX[c].unload()
 }catch(r){}
 try {
  for (let c in REN) REN[c].unload()
 } catch (r) {}


 SoundFX = {
  renend: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/endren.ogg` , preload: false}),
  b2bs: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2b.ogg` , preload: false}),
  b2bs2: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2b-low.ogg` , preload: false}),
  b2bs3: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2b-med.ogg` , preload: false}),
  b2bs4: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2b-high.ogg` , preload: false}),
  b2bs5: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2b-exhigh.ogg` , preload: false}),
  spinsound: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/spinrot.ogg` , preload: false}),
  minispinsound: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/spinrotmini.ogg` , preload: false}),
  minizero: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/mini0.ogg` , preload: false}),
  onemini: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/mini1.ogg` , preload: false}),
  hdsound: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/harddrop.ogg` , preload: false}),
  garbageup: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/lineup.ogg` , preload: false}),
  spinzero: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/spin0.ogg` , preload: false}),
  perfectclear: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/perfect.ogg` , preload: false}),
  // alertsoundslow: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/alertsound.ogg` , preload: false}),
  KO: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/KO.ogg` , preload: false}),
  timeup: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/timerunout.ogg` , preload: false}),
  oneline: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/single.ogg` , preload: false}),
  twoline: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/double.ogg` , preload: false}),
  threeline: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/triple.ogg` , preload: false}),
  fourline: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/tetris.ogg` , preload: false}),
  onespin: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/spin1.ogg` , preload: false}),
  twospin: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/spin2.ogg` , preload: false}),
  twomini: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/mini2.ogg` , preload: false}),

  threespin: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/spin3.ogg` , preload: false}),
  IRSSound: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/irs.ogg` , preload: false}),
  IHSSound: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/ihs.ogg` , preload: false}),
 
  b2b1: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2b-1.ogg` , preload: false}),
  b2b2: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2b-2.ogg` , preload: false}),
  b2b3: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2b-3.ogg` , preload: false}),
  b2b4: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2b-4.ogg` , preload: false}),
  b2b_end: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2b-end.ogg` , preload: false}),
 
  ready: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/state-ready.ogg` , preload: false}),
  ready2: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/state-ready2.ogg` , preload: false, html5:true}),
  start: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/state-go.ogg` , preload: false}),
 
  win: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/game-win.ogg` , preload: false}),
  lose: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/game-lose.ogg` , preload: false}),
 
 
  place: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/place.ogg` , preload: false}),
  softdrops: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/softdrop.ogg` , preload: false}),
 // hdsound: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/harddrop.ogg` , preload: false}),
  alarm: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/tapoutalarm.ogg`, loop: true , preload: false}),
  rotatepiece: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/rotate.ogg` , preload: false}),
  movesound: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/moves.ogg` , preload: false}),
  //IHS and inithold are DIFFERENT
  noninithold: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/nith.ogg` , preload: false, html5:true}),
  inithold: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/ith.ogg` , preload: false}),
  lockse: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/lock.ogg` , preload: false}),
  alertsoundslow: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/alertsound.ogg`, loop: true , preload: false}),
  pieceLand: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/land.ogg`, preload: false}),
  levelUp: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/levelup.ogg`, html5: true , preload: false}),
 
  timer: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/timerwarn.ogg`, html5: true , preload: false}),
  linedown: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/linedown.ogg`, html5: true , preload: false}),
  
  b2bfourline: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2btetris.ogg`, html5: true , preload: false}),
  b2bonespin: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2bspin1.ogg`, html5: true , preload: false}),
  b2btwospin: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2bspin2.ogg`, html5: true , preload: false}),
    b2btwomini: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2bmini2.ogg`, html5: true , preload: false}),

  b2bthreespin: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2bspin3.ogg`, html5: true , preload: false}),
  b2bonemini: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2bmini1.ogg`, html5: true , preload: false}),

  b2bspin: new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2bspinLine.ogg`, html5: true , preload: false}),

 }
 
 for(let E=2; E<6;E++){
  
  SoundFX[`b2bs${E}`].once(`loaderror`,function(){
   SoundFX[`b2bs${E}`]= /*new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/b2b.ogg` , preload: true})*/SoundFX[`b2bs`]
 SoundFX[`b2bs${E}`].load()
  })
 }
 SoundFX[`inithold`].once(`loaderror`,function(){
  SoundFX[`inithold`]=new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/nith.ogg` , preload:true})
 
 })
 var lineClear=[`onespin`,`twospin`,`threespin`,'twomini']
 
 var spinZero=[`spinzero`,`minizero`]
 /*for (var i of lineClear){
  SoundFX[`${i}line`].once(`loaderror`,function(){
   SoundFX[`${i}line`]= /*new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/single.ogg`})SoundFX[`oneline`]
  })
  SoundFX[`${i}spin`].once(`loaderror`, function() {
   SoundFX[`${i}spin`] = new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/spinLine.ogg`})
  })
 }/**/
   SoundFX[`onemini`].once(`loaderror`, function() {
    SoundFX[`onemini`] = new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/spinLine.ogg` , preload: true})
    
   })
   SoundFX[`b2bonemini`].once(`loaderror`, function() {
    SoundFX[`b2bonemini`] = new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/mini1.ogg`, preload: true })
   
   })
   SoundFX[`b2bfourline`].once(`loaderror`, function() {
    SoundFX[`b2bfourline`] = new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/tetris.ogg`, preload: true })
   
   
   })
 for (let u of lineClear){
  
  SoundFX[u].once(`loaderror`, function() {
   SoundFX[u] = new Howl({ src: [`sounds/${setting.SoundType[currentSFX]}/spinLine.ogg`] , preload: false,html5:true})
   SoundFX[u].load()
   
  })
 }
 
 for (let u of spinZero) {
  
   SoundFX[u].once(`loaderror`, function() {
    SoundFX[u] = new Howl({ src: [`sounds/${setting.SoundType[currentSFX]}/spin0.ogg`], preload: true })
    SoundFX[u].load()
   })
 }
 SoundFX[`hdsound`].once(`loaderror`, function() {
  SoundFX[`hdsound`] = new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/lock.ogg` , preload: true})
 })
 
 for(let t in SoundFX) SoundFX[t].load()
 for (let I of lineClear) {
  SoundFX[`b2b${I}`].once(`loaderror`, function() {
   SoundFX[`b2b${I}`] /*= new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/${
    {
    onespin:'spin1',
    twospin:'spin2',
    threespin:'spin3',
    }[I]}.ogg`, preload: true })
  })/**/=SoundFX[`${I}`]
   SoundFX[`b2b${I}`].load()
  })
  
 }/**/
 for (let I of lineClear) {
  SoundFX[`b2bspin`].once(`load`, function() {
   SoundFX[`b2b${I}`] /*= new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/${
    {
    onespin:'spin1',
    twospin:'spin2',
    threespin:'spin3',
    }[I]}.ogg`, preload: true })
  })/**/=SoundFX[`b2bspin`]
   SoundFX[`b2b${I}`].load()
  })
  
 }/**/
 
 /*for(var i =0;i<lineClear.length;i++){
  for(var ie=0;ie<lineClear.length;ie++)
  SoundFX[lineClear[i]].once(`loaderror`, function() {
   SoundFX[lineClear[i]] = new Howl({ src: `sounds/${setting.SoundType[currentSFX]}/spinLine.ogg`, preload: true })
  })
 }*/
 
 
 for (let k = 0; k < 21; k++) {
  REN[k] = new Howl({
       src: [`sounds/${setting.SoundType[currentSFX]}/ren/ren${k}.mp3`],
  })
    
   /*new Howl({
    src: [`sounds` + reninit + `ren` + k + `.mp3`],
   })*/
      REN[k].once(`loaderror`, function() {
       REN[k] = new Howl({
        src: [`sounds/${setting.SoundType[currentSFX]}/ren/ren${k}.ogg`],
   
       })
      })
   REN[k].load()

 }
 }
 if(currentPSFX!==settings.PieceSFX){
  currentPSFX=settings.PieceSFX
  
   piecesound = {
    0:  new Howl({ src: `piece-sounds/${setting.PieceSFX[currentPSFX]}/Piece-0.mp3`, html5: true , preload: false}),
    1 : new Howl({ src: `piece-sounds/${setting.PieceSFX[currentPSFX]}/Piece-1.mp3`, html5: true , preload: false}),
     2: new Howl({ src: `piece-sounds/${setting.PieceSFX[currentPSFX]}/Piece-2.mp3`, html5: true , preload: false}),
    3:  new Howl({ src: `piece-sounds/${setting.PieceSFX[currentPSFX]}/Piece-3.mp3`, html5: true , preload: false}),
    4:  new Howl({ src: `piece-sounds/${setting.PieceSFX[currentPSFX]}/Piece-4.mp3`, html5: true , preload: false}),
    5:  new Howl({ src: `piece-sounds/${setting.PieceSFX[currentPSFX]}/Piece-5.mp3`, html5: true , preload: false}),
    6: new Howl({ src: `piece-sounds/${setting.PieceSFX[currentPSFX]}/Piece-6.mp3`, html5: true , preload: false}),
   }
 
 for (let /*en=0;en<6;en++/**/ en in piecesound /***/ ) {
  //console.log(en + 'moved to ogg')
  
   piecesound[en].once('loaderror', function() {
    piecesound[en] = new Howl({ src: `piece-sounds/${setting.PieceSFX[currentPSFX]}/Piece-${en}.ogg` })
    piecesound[en].load()
   })
 
 
 }
 
 for (let en in piecesound)
 piecesound[en].load()
}
}
var currentSFX = null
var currentPSFX=null


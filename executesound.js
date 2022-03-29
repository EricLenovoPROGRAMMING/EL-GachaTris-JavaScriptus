/*function playse(setype=String, number=Number) {
   if (settings.Sound==1)
      if (setype==='lineclear'){
       if (number===1){
           oneline.play()
           oneline.volume=settings.Volume*0.01
           oneline.controls=false
           
       }
       
}
}*/

function playsfx(sound) {
 var soundname = SoundFX[sound]
 if ((settings.Sound == true && settings.Volume > 0) && (gamediff == undefined || gamediff < 50)) {
  {
   soundname.volume(settings.Volume / 100)
  }
  soundname.stop()
  soundname.play()

  return soundname


 }

}
function sfxRETURN(detect){
 return SoundFX[detect]
}

function playsfxJSO(soundname) {
 if ((settings.Sound == true && settings.Volume > 0) && (gamediff == undefined || gamediff < 50)) {
  {
   soundname.volume(settings.Volume / 100)
  }
  soundname.stop()
  soundname.play()

 }
}

function stopsfx(varN) {
 var varname = SoundFX[varN]
 varname.stop()
}

function stopsfxJSO(varname) {
 varname.stop()
}

function playvoice(voicename) {
 if (gamediff == undefined || gamediff < 50)
  if (settings.Voice == 1 && settings.VFXVol !== 0) {
   {
    var vol = settings.VFXVol / 100
    voiceset[voicename].volume(vol)


    voiceset[voicename].stop()

    voiceset[voicename].play();


   }

  }
}

function playpiecesfx(jsonname) {
 var vol = settings.PieceVol / 100
 try{
 if (gamediff == undefined || gamediff < 4)
  if (settings.PieceVol !== 0 && settings.PieceSFX !== 0) {
   piecesound[jsonname].volume(vol)
   piecesound[jsonname].stop()
   piecesound[jsonname].play()
  }

}catch(e){}

}

function playcom(jsonname) {
 var vol = settings.CMVol / 100
 if (gamediff == undefined || gamediff < 50)
  if (settings.CMVol !== 0) {
   comvoice[jsonname].volume(vol)
   comvoice[jsonname].stop()
   comvoice[jsonname].play()
  }
  
  return comvoice[jsonname]
}

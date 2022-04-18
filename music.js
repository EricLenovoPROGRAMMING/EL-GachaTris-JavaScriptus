try{
var MusicParameter={
 current:null,
 active:false,
 MFX:{}
}

function loadMFX(){
 if(replayKeys.MFX!==MusicParameter.current&&replayKeys.MFX!==0&&settings.MFXVol!==0){
  MusicParameter.current=replayKeys.MFX
  var filename=`music/${setting.Music[replayKeys.MFX]}/`
  var name=setting.Music[replayKeys.MFX]
  try{
  for(let A in MusicParameter.MFX)
   for(let E in MusicParameter.MFX[A]){
    if(MusicParameter.MFX[A][E]){MusicParameter.MFX[A][E].stop()
    MusicParameter.MFX[A][E].unload()
     MusicParameter.MFX[A][E].off('end',playmfx)
    }
   }
  }catch(t){}
  MusicParameter.MFX[name]={
   start:new Howl({src:`${filename}start.ogg`,preload:false}),
   loop:new Howl({src:`${filename}loop.ogg`,preload:false,loop:true})
  }
  for(let A in MusicParameter.MFX){
   for(let E in MusicParameter.MFX[A]){
    MusicParameter.MFX[A][E].load()
    }
    MusicParameter.MFX[A]['start'].on('end',()=>{playmfx('play','loop')})

  }
 }
}

function playmfx(operator,soundname){
 try{
  var name = MusicParameter.MFX[setting.Music[replayKeys.MFX]]
  if(settings.MFXVol>0)
  {
  name[soundname].volume(settings.MFXVol / 100)
if(operator=='stop')
  name[soundname].stop()
if(operator=='play'&&active)
  name[soundname].play()
  }
 }
catch(t){}
}



}catch(t){alert(t)}

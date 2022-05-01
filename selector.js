function loadCharacters(){
 
 var ul = document.createElement('ul')
 var setChar = $d("selectorCHAR")
for(let C=1;C<setting.Character.length+1;C++){

 let li =document.createElement('li')
 let a =document.createElement('a')
 a.className='XSELECTOR'
 a.addEventListener('click',function(){setCharS(C-1);setCharTest()},false)
 a.innerHTML=setting.Character[C-1]
 
 ul.appendChild(li)
li.appendChild(a)
 
 
}
setChar.appendChild(ul)
}

loadCharacters()

function loadChapter(){/*
 //(!)TO PREVENT JS CONSOLE USERS FROM ACCESSING THE ADVENTURE MODE WIP AS IT IS STILL BEING WORKED IN PROGRESS. BUT IN ADVENTURE.JS AND OTHER ADVENTURE.JS-CONNECTED FILES AND DIRECTORIES, YOU CAN SNEAK IN THEM TO KNOW WHAT IS WITH IT. THE GACHA SERIES GOVERNED BY THE ADVENTURE MODE IS "THE EPIC TETROGACHA REVOLUTION ADVENTURES."
 for (let i = 0; i < document.getElementsByClassName("chapterSELECTOR").length; i++) {
   if (document.getElementsByClassName("chapterSELECTOR")[i].className == "chapterSELECTOR") {
        document.getElementsByClassName('chapterSELECTOR')[i].parentNode.removeChild(document.getElementsByClassName("chapterSELECTOR")[i]);
   }
}
 var ul = document.createElement('ul')
 var setChar = $d("selectorCHAPTER")
for(let C=0;C<Object.keys(CutscenePages).length;C++){
 
 let li =document.createElement('li')
 let a =document.createElement('a')
 a.className='chapterSELECTOR'
 a.addEventListener('click',function(){loadLevel(C+1);setChapterS(C+1);},false)
 a.innerHTML=`${"Chapter"} ${C+1}: ${CutscenePages[`chapter${C+1}`].title[{
 0:'en',
   1:'fil',
   2:'fr'
  
 }[settings.Language]]}`
 
 ul.appendChild(li)
li.appendChild(a)
}
setChar.appendChild(ul)
menu(12)
//menu 12
}

function loadLevel(number) {
  for (let t = 0; t < document.getElementsByClassName('levelSELECTOR').length; t++)
   try {
    document.getElementsByClassName('levelSELECTOR')[t].classList.remove('TACTIVE')
   } catch (e) {}
 for (let i = 0; i < document.getElementsByClassName("levelSELECTOR").length; i++) {
  try{for(var tr=0;tr<3;tr++)
   //if (document.getElementsByClassName("levelSELECTOR")[i].className == "levelSELECTOR") {
        document.getElementsByClassName('levelSELECTOR')[i].parentNode.removeChild(document.getElementsByClassName("levelSELECTOR")[i]);
           //}
  }catch(e){}
        //  textGUI('adventurelevel',`Chapter ${adventureParameter.selectorchapter} Levels (${Object.keys(adventureParameter.localStorageSession[`chapter${adventureParameter.selectorchapter}`]).length}/${Object.keys(CutscenePages[`chapter${adventureParameter.selectorchapter}`].levels).length} UNLOCKED)`)

}
//textGUI('adventurelevel',`Chapter ${adventureParameter.selectorchapter} Levels (${Object.keys(adventureParameter.localStorageSession[`chapter${adventureParameter.selectorchapter}`]).length}/${Object.keys(CutscenePages[`chapter${adventureParameter.selectorchapter}`].levels).length} UNLOCKED)`)

try{$ctsc('Name','title')
  $ctsc('_description','description')
  $iH('level_charName', CutscenePages[`chapter${adventureParameter.selectorchapter}`]['levels'][adventureParameter.selectorlevel].character)
}catch(e){}
 var ul = document.createElement('ul')
 var setChar = $d("selectorCLVL");

 for (let C=0;C<Object.keys(CutscenePages[`chapter${number}`].levels).length;C++) {
    if(C>=Object.keys(adventureParameter['localStorageSession'][`chapter${number}`]).length)break

  let li = document.createElement('div')
  let p = document.createElement('p')
  let img = document.createElement('img')
  li.className = 'levelSELECTOR'
  img.setAttribute('src',`characters/${CutscenePages[`chapter${number}`].levels[C+1].character}/icon.png`)
  li.addEventListener('click', function() { setLevelS(C+1);
  setLevelTest()}, false)
  p.innerHTML = `${"Level"} ${C+1}: ${CutscenePages[`chapter${number}`].levels[C+1].title[{
   0:'en',
   1:'fil',
   2:'fr'
  }[settings.Language]]}
  
  `
  li.appendChild(p)
  li.appendChild(img)
  setChar.appendChild(li)

 //lappendChild(a)
 }
 //setChar.appendChild(li)
 menu(13)/**/
}



function loadCharactersAI(){
 for (let t = 0; t < document.getElementsByClassName('ZSELECTOR').length; t++)
   try {
    document.getElementsByClassName('ZSELECTOR')[t].classList.remove('ACTIVE')
   } catch (e) {}
 for (let i = 0; i < document.getElementsByClassName("ZSELECTOR").length; i++) {
  try{for(var tr=0;tr<84;tr++)
   //if (document.getElementsByClassName("levelSELECTOR")[i].className == "levelSELECTOR") {
        //document.getElementsByClassName('ZSELECTOR')[i].parentNode.removeChild(document.getElementsByClassName("ZSELECTOR")[i].parentNode);

        document.getElementsByClassName('ZSELECTOR')[i].parentNode.removeChild(document.getElementsByClassName("ZSELECTOR")[i]);
           //}
           
  }catch(e){}
        //  textGUI('adventurelevel',`Chapter ${adventureParameter.selectorchapter} Levels (${Object.keys(adventureParameter.localStorageSession[`chapter${adventureParameter.selectorchapter}`]).length}/${Object.keys(CutscenePages[`chapter${adventureParameter.selectorchapter}`].levels).length} UNLOCKED)`)

}
 
 
 
 
 var ul = document.createElement('ul')
 var setChar = $d("selectorCHARAI")
for(let C=1;C<setting.Character.length+1;C++){

 let li =document.createElement('li')
 let a =document.createElement('a')
 a.className='ZSELECTOR'
 a.addEventListener('click',function(){setCharAI(C-1);setCharAITest()},false)
 a.innerHTML=setting.Character[C-1]
 
 ul.appendChild(li)
li.appendChild(a)
 
 
}
setChar.appendChild(ul)
menu(16)
setCharAITest()
}



function selectorSection(){
 setCharTest()
 
}





function subChar(){
 setVar(C-1)
 }

function setCharS(index){
 settings.Character=index
 localStorage['gtris333_settingsse']=localStorage['gtris333_settings']=JSON.stringify(settings)
}
function setCharAI(index) {
 vsParameter.CHARACTER = index
 saveVSSetting()
 
}
function setLevelS(index) {
 adventureParameter.selectorlevel = index
 console.log(adventureParameter.selectorlevel)

}
function setChapterS(index) {
 adventureParameter.selectorchapter = index
 console.log(adventureParameter.selectorchapter)
  textGUI('adventurelevel',`Chapter ${adventureParameter.selectorchapter} Levels (${Object.keys(adventureParameter[`localStorageSession`][`chapter${adventureParameter.selectorchapter}`]).length}/${Object.keys(CutscenePages[`chapter${adventureParameter.selectorchapter}`].levels).length} UNLOCKED)`)

}
function setCharAITest(){
 if(vsParameter.CHARACTER==0){$d('selectorICONAI').style.opacity=0;}else {$d('selectorICONAI').style.opacity=1}
  for(let t=0;t<document.getElementsByClassName('ZSELECTOR').length;t++)
  try{
document.getElementsByClassName('ZSELECTOR')[t].classList.remove('ACTIVE')
}catch(e){}
 document.getElementsByClassName('ZSELECTOR')[vsParameter.CHARACTER].classList.add('ACTIVE')
 $d("iconCHARAI").src=`characters/${setting.Character[vsParameter.CHARACTER]}/icon.png`
 $iH('charNameAI', setting.Character[vsParameter.CHARACTER])
$d('vs-characterheader').innerHTML=vsParameter.CHARACTER!=0?setting.Character[vsParameter.CHARACTER]:'---'

 
}


function saveChar(){
 menu(1)
}
function setCharTest(){
 if(settings.Character==0){$d('selectorICON').style.opacity=0;}else {$d('selectorICON').style.opacity=1}
  for(let t=0;t<document.getElementsByClassName('XSELECTOR').length;t++)
  try{
document.getElementsByClassName('XSELECTOR')[t].classList.remove('ACTIVE')
}catch(e){}
 document.getElementsByClassName('XSELECTOR')[settings.Character].classList.add('ACTIVE')
 $d("iconCHAR").src=`characters/${setting.Character[settings.Character]}/icon.png`
 $iH('charName', setting.Character[settings.Character])
}

function setLevelTest() {
  for(let t=0;t<document.getElementsByClassName('levelSELECTOR').length;t++)
  try {
   document.getElementsByClassName('levelSELECTOR')[t].classList.remove('TACTIVE')
  } catch (e) {}
 document.getElementsByClassName('levelSELECTOR')[adventureParameter.selectorlevel-1].classList.add('TACTIVE')
$ctsc('Name','title')
  $ctsc('_description','description',`<br/><br/>
 ${TransText('starNotes', (function(){
 var main=CutscenePages[`chapter${adventureParameter.selectorchapter}`]['levels'][adventureParameter.selectorlevel]
 if(main.stars.type=='score'){
  return 'score'
 }
 if (main.stars.type == 'time') {
  return 'time'
 }
 })())}:<br/>
 ★: ${TransText('clearLevelNote')}<br>
 ★★: ${(function(){
 var main=CutscenePages[`chapter${adventureParameter.selectorchapter}`]['levels'][adventureParameter.selectorlevel]
 if(main.stars.type=='time'){
 let time=main.stars[2]
  return `${(Math.floor((time) / 3600)).toFixed(0)}:${((time / 60) % 60) < 10 ? '0' : ''}${((time / 60) % 60).toFixed(2)}`
 }
 if(main.stars.type=='score'){
 let statsscore = main.stars[2]
  return `${(statsscore < 10000000 ? '0' : '')}${(statsscore < 1000000 ? '0' : '')}${(statsscore < 100000 ? '0' : '')}${(statsscore < 10000 ? '0' : '')}${(statsscore < 1000 ? '0' : '')}${(statsscore < 100 ? '0' : '')}${(statsscore < 10 ? '0' : '')}${statsscore}`
 }
 })()}<br/>
 ★★★: ${(function(){
 var main=CutscenePages[`chapter${adventureParameter.selectorchapter}`]['levels'][adventureParameter.selectorlevel]
 if(main.stars.type=='time'){
 let time=main.stars[3]
  return `${(Math.floor((time) / 3600)).toFixed(0)}:${((time / 60) % 60) < 10 ? '0' : ''}${((time / 60) % 60).toFixed(2)}`
 }
 if(main.stars.type=='score'){
 let statsscore = main.stars[3]
  return `${(statsscore < 10000000 ? '0' : '')}${(statsscore < 1000000 ? '0' : '')}${(statsscore < 100000 ? '0' : '')}${(statsscore < 10000 ? '0' : '')}${(statsscore < 1000 ? '0' : '')}${(statsscore < 100 ? '0' : '')}${(statsscore < 10 ? '0' : '')}${statsscore}`
 }
 })()}`)
  $iH('level_charName', CutscenePages[`chapter${adventureParameter.selectorchapter}`]['levels'][adventureParameter.selectorlevel].character)

 
}


setCharTest()
function $ctsc(component,Ctsc, additions){
 $iH(`level${component}`, `${CutscenePages[`chapter${adventureParameter.selectorchapter}`]['levels'][adventureParameter.selectorlevel][Ctsc][{
  0:'en',
  1:'fil',
  2:'fr'
 }[settings.Language]]}
 ${(function(e){
 if(typeof e == 'undefined')
 return ''
 else return e
 })(additions)}`)
}

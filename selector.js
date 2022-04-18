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

function loadChapter(){
 /*//(!)TO PREVENT JS CONSOLE USERS FROM ACCESSING THE ADVENTURE MODE WIP AS IT IS STILL BEING WORKED IN PROGRESS. BUT IN ADVENTURE.JS AND OTHER ADVENTURE.JS-CONNECTED FILES AND DIRECTORIES, YOU CAN SNEAK IN THEM TO KNOW WHAT IS WITH IT. THE GACHA SERIES GOVERNED BY THE ADVENTURE MODE IS "THE EPIC TETROGACHA REVOLUTION ADVENTURES."
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
 a.innerHTML=`${"Chapter"} ${C+1}: ${CutscenePages[`chapter${C+1}`].title}`
 
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
  p.innerHTML = `${"Level"} ${C+1}: ${CutscenePages[`chapter${number}`].levels[C+1].title}`
  li.appendChild(p)
  li.appendChild(img)
  setChar.appendChild(li)

 //lappendChild(a)
 }
 //setChar.appendChild(li)
 menu(13)/**/
}



function selectorSection(){
 setCharTest()
 
}





function subChar(){
 setVar(C-1)
 }

function setCharS(index){
 settings.Character=index
 localStorage['gtris_settingsse']=localStorage['gtris_settings']=JSON.stringify(settings)

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
$iH('levelName', `${adventureParameter.selectorchapter}-${adventureParameter.selectorlevel}: ${CutscenePages[`chapter${adventureParameter.selectorchapter}`]['levels'][adventureParameter.selectorlevel].title}`)

 $iH('level_description', CutscenePages[`chapter${adventureParameter.selectorchapter}`]['levels'][adventureParameter.selectorlevel].description)
$iH('level_charName', CutscenePages[`chapter${adventureParameter.selectorchapter}`]['levels'][adventureParameter.selectorlevel].character)

 
}


setCharTest()

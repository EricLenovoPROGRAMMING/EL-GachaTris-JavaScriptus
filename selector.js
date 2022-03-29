function loadCharacters(){
 
 var ul = document.createElement('ul')
 
 var setChar = $d("selectorCHAR")
for(let C=1;C<setting.Character.length+1;C++){

 let li =document.createElement('li')
 let a =document.createElement('a')
 a.className='SELECTOR'
 a.addEventListener('click',function(){setCharS(C-1);setCharTest()},false)
 a.innerHTML=setting.Character[C-1]
 
 ul.appendChild(li)
li.appendChild(a)
 
 
}
setChar.appendChild(ul)
}


function subChar(){
 setVar(C-1)
 }

function setCharS(index){
 settings.Character=index
 console.log(index)

}
function saveChar(){
 menu(1)
}
function setCharTest(){
 if(settings.Character==0){$d('selectorICON').style.opacity=0;}else {$d('selectorICON').style.opacity=1}
  for(let t=0;t<document.getElementsByClassName('SELECTOR').length;t++)
document.getElementsByClassName('SELECTOR')[t].classList.remove('ACTIVE')
 document.getElementsByClassName('SELECTOR')[settings.Character].classList.add('ACTIVE')
 $d("iconCHAR").src=`characters/${setting.Character[settings.Character]}/icon.png`
 $iH('charName', setting.Character[settings.Character])
}

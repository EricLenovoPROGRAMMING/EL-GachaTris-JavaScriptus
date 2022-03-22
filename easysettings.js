//EricLenovo Easysettings
var DASSlider = document.getElementById('DASS')
var ARRSlider = document.getElementById('ARRS')
var GRAVSlider = document.getElementById('GRAVS')
var SFTSlider = document.getElementById('SFTS')
var LCKSlider = document.getElementById('LCKS')
var SESlider = document.getElementById('SES')
var CVSlider = document.getElementById('CVS')
var CHARSET = document.getElementById('CHARSET')
var SESET = document.getElementById('SECOM')
var CMVSlider = document.getElementById('CMVS')
var PSVSlider = document.getElementById('PSVS')
var TimeSlider = document.getElementById('timeset')
var MissSlider = document.getElementById('missset')
var MLSlider = document.getElementById('MLset')

var TimeText = document.getElementById('timeheader')
var MissText = document.getElementById('missheader')
var MLText = document.getElementById('MLheader')


'use strict';



function loadeasysettings() {
 for (var i = CHARSET.length; i > -1; i--) {
  CHARSET.remove(i)
 }


 try {
  DASSlider.value = settings.DAS;
  ARRSlider.value = settings.ARR;
  GRAVSlider.value = settings.Gravity;
  SFTSlider.value = settings['Soft Drop'];
  LCKSlider.value = settings['Lock Delay'];
  SESlider.value = settings.Volume;
  CVSlider.value = settings.VFXVol;
  CMVSlider.value = settings.CMVol;
  PSVSlider.value = settings.PieceVol;
 } catch (e) { alert(e + e) }

 for (var i = 0;; i++) {
  if (setting.Character[i] == void 0) {
   break
  }
  option = document.createElement("option");
  option.text = setting.Character[i]

  CHARSET.add(option, i);

  if (settings.Character >= CHARSET.length - 1) {
   CHARSET.selectedIndex = settings.Character
  }
 }
 try {

  document.getElementById('DASSP').innerHTML = `${TransText('das')}: ${setting.DAS[DASSlider.value]}`

  document.getElementById('ARRSP').innerHTML = `${TransText('arr')}: ${setting.ARR[ARRSlider.value]}`

  document.getElementById('GRAVSP').innerHTML =  `${TransText('grav')}: ${setting.Gravity[GRAVSlider.value]}`

  document.getElementById('SFTSP').innerHTML  =  `${TransText('sft')}: ${setting['Soft Drop'][SFTSlider.value]}`

  document.getElementById('LCKSP').innerHTML = `${TransText('lck')}: ${setting['Lock Delay'][LCKSlider.value]}`
 } catch (e) { alert(e) }


}

function backtomore() {

}


function savesettings() {
 try {
  /*settings.DAS=DASSlider.value
   settings.ARR=ARRSlider.value
   settings.Gravity=GRAVSlider.value
   settings['Soft Drop']=SFTSlider.value
   settings['Lock Delay']=LCKSlider.value
   settings.Volume=SESlider.value
   settings.VFXVol=CVSlider.value
   */
  settings.Character = CHARSET.selectedIndex


  for (var s in settings) saveSetting(s)


  menu(menudef)
 } catch (e) { alert(e) }
}


//SLIDER ON INPUT
DASSlider.oninput = function() {
 settings.DAS = ~~(this.value)
 document.getElementById('DASSP').innerHTML = `${TransText('das')}: ${setting.DAS[this.value]}`
 saveSetting('DAS')
}
ARRSlider.oninput = function() {
 settings.ARR = ~~(this.value)
 ARRSlider.innerHTML = "Auto Repeat Rate: "
 document.getElementById('ARRSP').innerHTML =  `${TransText('arr')}: ${setting.ARR[this.value]}`

 saveSetting('ARR')
}
GRAVSlider.oninput = function() {
 settings.Gravity = ~~(this.value)
 document.getElementById('GRAVSP').innerHTML =  `${TransText('grav')}: ${setting.Gravity[this.value]}`

 saveSetting('Gravity')
}
SFTSlider.oninput = function() {
 settings['Soft Drop'] = ~~(this.value)
 document.getElementById('SFTSP').innerHTML =  `${TransText('sft')}: ${setting['Soft Drop'][this.value]}`
 saveSetting('Soft Drop')
}
LCKSlider.oninput = function() {
 settings['Lock Delay'] = ~~(this.value)
 document.getElementById('LCKSP').innerHTML =  `${TransText('lck')}: ${setting['Lock Delay'][this.value]}`
 saveSetting('Lock Delay')
}
SESlider.oninput = function() {
 settings.Volume = ~~(this.value)
 saveSetting('Volume')
}
CVSlider.oninput = function() {
 settings.VFXVol = ~~(this.value)
 saveSetting('VFXVol')
}
CMVSlider.oninput = function() {
 settings.CMVol = ~~(this.value)

 saveSetting('CMVol')
}
PSVSlider.oninput = function() {
 settings.PieceVol = ~~(this.value)

 saveSetting('PieceVol')
}
TimeSlider.oninput = TimeValueF
function TimeValueF() {
 customtime = ~~(this.value) * 60
 var time = customtime
 var seconds = ((time / 60) % 60).toFixed(0);
 var minutes = (Math.floor((time) / 3600)).toFixed(0);
 TimeText.innerHTML = ` ${minutes + (seconds < 10 ? ':0' : ':') + seconds}`;


}
MissSlider.oninput = MissValueF
function MissValueF() {
 mistakeDA = ~~(this.value)
 MissText.innerHTML = ` ${this.value}`


}
MLSlider.oninput = PhaseValueF
function PhaseValueF() {
 mapdifficulty = ~~(this.value)
 MLText.innerHTML = ` ${this.value}`


}
$d('typeset').oninput = QueueValueF
function QueueValueF() {
 $d('typeheader').innerHTML = ` ${{
  0: TransText('sprint_queue1'),
  1: TransText('sprint_queue2'),
  2: TransText('sprint_queue3')
 }[~~(this.value)]}`
 sprintParameter.QUEUETYPE = ~~(this.value)
}
$d('lineset').oninput = LineLValueF
function LineLValueF() {
 $d('lineheader').innerHTML = ` ${this.value}`;
 sprintParameter.LINELIMIT = ~~(this.value)
}

$d('marathon-lineset').oninput = MarLineLValueF
function MarLineLValueF() {
 $d('marathon-lineheader').innerHTML = ` ${(this.value) !== '151' ? this.value : TransText('endless')}`
 marathonParameter.LINELIMIT = (~~(this.value)!==151?~~(this.value):'infinity')
}
$d('marathon-levelset').oninput = MarLevelValueF
function MarLevelValueF() {
 $d('marathon-levelheader').innerHTML =  ` ${this.value}`;
 marathonParameter.LEVEL = ~~(this.value)
}
$d('marathon-linereqset').oninput = 
function MarLineReqValueSet() {
 $d('marathon-linereqheader').innerHTML = ` ${this.value}`;
marathonParameter.LINESREQ = (this.value)
}


$d('master-lineset').oninput =
function MarLineLValueF() {
 $d('master-lineheader').innerHTML = ` ${(this.value) !== '301' ? this.value : TransText('endless')}`
 masterParameter.LINELIMIT = (~~(this.value)!==301?~~(this.value):'infinity')
}
$d('master-levelset').oninput = 
function MarLevelValueF() {
 $d('master-levelheader').innerHTML =  ` ${this.value}`;
 masterParameter.LEVEL = ~~(this.value)
}
$d('master-linereqset').oninput = 
function MarLineReqValueSet() {
 $d('master-linereqheader').innerHTML = ` ${this.value}`;
masterParameter.LINESREQ = (this.value)
}





function $dvalue(Tval){
 return ~~(document.getElementById(`${Tval}set`).value)
}

var customtime = 0
var mistakeDA = 0
var mapdifficulty = 0
var boardnum = 0
var failsDA = 0
var successesDA = 0
var sprintParameter = 
{
 QUEUETYPE: 0,
 LINELIMIT: 40
}

MarLevelValueF

var marathonParameter={
 LEVEL: 1,
 LINELIMIT: 150,
 LINESREQ:10,
 activity:{
  LEVEL: 1,
  LINESREQ: 10
 }
}

//MASTER: restrict ARE
function ARERestrict(a,i){
 return Math.max(4, a-((i-1)))
}

var QUEUE = {
 0: [0, 1, 2, 3, 4, 5, 6],
 1: [0, 0, 0, 0, 0, 0, 0],
 2: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
}

function loadTHTD(Tvalue){
 document.getElementById(`${Tvalue}header`).innerHTML=document.getElementById(`${Tvalue}set`).value
}

function menuS(menuIndexe){
if(menuIndexe==6){
 loadTHTD('ML')
 loadTHTD('miss')
 let time = $dvalue('time')*60,
 seconds = ((time / 60) % 60).toFixed(0),
 minutes = (Math.floor((time) / 3600)).toFixed(0);
 $d('timeheader').innerHTML = ` ${minutes + (seconds < 10 ? ':0' : ':') + seconds}`;
}
if (menuIndexe == 7) {
$d('typeheader').innerHTML = ` ${{
  0: TransText('sprint_queue1'),
  1: TransText('sprint_queue2'),
  2: TransText('sprint_queue3')
 }[$dvalue('type')]}`
  $d('lineheader').innerHTML = $dvalue('line')
}

if (menuIndexe == 8) {
$d('marathon-lineheader').innerHTML = ` ${($dvalue('marathon-line')) !== 151? $dvalue('marathon-line') : "ENDLESS"}`
$d('marathon-levelheader').innerHTML =  ` ${$dvalue('marathon-level')}`;
$d('marathon-linereqheader').innerHTML = ` ${$dvalue('marathon-linereq')}`;

}
if (menuIndexe == 9) {
$d('master-lineheader').innerHTML = ` ${($dvalue('master-line')) !== 301? $dvalue('marathon-line') : "ENDLESS"}`
$d('master-levelheader').innerHTML =  ` ${$dvalue('master-level')}`;
$d('master-linereqheader').innerHTML = ` ${$dvalue('master-linereq')}`;

}
 
 menu(menuIndexe)
}

var masterParameter={
 LEVEL: 1,
 LINELIMIT: 150,
 LINESREQ:10,
 activity:{
  LEVEL: 1,
  LINESREQ: 10
 }
}

var gameSetting={
 
}

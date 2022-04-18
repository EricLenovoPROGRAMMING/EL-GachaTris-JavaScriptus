var adventureParameter = {
 mode: 'garbagefire',
 chapter: 1,
 level: 1,
 seed: 1,
 localStorageSession:{
  chapter1:{
   1:{
    stars:0,
    highscore:0
   },
  },
  chapter2:{
   1:{}
  }
 },
 task: {
  'Garbage Fire': {
   hp: 30,
   duration: 100,
   strength: 5,
   name: '',
   activity: {
    hp: 30,
    duration: 100,
    strength: 5,
   },
   'Mission':{
   TSD: 'none',
    line: 4,
    time: 'none',
    score: 'none',
    activity:{
     TSD: 0,
      line: 4,
      time: 0,
    }
   }
  }
 },
 activity: {
  mode: 'Garbage Fire'
 },
 selectorlevel: 0,
 selectorchapter: 0,
 textseqNum:0,
 textseqInt:0,
 textseq:''
}
var ctscChars = {
 left: (args) => { $d('ctscLeft').src = args },
 right: (args) => { $d('ctscRight').src = args },
 ac: {
  left: (args) => { $d('ctscLeft').style.transform = args == 1 ? "translateY(0)" : "translateY(10%)" },
  right: (args) => { $d('ctscRight').style.transform = args == 1 ? "translateY(0)" : "translateY(10%)" }
 },
 /**return chars
  */
 return: (args) => { return $d(`ctsc${args}`) },
},
prepChars = {
  left: (args) => { $d('prepLeft').src = args },
  right: (args) => { $d('prepRight').src = args },
}
var ctscmain = {
 /**SWITCH PAGE
  */
 switchpage: function(leftright, character, namealign, active, name, emote, quote) {
  if (leftright == 'left') {
      if (character !== 'hide') {
       ctscChars.left(valuesDLC[character].emotes[emote])
    ctscChars.return('Left').style.opacity = 1
   } else ctscChars.return('Left').style.opacity = 0
  }
  if (leftright == 'right') {
      if (character !== 'hide') {
       ctscChars.right(valuesDLC[character].emotes[emote])
    ctscChars.return('Right').style.opacity = 1
   } else ctscChars.return('Right').style.opacity = 0
  }
  if (active == 'left') {
   ctscChars.ac.left(1)
   ctscChars.ac.right(0)
   $d('ctscLeft').style.animation='charActive 2.5s infinite linear'
  $d('ctscRight').style.animation='none'
  }
  if (active == 'right') {
   ctscChars.ac.right(1)
   ctscChars.ac.left(0)
   $d('ctscRight').style.animation = 'charActive 2.5s infinite linear'
   $d('ctscLeft').style.animation = 'none'
  }
  if (active == 'both') {
   ctscChars.ac.right(1)
   ctscChars.ac.left(1)
   $d('ctscRight').style.animation = 'charActive 2.5s infinite linear'
$d('ctscLeft').style.animation = 'charActive 2.5s infinite linear'

  }
  if (active == 'none') {
   ctscChars.ac.right(0)
   ctscChars.ac.left(0)
$d('ctscRight').style.animation = 'none'
$d('ctscLeft').style.animation = 'none'
  }
  if(quote!==''&&quote){
   $d('dialogueDLC').style.opacity=1
   adventureParameter.textseq=quote
  }else{
   $d('dialogueDLC').style.opacity=0
  }
  if(namealign!==void 0&&namealign!=='')
   $d('divName').style.justifyContent=namealign
   $d('inName').style.textAlign=namealign
   $d('inQuote').style.textAlign=namealign
  $iH('inName',name)
  $iH('inQuote','')
  adventureParameter.textseqNum=-1
 },
 frames: 0,
 number:-1,
 chapter: 1,
 level: 1,
 fadecolor:function(activate, seconds, color){
  $d('ctscFade').style.transition=`opacity ${seconds * 1000}ms linear`
  $d('ctscFade').style.opacity=activate==true?1:0
  $d('ctscFade').style.background=`#${color}`
 },
 /**simultaneously execute more than one function at the same time.
  */
 simultaneous: function(simul) { simul() },
 
 prep:{
  ready:function(leftright, character, name){
  if (leftright == 'left') {
      if (character !== 'hide') {
       prepChars.left(valuesDLC[character].emotes[emote])
    prepChars.return('Left').style.opacity = 1
   } else prepChars.return('Left').style.opacity = 0
  }
  if (leftright == 'right') {
      if (character !== 'hide') {
       prepChars.right(valuesDLC[character].emotes[emote])
    prepChars.return('Right').style.opacity = 1
   } else prepChars.return('Right').style.opacity = 0
  }
 },
 task:function(note, star2, star3){
  
 }
 },
 

 switchbackground:function(value){
  $d('dlcBG').src=valuesStatic['bg'][value]
 },

 loop: function() {
  if (menus[11].classList.contains('on'))
   requestAnimationFrame(ctscmain.loop)
  // console.log(ctscmain.frames)
  if(adventureParameter.textseq.length>adventureParameter.textseqNum+1){
   adventureParameter.textseqInt--
   if(adventureParameter.textseqInt<=0){
   adventureParameter.textseqInt=2
   if(adventureParameter.textseq.charAt(adventureParameter.textseqNum)!==' '){
    playuisfx('hover')}else{adventureParameter.textseqInt+=4}
   adventureParameter.textseqNum++
   $d('inQuote').innerHTML=$d('inQuote').innerHTML + adventureParameter.textseq.charAt(adventureParameter.textseqNum)
   }
    
   }else{
   ctscmain.frames--
   if(ctscmain.frames<0){
    if(ctscmain.number+1<=CutscenePages[`chapter${adventureParameter.selectorchapter}`]['levels'][adventureParameter.selectorlevel]['cutscene'].length){
    CutscenePages[`chapter${adventureParameter.selectorchapter}`]['levels'][adventureParameter.selectorlevel]['cutscene'][ctscmain.number]()
    } else {
    menu(14)
   }
   }
     
    }
   
 },
 init:function(){
  var A=`chapter${adventureParameter.selectorchapter}`,
  B = adventureParameter.selectorlevel
  adventureParameter.textseq=''
  if (A&&B){
   ctscmain.switchpage('left','hide','left','none','','','')
   ctscmain.switchpage('right','hide','right','none','','','')
  CutscenePages[A]['levels'][B]['loadCtsc']()
  ctscmain.fadecolor(true,0,'000')
  ctscmain.fadecolor(true,0,'000')
  setTimeout(()=>{
  ctscmain.fadecolor(false,1,'000')
  },1)
  //menu(14)
  menu(11)
  ctscmain.number=-1
  ctscmain.shiftCtsc(90)
  ctscmain.loop()
  }else{
   alert('Select atleast 1 level to start.')
  }
  
 },
 shiftCtsc:function(frame){
 ctscmain.frames=frame*0.9
 ctscmain.number++
},
next:function(){
 if(adventureParameter.textseqNum+1<adventureParameter.textseq.length){
 while(adventureParameter.textseqNum+1<adventureParameter.textseq.length){
   if(adventureParameter.textseq.length>adventureParameter.textseqNum+1){
   adventureParameter.textseqInt--
   if(adventureParameter.textseqInt<=0){
   adventureParameter.textseqInt=2
   
   adventureParameter.textseqNum++
   $d('inQuote').innerHTML=$d('inQuote').innerHTML + adventureParameter.textseq.charAt(adventureParameter.textseqNum)
   }
    
   }
  if(adventureParameter.textseqNum==adventureParameter.textseq.length)break
 }
 }else{
  CutscenePages[`chapter${adventureParameter.selectorchapter}`]['levels'][adventureParameter.selectorlevel]['cutscene'][ctscmain.number]()
    
 }
},
skip:function(){
 
}


}



var CutscenePages = {
 chapter1: {
  title: 'The Flohf',
  levels: {
   1: {
    title: '\"A Sweet Yet Unexpected Day?\"',
    character: 'Flotalendy',
    description: `From her relaxation to an unexpected event, Flotalendy
    sees something falling out of the sky; and she then has met people
    coming from the Tetrogacha dimension.`,
    goal: "Clear 4 lines.",
    mode: {
     title: 'Mission',
     parameter: {
      TSD: 'none',
      line: 4,
      time: 'none',
      score: 'none'
     },
    },
    loadCtsc: function() {
     CharacterDLCValuesInit('Flotalendy','flo',['ahhh','bigsurprised','smallsurprised','letdrink','worried','cocoahappy','whatRUdoinghere','whatcocoa','twt','drinking'])
     CharacterDLCValuesInit('EricLenovo','el',['dizzy','gaah','fyi','say_what','questioning','happytalk','happyyes'])
     CharacterDLCValuesInit('Elisha','elisha',['glad','happy','indistinguished','what'])
     CharacterDLCValuesInit('Kaily','kaily',['enjoyed','good','wonderingsay','lookup'])
     StaticValuesInit('bg',['road','fallingtetros','townwithtetros'])
     StaticValuesInit('sfx',['fall','crashlanding'])
     ctscmain.switchbackground('road')
     characterMainInit('1p','flo','left')
        },
    cutscene: [
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','cocoahappy','Such a beautiful day in here!');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','letdrink','It is time to drink my cocoa drink!');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','letdrink','And yes, it is also a peaceful day, and quiet here!');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','letdrink','My cocoa drink is so sweet and hot; it energizes me!');},
    ()=>{ctscmain.shiftCtsc(90);ctscmain.switchpage('left','flo','left','left','Flotalendy','drinking','*slurping*');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','cocoahappy','Ahhh, it is sooo good! Woof!');},
    ()=>{ctscmain.shiftCtsc(90);ctscmain.switchpage('left','flo','left','left','Flotalendy','drinking','*slurping again*');},
    ()=>{ctscmain.shiftCtsc(100);ctscmain.fadecolor(true, 1.1, 'fff');sfxDLC('fall')},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.fadecolor(false, 1.1, 'fff');stopsfxDLC('fall');sfxDLC('crashlanding');ctscmain.switchpage('left','flo','left','left','Flotalendy','bigsurprised','-aoooOOOHH MY FLOOF!')},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','bigsurprised','AHH, MY COCOA!');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','twt',"...good thing my cocoa isn't wasted. I was so careful...");},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','bigsurprised','I THINK SOMETHING IS FALLING FROM THE SKY!');},
    ()=>{ctscmain.shiftCtsc(80);ctscmain.switchpage('right','el','right','right','???','dizzy','*dizzy* aooah, I am feeling dizzy...');},
    ()=>{ctscmain.shiftCtsc(130);ctscmain.switchpage('right','el','right','right','???','gaah','Gaah!');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('right','el','right','right','???','questioning','Woah...where am I?');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','smallsurprised','Aaa-umm...WHO are you?');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','smallsurprised','And how do you get here?');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('right','el','right','right','???','questioning','Ummm...admiral\'s report.');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('right','el','right','right','???','questioning','I have seen a female human floof wearing pale blue outfit, with floppy canine ears, and a bowtie which is tied to her back hair.');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','whatRUdoinghere','Ummmm...do you mean me?');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('right','el','right','right','???','questioning','Yes, and she is kind of questioning...');},
   
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('right','el','right','right','???','questioning','And we appear to have crash-landed and...');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('right','el','right','right','???','fyi','...our space capsule has been damaged.');},
    ()=>{ctscmain.shiftCtsc(190);ctscmain.switchpage('right','el','right','right','???','questioning','But the good thing is that with its reduced falling speed due to its stabilizing jets, nobody is hurt.');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','whatRUdoinghere','Ahh...and where did you come from?');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('right','el','right','right','???','fyi','I have gotten here from the Tetrogacha dimension.');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','twt','-oh...wait. Gachatris dimension?');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('right','elisha','right','right','???','glad','Yes! It is a fun dimension where you see MORE of blocks.');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','whatRUdoinghere','Blocks?');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('right','kaily','right','right','???','enjoyed','Yes! Those sets of 4 blocks resemble 7 letters, which are called Gachaminoes.');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','ahhh','Ahhh...that sounds fun! Now I get it.');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','whatRUdoinghere','And what are those 7 letters?');},
    ()=>{ctscmain.shiftCtsc(100);ctscmain.switchpage('right','kaily','right','right','???','enjoyed','These 7 letters are...');},
    ()=>{ctscmain.shiftCtsc(120);ctscmain.switchpage('right','kaily','right','right','???','lookup','LOOK UP!!');},
    ()=>{ctscmain.switchbackground('fallingtetros');ctscmain.shiftCtsc(100);ctscmain.switchpage('left','flo','left','left','Flotalendy','bigsurprised','WHAT?');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','bigsurprised','OH MY FLOOF THOSE ARE-');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('right','elisha','right','right','???','indistinguished','Gachaminoes... they\'re far away from our location...');},
    ()=>{ctscmain.shiftCtsc(200);ctscmain.switchpage('right','elisha','right','right','???','what','...but THAT IS NOT GOOD!!! THEY MAY LAND SOMEWHERE AND SOMEHOW DESTROY BUILDINGS IN THERE!!!');},
    ()=>{ctscmain.shiftCtsc(240);ctscmain.switchpage('left','el','left','left','???','fyi','Elisha...those blocks inflict light to no damage to those buildings, even at high velocities or in high strengths.');},
    ()=>{ctscmain.shiftCtsc(130);ctscmain.switchpage('right','elisha','right','right','???','what','...but...');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','el','left','left','???','fyi','That violates the law of inertia.');},
    ()=>{ctscmain.switchbackground('road');ctscmain.shiftCtsc(130);ctscmain.switchpage('right','elisha','right','right','???','indistinguished','...those are weird I guess...');},
    ()=>{ctscmain.shiftCtsc(150);ctscmain.switchpage('right','kaily','right','right','???','wonderingsay','I wonder why they are so light...');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','smallsurprised','Ummm...yeah they are so weird.');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','whatRUdoinghere','By the way...what are your names, you three?');},
    ()=>{ctscmain.shiftCtsc(200);ctscmain.switchpage('right','el','right','right','Eric','happytalk','Okay so...I am Eric, the captain of the JS-Tetrimum Space Capsule, and I always play a game called Gachatris.');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','whatRUdoinghere','A game called Gachatris? What do you mean by that?');},
    ()=>{ctscmain.shiftCtsc(300);ctscmain.switchpage('right','el','right','right','Eric','happytalk','Gachatris is a stacking game whose aim is to clear lines of 10 blocks in rows.');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','twt','Woah, *TwT* That sounds technical.');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','letdrink','Okay...my name is Flotalendy; I am just good at arts as well as being an adventurer.');},
    ()=>{ctscmain.shiftCtsc(190);ctscmain.switchpage('right','el','right','right','Eric','happytalk','Ahhh, you\'re into arts and adventures...nice!');},
    ()=>{ctscmain.shiftCtsc(100);ctscmain.switchpage('left','flo','left','left','Flotalendy','cocoahappy','Woof, thanks!');},
    ()=>{ctscmain.shiftCtsc(190);ctscmain.switchpage('left','flo','left','left','Flotalendy','ahhh','And what about those two girls you\'re with?');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('right','elisha','right','right','Elisha','glad','I am Elisba, a navigator of the Capsule.');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('right','kaily','right','right','Kaily','good','And I an Kaily, Elisha\'s sister and its another navigator.');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','ahhh','Hello Kaily and Elisha! I am glad to have met witb you.');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','letdrink','Want some cocoa?');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('right','kaily','right','right','Kaily','good','Ahmm...we have our own cocoa powder bags in our Mothership.');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','ahhh','Ooh! In your Mothership?');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('right','kaily','right','right','Kaily','good','Yes. There are a bunch of them, located in its storage room.');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','whatRUdoinghere','And where\'s your Mothership?');},
    ()=>{ctscmain.shiftCtsc(190);ctscmain.switchpage('right','el','right','right','Eric','fyi','Ummm...our Mothership is far, far away from us...');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','worried','Awww...');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','ahhh','Wait, before that, Eric, can you teach me how to play that Gachatris thing?');},
    ()=>{ctscmain.shiftCtsc(180);ctscmain.switchpage('right','el','right','right','Eric','happytalk','Ahhh! That is a good thing! Playing it helps complete our missions and make this clean.');},
    ()=>{ctscmain.shiftCtsc(180);ctscmain.switchpage('right','el','right','right','Eric','happytalk','You can become a heroine of this place.');},
    ()=>{ctscmain.shiftCtsc(180);ctscmain.switchpage('right','el','right','right','Eric','happytalk','And here...would you like to start touching Gachatris?');},
    ()=>{ctscmain.shiftCtsc(170);ctscmain.switchpage('left','flo','left','left','Flotalendy','cocoahappy','Alright, Let\'s go!!!');},
    

    ],
    cutscene2: [

    ]
   },
   2: {
    title: '\"People from an unknown dimension?\"',
    character: 'EricLenovo',
    description: ``,
    goal: "Clear a Gachatris.",
    mode: {
     title: 'Mission',
     parameter: {
      TSD: 'none',
      line: 'none',
      gtris: 1,
      time: 'none',
      score: 'none'
     },
    },
    loadCtsc: function() {
     CharacterDLCValuesInit('Flotalendy', 'flo', ['cocoahappy', 'drink', 'surprised', 'letdrink'])
     CharacterDLCValuesInit('EricLenovo', 'el', ['ouch', 'hi', 'who are you', 'worried'])
          BackgroundDLCInit(['townoutside', 'rainingtetros', 'townwithtetros'])
    },
    cutscene: [
      ctscmain.switchpage(
   
     ),
       ],
    cutscene2: [
   
       ]
   }
  }
 }
}

function StaticValuesInit(type,array){
 DLCMediaLoad.static[type]={}
 valuesStatic[type]={}
 if(type=='sfx'){
 for (let y of array){
  valuesStatic[type][y]=new Howl({src:`adventure/_main/SFX/${y}.ogg`, preload:false,html5:true})
  valuesStatic[type][y].load()
 }
 }
  if (type=='bg') {
   for (let y of array) {
    valuesStatic[type][y]=`adventure/_main/BG/${y}.png`
    DLCMediaLoad.static[y]=new Image()
    DLCMediaLoad.static[y].src=valuesStatic[type][y]
   }
  }
}
function sfxDLC(sound){
  var soundname = valuesStatic['sfx'][sound]
   if (settings.Sound == true && settings.Volume > 0)  {
  {
   soundname.volume(settings.Volume / 100)
  }
  soundname.stop()
  soundname.play()

  return soundname


 }
}
function stopsfxDLC(sound) {
 var soundname = valuesStatic['sfx'][sound]
 
  soundname.stop()

}
/**EricLenovo's Roleplaying DLC cutscene initializer
 */
function CharacterDLCValuesInit(char, chartype, arraylist) {
 var arr = arraylist

 valuesDLC[chartype]={
 emotes:{},
 main:{},
 name: chartype,
url:`adventure/${char}`
 }
 DLCMediaLoad.dynamic[chartype]={
  main:{},
  emotes:{}
 }
 for (let VAL of arr) {
  valuesDLC[chartype].emotes[VAL] = `${valuesDLC[chartype].url}/cutscene/${VAL}.png`
  DLCMediaLoad.dynamic[chartype].emotes[VAL] = new Image()
  DLCMediaLoad.dynamic[chartype].emotes[VAL].src = valuesDLC[chartype].emotes[VAL]
    DLCMediaLoad.dynamic[chartype].emotes[VAL]
    addEventListenerOnce(DLCMediaLoad.dynamic[chartype].emotes[VAL],'loaderror',()=>{console.log(VAL)})
 }
 

};
function characterMainInit(main,chartype,leftright){
 if (main) {
  for (let VAL in valuesDLCTemplate.main) {
   valuesDLC[chartype].main[VAL] = `${valuesDLC[chartype].url}/main/${VAL}.png`
 
   DLCMediaLoad.dynamic[chartype].main[VAL] = new Image()
   DLCMediaLoad.dynamic[chartype].main[VAL].src = valuesDLC[chartype].main[VAL]
  }
 }
}

var DLCMediaLoad = {
dynamic:{},
static:{},
}

var valuesStatic={
 
}

/*templating*/
var valuesDLC = {

}

var valuesDLCTemplate = {
 name: ``,
 url: ``,
 emotes: {
  happy: ``,
  laugh: ``,
  idle: ``,
  grief: ``,
  scared: ``,
  wonder: ``,
  sad: ``,
  cry: ``,
  uhhh: ``,
  mad: ``,
  shocked: ``,
  hehe: ``,
  surprised: ``,
 },
 main: {
  avatar: ``,
  enemyicon: ``,
  win: ``,
  lose: ``,
 }
}

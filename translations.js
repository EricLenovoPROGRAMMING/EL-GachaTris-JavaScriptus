/**
 * EricLenovo Translator \n
 */




function TransText(_TEXT, _INPUT) {
 let lang = settings.Language
 return {
  eng: {
   title: "Tetr.JS - Gachatris JavaScriptus",
   title2: "EricLenovo's modification from Tetr.JS of Simon Laroche, under MIT License",
   play: "Play",
   controls: "Controls",
   replaycon: "ReplayCon",
   settings: "Settings",
   settingsnote: "EricLenovo's note to you: some settings are not yet fully developed! *cries*",
   hold: "Hold",
   next: "Next",
   startbutton: "Start",
   replay: "Watch Replay",

   about: "About",
   about1: "Gachatris JavaScriptus - a simonlc/Tetr.JS mod of EricLenovo, whose name was founded by himself - is a block stacking game whose aim is to clear rows of 10 blocks making up lines. Gachatris JavaScriptus was made on January 12, 2022. It consists of not only Gacha Club characters, but also more modes and features. EricLenovo himself is a Tetris-Gacha YouTuber who owns this Tetr.JS mod.",
   about2: "The Original Tetr.JS was designed and made by Simon Laroche under MIT License; Gacha Club, and other Gacha games, are the trademarks of Lunime; 'Gachatris JavaScriptus' is abbreviated as 'GT.JS'",
   discordB: "Gachatris JavaScriptus Discord Server",
   tetrjsB: "Simon Laroche's Tetr.JS",


   pc: "PERFECT CLEAR",
   frenzy: "FRENZY",

   loadrepdata: "Load a .GTRD-JSON",
   saverepdata: "Save as .GTRD-JSON",
   watch: "Watch",

   score: "Score",
   inihold: "INITIAL",

   
   sprint: "Sprint",
   marathon: "Marathon",
   dig: "Dig Race",
   tsd: "TSD Only",
   gf: "Garbage Fire",
   renc4w: "REN C4W",
   '2mu': "2-minute Ultra",
   da: "Downstack Attack",
   master: "Master",
   
   easysettings: "Easy Settings",
   das: "Delay Autoshift",
   arr: "Auto Repeat Rate",
   grav: "Piece Gravity",
   sft: "Soft Drop Gravity",
   lck: "Piece Lock Delay",
   vol: "SFX Volume",
   charvol: "Character Volume",
   comvol: "Commentary Volume",
   piecevol: "Piece Next Volume",
   oc: "Gacha Club Character",
   selector: "Select a Gacha Character",
   charName: "You are now using:",
   
   controls: "Controls",
   controlsnote: "Click on the control you want to change, then press any key.",
   left: "Move Left",
   right: "Move Right",
   shiftdown: "Move Down",
   harddrop: "Hard Drop",
   rotcw: "Spin Right",
   rotccw: "Spin Left",
   rot180: "Spin 180°",
   retry: "retry",
   pause: "Pause",
   
   done: "Done",
   back: "Back",
   return: "Return",
   mainmenu: "Main Menu",
   restart: "Start Over",
   
   line: "LINES",
   piece: "PIECES",
   pending: "PENDING LINES",
   tsdtext: "T-SPIN DOUBLES",
   renmax: "MAX COMBO",
   timer: "TIME",

   boards: "BOARDS",
   phases: "PHASE",
   successes: "SUCCESS",
   fails: "FAIL",

   level: "LV.",

   linelimit: "Lines to Clear",
   sprint_queue: "Queue Type",
   sprint_queue1: "Normal (7-bag)",
   sprint_queue2: "Heaven (I only)",
   sprint_queue3: "Spr_nt (no I)",
   sprint_warn2: 'In Sprint Mode, queueType and lineLimit must BOTH exist. Otherwise, if you change some of them for the said Mode from the original parameters in the replay data, something bad may happen.',
   sprint_warn1: 'In Sprint Mode, the \'sprintParams\' parameter must exist by default.',

   DA_timer: "Timer",
   DA_miss: "Max Mistakes",
   DA_phase: "Map Phase",
   DA_warn2: 'In Downstack Attack mode, the timeframe, maxmiss and level parameters MUST ALL exist. Otherwise, if you change the mode\'s parameters from the original parameters in the replay data, something bad may happen.',
   DA_warn1: 'In Downstack Attack mode, the \'DAParams\' parameters must exist by default.',

   marathon_level: "Level",
   marathon_linereq: "Lines to Level Up",
   marathon_warn2: 'In Marathon Mode, level, linesRequire and lineLimit must ALL exist. Otherwise, if you change some of them for the said Mode from the original parameters in the replay data, something bad may happen.',
   marathon_warn1: 'In Marathon Mode, the \'marathonParams\' parameter must exist by default.',
   endless: "ENDLESS",

   master_level: "Mach Level",
   master_linereq: "Lines to Level Up",
   master_warn2: 'In Master Mode, level, linesRequire and lineLimit must ALL exist. Otherwise, if you change some of them for the said Mode from the original parameters in the replay data, something bad may happen.',
   master_warn1: 'In Master Mode, the \'masterParams\' parameter must exist by default.',


   single: "Single",
   double: "Double",
   triple: "Triple",
   quad: "Quadruple",
   quadplus: "Quadruple Plus",
   tspin0: "T-Spin",
   tspin1: "T-Spin Single",
   tspin2: "T-Spin Double",
   tspin3: "T-Spin Triple",
   mini0: "T-Spin Mini",
   mini1: "T-Spin Mini Single",

   b2b: "Back-to-back",
   renInt: "COMBO",

   blockout: "Block Out!",
   lockout: "Lock Out!",
   nottsd: "Not TSD",
   timeup: "Time is up!",
   DAfailed: "Failed",
   noqueue: "No More",
   repended: "Replay Ended",

   ready: "Ready",
   go: "Start",
   paused: "Paused",

   finish: "Finish",
   digfinish: "Bedrock",
   marathonsuccess: 'Success',

   gtrdenderror: `${_INPUT} does not end with .gtrd-json. Try again!`

  },
  fil: {
   title: "Tetr.JS - Gachatris JavaScriptus",
   title2: "Ang pagbabago ni EricLenovo mula sa Tetr.JS ni Simon Laroche, sa ilalim ng Lisensya ng MIT",
   play: "Maglaro",
   controls: "Mga Kontrol",
   replaycon: "ReplayCon",
   settings: "Mga Setting",
   settingsnote: "Ang tala ni EricLenovo sa iyo: ang ilang mga setting ay hindi pa ganap na nabuo! *umiiyak*",
   hold: "Hawak",
   next: "Susunod",
   startbutton: "Magsimula",
   replay: "Manood ng Replay",

   about: "Tungkol dito",
   about1: "Ang Gachatris JavaScriptus - isang simonlc/Tetr.JS mod ng EricLenovo, na ang pangalan ay siya mismo ang nagtatag - ay isang block stacking game na ang layunin ay i-clear ang mga hilera ng 10 bloke na bumubuo ng mga linya. Ginawa ang Gachatris JavaScriptus noong Enero 12, 2022. Binubuo ito hindi lamang ng mga character ng Gacha Club, kundi pati na rin ng higit pang mga mode at feature. Si EricLenovo mismo ay isang Tetris-Gacha YouTuber na nagmamay-ari ng Tetr.JS mod na ito.",
   about2: "Ang Orihinal na Tetr.JS ay idinisenyo at ginawa ni Simon Laroche sa ilalim ng Lisensya ng MIT; Ang Gacha Club, at iba pang mga laro ng Gacha, ay ang mga trademark ng Lunime; Ang 'Gachatris JavaScriptus' ay dinaglat bilang 'GT.JS'",
   discordB: "Gachatris JavaScriptus Discord Server",
   tetrjsB: "Tetr.JS ni Simon Laroche",

   pc: "UBOS ANG AREA",
   frenzy: "FRENZY",

   loadrepdata: "Mag-load ng .GTRD-JSON",
   saverepdata: "I-save bilang .GTRD-JSON",
   watch: "Panoorin",

   score: "Iskor",
   inihold: "INITIAL",

   /*MODES*/
   sprint: "Sprint",
   marathon: "Marathon",
   dig: "Dig Race",
   tsd: "TSD Lang",
   gf: "Garbage Fire",
   renc4w: "REN C4W",
   '2mu': "2 minutong Ultra",
   da: "Downstack Attack",
   master: "Master",
   /*EASY SETTINGS*/
   easysettings: "Mga Madaling Setting",
   das: "Pagkaantalang Autoshift",
   arr: "Bilis ng Auto Repeat",
   grav: "Bilis ng Pagbagsak ng Piraso",
   sft: "Malambot na Bilis ng Pagbagsak",
   lck: "Pagkaantala ng Piece Lock",
   vol: "Volume ng SFX",
   charvol: "Volume ng Karakter",
   comvol: "Volume ng Komentaryo",
   piecevol: "Volume ng Kasunod na Piraso",
   oc: "Tao ng Gacha Club",
      selector: "Pumili ng Gacha Character",
       charName: "Ginagamit mo na ngayon si:",
   /*CONTROLS*/
   controlsnote: "Mag-click sa kontrol na gusto mong baguhin, pagkatapos ay pindutin ang anumang key.",
   left: "Gumalaw Pakaliwa",
   right: "Gumalaw Pakanan",
   shiftdown: "Gumalaw Pababa",
   harddrop: "Mabilis na Bagsak",
   rotcw: "Umikot Pakanan",
   rotccw: "Umikot Pakaliwa",
   rot180: "Umikot nang 2 Beses",
   retry: "Ulitin",
   pause: "I-pause",
   /*COMMON*/
   done: "Tapos na",
   back: "Bumalik",
   return: "Bumalik",
   mainmenu: "Pangunahing Menu",
   restart: "Magsimulang Muli",
   /*GAME STATS TEXTS*/
   line: "MGA LINYA",
   piece: "MGA PIRASO",
   pending: "MGA PENDING LINE",
   tsdtext: "MGA T-SPIN DOUBLE",
   renmax: "MAX NA COMBO",
   timer: "ORASAN",

   boards: "MGA BOARD",
   phases: "PHASE",
   successes: "TAGUMPAY",
   fails: "BIGO",

   level: "LB.",

   linelimit: "Mga Linya para I-clear:",
   sprint_queue: "Uri ng Queue:",
   sprint_queue1: "Normal (7-bag)",
   sprint_queue2: "Heaven (I lang)",
   sprint_queue3: "Spr_nt (walang I)",
   sprint_warn2: 'Sa Sprint Mode, ang queueType at lineLimit ay dapat na PAREHONG umiiral. Kung hindi, kung babaguhin mo ang ilan sa mga ito para sa nasabing Mode mula sa orihinal na mga parameter sa replay data, maaaring may mangyari na hindi maganda.',
   sprint_warn1: 'Sa Sprint Mode, dapat na umiiral ang parameter na \'sprintParams\' bilang default.',

   DA_timer: "Haba ng Oras:",
   DA_miss: "Max na Mga Pagkakamali:",
   DA_phase: "Map Phase:",
   DA_warn2: 'Sa Downstack Attack mode, DAPAT LAHAT umiiral ang timeframe, maxmiss at level na mga parameter. Kung hindi, kung babaguhin mo ang mga parameter ng mode mula sa orihinal na mga parameter sa replay data, maaaring may masamang mangyari.',
   DA_warn1: 'Sa Downstack Attack mode, dapat na umiiral ang mga parameter na \'DAParams\' bilang default.',

   marathon_level: "Lebel:",
   marathon_linereq: "Mga Linya para mag-Level Up:",
   marathon_warn2: 'Sa Marathon Mode, level, linesRequire at lineLimit dapat LAHAT ay umiiral. Kung hindi, kung babaguhin mo ang ilan sa mga ito para sa nasabing Mode mula sa orihinal na mga parameter sa replay data, maaaring may mangyari na hindi maganda.',
   marathon_warn1: 'Sa Marathon Mode, dapat na umiiral ang parameter na \'marathonParams\' bilang default.',
   endless: "WALANG KATAPUSAN",

   master_level: "Antas na Mach",
   master_linereq: "Mga Linya para mag-Level Up",
   master_warn2: 'Sa Master Mode, ang level, linesRequire at lineLimit ay dapat na LAHAT ay umiiral. Kung hindi, kung babaguhin mo ang ilan sa mga ito para sa nasabing Mode mula sa orihinal na mga parameter sa replay data, maaaring may mangyari na hindi maganda.',
   master_warn1: 'Sa Master Mode, dapat na umiiral ang parameter na \'masterParams\' bilang default.',


   single: "Single",
   double: "Double",
   triple: "Triple",
   quad: "Quadruple",
   quadplus: "Quadruple Plus",
   tspin0: "T-Spin",
   tspin1: "T-Spin Single",
   tspin2: "T-Spin Double",
   tspin3: "T-Spin Triple",
   mini0: "T-Spin Mini",
   mini1: "T-Spin Mini Single",

   b2b: "Back-to-back",
   renInt: "COMBO",

   blockout: "Block Out!",
   lockout: "Lock Out!",
   nottsd: "Hindi TSD",
   timeup: "Oras na!",
   DAfailed: "Nabigo",
   noqueue: "Wala na",
   repended: "Natapos ang Replay",

   ready: "Maghanda",
   go: "Magsimula",
   paused: "Naka-pause",

   finish: "Natapos na",
   digfinish: "Bedrock",
   marathonsuccess: 'Tagumpay',

   gtrdenderror: `Ang ${_INPUT} ay hindi nagtatapos sa .gtrd-json. Subukan muli!`

  },
  frc: {
   title: "Tetr.JS - Gachatris JavaScriptus",
   title2: "Modification d'EricLenovo à partir de Tetr.JS de Simon Laroche, sous licence MIT",
   play: "Jouer",
   controls: "Contrôles",
   replaycon: "Console de Relecture",
   settings: "Paramètres",
   settingsnote: "Note d'EricLenovo pour vous: certains paramètres ne sont pas encore tout à fait au point! *pleure*",
   hold: "Réserve",
   next: "Suivant",
   startbutton: "Démarrer",
   replay: "Regarder la Rediffusion",

   about: "Informations",
   about1: "Gachatris JavaScriptus - un mod simonlc/Tetr.JS d'EricLenovo, dont le nom a été fondé par lui-même - est un jeu d'empilement de blocs dont le but est d'effacer des rangées de 10 blocs constituant des lignes. Gachatris JavaScriptus a été créé le 12 janvier 2022. Il se compose non seulement de personnages du Gacha Club, mais également de plusieurs modes et fonctionnalités. EricLenovo lui-même est un Tetris-Gacha YouTuber qui possède ce mod Tetr.JS.",
   about2: "L'Original Tetr.JS a été conçu et réalisé par Simon Laroche sous licence MIT ; Gacha Club et les autres jeux Gacha sont des marques déposées de Lunime ; 'Gachatris JavaScriptus' est abrégé en 'GT.JS'",
   discordB: "Discord Server de Gachatris JavaScriptus",
   tetrjsB: "Tetr.JS de Simon Laroche",

   pc: "CLAIR PARFAIT",
   frenzy: "FRÉNÉSIE!",

   loadrepdata: "Charger un .GTRD-JSON",
   saverepdata: "Enregistrer sous .GTRD-JSON",
   watch: "Regardez",

   score: "Score",
   inihold: "INITIALE",

   /*MODES*/
   sprint: "Sprint",
   marathon: "Marathon",
   dig: "Course de fouilles",
   tsd: "TSD uniquement",
   gf: "Attaque des ordures",
   renc4w: "REN C4W",
   '2mu': "Ultra de 2 minutes",
   da: "Attaque descendante",
   master: "Master",

   /*EASY SETTINGS*/
   easysettings: "Paramètres Faciles",
   das: "Délai de décalage automatique",
   arr: "Taux de Répétition Automatique",
   grav: "Gravité des Pièces",
   sft: "Gravité Douce",
   lck: "Délai de Verrouillage des Pièces",
   vol: "Volume SFX",
   charvol: "Volume du Personnage",
   comvol: "Volume des Commentaires",
   piecevol: "Morceau Volume suivant",
   oc: "Personnage du Gacha Club",
      selector: "Sélectionnez un personnage Gacha",
       charName: "Vous utilisez maintenant:",
   /*CONTROLS*/
   controlsnote: "Cliquez sur le contrôle que vous souhaitez modifier, puis appuyez sur n'importe quelle touche.",
   left: "Se Déplacer à Gauche",
   right: "Déplacer vers la Droite",
   shiftdown: "Descendre",
   harddrop: "Chute dure",
   rotcw: "Tourner à Droite",
   rotccw: "Tourner à Gauche",
   rot180: "Tourner à 180°",
   retry: "Réessayez",
   pause: "Pause",
   /*COMMON*/
   done: "Terminé",
   back: "Arrière",
   return: "Retour",
   mainmenu: "Menu Principal",
   restart: "Recommencer",
   /*GAME STATS TEXTS*/
   line: "LIGNES",
   piece: "PIÈCES",
   pending: "LIGNES EN ATTENTE",
   tsdtext: "T-SPIN DOUBLES",
   renmax: "MAX COMBO",
   timer: "TEMPS",

   boards: "PLANCHES",
   phases: "PHASE",
   successes: "SUCCÈS",
   fails: "ÉCHOUER",

   level: "NIV.",

   linelimit: "Lignes à effacer",
   sprint_queue: "Type de file d'attente",
   sprint_queue1: "Normal (7 sacs)",
   sprint_queue2: "Ciel (I uniquement)",
   sprint_queue3: "Spr_nt (non I)",
   sprint_warn2: 'En mode Sprint, queueType et lineLimit doivent TOUS DEUX exister. Sinon, si vous modifiez certains d\'entre eux pour ledit mode à partir des paramètres d\'origine dans les données de relecture, quelque chose de grave peut se produire.',
   sprint_warn1: 'En mode Sprint, le paramètre \'sprintParams\' doit exister par défaut.',


   DA_timer: "Minuteur",
   DA_miss: "Erreurs maximales",
   DA_phase: "Phase de carte",
   DA_warn2: 'En mode Downstack Attack, les paramètres timeframe, maxmiss et level DOIVENT TOUS exister. Sinon, si vous modifiez les paramètres du mode à partir des paramètres d\'origine dans les données de relecture, quelque chose de mauvais peut',
   DA_warn1: 'En mode Downstack Attack, les paramètres \'DAParams\' doivent exister par défaut.',

   marathon_level: "Niveau",
   marathon_linereq: "Lignes à niveler",
   marathon_warn2: 'En mode Marathon, level, linesRequire et lineLimit doivent TOUS exister. Sinon, si vous modifiez certains d\'entre eux pour ledit mode à partir des paramètres d\'origine dans les données de relecture, quelque chose de grave peut se produire.',
   marathon_warn1: 'En mode Marathon, le paramètre \'marathonParams\' doit exister par défaut.',
   master_level: "Niveau Mach",
   master_linereq: "Lignes à niveler",
   master_warn2: 'En Mode Master, level, linesRequire et lineLimit doivent TOUS exister. Sinon, si vous modifiez certains d\'entre eux pour ledit mode à partir des paramètres d\'origine dans les données de relecture, quelque chose de grave peut se produire.',
   master_warn1: 'En Mode Master, le paramètre \'masterParams\' doit exister par défaut.',

   endless: "SANS FIN",

   single: "Single",
   double: "Double",
   triple: "Triple",
   quad: "Quadruple",
   quadplus: "Quadruple Plus",
   tspin0: "T-Spin",
   tspin1: "T-Spin Single",
   tspin2: "T-Spin Double",
   tspin3: "T-Spin Triple",
   mini0: "T-Spin Mini",
   mini1: "T-Spin Mini Single",

   b2b: "Back-to-back",
   renInt: "COMBO",

   blockout: "Bloquer!",
   lockout: "Verrouiller!",
   nottsd: "Pas TSD",
   timeup: "Le temps est écoulé!",
   DAfailed: "Échoué",
   noqueue: "Pas plus",
   repended: "Rediffusion terminée",

   ready: "Prêt",
   go: "C'est Parti",
   paused: "En Pause",

   finish: "Finir",
   digfinish: "Bedrock",
   marathonsuccess: 'Succès',

   gtrdenderror: `${_INPUT} ne se termine pas par .gtrd-json. Réessayer!`

  },
 } [{
  0: 'eng',
  1: 'fil',
  2: 'frc'
  } [lang]][_TEXT]
}

function classGUI(CLASS, text) {
 var classE = document.getElementsByClassName(`guiclass_${CLASS}`)
 for (var i = 0; i < classE.length; i++) {
  classE[i].innerHTML = text
 }
}

function nameGUI(CLASS, text) {
 var classE = document.getElementsByName(`guiname_${CLASS}`)
 for (var i = 0; i < classE.length; i++) {
  classE[i].innerHTML = text
 }
}

function buttonGUI(ID, text) {
 $iH(`gui_${ID}`, text)
}

function textGUI(ID, text) {
 $iH(`guitext_${ID}`, text)
}

function controlsGUI(ID, text) {
 $iH(`guicontrols_${ID}`, text)
}

/**
 * Translate
 */
function translate() {
 classGUI('title', TransText('title'))
 textGUI('title2', TransText('title2'))
 textGUI('controls', TransText('controls'))
 textGUI('controlsNote', TransText('controlsnote'))
 textGUI('moremodes', TransText('play'))
 controlsGUI('left', TransText('left'))
 controlsGUI('right', TransText('right'))
 controlsGUI('cw', TransText('rotcw'))
 controlsGUI('ccw', TransText('rotccw'))
 textGUI('settings', TransText('settings'))
 textGUI('settingsNote', TransText('settingsnote'))
 textGUI('easysettings', TransText('easysettings'))
 textGUI('CVVP', TransText('charvol'))
 textGUI('SFXVP', TransText('vol'))
 textGUI('PNVP', TransText('piecevol'))
 textGUI('ComVP', TransText('comvol'))
 textGUI('character', TransText('oc'))
 textGUI('sprint', TransText('sprint'))
 textGUI('da', TransText('da'))
 textGUI('marathon', TransText('marathon'))
 buttonGUI('replay', TransText('replay'))
 buttonGUI('tsd', TransText('tsd'))
 buttonGUI('dig', TransText('dig'))
 buttonGUI('gf', TransText('gf'))
 buttonGUI('2mu', TransText('2mu'))
 buttonGUI('da', TransText('da'))
 buttonGUI('marathon', TransText('marathon'))
 buttonGUI('play', TransText('play'))
 buttonGUI('controls', TransText('controls'))
 classGUI('replaycon', TransText('replaycon'))
 classGUI('return', TransText('return'))
 classGUI('retry', TransText('restart'))
 classGUI('back', TransText('back'))
 classGUI('start', TransText('startbutton'))
 buttonGUI('easysettings', TransText('easysettings'))
 classGUI('about', TransText('about'))
nameGUI('done', TransText('done'))

 textGUI('aboutP', TransText('about1'))
 textGUI('aboutC', TransText('about2'))
 buttonGUI('discord', TransText('discordB'))
 buttonGUI('tetrjs', TransText('tetrjsB'))

textGUI('selector', TransText('selector'))
textGUI('charName', TransText(''))

 buttonGUI('continue', TransText('return'))

 buttonGUI('settings', TransText('settings'))
 buttonGUI('loadreplay', TransText('loadrepdata'))
 buttonGUI('savereplay', TransText('saverepdata'))
 buttonGUI('watch', TransText('watch'))

 textGUI('hold', TransText('hold'))
 $iH('nextTXT', TransText('next'))
 $iH('allcleartext', TransText('pc'))
 textGUI('piece', TransText('piece'))

 textGUI('timeheader', TransText('DA_timer'))
 textGUI('missheader', TransText('DA_miss'))
 textGUI('MLheader', TransText('DA_phase'))
 textGUI('typeheader', TransText('sprint_queue'))
 textGUI('typeheader', TransText('sprint_queue'))
 textGUI('lineheader', TransText('linelimit'))
 textGUI('marathon-lineheader', TransText('linelimit'))
 textGUI('marathon-levelheader', TransText('marathon_level'))
 textGUI('marathon-linereqheader', TransText('marathon_linereq'))

 textGUI('master-lineheader', TransText('linelimit'))
 textGUI('master-levelheader', TransText('master_level'))
 textGUI('master-linereqheader', TransText('master_linereq'))
 $iH('feverTXT', TransText('frenzy'))

 buttonGUI('returnCAP', `<--  ${TransText('return').toUpperCase()}`);
 buttonGUI('menu', TransText('mainmenu'));

 var t = {
  0: function() {
   $iH('linetsd', TransText('line'))
  },
  3: function() {
   $iH('linetsd', TransText('line'))
  },
  111: function() {
   $iH('linetsd', TransText('tsdtext'))
  },
  112: function() {
   $iH('linetsd', TransText('pending'))
  },
  113: function() {
   $iH('linetsd', TransText('renmax'))
  },
  114: function() {
   $iH('linetsd', TransText('timer'))
  },
 }
 t[gametype]



}



/*for(var i=0;i<document.getElementsByClassName('slider').length;i++){
 document.getElementsByClassName('slider')[i].value=0
}
*/

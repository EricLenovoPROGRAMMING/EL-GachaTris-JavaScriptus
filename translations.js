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
   retirement:'Gachatris JavaScriptus Has Been Retired (1/12/2022 - 6/9/2022)',
   retLetter:'EricLenovo: Hello users. Thank you very much for your love and support for over 5 months in modifying Tetr.JS into Gachatris JavaScriptus. Gachatris JavaScriptus has been officially retired, with inspirations given to my successor, <tet>Gachatris Tetraplus</tet>, and there will be no future updates for this game. <tet>Gachatris Tetraplus</tet> is early in development yet, but you may check it out! You may join my Discord server of Gachatris to see updates and talk about the game.',
   changelogs: "Changelogs",
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
   discordB: "Gachatris Discord Server",
   tetrjsB: "Simon Laroche's Tetr.JS",

  playername:"Player Name:",
  maxname:"All names must be 20 bytes long. Mind not changing the name from the original replay data or shorten it to the correct length.",


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
   musicvol: "Music Volume",
   uivol: "UI Volume",
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
   rot180: "Spin 180??",
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

  selectorAI: "Select a Gacha Character for the AI",
   charNameAI: "You now let the AI use:",
   vs_note:'TIP: widen the window or make the orientation landscape to enable 2-Player Window Arrangement.',
   vs_pps:'Speed Limit:',
   vs_kps:'Interval (Keypresses Per Second):',
   vs_name:'AI Name:',
   vs_characteruse:'Current Character:',
   vs_pickChar:'Gacha Character for the AI',
   vs_ai:'Versus AI',
   vs_warn2:`In VS AI mode, you are missing one or more '1v1params' parameters: ${_INPUT}; Likewise, either if you change some of them for the said Mode from the original parameters in the replay data, something bad may happen, or if one or more parameters are missing, the replay data cannot be loaded.`,
   vs_warn1: 'In VS AI mode, the \'1v1params\' parameter must exist by default.',
   

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
   mini2: "T-Spin Mini Double",

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

   gtrdenderror: `${_INPUT} does not end with .gtrd-json. Try again!`,

   starNotes:(function(IN){
   if(IN=='time'){
    return 'Clear a Level to get one star. Finish the game as soon as possible with the conditions that must be met to get 2-3 stars'
   }
   if (IN == 'score') {
    return 'Clear a Level to get one star. Obtain the score as high as you can with the conditions that must be met to get 2-3 stars'
   }
   })(_INPUT),
  clearLevelNote:'Clear a Level'

  },
  fil: {
   title: "Tetr.JS - Gachatris JavaScriptus",
   title2: "Ang pagbabago ni EricLenovo mula sa Tetr.JS ni Simon Laroche, sa ilalim ng Lisensya ng MIT",
   play: "Maglaro",
   retirement: 'Ay Gachatris JavaScriptus Ay Nagretiro na (1/12/2022 - 6/9/2022)',
retLetter:"EricLenovo: Kumusta, mga gumagamit. Maraming salamat sa iyong pagmamahal at suporta sa mahigit 5 buwan sa pagbabago ng Tetr.JS sa Gachatris JavaScriptus. Ang Gachatris JavaScriptus ay opisyal na nagretiro, na may mga inspirasyong ibinigay sa aking kahalili, <tet>Gachatris Tetraplus</tet>, at walang magiging mga update sa hinaharap para sa larong ito. Ang <tet>Gachatris Tetraplus</tet> ay maaga pa sa pagbuo, ngunit maaari mo iyung tingnan! Maaari kang sumali sa aking Discord server ng Gachatris upang makita ang mga update at pag-usapan ang tungkol sa laro.",
changelogs: "Mga Changelog (Ingles)",
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
   discordB: "Gachatris Discord Server",
   tetrjsB: "Tetr.JS ni Simon Laroche",

playername:"Pangalan ng manlalaro:",
  maxname:"Ang lahat ng mga pangalan ay dapat na 20 mga karakter ang haba. Huwag baguhin ang pangalan mula sa orihinal na replay data o paikliin ito sa tamang haba.",



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
   musicvol: "Volume ng Kanta",
   uivol: "Volume ng UI",
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

selectorAI: "Pumili ng Gacha Character para sa AI",
   charNameAI: "Hinahayaan mo na ngayon ang AI na gamitin si:",
   
   vs_note:'TIP: palawakin ang window o gawin ang orientation nito sa landscape para paganahin ang 2-Player Window Arrangement.',

   vs_pps:'Limit ng bilis:',
   vs_kps:'Interval (Mga Keypress Bawat Segundo):',
   vs_name:'Pangalan ng AI:',
   vs_characteruse:'Kasalukuyang Karakter:',
   vs_pickChar:'Gacha Character para sa AI',
   vs_ai:'Laban sa AI',
   vs_warn2:`Sa VS AI mode, nawawala ang isa o higit pang mga parameter ng '1v1params': ${_INPUT}; Gayundin, kung babaguhin mo ang ilan sa mga ito para sa nasabing Mode mula sa orihinal na mga parameter sa replay data, maaaring may mangyari na masama, o kung nawawala ang isa o higit pang mga parameter, hindi na ma-load ang replay data.`,
   vs_warn1: 'Sa VS AI mode, dapat na umiiral ang parameter na \'1v1params\' bilang default.',
   

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
   mini2: "T-Spin Mini Double",

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
   title2: "Modification d'EricLenovo ?? partir de Tetr.JS de Simon Laroche, sous licence MIT",
   play: "Jouer",
   retirement:'Gachatris JavaScriptus A ??t?? Retir?? (1/12/2022 - 6/9/2022)',
retLetter:"EricLenovo: Bonjour les utilisateurs. Merci beaucoup pour votre amour et votre soutien pendant plus de 5 mois dans la modification de Tetr.JS en Gachatris JavaScriptus. Gachatris JavaScriptus a ??t?? officiellement retir??, avec des inspirations donn??es ?? mon successeur, <tet>Gachatris Tetraplus</tet>, et il n'y aura pas de futures mises ?? jour pour ce jeu. <tet>Gachatris Tetraplus</tet> est encore au d??but du d??veloppement, mais vous pouvez le v??rifier! Vous pouvez rejoindre mon serveur Discord de Gachatris pour voir les mises ?? jour et parler du jeu." ,
changelogs: "Journaux des modifications (Anglais)",
   controls: "Contr??les",
   replaycon: "Console de Relecture",
   settings: "Param??tres",
   settingsnote: "Note d'EricLenovo pour vous: certains param??tres ne sont pas encore tout ?? fait au point! *pleure*",
   hold: "R??serve",
   next: "Suivant",
   startbutton: "D??marrer",
   replay: "Regarder la Rediffusion",

   about: "Informations",
   about1: "Gachatris JavaScriptus - un mod simonlc/Tetr.JS d'EricLenovo, dont le nom a ??t?? fond?? par lui-m??me - est un jeu d'empilement de blocs dont le but est d'effacer des rang??es de 10 blocs constituant des lignes. Gachatris JavaScriptus a ??t?? cr???? le 12 janvier 2022. Il se compose non seulement de personnages du Gacha Club, mais ??galement de plusieurs modes et fonctionnalit??s. EricLenovo lui-m??me est un Tetris-Gacha YouTuber qui poss??de ce mod Tetr.JS.",
   about2: "L'Original Tetr.JS a ??t?? con??u et r??alis?? par Simon Laroche sous licence MIT ; Gacha Club et les autres jeux Gacha sont des marques d??pos??es de Lunime??; 'Gachatris JavaScriptus' est abr??g?? en 'GT.JS'",
   discordB: "Discord Server de Gachatris",
   tetrjsB: "Tetr.JS de Simon Laroche",

playername:"Nom de joueur:",
  maxname:"Tous les noms doivent avoir une longueur de 20 octets. Veillez ?? ne pas modifier le nom des donn??es de relecture d'origine ou ?? le raccourcir ?? la bonne longueur.",



   pc: "CLAIR PARFAIT",
   frenzy: "FR??N??SIE!",

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
   easysettings: "Param??tres Faciles",
   das: "D??lai de d??calage automatique",
   arr: "Taux de R??p??tition Automatique",
   grav: "Gravit?? des Pi??ces",
   sft: "Gravit?? Douce",
   lck: "D??lai de Verrouillage des Pi??ces",
   vol: "Volume SFX",
   charvol: "Volume du Personnage",
   comvol: "Volume des Commentaires",
   piecevol: "Morceau Volume suivant",
   musicvol: "Volume de la musique",
   uivol: "Volume de l'interface utilisateur",
   oc: "Personnage du Gacha Club",
      selector: "S??lectionnez un personnage Gacha",
       charName: "Vous utilisez maintenant:",
   /*CONTROLS*/
   controlsnote: "Cliquez sur le contr??le que vous souhaitez modifier, puis appuyez sur n'importe quelle touche.",
   left: "Se D??placer ?? Gauche",
   right: "D??placer vers la Droite",
   shiftdown: "Descendre",
   harddrop: "Chute dure",
   rotcw: "Tourner ?? Droite",
   rotccw: "Tourner ?? Gauche",
   rot180: "Tourner ?? 180??",
   retry: "R??essayez",
   pause: "Pause",
   /*COMMON*/
   done: "Termin??",
   back: "Arri??re",
   return: "Retour",
   mainmenu: "Menu Principal",
   restart: "Recommencer",
   /*GAME STATS TEXTS*/
   line: "LIGNES",
   piece: "PI??CES",
   pending: "LIGNES EN ATTENTE",
   tsdtext: "T-SPIN DOUBLES",
   renmax: "MAX COMBO",
   timer: "TEMPS",

   boards: "PLANCHES",
   phases: "PHASE",
   successes: "SUCC??S",
   fails: "??CHOUER",

   level: "NIV.",

   linelimit: "Lignes ?? effacer",
   sprint_queue: "Type de file d'attente",
   sprint_queue1: "Normal (7 sacs)",
   sprint_queue2: "Ciel (I uniquement)",
   sprint_queue3: "Spr_nt (non I)",
   sprint_warn2: 'En mode Sprint, queueType et lineLimit doivent TOUS DEUX exister. Sinon, si vous modifiez certains d\'entre eux pour ledit mode ?? partir des param??tres d\'origine dans les donn??es de relecture, quelque chose de grave peut se produire.',
   sprint_warn1: 'En mode Sprint, le param??tre \'sprintParams\' doit exister par d??faut.',


   DA_timer: "Minuteur",
   DA_miss: "Erreurs maximales",
   DA_phase: "Phase de carte",
   DA_warn2: 'En mode Downstack Attack, les param??tres timeframe, maxmiss et level DOIVENT TOUS exister. Sinon, si vous modifiez les param??tres du mode ?? partir des param??tres d\'origine dans les donn??es de relecture, quelque chose de mauvais peut',
   DA_warn1: 'En mode Downstack Attack, les param??tres \'DAParams\' doivent exister par d??faut.',

   marathon_level: "Niveau",
   marathon_linereq: "Lignes ?? niveler",
   marathon_warn2: 'En mode Marathon, level, linesRequire et lineLimit doivent TOUS exister. Sinon, si vous modifiez certains d\'entre eux pour ledit mode ?? partir des param??tres d\'origine dans les donn??es de relecture, quelque chose de grave peut se produire.',
   marathon_warn1: 'En mode Marathon, le param??tre \'marathonParams\' doit exister par d??faut.',
   master_level: "Niveau Mach",
   master_linereq: "Lignes ?? niveler",
   master_warn2: 'En Mode Master, level, linesRequire et lineLimit doivent TOUS exister. Sinon, si vous modifiez certains d\'entre eux pour ledit mode ?? partir des param??tres d\'origine dans les donn??es de relecture, quelque chose de grave peut se produire.',
   master_warn1: 'En Mode Master, le param??tre \'masterParams\' doit exister par d??faut.',

vs_note:'ASTUCE: agrandissez la fen??tre ou orientez-la vers le paysage pour activer l\'arrangement de la fen??tre ?? 2 joueurs. ',

  selectorAI: "S??lectionnez un personnage Gacha pour l'IA",
   charNameAI: "Vous laissez maintenant l'IA utiliser:",
   vs_pps:'Limitation de vitesse:',
   vs_kps:'Intervalle (Touches par Seconde):',
   vs_name:'Nom de l\'IA:',
   vs_characteruse:'Caract??re Actuel:',
   vs_pickChar:'Personnage Gacha pour l\'IA',
   vs_ai:'Versus IA',
   vs_warn2:`En mode VS AI, il vous manque un ou plusieurs param??tres de '1v1params': ${_INPUT}; De m??me, soit si vous modifiez certains d'entre eux pour ledit mode ?? partir des param??tres d'origine dans les donn??es de relecture, quelque chose de mauvais peut arriver, soit si un ou plusieurs param??tres manquent, les donn??es de relecture ne peuvent pas ??tre charg??es.`,
   vs_warn1: 'En mode VS IA, le param??tre \'1v1params\' doit exister par d??faut.',
   

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
   mini2: "T-Spin Mini Double",

   b2b: "Back-to-back",
   renInt: "COMBO",

   blockout: "Bloquer!",
   lockout: "Verrouiller!",
   nottsd: "Pas TSD",
   timeup: "Le temps est ??coul??!",
   DAfailed: "??chou??",
   noqueue: "Pas plus",
   repended: "Rediffusion termin??e",

   ready: "Pr??t",
   go: "C'est Parti",
   paused: "En Pause",

   finish: "Finir",
   digfinish: "Bedrock",
   marathonsuccess: 'Succ??s',

   gtrdenderror: `${_INPUT} ne se termine pas par .gtrd-json. R??essayer!`

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
 $iH("retirement-title",TransText("retirement"))
  $iH("retirement-letter",TransText("retLetter"))
 buttonGUI("changelogs",TransText("changelogs"))
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
  textGUI('MFXVP', TransText('musicvol'))
   textGUI('UISFXVP', TransText('uivol'))
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
textGUI('charName', TransText('charName'))
textGUI('vs-note', TransText('vs_note'))


 buttonGUI('continue', TransText('return'))

 buttonGUI('settings', TransText('settings'))
 buttonGUI('loadreplay', TransText('loadrepdata'))
 buttonGUI('savereplay', TransText('saverepdata'))
 buttonGUI('watch', TransText('watch'))

 textGUI('hold', TransText('hold'))
 $iH('nextTXT', TransText('next'))
 $iH('allcleartext', TransText('pc'))
 textGUI('piece', TransText('piece'))
 textGUI('hold2', TransText('hold'))
 $iH('nextTXT2', TransText('next'))
 $iH('allcleartext2', TransText('pc'))
 textGUI('piece2', TransText('piece'))

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
 textGUI('playername', TransText('playername'))
 
 textGUI('vs-speedheader', TransText('vs_pps'))
 textGUI('vs-kpsheader', TransText('vs_kps'))
 textGUI('vs-nameheader', TransText('vs_name'))
textGUI('vs-characterheader', TransText('vs_characteruse'))
 buttonGUI('pickAIChar', TransText('vs_pickChar'))
 textGUI('selectorAI', TransText('selectorAI'))
 textGUI('charNameAI', TransText('charNameAI'))
 buttonGUI('vs', TransText('vs_ai'))
 textGUI('vs', TransText('vs_ai'))




 
 $iH('feverTXT', TransText('frenzy'))

 classGUI('RETURN', `<--  ${TransText('return').toUpperCase()}`);
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

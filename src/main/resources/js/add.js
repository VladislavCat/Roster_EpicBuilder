var myid = "1";
var legionElite =0;
var needLord=1000;
var spaceShip =1;
var arta =0;
var needArta = 2000;
var mech =0;
var needMech = 2000;
let or='<p class=\"inList\">or</p>';

//Линейные юниты выбор
let tacticals ='<div onclick=\"saplus(); parentElement.remove(); UniteCreate(\'.lineFormationAdd\', \'8 Tactical Squads\', 275, \'Line\');\">8 Tactical Squads 275+</div>';
let assolts ='<div onclick=\"saplus(); parentElement.remove(); UniteCreate(\'.lineFormationAdd\', \'8 Assault Squads units\', 300, \'Assault\');\">8 Assault Squads units 300+</div>';
let despoiler ='<div onclick=\"saplus(); parentElement.remove(); UniteCreate(\'.lineFormationAdd\', \'8 Despoiler Squads units\', 300, \'Line\');\">8 Despoiler Squads units 300+</div>';
let bretchers ='<div onclick=\"saplus(); parentElement.remove(); UniteCreate(\'.lineFormationAdd\', \'8 Breacher Squads units\', 300, \'Breacher\');\">8 Breacher Squads units 300+</div>';

//саппортные юниты выбор
let terminators ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'Terminators\', 0, \'Terminators\');\">(4-6) Terminators 75+ for each</div>';
let veteranSquad ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'8 Veteran Squad\', 400, \'VeteranSquad\');\">(8) Veteran Squad 400+</div>';
let destroyerAssaultSquad ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'6-8 Destroyer Assault Squad\', 0, \'DestroyerAssaultSquad\');\">(6-8) Destroyer Assault Squad 65+ for each</div>';
let mortalisDestroyerSquad ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'6-8 Mortalis Destroyer Squad\', 0, \'MortalisDestroyerSquad\');\">(6-8) Mortalis Destroyer Squad 55+ for each</div>';
let seekerSquads ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'6-8 Seeker Squads\', 0, \'SeekerSquads\');\">(6-8) Seeker Squads 60+ for each</div>';
let reconnaissanceSquads ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'6 Reconnaissance Squads\', 225, \'ReconnaissanceSquads\');\">(6) Reconnaissance Squads 225+</div>';
let scoutSquads ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'6 Scout Squads\', 150, \'ScoutSquads\');\">(6) Scout Squads 150+</div>';
let outriderBikeunits ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'5 Outrider Bike units\', 150, \'OutriderBike\');\">(5) Outrider Bike units 150+</div>';
let attackBike ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'5 Attack Bike\', 150, \'AttackBike\');\">(5) Attack Bike 150+</div>';
let javelinAttackSquadron ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'5 Javelin Attack Squadron\', 250, \'JavelinAttackSquadron\');\">(5) Javelin Attack Squadron 250+</div>';
let landSpeeder  ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'5 Land Speeder \', 200, \'LandSpeeder\');\">(5) Land Speeder 200+</div>';
let scimitarJetBike  ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'5  Scimitar Jet Bike \', 200, \'ScimitarJetBike\');\">(5) Scimitar Jet Bike 200+</div>';
let castraferrumDreadnoughtTalon ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'3-6 Dreadnought\', 0, \'Dreadnought\');\">(3-6)Dreadnought 50+ for each</div>';
let contemptorDreadnought ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'3-6 Contemptor Dreadnought\', 0, \'ContemptorDreadnought\');\">(3-6) Contemptor Dreadnought 60+ for each</div>';
let leviathanPatternSiegeDreadnought ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'3-6 Leviathan Pattern Siege Dreadnought\', 0, \'LeviathanPatternSiegeDreadnought\');\">(3-6) Leviathan Pattern Siege Dreadnought 150+ for each</div>';
let rapierunits ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'6 Rapier units\', 240, \'Rapierunits\');\">(6) Rapier units 240+</div>';
let medusa ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'6 Medusa\', 275, \'Medusa\');\">(6) Medusa 275+</div>';
let whirlwind ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'6 Whirlwind\', 250, \'Whirlwind\');\">(6) Whirlwind 250+</div>';
let basilisk ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'6 Basilisk\', 350, \'Basilisk\');\">(6) Basilisk 350</div>';
let arquitorBombard ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'6 Arquitor Bombard\', 400, \'ArquitorBombard\');\">(6) Arquitor Bombard 400+</div>';
let sabreStrikeTanks ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'6 Sabre Strike Tanks\', 350, \'SabreStrikeTanks\');\">(6) Sabre Strike Tanks 350+</div>';
let predatorunits ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'6 Predator units\', 250, \'Predatorunits\');\">(6) Predator units 250+</div>';
let vindicatorSiege ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'6 Vindicator Siege\', 250, \'VindicatorSiege\');\">(6) Vindicator Siege 250+</div>';
let sicaranBattleTank ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'4-6 Sicaran Battle Tank\', 0, \'SicaranBattleTank\');\">(4-6) Sicaran Battle Tank 75+ for each</div>';
let sicaranPunisherAssaultTank ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'4-6 Sicaran Punisher Assault Tank\', 0, \'SicaranPunisherAssaultTank\');\">(4-6) Sicaran Punisher Assault Tank 75+ for each</div>';
let landRaiderPhobos ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'4-6 Land Raider Phobos\', 0, \'LandRaiderPhobos\');\">(4-6) Land Raider Phobos 65+ for each</div>';
let proteusunits ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'4-6 Proteus units\', 0, \'Proteusunits\');\">(4-6) Proteus units 65+ for each</div>';
let malcadorHeavyTanks ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'4 Malcador Heavy Tanks\', 400, \'MalcadorHeavyTanks\');\">(4) Malcador Heavy Tanks 400+</div>';
let kratosheavyassaulttank ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'2-3 Kratos heavy assault tank\', 0, \'Kratosheavyassaulttank\');\">(2-3) Kratos heavy assault tank 150+ for each</div>';
let Stormblade ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'1-3 Storm Eagle Attack Ship\', 250, \'StormEagle\');\">(1) Stormblade 250+</div>';
let StormEagleAttackShip ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'1 Stormblade\', 0, \'Stormblade\');\">(1-3) Storm Eagle Attack Ship 125+ for each</div>';
let StrikeCruiser ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'1 Strike Cruiser\', 200, \'StrikeCruiser\');\">(1 for army) Strike Cruiser 200+</div>';
let BattleBarge ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'1 Battle Barge\', 300, \'BattleBarge\');\">(1 for army) Battle Barge 300+</div>';
let ThunderhawkTransporter ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'1-6 Thunderhawk Transporter\', 0, \'ThunderhawkTransporter\');\">(1-6) Thunderhawk Transporter 100+ for each</div>';
//техмарины
let Tarantula ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'4 Tarantula units and 1 Tarantula Hyperios unit and 2 Tech Marine units and 2 Servo-automata units\', 185, \'Tarantula\');\">Legion Tarantula Battery 185+</div>';
let Thallax ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'6 Thallax units\', 350, \'Thallax\');\">6 Thallax units 350+</div>';
let Castellax ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'5 Castellax Battle-Automata and 2 Tech Marines units and 2 Servo-automata units\', 300, \'Castellax\');\">Castellax Maniple 300+</div>';
let Vorax ='<div onclick=\"saminus(); parentElement.remove(); UniteCreate(\'.supportFormationAdd\', \'6 Vorax Battle-Automata\', 250, \'Vorax\');\">6 Vorax Battle-Automata 250+</div>';

//юниты лордов войны
let LegionGunshipWing ='<div onclick=\"lords(325); parentElement.remove(); UniteCreate(\'.lordsFormationAdd\', \'Fire Raptor\', 325, \'Lords\');\">2 Fire Raptor units 325+</div>';
let LegionInterceptorAttackWing ='<div onclick=\"lords(300); parentElement.remove(); UniteCreate(\'.lordsFormationAdd\', \'Xiphon Interceptor units\', 300, \'Lords\');\">2 Xiphon Interceptor units 300+</div>';
let LegionStormbird ='<div onclick=\"lords(450); parentElement.remove(); UniteCreate(\'.lordsFormationAdd\', \'Stormbird Heavy Attack Ship\', 450, \'Lords\');\">Stormbird Heavy Attack Ship 450+</div>';
let LegionThunderhawkGunship ='<div onclick=\"lords(450); parentElement.remove(); UniteCreate(\'.lordsFormationAdd\', \'Thunderhawk Gunship unit\', 450, \'Lords\');\">Thunderhawk Gunship unit 450+</div>';
let Fellblade ='<div onclick=\"lords(250); parentElement.remove(); UniteCreate(\'.lordsFormationAdd\', \'Fellblade\', 250, \'Fellblade\');\">Fellblade 250+</div>';
let Glaive ='<div onclick=\"lords(300); parentElement.remove(); UniteCreate(\'.lordsFormationAdd\', \'Glaive\', 300, \'Lords\');\">Glaive 300+</div>';
let LegionPrimarisLightning ='<div onclick=\"lords(0); parentElement.remove(); UniteCreate(\'.lordsFormationAdd\', \'Legion Primaris-Lightning\', 0, \'Primaris\');\">2-3 Primaris-Lightning units any type 125+ each</div>';
let GroupFellblade ='<div onclick=\"lords(700); parentElement.remove(); UniteCreate(\'.lordsFormationAdd\', \'3 Fellblade\', 700, \'Fellblade\');\">3 Fellblade 700+</div>';
let Falchion ='<div onclick=\"lords(300); parentElement.remove(); UniteCreate(\'.lordsFormationAdd\', \'Falchion\', 300, \'Lords\');\">Falchion 300+</div>';
let Typhon ='<div onclick=\"lords(400); parentElement.remove(); UniteCreate(\'.lordsFormationAdd\', \'Typhon\', 400, \'Lords\');\">2 Typhon Heavy Siege Tank 400+</div>';
let Cerberus ='<div onclick=\"lords(400); parentElement.remove(); UniteCreate(\'.lordsFormationAdd\', \'Cerberus\', 400, \'Lords\');\">2 Cerberus Tank Destroyer 400+</div>';

function dop(inStr, where) {
    if (document.form.dops.value != '0') {
        var div = document.createElement('div');
        div.className = 'class_3';
        div.innerHTML = inStr;
        document.querySelector(where).appendChild(div);
        sapportplus(100);
    }
}
function del() {
    var allDivs = document.form.querySelectorAll('.class_2 div'),
        indx = allDivs.length - 1;
    if (indx < 0) return false;
    allDivs[indx].parentNode.removeChild(allDivs[indx]);
    sapportminus(100);
}

function lineCreate(where) {
    var div = document.createElement('div');
    div.className = 'class_3';
    div.innerHTML = div.innerHTML + tacticals;
    div.innerHTML = div.innerHTML + assolts;
    div.innerHTML = div.innerHTML + bretchers;
    div.innerHTML = div.innerHTML + despoiler;
    document.querySelector(where).appendChild(div);
}
function supportCreate(where) {
    var div = document.createElement('div');
    div.className = 'class_3';
    if(document.form.textview.value>=needLord){
        legionElite++;
        needLord+=1000;
    }
    if(document.form.textview.value>=needArta){
        arta++;
        needArta+=2000;
    }
    if(document.form.textview.value>=needMech){
        mech++;
        needMech+=2000;
    }
    div.innerHTML = div.innerHTML + '<hr><h4 class="inList">0-1 Legion Elite (per full 1000 pts):</h4>';
    if (legionElite==0){
        div.innerHTML = div.innerHTML + '<font>(4-6) Terminators 75+ for each</font>' + or+'<font>(8) Veteran Squad 400</font>'+or+ '<font>(6-8) Destroyer Assault Squad 65+ for each</font>'+or+ '<font>(6-8 Mortalis Destroyer Squad units)</font>' + or + '<font>(6-8) Seeker Squads units</font>';
    }
    if(legionElite>=1){
        div.innerHTML = div.innerHTML + terminators + or;
        div.innerHTML = div.innerHTML + veteranSquad + or;
        div.innerHTML = div.innerHTML + destroyerAssaultSquad + or;
        div.innerHTML = div.innerHTML + mortalisDestroyerSquad + or;
        div.innerHTML = div.innerHTML + seekerSquads;
        legionElite--;
    }
    div.innerHTML = div.innerHTML + '<hr>';
    div.innerHTML = div.innerHTML + reconnaissanceSquads;
    div.innerHTML = div.innerHTML + outriderBikeunits;
    div.innerHTML = div.innerHTML + attackBike;
    div.innerHTML = div.innerHTML + scoutSquads;
    div.innerHTML = div.innerHTML + javelinAttackSquadron;
    div.innerHTML = div.innerHTML + landSpeeder;
    div.innerHTML = div.innerHTML + scimitarJetBike;
    div.innerHTML = div.innerHTML + castraferrumDreadnoughtTalon;
    div.innerHTML = div.innerHTML + contemptorDreadnought;
    div.innerHTML = div.innerHTML + leviathanPatternSiegeDreadnought;
    div.innerHTML = div.innerHTML + rapierunits;
    div.innerHTML = div.innerHTML + '<hr><h4 class="inList">0-1 Legion Artillery Battery (per full 2000 pts):</h4>';
    if (arta==0){
        div.innerHTML = div.innerHTML + '<font>6 Medusa units</font>' + or+'<font>6 Whirlwind units</font>'+or+ '<font>6 Basilisk units</font>'+or+ '<font>6 Arquitor Bombard units</font>';
    }
    if(arta>=1){
        div.innerHTML = div.innerHTML + medusa + or;
        div.innerHTML = div.innerHTML + whirlwind + or;
        div.innerHTML = div.innerHTML + basilisk + or;
        div.innerHTML = div.innerHTML + arquitorBombard;
        arta--;
    }
    div.innerHTML = div.innerHTML + '<hr>';
    div.innerHTML = div.innerHTML + sabreStrikeTanks;
    div.innerHTML = div.innerHTML + predatorunits;
    div.innerHTML = div.innerHTML + vindicatorSiege;
    div.innerHTML = div.innerHTML + sicaranBattleTank;
    div.innerHTML = div.innerHTML + sicaranPunisherAssaultTank;
    div.innerHTML = div.innerHTML + landRaiderPhobos;
    div.innerHTML = div.innerHTML + proteusunits;
    div.innerHTML = div.innerHTML + malcadorHeavyTanks;
    div.innerHTML = div.innerHTML + kratosheavyassaulttank;
    div.innerHTML = div.innerHTML + Stormblade;
    div.innerHTML = div.innerHTML + StormEagleAttackShip;
    if(spaceShip!=0){
        div.innerHTML = div.innerHTML + '<hr><h4 class="inList">0-1 Legion Spacecraft:</h4>';
        div.innerHTML = div.innerHTML + StrikeCruiser + or;
        div.innerHTML = div.innerHTML + BattleBarge;
        div.innerHTML = div.innerHTML + '<hr>';
        spaceShip--;
    }
    div.innerHTML = div.innerHTML + ThunderhawkTransporter;
    div.innerHTML = div.innerHTML + '<hr><h4 class="inList">0-1 Techmarine covenant per full 2000 pts:</h4>';
    if (mech==0){
        div.innerHTML = div.innerHTML + '<font>Legion Tarantula Battery</font>' + or+'<font>Thallax Cohort</font>'+or+ '<font>Castellax Maniple</font>'+or+ '<font>Vorax Maniple</font>';
    }
    if(mech>=1){
        div.innerHTML = div.innerHTML + Tarantula + or;
        div.innerHTML = div.innerHTML + Thallax + or;
        div.innerHTML = div.innerHTML + Castellax + or;
        div.innerHTML = div.innerHTML + Vorax;
        mech--;
    }
    div.innerHTML = div.innerHTML + '<hr>';
    document.querySelector(where).appendChild(div);
}
function lordsCreate(where) {
    var div = document.createElement('div');
    div.className = 'class_3';
    div.innerHTML = div.innerHTML + LegionGunshipWing;
    div.innerHTML = div.innerHTML + LegionInterceptorAttackWing;
    div.innerHTML = div.innerHTML + LegionStormbird;
    div.innerHTML = div.innerHTML + LegionThunderhawkGunship;
    div.innerHTML = div.innerHTML + Fellblade;
    div.innerHTML = div.innerHTML + Glaive;
    div.innerHTML = div.innerHTML + LegionPrimarisLightning;
    div.innerHTML = div.innerHTML + GroupFellblade;
    div.innerHTML = div.innerHTML + Falchion;
    div.innerHTML = div.innerHTML + Typhon;
    div.innerHTML = div.innerHTML + Cerberus;
    document.querySelector(where).appendChild(div);
}

function UniteCreate(where, who, num, unit) {
    var div = document.createElement('div');
    div.className = 'free';
    var myEle = document.getElementById(myid);
    if(myEle){
        myid = myid+1;
    }
    var points=num;

    // аккардаеон для апргрейдов
    let shet ='<input value=\"4\" name=\"upgreads\" id=\"' + myid*2 + '\" readonly style="color: #575757;">';
    let shetAll ='<input value=\"'+ num + '\" name=\"upgreads\" id=\"' + myid*3 + '\" readonly>';
    let shetUp ='<input value=\"0\" name=\"upgreads\" id=\"' + myid*4 + '\" readonly>';
    let yakor='<div class=\"accordion\" onclick=\"openCity(event,\'yakor\');\">close</div>';
    let yakorSup='<div class=\"accordion\" onclick=\"openCity(event,\'yakorSup\');\">close</div>';
    let yakorLords='<div class=\"accordion\" onclick=\"openCity(event,\'yakorLords\');\">close</div>';
    let arrow='<div class=\"wiggle\" title=\"кликни по мне\">&#9660;</div>';
    if (unit=="Lords"){
        points=0;
    }
    // апгрейды + саппорты
    //транспорт
    let transports='<h3>Standard Transport</h3>';
    let rino='<div class=\"btn\">Rino 0+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'0\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'0\',\'' + myid + '\');">+</button></div></div>';
    //тяжелый транспорт
    let heavytransports='<h3>Heavy Transports</h3>';
    let lendakpProteus='<div class=\"btn\">Land Raider Proteus 65+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'65\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'65\',\'' + myid + '\');">+</button></div></div>';
    let lendakpPhobos='<div class=\"btn\">Land Raider Phobos 65+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'65\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'65\',\'' + myid + '\');">+</button></div></div>';
    let lendakpAhilles='<div class=\"btn\">Land Raider Achilles 85+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'85\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'85\',\'' + myid + '\');">+</button></div></div>';
    let spartanAssaultTanks='<div class=\"btn\">Spartan Assault Tanks 100+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'100\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'100\',\'' + myid + '\');">+</button></div></div>';
    let mastodon='<div class=\"btn\">Mastodon 350+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'350\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'350\',\'' + myid + '\');">+</button></div></div>';
    //дредноуты
    let dreadnought='<h3>Dreadnoughts (1-2)</h3>';
    let castraferrum='<div class=\"btn\">Castraferrum 50+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'50\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'50\',\'' + myid + '\');">+</button></div></div>';
    let contemptor='<div class=\"btn\">Contemptor 60+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'60\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'60\',\'' + myid + '\');">+</button></div></div>';
    let deredeo='<div class=\"btn\">Deredeo 125+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'125\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'125\',\'' + myid + '\');">+</button></div></div>';
    let leviathan='<div class=\"btn\">Leviathan 150+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'150\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'150\',\'' + myid + '\');">+</button></div></div>';
    //поды
    let assaultClaw='<h3>Assault Claw</h3>';
    let kharybdis='<div class=\"btn\">Kharybdis Assault Claws 100+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'100\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'100\',\'' + myid + '\');">+</button></div></div>';
    let assaultRam='<h3>Assault Ram</h3>';
    let caestus='<div class=\"btn\">Caestus Assault Rams 50+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'50\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'50\',\'' + myid + '\');">+</button></div></div>';
    let dropAssault='<h3>Drop Assault</h3>';
    let droppod='<div class=\"btn\">Drop Assault 0+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'0\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'0\',\'' + myid + '\');">+</button></div></div>';
    //геройка
    let centurion='<h3>Centurion (1)</h3>';
    let librarian='<div class=\"btn\">Librarian 75+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'75\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'75\',\'' + myid + '\');">+</button></div></div>';
    //претор
    let praetor='<h3>Praetor (1 at all army, can not use if you have primarch)</h3>';
    let Praetor='<div class=\"btn\">Praetor 100+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'100\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'100\',\'' + myid + '\');">+</button></div></div>';
    let consul='<div class=\"btn\">Consul 50+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'50\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'50\',\'' + myid + '\');">+</button></div></div>';
    let PraetorinFellblade ='<div class=\"btn\">Praetor in Fellblade 200+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'200\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'200\',\'' + myid + '\');">+</button></div></div>';
    //гипериус
    let hyperios='<h3>Hyperios (1)</h3>';
    let Hyperios='<div class=\"btn\">Hyperios Whirlwind 75+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'75\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'75\',\'' + myid + '\');">+</button></div></div>';
    //рапиды
    let rapierBattery='<h3>Rapier Battery (1-4)</h3>';
    let RapierBattery='<div class=\"btn\">Rapier Battery 50+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'50\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'50\',\'' + myid + '\');">+</button></div></div>';
    //саппорты
    let SupportSquads='<h3>Support Squads (1-4)</h3>';
    let TacticalSupport='<div class=\"btn\">Tactical Support 25+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'25\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'25\',\'' + myid + '\');">+</button></div></div>';
    let HeavySupport='<div class=\"btn\">Heavy Support 60+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'60\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'60\',\'' + myid + '\');">+</button></div></div>';
    //телепорт
    let teleport='<h3>Teleport (upread all INF units)</h3>';
    let Teleport='<div class=\"btn\">Teleport 50+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'50\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'50\',\'' + myid + '\');">+</button></div></div>';
    //термит
    let termite='<h3>Termite</h3>';
    let termiteAssaultDrill='<div class=\"btn\">Termite Assault Drill 25+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'25\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'25\',\'' + myid + '\');">+</button></div></div>';
    //танки
    let tanks='<h3>Tanks (1-2)</h3>';
    let cerberus='<div class=\"btn\">Cerberus 225+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'225\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'225\',\'' + myid + '\');">+</button></div></div>';
    let typhon='<div class=\"btn\">Typhon 225+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'225\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'225\',\'' + myid + '\');">+</button></div></div>';
    let sicaran='<div class=\"btn\">Sicaran 75+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'75\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'75\',\'' + myid + '\');">+</button></div></div>';
    let sicaranV='<div class=\"btn\">Sicaran Venator 90+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'90\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'90\',\'' + myid + '\');">+</button></div></div>';
    let sicaranO='<div class=\"btn\">Sicaran Omega Tank Destroyer 125+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'125\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'125\',\'' + myid + '\');">+</button></div></div>';
    let sicaranA='<div class=\"btn\">Sicaran Arcus Strike Tank 125+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'125\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'125\',\'' + myid + '\');">+</button></div></div>';
    let vindicator='<div class=\"btn\">Vindicator 50+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'50\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'50\',\'' + myid + '\');">+</button></div></div>';
    let predator='<div class=\"btn\">Predator 50+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'50\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'50\',\'' + myid + '\');">+</button></div></div>';
    let predatorEx='<div class=\"btn\">Predator to Executioner 70+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'70\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'70\',\'' + myid + '\');">+</button></div></div>';
    let predatorIn='<div class=\"btn\">Predator to Infernus 70+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'70\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'70\',\'' + myid + '\');">+</button></div></div>';
    let predatorV='<div class=\"btn\">Whirlwind Scorpius 70+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'70\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'70\',\'' + myid + '\');">+</button></div></div>';
    let vindicatorLaserDestroyer='<div class=\"btn\">Vindicator Laser Destroyer 50+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'10\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'50\',\'' + myid + '\');">+</button></div></div>';
    let cratos ='<div class=\"btn\">Kratos heavy assault tank 150+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'150\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'150\',\'' + myid + '\');">+</button></div></div>';
    //техмаринам
    let Thanatar ='<div class=\"btn\">1 Thanatar Battle-Automata 70+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'70\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'70\',\'' + myid + '\');">+</button></div></div>';
    let TechMarines ='<div class=\"btn\">1-2 Tech Marines 25+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'25\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'25\',\'' + myid + '\');">+</button></div></div><h4>And</h4><div class=\"btn\">2 Servo-automata 0+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'0\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'0\',\'' + myid + '\');">+</button></div></div>';

    //улучшени авиации
    let BombsMissles='<div class=\"btn\">Bombs/Missles 75+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'75\',\'' + myid + '\',\'lords\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'75\',\'' + myid + '\');">+</button></div></div>';
    let PhosphexBombs='<div class=\"btn\">Phosphex Bombs 150+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'150\',\'' + myid + '\',\'lords\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'150\',\'' + myid + '\');">+</button></div></div>';
    let KrakenHeavyMissiles ='<div class=\"btn\">Kraken Heavy Missiles 150+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'150\',\'' + myid + '\',\'lords\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'150\',\'' + myid + '\');">+</button></div></div>';

    let tunderhock ='<div class=\"btn\">Thunderhawk Transporter units 100+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'100\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'100\',\'' + myid + '\');">+</button></div></div>';
    let PrimarisLightning ='<div class=\"btn\">Primaris-Lightning units 125+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'125\',\'' + myid + '\',\'lords\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'125\',\'' + myid + '\');">+</button></div></div>';

    //улучшение техники
    let PredatorEx='<div class=\"btn\">Predator to Executioner 20+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'20\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'20\',\'' + myid + '\');">+</button></div></div>';
    let PredatorIn='<div class=\"btn\">Predator to Infernus 20+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'20\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'20\',\'' + myid + '\');">+</button></div></div>';
    let VindicatorLaserDestroyer='<div class=\"btn\">Vindicator Laser Destroyer 10+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'10\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'10\',\'' + myid + '\');">+</button></div></div>';
    let LendakpAhilles='<div class=\"btn\">to Land Raider Achilles 20+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'20\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'20\',\'' + myid + '\');">+</button></div></div>';
    let SicaranV='<div class=\"btn\">to Sicaran Venator 15+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'15\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'15\',\'' + myid + '\');">+</button></div></div>';
    let SicaranO='<div class=\"btn\">to Sicaran Omega Tank Destroyer 50+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'50\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'50\',\'' + myid + '\');">+</button></div></div>';
    let SicaranA='<div class=\"btn\">to Sicaran Arcus Strike Tank 50+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'50\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'50\',\'' + myid + '\');">+</button></div></div>';
    let Deredeo='<div class=\"btn\">to Deredeo 20+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'20\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'20\',\'' + myid + '\');">+</button></div></div>';
    let WhirlwindScorpius='<div class=\"btn\">to Whirlwind Scorpius 75+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'75\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'75\',\'' + myid + '\');">+</button></div></div>';

    //supports
    let Terminators='<h3>4-6 Terminator units</h3>';
    let terminator='<div class=\"btn\">terminator 75+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'75\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'75\',\'' + myid + '\');">+</button></div></div>';
    let Destroyer='<h3>6-8 Destroyer Assault Squad units</h3>';
    let destroyer='<div class=\"btn\">terminator 65+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'65\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'65\',\'' + myid + '\');">+</button></div></div>';
    let Mortalis='<h3>6-8 Mortalis Destroyer Squad units</h3>';
    let mortalis='<div class=\"btn\">Mortalis Destroyer Squad 55+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'55\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'55\',\'' + myid + '\');">+</button></div></div>';
    let Seeker='<h3>6-8 Seeker Squads units</h3>';
    let seeker='<div class=\"btn\">Seeker Squads units 60+<div><button class=\"decrease\" type="button" onclick="shetMinus(\'60\',\'' + myid + '\');">-</button><input type="text" name="field" value="0" /><button class="increase" type="button" onclick="shetPLus(\'60\',\'' + myid + '\');">+</button></div></div>';

    insert(points);
    //lines
    if (unit=="Line"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'notS\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            '<div id=\"transport'+myid+'\">'+transports+rino+'</div>'+ or +
            heavytransports+lendakpProteus+lendakpPhobos+lendakpAhilles+spartanAssaultTanks+mastodon+or+
            assaultClaw+kharybdis+or+
            assaultRam+caestus+or+
            dropAssault+droppod+or+
            termite+termiteAssaultDrill+
            centurion+librarian+or+
            praetor+Praetor+consul+PraetorinFellblade+
            hyperios+Hyperios+
            rapierBattery+ RapierBattery+
            SupportSquads+TacticalSupport+HeavySupport+
            tanks+cerberus+typhon+sicaran+sicaranV+sicaranO+sicaranA+vindicator+predator+predatorEx+predatorIn+predatorV+vindicatorLaserDestroyer+PredatorEx+PredatorIn+VindicatorLaserDestroyer+LendakpAhilles+SicaranV+SicaranO+SicaranA+WhirlwindScorpius+
            dreadnought+castraferrum+contemptor+deredeo+leviathan+'</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Assault"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'notS\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            dropAssault+droppod+or+
            assaultClaw+kharybdis+or+
            assaultRam+caestus+
            centurion+librarian+or+
            praetor+Praetor+consul+PraetorinFellblade+'</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Breacher"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'notS\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            dropAssault+droppod+or+
            assaultClaw+kharybdis+or+
            assaultRam+caestus+or+
            heavytransports+lendakpProteus+lendakpPhobos+lendakpAhilles+spartanAssaultTanks+mastodon+
            centurion+librarian+or+
            praetor+Praetor+consul+PraetorinFellblade+ '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    //supports
    if (unit=="Terminators"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakorSup+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4+');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            Terminators+terminator+teleport+Teleport+or+
            transports+rino+or+
            heavytransports+lendakpProteus+lendakpPhobos+lendakpAhilles+spartanAssaultTanks+mastodon+or+
            assaultClaw+kharybdis+or+
            assaultRam+caestus+
            centurion+librarian+or+
            praetor+Praetor+consul+PraetorinFellblade+
            hyperios+Hyperios+
            tanks+cerberus+typhon+sicaran+sicaranV+sicaranO+sicaranA+vindicator+predator+predatorEx+predatorIn+predatorV+vindicatorLaserDestroyer+PredatorEx+PredatorIn+VindicatorLaserDestroyer+LendakpAhilles+SicaranV+SicaranO+SicaranA+WhirlwindScorpius+
            dreadnought+castraferrum+contemptor+deredeo+leviathan+'</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="VeteranSquad"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            '<div id=\"transport'+myid+'\">'+transports+rino+'</div>'+ or+
            heavytransports+lendakpProteus+lendakpPhobos+lendakpAhilles+spartanAssaultTanks+mastodon+or+
            assaultClaw+kharybdis+or+
            assaultRam+caestus+or+
            dropAssault+droppod+or+
            centurion+librarian+or+
            praetor+Praetor+consul+PraetorinFellblade+
            hyperios+Hyperios+
            termite+termiteAssaultDrill+
            tanks+cerberus+typhon+sicaran+sicaranV+sicaranO+sicaranA+vindicator+predator+predatorEx+predatorIn+predatorV+vindicatorLaserDestroyer+PredatorEx+PredatorIn+VindicatorLaserDestroyer+LendakpAhilles+SicaranV+SicaranO+SicaranA+WhirlwindScorpius+
            dreadnought+castraferrum+contemptor+deredeo+leviathan+'</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="DestroyerAssaultSquad"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            Destroyer+destroyer+
            assaultClaw+kharybdis+or+
            assaultRam+caestus+or+
            dropAssault+droppod+
            centurion+librarian+ '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="MortalisDestroyerSquad"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            '<div id=\"transport'+myid+'\">'+transports+rino+'</div>'+
            Mortalis+mortalis+
            heavytransports+lendakpProteus+lendakpPhobos+lendakpAhilles+spartanAssaultTanks+mastodon+or+
            assaultClaw+kharybdis+or+
            assaultRam+caestus+or+
            termite+termiteAssaultDrill+or+
            dropAssault+droppod+
            centurion+librarian+or+
            praetor+Praetor+consul+PraetorinFellblade+
            hyperios+Hyperios+
            tanks+cerberus+typhon+sicaran+sicaranV+sicaranO+sicaranA+vindicator+predator+predatorEx+predatorIn+predatorV+vindicatorLaserDestroyer+PredatorEx+PredatorIn+VindicatorLaserDestroyer+LendakpAhilles+SicaranV+SicaranO+SicaranA+WhirlwindScorpius+
            dreadnought+castraferrum+contemptor+deredeo+leviathan+'</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="SeekerSquads"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            '<div id=\"transport'+myid+'\">'+transports+rino+'</div>'+
            Seeker+seeker+
            heavytransports+lendakpProteus+lendakpPhobos+lendakpAhilles+spartanAssaultTanks+mastodon+or+
            assaultClaw+kharybdis+or+
            assaultRam+caestus+or+
            dropAssault+droppod+or+
            termite+termiteAssaultDrill+
            centurion+librarian+or+
            praetor+Praetor+consul+PraetorinFellblade+
            hyperios+Hyperios+
            tanks+cerberus+typhon+sicaran+sicaranV+sicaranO+sicaranA+vindicator+predator+predatorEx+predatorIn+predatorV+vindicatorLaserDestroyer+PredatorEx+PredatorIn+VindicatorLaserDestroyer+LendakpAhilles+SicaranV+SicaranO+SicaranA+WhirlwindScorpius+
            dreadnought+castraferrum+contemptor+deredeo+leviathan+'</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="ReconnaissanceSquads"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            transports+rino+or+
            assaultClaw+kharybdis+or+
            assaultRam+caestus+or+
            dropAssault+droppod+ '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="ScoutSquads"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            assaultClaw+kharybdis+or+
            assaultRam+caestus+or+
            dropAssault+droppod+ '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="OutriderBike"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            centurion+librarian+ '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="AttackBike"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            centurion+librarian+ '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="JavelinAttackSquadron"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            centurion+librarian+ '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="LandSpeeder"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            centurion+librarian+ '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="ScimitarJetBike"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            centurion+librarian+ '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Dreadnought"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            dreadnought+castraferrum+
            centurion+librarian+
            dropAssault+droppod+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="ContemptorDreadnought"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            dreadnought+contemptor+
            centurion+librarian+
            dropAssault+droppod+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="LeviathanPatternSiegeDreadnought"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            dreadnought+leviathan+
            centurion+librarian+
            dropAssault+droppod+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Rapierunits"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            dropAssault+droppod+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Medusa"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            hyperios+Hyperios+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Whirlwind"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            hyperios+Hyperios+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Basilisk"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            hyperios+Hyperios+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="ArquitorBombard"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            hyperios+Hyperios+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="SabreStrikeTanks"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            hyperios+Hyperios+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Predatorunits"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            PredatorEx+PredatorIn+
            hyperios+Hyperios+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="VindicatorSiege"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            VindicatorLaserDestroyer+
            hyperios+Hyperios+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="SicaranBattleTank"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            sicaran+SicaranV+SicaranO+SicaranA+
        hyperios+Hyperios+
        '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="SicaranPunisherAssaultTank"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            sicaran+SicaranV+SicaranO+SicaranA+
        hyperios+Hyperios+
        '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="LandRaiderPhobos"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            lendakpPhobos + LendakpAhilles+
        hyperios+Hyperios+
        '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Proteusunits"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            lendakpProteus+LendakpAhilles+
        hyperios+Hyperios+
        '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="MalcadorHeavyTanks"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            hyperios+Hyperios+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Kratosheavyassaulttank"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            cratos+
            hyperios+Hyperios+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="StormEagle"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Stormblade"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
                '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="StrikeCruiser"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
                '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="BattleBarge"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
                '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="ThunderhawkTransporter"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            tunderhock+
                '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Tarantula"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Thallax"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            TechMarines+
            heavytransports+lendakpProteus+lendakpPhobos+lendakpAhilles+spartanAssaultTanks+mastodon+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Castellax"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            Thanatar+
            heavytransports+lendakpProteus+lendakpPhobos+lendakpAhilles+spartanAssaultTanks+mastodon+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Vorax"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'S\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            TechMarines+
            heavytransports+lendakpProteus+lendakpPhobos+lendakpAhilles+spartanAssaultTanks+mastodon+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    //lords
    if (unit=="Lords"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'lord\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll+'&emsp;</div>'+
            ' <div class=\"panel\" id='+myid+'><div id=\"ops'+myid*4+'\"></div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Fellblade"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'lord\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll+arrow+'&emsp;</div>'+
            ' <div class=\"panel\" id='+myid+'><div id=\"ops'+myid*4+'\">' +
            praetor+Praetor+consul+PraetorinFellblade+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
    if (unit=="Primaris"){
        div.innerHTML = '<div class=\"del\" onclick=\"backDop('+ myid*3 +', \'lord\',\'0\'); parentElement.remove();\">del</div><div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll + arrow+
            '&emsp;</div><div class=\"panel\" id='+myid+'><div class="lineBar"><div>'+shetUp+shet+'</div><div>'+yakor+'<div onclick=\"backDop('+ myid*3 +', \'\', '+ myid*4 +');\">del</div></div></div><div id=\"ops'+myid*4+'\">'+
            PrimarisLightning+BombsMissles+PhosphexBombs+KrakenHeavyMissiles+
            '</div></div>';
        document.querySelector(where).appendChild(div);
    }
}

/*var galochcka=function handleMouseClick(event) {
    if(event.target.className=="btn"){
        event.target.innerText+="🗸";
    }
}
document.addEventListener('click', galochcka, true)
document.removeEventListener('click', galochcka);*/

//счетчик апгрейдов
document.addEventListener('click', function (e) {
    if (e.target.classList.contains("increase")) {
        ++e.target.parentElement.querySelector("input").value;
    } else if (e.target.classList.contains("decrease")) {
        if(e.target.parentElement.querySelector("input").value != 0){
            --e.target.parentElement.querySelector("input").value;
        }
    }
})
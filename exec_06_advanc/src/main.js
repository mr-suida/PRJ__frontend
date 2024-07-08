

const $class = (name)=> { return document.querySelector(name);}
const $id = (name)=> { return document.getElementById(name);}

function show_rules() {
    let ghost_w = $class(".ghost-window");
    ghost_w.style.display = ghost_w.style.display == "block" ? "none" : "block";
}


let UPOINTS = 0;

let OPTIONS = [
    "scis","rock",
    "rock","pape",
    "spoc","liza"
];

let SHELDN_RULES = {
    "scis": ["rock", "spock"],
    "rock": ["pape", "spock"],
    "pape": ["scis", "lizard"],
    "lizard": ["rock", "scis"],
    "spock": ["pape", "lizard"]
}

let NORMAL_RULES = {
    "scis": "rock",
    "rock": "pape",
    "pape": "scis"
}

function game_normal_start(opt) {
    if (UPOINTS > 5 ) { /* call other version */ }
    let house = OPTIONS[Math.floor(Math.random() * 4)];
    let userc = $id('user_chose');
    let hosec = $id('hose_chose');

    userc.className = ""; userc.classList.add("chose_box")
    hosec.className = ""; hosec.classList.add("chose_box")


    $class('.game-options-chose').style.display = 'none';
    $class('.game-result').style.display = 'flex';

    if ( opt == "scis" ){ userc.classList.add("chose_opt3")};
    if ( opt == "rock" ){ userc.classList.add("chose_opt2")};
    if ( opt == "pape" ){ userc.classList.add("chose_opt1")};

    hosec.classList.add('pulse_cicle');
    
    setTimeout(()=> {
        $class(".win-box").style.display = "block";
        if ( house == "scis" ){ hosec.classList.add("chose_opt3")};
        if ( house == "rock" ){ hosec.classList.add("chose_opt2")};
        if ( house == "pape" ){ hosec.classList.add("chose_opt1")};
        
        if ( opt == house ) {
            $class('.win-title').innerText = "NO WINNER"
            hosec.classList.remove('pulse_cicle');
            return 0;
        }
        if ( NORMAL_RULES[opt] == house ) {
             $class('.win-title').innerText = "YOU LOSER"
             hosec.classList.remove('pulse_cicle');
             hosec.classList.add('chose_box_win')
             return 0;
        }

        $class('.win-title').innerText = "YOU WINNER"
        hosec.classList.remove('pulse_cicle');
        userc.classList.add('chose_box_win')
        UPOINTS++;
        $class(".points-value").innerText = UPOINTS;
        return 0;
    },1500);
 }

 function game_normal_start_again() {
    $class('.game-options-chose').style.display = 'flex';
    $class('.game-result').style.display = 'none';
    $class(".win-box").style.display = "none";
}
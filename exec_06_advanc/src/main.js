

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
    let house = OPTIONS[Math.floor(Math.random() * 4)];
    let userc = $id('user_ch');
    let hosec = $id('hous_ch');

    userc.className = ""; userc.classList.add("game-option")
    hosec.className = ""; hosec.classList.add("game-option")


    $class('.game-board ').style.display = 'none';
    $class('.game-result').style.display = 'flex';

    if ( opt == "scis" ){ userc.classList.add("g-opt3")};
    if ( opt == "rock" ){ userc.classList.add("g-opt2")};
    if ( opt == "pape" ){ userc.classList.add("g-opt1")};

    $class('.stat-messg').innerText = "HOUSE PLAYING ..."
    hosec.classList.add('pulse-cicle');
    
    setTimeout(()=> {
        hosec.classList.remove('pulse-cicle');
        if ( house == "scis" ){ hosec.classList.add("g-opt3")};
        if ( house == "rock" ){ hosec.classList.add("g-opt2")};
        if ( house == "pape" ){ hosec.classList.add("g-opt1")};
        
        if ( opt == house ) {
            $class('.stat-messg').innerText = "NO WINNER"
            return 0;
        }
        if ( NORMAL_RULES[opt] == house ) {
             $class('.stat-messg').innerText = "YOU LOSER"
             hosec.classList.add('win-circle')
             return 0;
        }

        $class('.stat-messg').innerText = "YOU WINNER"
        userc.classList.add('win-circle')
        UPOINTS++;
        $class(".points-value").innerText = UPOINTS;
        return 0;
    },1200);
 }

 function again(){
    $class('.game-board').style.display = 'flex';
    $class('.game-result').style.display = 'none';
}
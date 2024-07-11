

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
    "scis": ["rock", "spoc"],
    "rock": ["pape", "spoc"],
    "pape": ["scis", "liza"],
    "liza": ["rock", "scis"],
    "spoc": ["pape", "liza"]
}

let NORMAL_RULES = {
    "scis": "rock",
    "rock": "pape",
    "pape": "scis"
}

function game_normal_start(opt) {

    if (UPOINTS >= 5 ) {
        game_bonus_start(opt)
        return;
    }

    let house = OPTIONS[Math.floor(Math.random() * 3)];
    let userc = $id('user_ch');
    let hosec = $id('hous_ch');
    $id('results-box').style.display = "none";

    userc.className = ""; userc.classList.add("game-option")
    hosec.className = ""; hosec.classList.add("game-option")


    $class('.game-board ').style.display = 'none';
    $class('.game-result').style.display = 'grid';

    if ( opt == "scis" ){ userc.classList.add("g-opt3")};
    if ( opt == "rock" ){ userc.classList.add("g-opt2")};
    if ( opt == "pape" ){ userc.classList.add("g-opt1")};

    hosec.classList.add('pulse-cicle');
    
    setTimeout(()=> {
        hosec.classList.remove('pulse-cicle');
        $id('results-box').style.display = "flex";

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

 function game_bonus_start(opt) {
    let house = OPTIONS[Math.floor(Math.random() * 5)];
    let userc = $id('user_ch');
    let hosec = $id('hous_ch');
    $id('results-box').style.display = "none";
    userc.className = ""; userc.classList.add("game-option")
    hosec.className = ""; hosec.classList.add("game-option")
    
    $class('.game-board-bonus').style.display = 'none';
    $class('.game-result').style.display = 'grid';

    if ( opt == "pape" ){ userc.classList.add("g-opt1")};
    if ( opt == "rock" ){ userc.classList.add("g-opt2")};
    if ( opt == "scis" ){ userc.classList.add("g-opt3")};
    if ( opt == "liza" ){ userc.classList.add("g-opt4")};
    if ( opt == "spoc" ){ userc.classList.add("g-opt5")};
    hosec.classList.add('pulse-cicle');

    setTimeout(()=>{
        hosec.classList.remove('pulse-cicle');
        $id('results-box').style.display = "flex";

        if ( house == "scis" ){ hosec.classList.add("g-opt3")};
        if ( house == "rock" ){ hosec.classList.add("g-opt2")};
        if ( house == "pape" ){ hosec.classList.add("g-opt1")};
        if ( house == "liza" ){ hosec.classList.add("g-opt4")};
        if ( house == "spoc" ){ hosec.classList.add("g-opt5")};

         if ( opt == house ) {
            $class('.stat-messg').innerText = "NO WINNER"
            return
        }

        if ( SHELDN_RULES[opt].includes(house)) {
            $class('.stat-messg').innerText = "YOU LOSER"
            hosec.classList.add('win-circle')
            return 0;
        }

        $class('.stat-messg').innerText = "YOU WINNER"
        userc.classList.add('win-circle')
        UPOINTS++;
        $class(".points-value").innerText = UPOINTS;
    },1200)
 
 }

 function again(){
     if (UPOINTS >= 5 ) {
        $class('.game-board').style.display = 'none';
        $class('.game-result').style.display = 'none';
        $class('.game-board-bonus').style.display = 'block';
        return;
    }
    $class('.game-board').style.display = 'block';
    $class('.game-result').style.display = 'none';
}
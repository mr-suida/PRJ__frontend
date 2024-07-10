

const getAdivice = function() {
    const API_URL = 'https://api.adviceslip.com/advice'

    let adivice_id = document.getElementById('advice-id')
    let adivice_tx = document.getElementById('advice-tx')

    fetch(API_URL).then((response)=> {
        response.json().then((data)=>{
            adivice_id.innerText = '#'+data.slip.id
            adivice_tx.innerText = data.slip.advice
        })
    })

    adivice_tx.innerText = 'Loading...'
}

window.onload = ()=>{ getAdivice() }
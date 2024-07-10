


let CardFunctions = {
    
    
    printUserNameInCard : () =>{
        let card_input  = document.querySelector("#card-name").value;
        let card_output = document.querySelector(".card-label-name");

        if (card_input.length > 0 ) card_output.innerText = card_input.toUpperCase();
    },
    
    printCardNumberInCard: (event) => {
        let card_input  = document.querySelector("#card-number")
        let card_output = document.querySelector(".card-label-number")
        
        if (event.key >= 0 && event.key <= 9 ) {
            let reg = /(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/
            let aux = reg.exec(card_input.value.replaceAll(" ",""))
            card_output.innerText = `${aux[1]} ${aux[2]} ${aux[3]} ${aux[4]}`
            card_input.value = card_output.innerText;
        }else {
            if (card_input.value.length > 0 ) {
                card_output.innerText = card_input.value;
            }
        }
    },
    
    printCardCvcInCard: () => {
        let card_input = document.querySelector("#card-cvc");
        let card_output = document.querySelector(".card-label-cvc");
        if (card_input.value.length > 1 && card_input.value.length <= 3 ) {
            card_output.innerText = card_input.value;
        }else if (card_input.value.length > 3) {
           card_input.value = card_input.value.slice(0,3);
        }
    },
    
    printCardDateInCard: () => {
        let card_input_month = document.querySelector("#card-date")
        let card_input_years = document.querySelector("#card-year")
        let card_output = document.querySelector(".card-label-date")
        let month = ""; let years = ""
        
        if ( card_input_month.value.length < 3 ) {
            month += card_input_month.value
            card_output.innerHTML = parseInt(month) < 13 ? `${month}/${years}` : `/${years}`
        }
        
        if ( card_input_years.value.length < 3 ) {
            years += card_input_years.value
            card_output.innerHTML = parseInt(years) < 100 ? `${month}/${years}` : `${month}/`
        }
        
        card_input_month.value = parseInt(month) > 12 ? '' : month
        card_input_years.value = parseInt(years) > 99 ? '' : years
        
    },
    
    checkIsValidCardData: ()=> {
        let card_number = document.getElementById("card-number")
        let card_name = document.getElementById("card-name")
        let card_month = document.getElementById("card-date")
        let card_years = document.getElementById("card-year")
        let card_cvc = document.getElementById("card-cvc")
        let status = 0;
        
        if (card_number.value.length < 19 ){
            document.querySelector(".card-number-error").style.display = "block"; 
            status +=1;
            card_number.style.borderColor = "red"
        }
        if (card_name.value.length  < 5 ) {
            document.querySelector(".card-name-error").style.display = "block"; 
            status +=1;
            card_name.style.borderColor = "red"
        }
        if (card_month.value.length <= 0 ){
            document.querySelector(".card-date-error").style.display = "block"; 
            status +=1;
            card_month.style.borderColor = "red"
        }
        if (card_years.value.length <= 0 ){
            document.querySelector(".card-date-error").style.display = "block"; 
            status +=1;
            card_years.style.borderColor = "red"
        }
        if (card_cvc.value.length <= 0 ){
            document.querySelector(".card-cvc-error").style.display = "block"; 
            status +=1;
            card_cvc.style.borderColor = "red"
        }


        if (status == 0 ) {
            document.querySelector(".form-box").style.display = "none"
            document.querySelector(".sucess-box").style.display = "block"
        }
    }
}







window.onload = function () {

	document.querySelector("#card-name").addEventListener("keyup",()=>{
	    CardFunctions.printUserNameInCard();
	});
	
	
	document.getElementById("card-number").addEventListener("keyup", (event) => {
	    CardFunctions.printCardNumberInCard(event);
	});
	
	document.getElementById("card-cvc").addEventListener("keyup", (event) => {
	    CardFunctions.printCardCvcInCard();
	});
	
	document.getElementById("card-date").addEventListener("keyup", (event) => {
	    CardFunctions.printCardDateInCard();
	});
	
	document.getElementById("card-year").addEventListener("keyup", (event) => {
	    CardFunctions.printCardDateInCard();
	});
	
	document.getElementById("card-year").addEventListener("keyup", (event) => {
	    CardFunctions.printCardDateInCard();
	});
	
	document.getElementById("submit-bnt").addEventListener("click", (event) => {
	    CardFunctions.checkIsValidCardData();
	});
}

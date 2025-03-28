function handler_button(evento){
    if (evento.target.tagName === "BUTTON" && index == 0){
        let number;
        number = evento.target.textContent
        console.log(number)
        

        if(screen.textContent ==='000'){
            screen.textContent = number

        }else{
            screen.textContent += number
        } 
    }

    screeControl = screen.innerText.length;
     if (screeControl >= 3){
        teclado.removeEventListener("click",handler_button);

     }

    console.log(screeControl);

}
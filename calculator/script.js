
let string = "";
const display = document.querySelector("input");
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {

        if(e.target.innerHTML === '='){
            const val = eval(string)
            string = val;
            display.value = string;
        }
        else if(e.target.innerHTML === 'AC'){
            string = "";
            display.value = string;
        }
        else if(e.target.innerHTML === 'DE'){
            const val = string.substring(string.length-1, -1);
            display.value = val;
            string = val;
            console.log(string);
        }
        else{
            string = string + e.target.innerHTML;
            display.value = string;
        }

    })
})
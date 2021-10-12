let btn= document.querySelectorAll('.btn');
let display = document.querySelector('.output');
let result =' ';
let output='';
btn.forEach((e)=>{
    e.addEventListener('click', (event) =>{
        if(Number(event.target.textContent) || event.target.textContent == '+' || event.target.textContent == '-' || 
        event.target.textContent == '*'|| event.target.textContent == '/' || event.target.textContent == '.' || event.target.textContent == '0') {
            display.textContent += event.target.value;
        }
        else if(event.target.value == '='){
            result = eval(display.textContent); 
            output = result;
            display.textContent = ' ';
            display.textContent = output;
            if( display.textContent == ''){
                alert('Enter Expression!')
            }     
        }
        else if(event.target.value == 'reset'){
            display.textContent = '';
        }else{
            let remaining_value = display.textContent;
            remaining_value =  remaining_value.substring(0, remaining_value.length -1)
            display.textContent =  remaining_value;
        }    
    })
})  
let string ="";
let button = document.querySelectorAll('.button');
Array.from(button).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML == 'RESET'){
            string =""
            document.querySelector('input').value =string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.slice(0,-1)
            document.querySelector('input').value =string;

        }
        else{
        console.log(e.target)
        string= string + e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})
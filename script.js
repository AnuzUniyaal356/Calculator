const calc = document.querySelector('.buttons')
const display= document.querySelector('.display')
let exp = '';
calc.addEventListener('click', (event)=>{
        event.preventDefault()
    
    if(event.target.id==='=')
    {
        const expression = document.querySelector('.display').value;
        let result= eval(expression)
        display.value=result

        // console.log(expression)
        // console.log(typeof expression)
    }

    else if(event.target.id==='C'){
        exp=''
        display.value=''
        // console.log('clicked')
    }

    
        
    

    else{

        let c=event.target.id
        // let exp='';
        exp=exp+c;

        if(event.target.id==='b')
            {
                c=''
                exp=exp.slice(0, -1)
                exp=exp.slice(0, -1)
                // display.value= exp

            }
        
        
        // exp=exp+event.target.id
        display.value= exp
        // let exp=event.target.id

        // console.log(exp)
    }
})
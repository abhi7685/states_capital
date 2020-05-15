
const inputText = document.querySelector('#inputtext')
inputText.addEventListener('input',()=>{
    fetch('state.json')
    .then((res) => {
        return res.json()
    })
    .then((data)=>{
        d= data.states
        let matches = d.filter(state =>{
            const regex = new RegExp(`^${inputText.value}`,'gi')
            return state.name.match(regex) || state.code.match(regex)
        })
        let display =""
        if (inputText.value== ""){
            display=""
        }
        else{
            matches.forEach((m) =>{
                display += 
                `<div class="d">Name: ${m.name} <br>
                    Code: ${m.code} <br>
                    Capital: ${m.capital} <br>
                    Type: ${m.type}
                </div> <br>`
    
            })

        }
        document.querySelector('.output').innerHTML= display
        //console.log(matches)
        })
        
     
    })


    

 
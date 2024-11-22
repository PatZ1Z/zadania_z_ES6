// const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) =>{

//     const {uppercase, reverse, removeSpecialChars} = processText
    
//     console.log("tak")
//    }

// processText("abrakadabra",uppercase = true,reverse=false, removeSpecialChars= false)

function processText(tekst,obiekt){
    const {uppercase, reverse, removeSpecialChars} = obiekt
    var letters = [...tekst]

    if(uppercase==true){
        tekst = tekst.toUpperCase()
        
    }
    else if(reverse==true){
        letters = letters.reverse()
        tekst = letters.toString()

        
    }
    else if(removeSpecialChars==true){
        tekst = tekst.replace(/[^\w\s]/g, '')
    }
    else{
        console.log(tekst)
    }
    
    console.log(tekst)



}

processText("!abrakadabra!",{uppercase: true,reverse: false, removeSpecialChars: true})
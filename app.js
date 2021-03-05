////solo tira dominios random siempre todos .com////
// function domain(){
//    let pronoun = ['the', 'our', 'my', 'their'];
//    let adj = ['great', 'fantastic', 'awesome', 'tiny', 'silly', 'dumb', 'marvelous', 'wonderful', 'crazy', 'delicious'];
//    let noun = ['website', 'dog', 'sibling', 'apple', 'phone', 'sushi-roll', 'hamburger', 'cat']

//    for(let i = 0; i<pronoun.length; i++){
//        for(let j = 0; j<adj.length; j++){
//            for(let k = 0; k<noun.length; k++){
//                let url = pronoun[i]+adj[j]+noun[k]
//                console.log(url+'.com')
//            }  
//        }
//    }
// }
// domain();


////tira con domains habituales////
// function domain(){
//     let pronoun = ['the', 'our', 'my', 'their'];
//     let adj = ['great', 'fantastic', 'awesome', 'tiny', 'silly', 'dumb', 'marvelous', 'wonderful', 'crazy', 'delicious'];
//     let noun = ['website', 'dog', 'sibling', 'apple', 'phone', 'sushi-roll', 'hamburger', 'cat']
//     let domainName = ['.com', '.io', '.cr', '.cl', '.net']

//     for(let i = 0; i<pronoun.length; i++){
//         for(let j = 0; j<adj.length; j++){
//             for(let k = 0; k<noun.length; k++){
//                 for(let m = 0; m<domainName.length; m++){
//                 let url = pronoun[i]+adj[j]+noun[k]+domainName[m]
//                 console.log(url)
//                 }
//             }  
//         }
//     }
// }
// domain();

function domain() {
    let pronoun = ['the', 'our', 'my', 'their'];
    let adj = ['great', 'fantastic', 'awesome', 'tiny', 'silly', 'dumb', 'marvelous', 'wonderful', 'crazy', 'delicious'];
    let noun = ['website', 'dog', 'sibling', 'apple', 'phone', 'sushi-roll', 'hamburger', 'cat']
    let domainName = ['com', 'io', 'cr', 'cl', 'net', 'er', 'te']

    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                for (let m = 0; m < domainName.length; m++) {
                    let string = pronoun[i] + adj[j] + noun[k];
                    if (string.includes(domainName[m])) {
                        let newString = string.replace(domainName[m], "")
                        let resultString = newString +'.'+domainName[m]
                        console.log(resultString)
                        } else {
                            let url = pronoun[i] + adj[j] + noun[k] +'.'+ domainName[m]
                            console.log(url)
                        }

                    }
                }
            }
        }
    }
    domain();



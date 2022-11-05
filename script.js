/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// CHALLENGE 1
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
let array = [[17,28,30],[99,16,8]]
let result = [0,0]

let function1 =(array)=> {
    if(array[0][0]>array[1][0]){
        result[0]++
    } else if(array[0][0]<array[1][0]) {
        result[1]++
    }
    if(array[0][1]>array[1][1]){
        result[0]++
    } else if(array[0][0]<array[1][0]) {
        result[1]++
    }
    if(array[0][2]>array[1][2]){
        result[0]++
        return result
    } else if(array[0][0]<array[1][0]) {
        result[1]++
        return result
    }
}
let restriction =(element)=>{
    return element >=1 && element <=100;
}
if(array.flat().every(restriction)){
    console.log(function1(array))
}else {
    console.log('Please insert all the numbers between 1 and 100 :)')
}
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// CHALLENGE 2
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

let text = "Érase una vez una niñita que lucía una hermosa capa" +
    "de color rojo. Como la niña la usaba muy a menudo, todos la" +
    "llamaban Caperucita Roja. Un día, la mamá de Caperucita Roja la" +
    "llamó y le dijo: —Abuelita no se siente muy bien, he horneado" +
    "unas galletitas y quiero que tú se las lleves. —Claro que sí" +
    "—respondió Caperucita Roja, poniéndose su capa y llenando su" +
    "canasta de galletas recién horneadas. Antes de salir, su mamá" +
    "le dijo: — Escúchame muy bien, quédate en el camino y nunca" +
    "hables con extraños. —Yo sé mamá —respondió Caperucita Roja y" +
    "salió inmediatamente hacia la casa de la abuelita.";

function countRepeatedWords(sentence) {
    let allWords = sentence.split(/[ ,.,—,?]/);
    let map = {};

    for (let i = 0; i < allWords.length; i++) {
        let currentWord = map[allWords[i]];
        let count = currentWord ? currentWord : 0;
        map[allWords[i]] = count + 1;
    }
    return map;
}

console.log(countRepeatedWords(text));
const alphabetize = a => {
  return a.toLowerCase().split("").sort().join("").trim();
  }

const  getSetsOfFiveAnagrams = () => {
  let obj = {}
  palavras.forEach((a)=>!obj.hasOwnProperty(alphabetize(a))?obj[alphabetize(a)]=[a]:obj[alphabetize(a)].push(a))
  let array = Object.values(obj).filter(value=>value.length>=5)
  let result = document.createElement('p');
  result.textContent = JSON.stringify(array)
  document.body.appendChild(result)
  return array
};

window.addEventListener('load',getSetsOfFiveAnagrams)

//Bonus 2

//Meu usário coloca a palavra eu eu aplico alphabetize

// button.addEventListener("click", function () {
//   let typedText = document.getElementById("input").value;
//   let myArray = getAnagramsOf(typedText);
//   let result = document.createElement('p');
//   result.textContent = myArray;
//   document.body.appendChild(result);
// });

//testo combinações de no mínimo duas letras e as letras restantes.

//Busca anagramas de 1 palavra
const  getAnagramsOf = typedText => {
  return palavras.filter((item)=>alphabetize(item)===alphabetize(typedText))
};

//Busca de duas palavras
const getAnagramsOfTwoWords = (a) => {
  /* Pega informação
  aplica um função para criar um array com combinação de duas palavras cada
  aplica o getAnagramsOf para cada uma das duas palavras */
}

const creatTwoWords = (word) => {
  let array = []
  //Define quantidade letras palavra 1
  for (let i = 2; i <= Math.trunc(word.length/2);i++){
    //Combinações possíveis


  }
}





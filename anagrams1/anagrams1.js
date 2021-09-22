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


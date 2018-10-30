function theBeatlesPlay(musicians, instruments){
  const stringsArray = []
  for (let i = 0, x = musicians.length; i < x; i++) {
    stringsArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return stringsArray;

}

function johnLennonFacts(facts){
   const exclamationArray = [];

  let i = 0
  while (i < facts.length) {
    exclamationArray.push(`${facts[i]}!!!`)
    i++
  }
  return exclamationArray
}

function iLoveTheBeatles(n){
  const iLoveArray = [];
  do {
    iLoveArray.unshift('I love the Beatles!')
  n++
}
  while (n < 15)

  return iLoveArray
}


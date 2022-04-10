//* About Functional Programming

// Fonction qui renvoie une chaîne représentant une tasse de thé vert
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
    const teaCups = [];
  
    for(let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
  };
  
  const tea4TeamFCC = getTea(4);
  console.log(tea4TeamFCC);
  // ['greenTea', 'greenTea', 'greenTea', 'greenTea']

//* Understand Functional Programming Terminology

const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea2(prepareGreenTea, 5); 
const tea4BlackTeamFCC = getTea2(prepareBlackTea, 3);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
// ['greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea']
// ['blackTea', 'blackTea', 'blackTea'] 


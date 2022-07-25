const gente = [
  { nombre: "Alejandro" },
  { nombre: "David" },
  { nombre: "Daniel" },
  { nombre: "Ricardo" },
];

const listaDeGente = gente.map((gente) => ({
  ...gente,
  ultimoNombre: "John",
}));
console.table(listaDeGente);

const gente2 = [
  { nombre: "Gabriel" },
  { nombre: "David" },
  { nombre: "Daniel" },
  { nombre: "Ricardo" },
];

for (let i = 0; i < gente2.length; i++) {
  const alguien = gente2[i];
  alguien.ultimoNombre = "Samuel";
}
console.table(gente2);

const people = [{ name: "Samuel" }, { name: "Dave" }, { name: "Lee" }];

const listOfPeople = people.map((person) => ({
  ...person,
  lastName: "Bob",
}));
console.table(listOfPeople);

const gens = [{ prenom: "Hugo" }, { prenom: "Max" }, { prenom: "Louis" }];

for (let i = 0; i < gens.length; i++) {
  const humain = gens[i];
  humain.dernierPrenom = "Clement";
}
console.table(gens);

/*

  Crie uma lista de pacientes

  Cada paciente dentro da lista deverá conter
  nome
  idade
  peso
  altura

 Escreva uma lista contendo o nome dos pacientes

*/

const pacientes = [{
  name: "Luiz",
  age: 20,
  weight: 100,
  height: 1.90
},
{
name: "Vinicius",
age: 24,
weight: 100,
height: 1.90
},
{
  name: "Carlos",
  age: 32,
  weight: 90,
  height: 1.50
},
{
name: "Vini",
age: 54,
weight: 60,
height: 1.70
},
]

let patientsNames = []

for(let paciente of pacientes) {
patientsNames.push(paciente.name)
}

alert(patientsNames)
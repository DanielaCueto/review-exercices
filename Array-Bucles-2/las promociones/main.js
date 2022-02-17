"use strict";

const promos = [
  {
    promo: "A",
    name: "Ada",
    students: [
      {
        id: "id-1",
        name: "Sofía",
        age: 20,
      },
      {
        id: "id-2",
        name: "María",
        age: 21,
      },
      {
        id: "id-3",
        name: "Lucía",
        age: 22,
      },
    ],
  },
  {
    promo: "B",
    name: "Borg",
    students: [
      {
        id: "id-4",
        name: "Julia",
        age: 23,
      },
      {
        id: "id-5",
        name: "Tania",
        age: 24,
      },
      {
        id: "id-6",
        name: "Alaia",
        age: 25,
      },
    ],
  },
  {
    promo: "C",
    name: "Clarke",
    students: [
      {
        id: "id-7",
        name: "Lidia",
        age: 26,
      },
      {
        id: "id-8",
        name: "Celia",
        age: 27,
      },
      {
        id: "id-9",
        name: "Nadia",
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ["id-2", "id-3", "id-5", "id-9"];

// TÚ CÓDIGO AQUÍ

//Ejercicio 4, 5, 6:
const result = document.querySelector(".js-result");

let html = '<ul style="list-style: none">';
for (let item of promos) {
  let promo = item.name;
  let students = item.students;
  console.log(promo, students);
  html += `<li><p>Nombre: ${promo}</p>`;

  /*for(let student of students){
        let oneStudent = student.name;
        console.log(oneStudent);
    }*/
  html += "<ul>";
  for (let alumna = 0; alumna < students.length; alumna++) {
    let {age, name, id} = students[alumna]; //aqui se crean tres variables que apuntan a las propiedades del objeto que me interesa obtener. 
    if(age % 2 === 1 ){
        continue; 
    }
    html += `
        <li id=${id} style="list-style: none">${name}, ${age} </li>
        </li>`;
  }

  html += "</ul>";
}
html += "</ul>";
result.innerHTML = html;

//Ejercicio 1, 2, 3: Pintar en la pantalla los NOMBRES, las LETRAS y NUMERO DE ALUMNAS de CADA promo

/*function paintingList (){
let html = '<ul>'; 
for(let item of promos){
    let namePromo = item.name; 
    let letra = item.promo;
    let students = item.students; 
    console.log(students);
    html += `<li style="list-style:none"><p>Nombre: ${namePromo}</p><p>Promo: ${letra}</p><p> Numero de alumnas: ${students.length}</p></li>`
}
html += '</ul>'
   return result.innerHTML = html
}*/

//paintingList();

//Ejercicio 4: Pintar en la pantalla los Nombres de las Promos y los NOMBRES Y EDADES DE LAS ALUMNAS.

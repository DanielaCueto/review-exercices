"use strict";

/*
1.Mostrar una frase que indique cuantas tareas hay.
2. Pintar todas las tareas en la pantalla. 
3. Tachar las ya realizadas.
4. Permitir marcar una tarea como 'completa' o 'incompleta'. 
*/

const list = document.querySelector(".list");

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

//Función para pintar la lista: 
function paintingList (){
  let listContent = "";
  for (let task of tasks) {
    const liTask = `<li ${
      task.completed ? 'class="linethrough"' : ""
    }'><input type='checkbox'  ${task.completed ? "checked" : ""} />${
      task.name
    }</li>`;
    listContent += liTask; //+= para que se agregen todos los items de la lista y no solo uno. 
  }
  list.innerHTML = listContent; // estoy agregando listContent a la list (ul)
  
}

function updateList() {
  
  paintingList(); //callback de la función que pinta los items de la lista

  //almaceno en una variable todos los items de la lista (todos los inputs)
  const allInputs = list.querySelectorAll("input");

  // Añado event listener a cada uno de los checkboxs 
  for (let i = 0; i < allInputs.length; i++) {
    let input = allInputs[i];  
    input.addEventListener("change", (event) => {
      const taskClicked = tasks[i]; //usamos el indice del input para saber a que task corresponde
      taskClicked.completed = !taskClicked.completed
     

      updateList();
    });
  }
  
}

 
updateList();



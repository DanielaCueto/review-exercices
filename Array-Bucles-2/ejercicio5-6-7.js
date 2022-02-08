function christmasTree(height) {
  let string = "";
  for (let i = 0; i < height; i++) {
    for (let j = 0; j <= i; j++) {
      string += "▲";
    }
    string += "\n";
  }
  return string;
}
console.log(christmasTree(10));

/*function square(height) {
  let string = "";
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height; j++) {
      string += `${i * height + (j + 1)} ` ;
    }
    string += "\n";
  }
  
  return string;
}

console.log(square(4));*/

//ejercicio 6:
function christmasTreeB2(height) {
  return "⭐\n" + christmasTree(height) + "|";
}
console.log(christmasTreeB2(6));




function completedTree(height) {
  let triangle = "";

  // esta constante tiene la anchura del arbol
  const width = height * 2 - 1;

  // esta función retorna el numero de triangulos por línea de acuerdo a su indice. formula se debe a que el número de triangulos en una línea es + 2 que la linea anterior porque tenemos que dibujar triangulos impares  
  const numTrianglesForRow = (i) => {
    return 1 + i * 2;
  };

  // Función que retorna la posición del primer triangulo y que se dibuje donde yo quiero. El restante se divide por dos para tener lo mismo a los dos lados 
  const positionFirstTriangleForRow = (i) => {
    return (width - numTrianglesForRow(i)) / 2;
  };
  // draw star
  const positionStar = positionFirstTriangleForRow(0)
  for (let j = 0; j < width; j++) {
    if (j >= positionStar && j < positionStar + 1) {
      triangle += "★";
    } else {
      triangle += " ";
    }
  }
  triangle += "\n";

  // draw triangles
  for (let i = 0; i < height; i++) {
    const firstTriangle = positionFirstTriangleForRow(i);
    const numTriangles = numTrianglesForRow(i);

    for (let j = 0; j < width; j++) {
      if (j >= firstTriangle && j < firstTriangle + numTriangles) {
        triangle += "▲";
      } else {
        triangle += " ";
      }
    }
    triangle += "\n";
  }
  // draw stick
  for (let j = 0; j < width; j++) {
    if (j >= positionStar && j < positionStar + 1) {
      triangle += "|";
    } else {
      triangle += " ";
    }
  }
  triangle += "\n";

  return triangle; 
}



console.log(completedTree(4));
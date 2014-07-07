/**
*Funcion que recorre los puntos y muestra su informacion
*/
function recorrerPuntos(desde,hasta){
  for(i = desde-1; i < hasta;i++){
    console.log("Punto " + (i+1) , "x = " + puntos[i].x, ", y = " + puntos[i].y);
  }
  return "Se recorrio desde el punto: "+ desde + ", hasta el punto: " + hasta;
}

/**
*Funcion que retorna la distancia euclidiana entre un punto dado y su centroide
*es la interpretacion de la siguiente formula
*distancia(p,c)= raiz cuadrada del punto en "x" menos el centroide en "x" al cuadrado
*mas el punto en y menos el centroide en y al cuadrado
*/

function calcularDist(p, c){

  var distancia;
  var a = Math.pow((p.x-c.x),2) + Math.pow((p.y-c.y),2);
  distancia = Math.sqrt(a);
  return distancia;
}

/*
*retorna la distancia euclidiana de los puntos dados al darle
*los centroides requeridos y la almacena en los puntos en las
*variables distEuC1 distEuC2 de cada punto
*/
function obtenerDist(puntos,centroides){

  for(var i = 0;i< DATOS_TOTALES;i++){

    for(var j = 0;j < centroides.length;j++){

      if(j === 0){

        puntos[i].distEuC1 = calcularDist(puntos[i],centroides[j]);
      }else{

        puntos[i].distEuC2 = calcularDist(puntos[i],centroides[j]);
      }
    }
  }
  return puntos;
}

/**************************************HARDCODE************************************************
*Deberia preguntar cuantos centroides quiere para asi parametrizar el numero de grupos
*requeridos pues por el momento solo acepta 2 grupos por que el ejemplo esta para 2 centroides
*esto esta pendiente deberia haber un arreglo de grupos

*Agrega un nuevo valor a la variable puntos para
*saber a que grupo de centroide pertenece
*/
function agrupamiento(puntos){

  for(i = 0; i < puntos.length;i++){

    for(j = 0; j < centroides.length; j++){

      //Si la distancia euclidiana al centroide 1 es menor a a la del centroide 2 el punto pertenece al grupo del primer centroide
      if(puntos[i].distEuC1 < puntos[i].distEuC2){

        puntos[i].grupo = 0;
      }else{

        puntos[i].grupo = 1;
      }

    }
  }
  return puntos;
}

/*
*Recalcula los centroides
*/
function recalcularCent(puntos,centroides){

  var sumaPuntosX = [0,0];
  var sumaPuntosY = [0,0];

  //Contadores para los elementos de cada grupo
  var elementosG = [0,0];

  //Suma de puntos de su valor en  x/ y pertenecientes al grupo del  centroide 1
  for(i = 0; i < puntos.length; i++){

    if(puntos[i].grupo === 0){

      sumaPuntosX[0] += puntos[i].x;
      sumaPuntosY[0] += puntos[i].y;
      elementosG[0]++;
    }else{
      sumaPuntosX[1] += puntos[i].x;
      sumaPuntosY[1] += puntos[i].y;
      elementosG[1]++;
    }
  }

  //Cambio de valores a los centroides en sus puntos x/y con el uso de la formula
  for(i = 0; i < centroides.length; i++){

    centroides[i].x = sumaPuntosX[i]/elementosG[i];
    centroides[i].y = sumaPuntosY[i]/elementosG[i];
  }

}

var puntos = [
    { "id": 1, "x" : 0, "y" : 0 },
    { "id": 2, "x" : 0, "y" : 0 },
    { "id": 3, "x" : 0, "y" : 0 },
    { "id": 4, "x" : 0, "y" : 0 },
    { "id": 5, "x" : 0, "y" : 0}
];

var centroides =  [
    { "id": 1, "x" : 0, "y" : 0 },
    { "id": 2, "x" : 0, "y" : 0 }
];

var DATOS_TOTALES = puntos.length;

function ejecutar(puntos, centroides){
    
    //datos
    var fuente = $('#plantilla-tabla-datos').html();
    var plantilla = Handlebars.compile(fuente);
    var html = plantilla(puntos);
    $('#tabla-datos').html(html);
    
    //centroides
    var fuente = $('#plantilla-tabla-centroides').html();
    var plantilla = Handlebars.compile(fuente);
    var html = plantilla(centroides);
    $('#tabla-centroides').html(html);
    
    
    //Calcular distancia Ecuclidiana
    obtenerDist(puntos,centroides);
    var fuente = $('#plantilla-tabla-distancia').html();
    var plantilla = Handlebars.compile(fuente);
    var html = plantilla(puntos);
    $('#tabla-distancia').html(html);
    
    //Agrupar los mas cercanos a los Centroides
    agrupamiento(puntos);
    var fuente = $('#plantilla-tabla-grupos').html();
    var plantilla = Handlebars.compile(fuente);
    var html = plantilla(puntos);
    $('#tabla-grupos').html(html);

    
    console.log("datos antes de recalcular");
    console.log(puntos);
    console.log(centroides);
    
    //Recalcular Centroides
    recalcularCent(puntos,centroides);

    console.log("datos antes de recalcular");
    console.log(puntos);
    console.log(centroides);
    var fuente = $('#plantilla-tabla-centroides-recalculados').html();
    var plantilla = Handlebars.compile(fuente);
    var html = plantilla(centroides);
    $('#tabla-centroides-recalculados').html(html);

    return centroides;
}


$(document).ready(function(){
     
    ejecutar(puntos,centroides);

    $("#ejecutar").click( function(e) {
	
	$('#tabla-datos').hide(3000);
	$('#tabla-centroides').hide(3000);
	$('#tabla-distancia').hide(3000);
	$('#tabla-centroides').hide(3000);
	$('#tabla-grupos').hide(3000);
	$('#tabla-centroides-recalculados').hide(3000);
	
	ejecutar(puntos,centroides);

	$('#tabla-datos').show(3000);
	$('#tabla-centroides').show(3000);
	$('#tabla-distancia').show(3000);
	$('#tabla-centroides').show(3000);
	$('#tabla-grupos').show(3000);
	$('#tabla-centroides-recalculados').show(3000);

    });

    $("td").on('change','.puntos',function(e){
	
	puntos[0].x = parseInt( $("#1-x").val() );
	puntos[1].x = parseInt( $("#2-x").val() );
	puntos[2].x = parseInt( $("#3-x").val() );
	puntos[3].x = parseInt( $("#4-x").val() );
	puntos[4].x = parseInt( $("#5-x").val() );

	puntos[0].y = parseInt( $("#1-y").val() );
	puntos[1].y = parseInt( $("#2-y").val() );
	puntos[2].y = parseInt( $("#3-y").val() );
	puntos[3].y = parseInt( $("#4-y").val() );
	puntos[4].y = parseInt( $("#5-y").val() );
	
    });

    $("td").on('change','.centroides',function(e){
	
	centroides[0].x = $("#c1-x").val();
	centroides[1].x = $("#c2-x").val();
	
	centroides[0].y = $("#c1-y").val();
	centroides[1].y = $("#c2-y").val();
    });
    
});

//service worker

if('serviceWorker' in navigator){
    console.log('puedes usar los serviceworker del navegador');

    navigator.serviceWorker.register('./sw.js')
                            .then(res => console.log('serviceworker cargando', res))
                            .catch(err => console.log('serviceworker no fount', err))

}

else{
    console.log("No puedes usar los servicios de navegador");
}


$(document).ready(function(){
    //console.log ("Hola Mundo");
    $("#menu a").click(function(e){
        //cancela un evento si este es cancelable
        e.preventDefault();
        //animate es un metodo de instancia crea una nueva animacion 
        $("html, body").animate({
            //Establece el numero de pixeles que el contenido de un elemento 
            //ha sido desplazado
            scrollTop: $($(this).attr('href')).offset().top 
       
        });
        
        return false;
    });
});
if('serviceWorker' in navigator){
    console.log('puedes usar los serviceworker del navegador');
        navigator.serviceWorker.register('./sw.js')
                               .then(res => console,log ('servicework cargado correctamente',res))
                               .catch(res => console,log('servicework no se a cargado el registro',err))
}else{
    console.log('No puedes usar los servicios de navegador');
}


$(document).ready(function(){
    console.log("hola mundo");
    $("#menu a").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
    });

});
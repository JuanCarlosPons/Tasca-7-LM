var datosJSON = ["datos/1.json"/* , "datos/2.json" */];
var limite = 0;

$(document).ready(function(){
    $(window).scrollTop(0);
});

$(window).scroll(function(){
    if($(window).scrollTop() + $(window).height() == $(document).height())
    {
        cargar();
    }
});

function cargar()
{
    if(limite < datosJSON.length)
    {
        $.getJSON(datosJSON[limite], function(jsonObject){
            var items = [];
            var str;
            $.each(jsonObject, function(i, noticia){
                str = "";
                str += "<h2>" + noticia.título + "</h2>";
                str += "<p>" + noticia.entradilla + "</p>";
                str += "<img class='img-responsive' src=\"" + noticia.imagemid +"\" />";
                str += "<p>" + noticia.datetime + "</p>";
				str += "</div>"

                items.push(str);
            });

            $( "<div/>", {
                "class": "news-list",
                html: items.join( "" )
            }).appendTo("#mas_noticias");
        });
        limite++;
    }
/*     if(limite >= datosJSON.length)
    {
        $("#cargar").off("click", cargarNoticias);
        $("#cargar").prop("disabled", true);
    } */
}

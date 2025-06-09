//a continuación voy a usar el API DOM de javascript
        console.log("Imprime un mensaje a la consola")

        const x = document.getElementById("app")
        console.log(x)
        
        
        //let contenido = ""

        //for (let i = 0; i < 10; i++) {
        //    contenido +=xy(i)
        //    x.innerHTML = contenido
        //}

        //Falle en el commit
        

        function imagen(id) {
        //const c = '<figure>'+
        //    '<img src="https://picsum.photos/id/'+id+'/200/200" alt="Jhon">'+
        //    '<figcaption>Jhon</figcaption>'+
        //    '</figure>'
        //    return c
        }

        // const Picture = function(){return "hola"};

        // Función anóni8ma de tipo ArrowFunction asignada a la constante picture
        const Picture = (id) => {
            return `<figure>
            <img src="https://picsum.photos/id/${id}/200/200" alt="Jhon">
            <figcaption>Jhon</figcaption>
            </figure>`}
        
        x.innerHTML = Picture(1) + Picture(2) + Picture(3)
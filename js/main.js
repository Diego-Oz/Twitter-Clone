// Funcion para el inicio de sesion
function log(){
    var user, clave, validate;

    user = document.getElementById("user").value;
    clave = document.getElementById("clave").value;
    validate = document.getElementById("validate");

    if(user == "Diego" && clave == "123"){
        window.location = "cuenta.html";
    }else{
        validate.innerHTML = "Usuario o Contraseña Incorrecta"
    }
}

// Funcion para realizar un tweet
function tweet(){
    const datos = [];

    var feed = document.getElementById("new-feed");
    var tweet = document.getElementById("input-tweet").value;

    datos.push(tweet);

    for (const dato of datos){    
        let datotext = document.createElement('div');
        datotext.innerHTML = `<div class="feed">
        <img class="cuentas-img" src="image/profile-pic-diego.png" alt="">
        <div class="feed-detalles">
            <div class="feed-tweet-detalles">
                <a href="" class="feed-name">
                    Diego Ortiz 
                    <span class="feed-cuenta">
                        @go_diego
                    </span>
                </a>
                <img src="image/more-detal.png" alt="">
            </div>
            <div class="feed-texto" id="official-tweet">
                `+ dato +`
            </div>
            <div class="feed-iconos">
                <img src="image/chat.png" alt="">
                <img src="image/repost.png" alt="">
                <img src="image/heart.png" alt="" id="like" onclick="like()">
                <img src="image/share.png" alt="">
            </div>
        </div>
    </div>`
        
    feed.prepend(datotext);
    }

    clean();
}

// Funcion para limpiar el input donde se realiza el tweet
function clean(){
    var tweet = document.getElementById("input-tweet");
    tweet.value = '';
}

// Funcion para dar like a una determinada publicacion
function like(){
    document.getElementById("like").src="image/heart-active.png";
}
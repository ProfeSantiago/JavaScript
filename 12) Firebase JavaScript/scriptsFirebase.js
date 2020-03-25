var firebaseConfig = {
    apiKey: "AIzaSyC7TKkgyDZIzX-VF_tiOKeVYxaPWoBNU94",
    authDomain: "fleter.firebaseapp.com",
    databaseURL: "https://fleter.firebaseio.com",
    projectId: "fleter",
    storageBucket: "fleter.appspot.com",
    messagingSenderId: "1009218608518",
    appId: "1:1009218608518:web:12e192463990b823"
  };

 firebase.initializeApp(firebaseConfig);
 var firestore = firebase.firestore();
 
function guardarViaje() {
    const nombreInicio    = document.querySelector("#inicio_txt").value;
    const nombreDestino    = document.querySelector("#fin_txt").value;

    firestore.collection("viaje").add({
        inicio:nombreInicio,
        destino: nombreDestino
    }).then(function(){
        console.log("Viaje Guardado");
        window.location.href='mapa.html';
    }).catch(function(error){
        console.log("Ocurrio un error: ", error);
    });
}//Fin guardarViaje -------------------------------

function mostrarViaje() {
    firestore.collection("viaje").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(${doc.data().inicio});
            console.log(${doc.data().destino});
        });
    });
}//Fin mostrarViaje -------------------------------

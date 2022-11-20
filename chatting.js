
const firebaseConfig = {
    apiKey: "AIzaSyDPkBOg-oz7EaDoo2V29AI1D9nMbu3ee3s",
  authDomain: "thechatappversion111232.firebaseapp.com",
  databaseURL: "https://thechatappversion111232-default-rtdb.firebaseio.com",
  projectId: "thechatappversion111232",
  storageBucket: "thechatappversion111232.appspot.com",
  messagingSenderId: "945382876528",
  appId: "1:945382876528:web:9476b717e738b0003e9bb5"
  };
  
   firebaseConfig.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;

    //End code
    });});}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
})

   localStorage.setItem("room_name", room_name)
   window.location = "chatting.html"


}

function redirectToRoomName(name) {
  localStorage.setItem("room_name", name);
  window.location = "chatting.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem(room_name); 
  window.location = "login.html";
}
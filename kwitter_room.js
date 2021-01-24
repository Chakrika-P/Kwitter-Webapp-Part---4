//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCS_IseRqOSNhMUBeKOA7LLWkuxJKipvp8",
      authDomain: "kwitter-webapp-project.firebaseapp.com",
      databaseURL: "https://kwitter-webapp-project-default-rtdb.firebaseio.com",
      projectId: "kwitter-webapp-project",
      storageBucket: "kwitter-webapp-project.appspot.com",
      messagingSenderId: "86175264853",
      appId: "1:86175264853:web:da93c3a38eb53a2cc1e4dc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + " !";

    function addRoom(){
     room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose: "adding room name"
     });
     localStorage.setItem("room_name", room_name);
     window.location= "kwitter_page.html";
    }

    
     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row="<div clas='room_name' id=" + Room_names + " onclick='redirectToRoomname(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
//YOUR FIREBASE LINKS
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

    user_name = localStorage.getItem("user_name"); 
    room_name = localStorage.getItem("room_name"); 

    function send() { 
    msg = document.getElementById("msg").value; 
    firebase.database().ref(room_name).push({ 
    name:user_name, 
    message:msg, 
    like:0 
  }); 
    document.getElementById("msg").value = ""; 
}
const firebaseConfig = {
  apiKey: "AIzaSyBlMO93l-n-vwoaLpNhED52QkNusOiAhW4",
  authDomain: "lets-chat-web-b6b76.firebaseapp.com",
  databaseURL: "https://lets-chat-web-b6b76-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-b6b76",
  storageBucket: "lets-chat-web-b6b76.appspot.com",
  messagingSenderId: "1027291392342",
  appId: "1:1027291392342:web:2d01642c730f756c264ef7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitterpage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.getItem("room_name", name);
    window.location.replace = "kwitterpage.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

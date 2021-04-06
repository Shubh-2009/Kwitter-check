// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDXpUh0FNz8RIjCz9xi6r_EFLrQeYwjlqM",
      authDomain: "classtest-6845d.firebaseapp.com",
      projectId: "classtest-6845d",
      storageBucket: "classtest-6845d.appspot.com",
      messagingSenderId: "979322517310",
      appId: "1:979322517310:web:ff2c5f4219571b2e111e6f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome: "+ user_name+"!" ;
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectTORoomName(this.id)'>#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectTORoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

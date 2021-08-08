var firebaseConfig = {
    apiKey: "AIzaSyDs1uUAbFAwOGj7_hz7RmbZ9XkjMJvyAsY",
    authDomain: "signin-signup-f89c4.firebaseapp.com",
    databaseURL: "https://signin-signup-f89c4-default-rtdb.firebaseio.com",
    projectId: "signin-signup-f89c4",
    storageBucket: "signin-signup-f89c4.appspot.com",
    messagingSenderId: "180324868308",
    appId: "1:180324868308:web:24edfaf72e08ed3ca21b41",
    measurementId: "G-BC9V52R3K3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var datab=firebase.database().ref('data');
  function UserRegister(){
    var uname=document.getElementById("uname").value;
    var email=document.getElementById("email_field_R").value;
    var password=document.getElementById("password_field_R").value;
    firebase.auth().createUserWithEmailamdPassword(email,password).then(function(){
    })catch(function(error){
      var errorcode=error.code;
      var errormsg=error.message;
    });
  }

  const auth=firebase.auth();
  function SignIn(){
    var email=document.getElementById("email_field_L").value;
    var password=document.getElementById("password_field_L").value;
    const promise = auth.signInWithEmailandPassword(email,password);
    promise.catch(e=>alert(e.msg));
    window.open("https://www.google.com"."_self");
  }
  document.getElementById("form").addEventListener('submit'.(e)=>{
    e.preventDefault();
    var userInfo=datab.push();
    userInfo.set({
      name: getId('fname'),
      email: getId('eemail'),
      password:getId('Ipassword')
    });
    alert("SucessFully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
  });
  function getId(id){
    return document.getElementById(id).value;
  }

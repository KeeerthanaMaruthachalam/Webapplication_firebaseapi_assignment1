// Initialize Firebase (ADD YOUR OWN DATA)


var config = {
    apiKey: "AIzaSyBb6eQABI1pceKSzgFcy1EjtIbNHT299ds",
    authDomain: "login-37527.firebaseapp.com",
    databaseURL: "https://login-37527.firebaseio.com",
    
    projectId: "login-37527",
    storageBucket: "login-37527.appspot.com",
    messagingSenderId: "283021011115"
  };
  firebase.initializeApp(config);
  // Reference messages collection
  var messagesRef = firebase.database().ref('message');
  
  // Listen for form submit
  document.getElementById('contactForm1').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
   
    var contact = getInputVal('phone');
    var email = getInputVal('email');
    var degree= getInputVal('degree');
    var experience = getInputVal('experience');
    var role = getInputVal('role');
   var uploadfile = getInputVal('uploadfile');
  
    // Save message
    saveMessage(name,  contact,  email, degree,experience, role,uploadfile);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm1').reset();
   
   
  
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name,  contact,  email,degree,experience,role,uploadfile){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      
        contact:contact,
        email:email,
      degree:degree,
        experience:experience,
      role:role,
      uploadfile:uploadfile
    });
  }
  
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
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var firstName = getInputVal('fname');
    var lastName = getInputVal('lname');
    var contact = getInputVal('phone');
    var email = getInputVal('email');
    var company = getInputVal('company');
    var country = getInputVal('country');
    var interestin = getInputVal('interest');
    var job_function = getInputVal('jobfunction');
  
    // Save message
    saveMessage(firstName, lastName, contact,  email, company, country, interestin, job_function);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
   
    setTimeout(function() {
      window.location.href = "https://firebasestorage.googleapis.com/v0/b/login-37527.appspot.com/o/Acheron_Product%20Overview%20Flyer_MPM.pdf?alt=media&token=000a1911-966d-48ce-8b70-ce331fe93370";
    }, 3000);
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(firstName, lastName, contact,  email, company, country, interestin, job_function){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      firstName: firstName,
      lastName:lastName,
      contact:contact,
      email:email,
      company:company,
      country:country,
      interestin:interestin,
      job_function:job_function
    });
  }
  
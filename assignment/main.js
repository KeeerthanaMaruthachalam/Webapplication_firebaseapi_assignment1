var mainApp = {};

(function(){
    var firebase = app_firebase;
var uid = null;
    firebase.auth().onIdTokenChanged(function(user) {
        if (user) {
          // User is signed in or token was refreshed.
          uid = user.uid;
        }else{
            //redirect to login page
            uid = null;
            window.location.replace("login.html");
        }
      });

    function logOut(){
        firebase.auth().signOut();
    }

    mainApp.logOut = logOut;
})()


$("#menu").hover(function() {
    $("#sub_menu").show();
}, function() {
    $("#sub_menu").hide();
});
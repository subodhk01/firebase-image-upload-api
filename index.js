const firebaseConfig = {
  apiKey: "AIzaSyAkdfqj13ozWerQi0N6DFDEmAoc92laxvk",
  authDomain: "fir-1-d4538.firebaseapp.com",
  databaseURL: "https://fir-1-d4538.firebaseio.com",
  projectId: "fir-1-d4538",
  storageBucket: "fir-1-d4538.appspot.com",
  messagingSenderId: "570404350925",
  appId: "1:570404350925:web:60733096e4dff6d0193284",
  measurementId: "G-BFECV08EPT"
};
firebase.initializeApp(firebaseConfig);

var filebut = document.getElementById("file-input");

filebut.addEventListener('change', function(e){
  var file = e.target.files[0];
  var storageRef = firebase.storage().ref('images/' + file.name);
  var task = storageRef.put(file);
  storageRef.getDownloadURL().then(function(url){
    console.log(url);
  });
  
});

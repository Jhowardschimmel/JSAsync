//Callbacks
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

//Sequence Control
//Sometimes you would like to have better control over when to execute a function.

//Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

//Asynchrounous Javascript
//Functions running in parallel with other functions are called asynchronous
// A good example is JavaScript setTimeout()

//Waiting for a Timeout

// setTimeout(sayILoveYou, 3000);

// function sayILoveYou() {
//   document.getElementById("set-timeout").innerHTML = "I love You !!";
// }

//with Promise

let myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () { myResolve("I love you !!!"); }, 3000)
})

myPromise.then(function (value) {
  document.getElementById("set-timeout").innerHTML = value;
})


//Waiting for Intervals
//When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:

// setInterval(lameClock, 1000);

// function lameClock() {
//   let d = new Date();
//   document.getElementById("set-interval").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
// }

//Waiting for Files
// If you create a function to load an external resource (like a script or a file), you cannot use the content before it is fully loaded.
// This is the perfect time to use a callback.
// This example loads a HTML file (mycar.html), and displays the HTML file in a web page, after the file is fully loaded:

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function getFile(myCallback) {
//   let req = new XMLHttpRequest();
//   console.log(req)
//   req.open('GET', "http://127.0.0.1:8083");
//   req.setRequestHeader("Access-Control-Allow-Origin", "*")
//   req.onload = function() {
//     if (req.status == 200) {
//       myCallback(this.responseText);
//     } else {
//       myCallback("Error: " + req.status);
//     }
//   }
//   req.send();
// }

// getFile(myDisplayer);

// let myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)

  // myResolve(); // when successful
  // myReject(); // when error
// });
// "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
  // function(value) {/* code if successful */},
  // function(error) { /* code if some error */ }
// );

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//   let x = 0;

  //The producing code (this may take some time)

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);}
// );


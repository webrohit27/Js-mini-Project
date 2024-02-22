// Promises 
// The Promise object represents the eventual completion (or failure) of an asynchronous  operation and its resulting value.

 /*promises has three states.
 1. Pending 
 2. Fulfilled
 3. rejected  */

 const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Async Task is completed');
        resolve()
    }, 1000)
 });

 promiseOne.then(function(){
    console.log('Promise Comsumed');
 });



 new Promise (function(resolve, reject){
 setTimeout(function() {
 console.log('Async task 2');
 resolve()
 }, 1000)

 }).then(function(){
   console.log('Async 2 resolved');
 })

 const promiseThree = new Promise(function(resolve, reject){
   setTimeout(function(){
      resolve({username:'DJ tillu', email:'djruby@gmail.com'})
   }, 1000)
 })

 promiseThree.then(function(user){
console.log(user);
 })
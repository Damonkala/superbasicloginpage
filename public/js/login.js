'use strict';

$(document).ready(init);

function init() {
  $('#toRegister').click(toRegister);
  $('#login').click(login);
}

function toRegister(){
  window.location.replace("/register");
}

function login(){
    var user = {};
    user.username = $('#username').val();
    user.password = $('#password').val();
    $.post('/users/login', user)
    .done(function(data){
      alert("You've logged in, " + data.username + "!");
      // window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      window.location.replace("/yourpage")
    })
    .fail(function(err){
      alert("Wrong username or password");
    })
}

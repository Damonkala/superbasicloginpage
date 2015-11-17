'use strict';

$(document).ready(init);

function init() {
  $('#register').click(register);
  $('#toLogin').click(toLogin);
}

function toLogin(){
  window.location.replace("/login");
}

function register(){
  if($('#password1').val() !== $('#password2').val()){
    alert("Your passwords don't match...")
} else {
  if($('#password1').val() === ""){
    alert("You didn't even put in a password!")
  } else{
    var user = {};
    user.username = $('#username').val();
    user.password = $('#password1').val();
    $.post('/users/register', user)
    .done(function(data){
      alert("Welcome, " + data.username + "!")
      window.location.replace("/login");

    })
    .fail(function(err){
      alert(err.responseText);
    })
  }

  }
}

'use strict';

$(document).ready(init);

function init() {

  $('#register').click(toRegister);
  $('#login').click(toLogin);
  $('#logout').click(logout);
}

function toRegister(){
  window.location.replace("/register");
}
function toLogin(){
  window.location.replace("/login");
}
function logout() {
  $.post('/users/logout')
  .done(function(){
    window.location.replace('/');
  });
}

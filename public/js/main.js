'use strict';

$(document).ready(init);

function init() {

  $('#register').click(toRegister);
  $('#login').click(toLogin);
  $('#logout').click(logout);
  $('#home').click(home);
}

function toRegister(){
  window.location.replace("/register");
}
function toLogin(){
  window.location.replace("/login");
}
function home(){
  window.location.replace("/yourpage");
}
function logout() {
  $.post('/users/logout')
  .done(function(){
    window.location.replace('/');
  });
}

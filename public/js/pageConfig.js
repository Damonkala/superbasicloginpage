'use strict';

$(document).ready(init);

function init() {


  $('#logout').click(logout);
  $('#changeInfo').click(changeInfo);
  $('#saveChanges').click(saveChanges);

}

function changeInfo(){
  $('#saveChanges').attr('hidden', false);
  $('#bio').attr('contentEditable', true);
}

function saveChanges() {
  var username = $('#title').text();
    $('#bio').attr('contentEditable', false);
    var bio = $('#bio').text()
    $.ajax({
  url: '/users/update',
  type: 'PUT',
  data: {
    name: username,
    bio: bio
  },
  success: function(result) {
      console.log('edited')
  }
})

function logout() {
  $.post('/users/logout')
  .done(function(){
    window.location.replace('/');
  });
}
}

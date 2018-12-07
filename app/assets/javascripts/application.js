// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


$(document).ready(() => {
  // these functions allow us to animate the login sign up window slide on the home page. Each css class have transformation keys inside of them and switching between the two gives us the seamless 
  $("#signup").click(() => {
    $(".message__login").css("transform", "translateX(100%)");
    if ($(".message__login").hasClass("login__login")) {
      $(".message__login").removeClass("login__login");
    }
    $(".message__login").addClass("signup__login");
  });

  $("#login").click(() => {
    $(".message__login").css("transform", "translateX(0)");
    if ($(".message__login").hasClass("login__login")) {
      $(".message__login").removeClass("signup__login");
    }
    $(".message__login").addClass("login__login");
  });

});

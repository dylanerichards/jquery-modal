$(document).ready(function() {
  $(".close-modal").click(function() {
    hideModal();
  });

  $(".open-modal").click(function() {
    showModal();
  });
});

var showModal = function() {
  $(".message").empty();
  $(".panel").show();
};

var hideModal = function() {
  $(".panel").hide();
  $(".message").append("Your appointment has been made!");
};

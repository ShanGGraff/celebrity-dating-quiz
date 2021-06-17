//Business Logic
  
//UserInterface Logic
$(document).ready(function () {
  $("form#dating").submit(function(event) {
    const hairColor = $("input#hairColor").val().toUpperCase();
    console.log(hairColor);
    const footFetish = $("input#footFetish").val().toUpperCase();
    console.log(footFetish);

    // if (hairColor === "RED" || "GREEN" || "PURPLE" || "BLACK") {
    //   alert("You're all good");
    // } else {
    //   alert("Please Enter Red, Green, Purple or Black");
    // }

    if (hairColor === "RED" || "GREEN" || "PURPLE" || "BLACK" && footFetish === "YES") {
      alert("You like Quintin Tarantino");
    } else {
      alert("You may like Ron Howard");
    }
    // $("#output").text(result);
    event.preventDefault();
  });
});
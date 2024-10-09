btn.addEventListener("click", function () {
        var password = document.querySelector(".userPassword").value,
        confirmPassword = document.querySelector(".confirmPassword").value;
      
        if (password == "") {
          alert("field cannot be empty.");
        } else if (password != confirmPassword) {
          alert("Password didn't match! try again.");
          return false;
        } else if (password == confirmPassword) {
          alert("Password matched.");
        }
        return true;    
});

// const inputbtn =document.querySelector(".age_input");
// const calculatbtn = document.querySelector(".cal");
// const ageresult = document.querySelector(".age_result");
// calculatbtn.addEventListener("click",() => {
//     if(inputbtn.value === " "){
//         alert("please enter your age");
//     }
// });




    function calculateage(){
      // Get the input value (birthdate)
      let birthdateInput = document.getElementById("dob").value;

      // Validate if a birthdate is selected
      if (!birthdateInput) {
        alert("Please select your birthdate in Input field.");
        return;
      }

      // Convert the birthdate string to a Date object
      let birthdate = new Date(birthdateInput);

      // Get the current date
      let currentDate = new Date();

      // Calculate the age
      let age = currentDate.getFullYear() - birthdate.getFullYear();

      // Check if the birthday has occurred this year
      if (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
        age--;
      }

      // Display the result
      document.getElementById("age_result").innerHTML = "You are " + age + " years old.";
    }




function validateForm() {
    //First Name
    let fN = document.forms["myForm"]["fname"].value;
    if (fN == "" ) {
      alert("First Name must be filled out!");
      return false;
    }
    if (fN.length > 20) {
    alert("First Name cannot be more than 20 characters!");
    return false; 
    }
  
    //Last Name
    let lN = document.forms["myForm"]["lname"].value;
    if (lN == "") {
        alert("Last Name must be filled out!");
        return false;
    }
      if (lN.length > 50) {
      alert("Last Name cannot be more than 50 characters!");
      return false;
  
    }

    //Email
    let e = document.forms["myForm"]["email"].value;
    if (e == ""){
        alert("Email must be filled out!")
        return false;
    }

    //Phone
    let p = document.forms["myForm"]["phone"].value;
    if (p == "") {
        alert("Phone must be filled out!");
        return false;
    }
    if (p.length > 10){
        alert("Phone No. cannot be more than 10 digits!")
        return false;
    }

    //Username
    let u = document.forms["myForm"]["username"].value;
    if (u == "") {
      alert("Username must be filled out!");
      return false;
    }
    if (u.length > 12) {
    alert("Username cannot be more than 12 characters!");
    return false; 
    }

    //Password
    let pass = document.forms["myForm"]["password"].value;
    if (pass == "") {
      alert("Password must be filled out!");
      return false;
    }
    if (pass.length > 12) {
    alert("Password cannot be more than 12 characters!");
    return false; 
    }

    //Address
    let add = document.forms["myForm"]["address"].value;
    if (add == "") {
      alert("Address must be filled out!");
      return false;
    }

    //City
    let city = document.forms["myForm"]["city"].value;
    if (city == "") {
      alert("City must be filled out!");
      return false;
    }

    //State
    let state = document.forms["myForm"]["state"].value;
    if (state == "") {
      alert("State must be selected!");
      return false;
    }

    //Country
    let country = document.forms["myForm"]["country"].value;
    if (country == "") {
      alert("Country must be selected!");
      return false;
    }

    //Zip
    let zip = document.forms["myForm"]["zip"].value;
    if (zip == "") {
      alert("Zip Code must be filled out!");
      return false;
    }
    if (country == "United States" && zip.length > 5) {
        alert("Zip Code must be 5 characters!");
        return false;
    }
}
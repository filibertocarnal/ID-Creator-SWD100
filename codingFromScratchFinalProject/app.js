function idCard() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var address = document.getElementById('addressId').value;
  
 document.getElementById('postFullName').innerHTML = firstName + " " + lastName;
  
var age = parseInt(document.getElementById('ageId').value);
  
var phoneNumber =
parseInt(document.getElementById('phoneNumber').value);
 
document.getElementById('postPhoneNumber').innerHTML = "Phone Number: " + phoneNumber;
document.getElementById('postAge').innerHTML = "Age: " + age;
document.getElementById('postAddress').innerHTML = "Address: " + address;
}

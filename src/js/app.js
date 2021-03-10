function myFunction() {
  var checkbox = document.getElementById('switch')
  var yearly1 = document.getElementById('yearly1')
  var yearly2 = document.getElementById('yearly2')
  var yearly3 = document.getElementById('yearly3')
  var monthly1 = document.getElementById('monthly1')
  var monthly2 = document.getElementById('monthly2')
  var monthly3 = document.getElementById('monthly3')
  if(checkbox.checked === true) {
    yearly1.style.display = "flex"
    yearly2.style.display = "flex"
    yearly3.style.display = "flex"

  } else {
    yearly1.style.display = "none"
    yearly2.style.display = "none"
    yearly3.style.display = "none"
  }
  if (checkbox.checked === false) {
    monthly1.style.display = "flex"
    monthly2.style.display = "flex"
    monthly3.style.display = "flex"
  } else {
    monthly1.style.display = "none"
    monthly2.style.display = "none"
    monthly3.style.display = "none"
  }
}

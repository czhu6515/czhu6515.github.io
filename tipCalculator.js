//tip calculator function
function calculateTip() {
  let billAmt = document.getElementById("billAmt").value
  let serviceQual = document.getElementById("serviceQual").value
  let numOfPeople = document.getElementById("peopleAmt").value

  //checks if values entered are valid
  if (billAmt === "" || serviceQual === 0) {
    alert ("Please enter values")
    return
  }


  //checks to see if number of people entered is < or = 1
  if (numOfPeople === ""){
    document.getElementById("each").style.display = "none"
    alert("Please enter number of people who are sharing the bill")
    return
  } else if (numOfPeople <= 1) {
    document.getElementById("each").style.display = "none"
  } else {
    document.getElementById("each").style.display = "block"
  }

  //calculates tip
  let total = (billAmt * serviceQual) / numOfPeople
  total = Math.round(total* 100)/100
  total = total.toFixed(2)

  //displays tip
  document.getElementById("totalTip").style.display = "block"
  document.getElementById("tip").innerHTML = total
}

//hides tip and each when page is first loaded
document.getElementById("totalTip").style.display = "none"
document.getElementById("each").style.display = "none"

//click to call calculator function
document.getElementById("calculate").onclick = function() {calculateTip()}

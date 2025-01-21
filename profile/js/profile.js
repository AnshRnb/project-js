//check user login or not
//all global variable declaration:::::

let userInfo = "";
let  cities = ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"]

let hotelSearchForm = document.forms["hotel-search"];
let locationElement = hotelSearchForm.elements["location"];
let chkin = hotelSearchForm.elements["chkin"];
let chkout = hotelSearchForm.elements["chkout"];
let rooms = hotelSearchForm.elements["rooms"];
let navBrand = document.querySelector(".navbar-brand");
let logoutBtn = document.querySelector(".logout-btn")

//check user is login or not
if (sessionStorage.getItem("__au__") == null)
{
    window.location = "../index.html";
}
userInfo = JSON.parse(sessionStorage.getItem("__au__"));
// console.log(userInfo)


//cities
var options = '';

for (var i = 0; i < cities.length; i++) {
  options += '<option value="' + cities[i] + '" />';
  
}

document.getElementById('location-data-list').innerHTML = options;
  
navBrand.innerHTML = userInfo.hotelname



//logout coding:

logoutBtn.onclick = () => {
   logoutBtn.innerHTML = "please wait...."
   setTimeout(() => {
       logoutBtn.innerHTML = "Logout";
       sessionStorage.removeItem("__au__");   
       window.location = "../index.html"    
   },3000)
}

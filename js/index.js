// swal("Good job", "Resgistration success", "success")

//all global variable declaration

let allUserInfo = [];
let regForm = document.querySelector(".reg-form"); //resgistration-form
let loginForm = document.querySelector(".login-form"); //loginform
let allInput = regForm.querySelectorAll("input"); //allinputs
let allLoginInput = loginForm.querySelectorAll("input"); //allinputs
let regBtn = regForm.querySelector("button");
let loginBtn = loginForm.querySelector("button");
// console.log(allLoginInput)

//displaying the text string which is in local storage...
// let userInfo = localStorage.getItem("allUserInfo");
//getting data from localstrorage
if (localStorage.getItem("allUserInfo") != null) {
  //parse  -> stringyfy ko convert karta hai object me
  allUserInfo = JSON.parse(localStorage.getItem("allUserInfo"));
}
console.log(allUserInfo);

//regestration coding::::
//event ko reveive karan -> e
regForm.onsubmit = (e) => {
  e.preventDefault();

  // let checkEmail = allUserInfo.find((data) => data.email == allInput[4].value)
  let checkEmail = allUserInfo.find((data) => {
    return data.email == allInput[4].value;
  });

  // console.log(checkEmail)

  if (checkEmail == undefined) {
    let data = {};
    for (let el of allInput) {
      // console.log(el)

      let key = el.name;
      // console.log(key)
      data[key] = el.value;
    }

    // console.log(data)

    //if we are pushing....to....:::: [] array  [{}, {}, {}]

    regBtn.innerHTML = "processing.....";
    setTimeout(() => {
      regBtn.innerHTML = "Resgister";

      allUserInfo.push(data);
      localStorage.setItem("allUserInfo", JSON.stringify(allUserInfo));
      swal("Good job", "Registration success", "success");
    }, 2000);

    // console.log(allUserInfo)
    // alert()
  } else {
    swal("Failed !", "Email already register !", "success");
  }

  // ----------------------------

  //data ko object bana  nikalte hai:::   input field reading the data
  // let data = {
  //     fullname: allInput[0].value,
  //     hotelname: allInput[1].value,
  //     totalRooms: allInput[2].value,
  //     mobile: allInput[3].value,
  //     email: allInput[4].value,
  //     password: allInput[5].value,
  // }

  // console.log(data)
};

// loginForm coding

loginForm.onsubmit = (e) => {
  e.preventDefault();
  // alert(allLoginInput[0].value)

  if (allLoginInput[0].value != "") {


    if (allLoginInput[1].value != "") {
      //check email in your database
      let checkEmail = allUserInfo.find((data) => {
        return data.email == allLoginInput[0].value;
      });


      // console.log(checkEmail)
      if (checkEmail != undefined) {
        //match password
        // console.log(checkEmail)
        if (checkEmail.password == allLoginInput[1].value) {
          // alert("Login success")
          loginBtn.innerHTML = "Please wait....";
          setTimeout(() => {
            loginBtn.innerHTML = "Login";

            window.location = "profile/profile.html";
            checkEmail.password = null;
            sessionStorage.setItem("__au__", JSON.stringify(checkEmail));
          }, 2000);



        } else
        
        {
          swal("Warning", "wrong password..!", "warning");
        }
      } else {
        swal("Warning", "Email is wrong..!", "warning");
      }
    } else {
      swal("Warning", "Password is empty..!", "warning");
    }
  } else {
    swal("Warning", "Email is empty..!", "warning");
  }
};

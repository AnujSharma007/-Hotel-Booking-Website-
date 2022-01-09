setHeaderTemplate(); 
setFooterTemplate();
function setFooterTemplate(){
  var footerTemplate = `    <div class="fot">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#example-modal-signup" id="sign-up-button">
    Contact Us
  </button>
  <div class="modal fade" id="example-modal-signup" tabindex="-1" aria-labelledby="example-modal-label"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModelLabel">Get In Touch</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <p>Thank you for reaching out!!!</p>
              <p>Please enter your email and we will get back to you</p>
            </div>
            <div class="mb-3">
              <label for="example-input-email-1" class="form-label">Enter your Email address</label>
              <input type="email" class="form-control" id="example-input-email-1" placeholder="Enter Email">
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="modal-footer">

        </div>
      </div>
    </div>
  </div>    
 <div class="pf">© 2020 ROOM SERVICE PVT.LTD.</div>
 <div class="divfoot"><a href="https://www.facebook.com" target="_blank"><img src="assests/images/facebook.png" alt="facebook" height="20" width="22"></a>
 <a href="https://www.instagram.com" target="_blank"><img src="assests/images/instagram.png" alt="instagram" height="20" width="22"></a>
 <a href="https://twitter.com" target="_blank"><img src="assests/images/twitter.png" alt="twitter" height="20" width="22"></a></div></div>`;
  
  document.getElementById('footer').innerHTML += footerTemplate; 
}


function setHeaderTemplate(){
  let headerTemplate = `<img src="file:///D:/Project%20Website/Hotel_Booking_Website_Starter_Code/assests/images/logo.png" alt="logo" height="60" width="60"/>
            
     <button type="button" onclick="handleLogin()" class="btn btn-light" data-toggle="modal" data-target="#example-modal" id="sign-in-button">
         LOGIN
     </button>`;

  document.getElementById('header').innerHTML += headerTemplate;
}


let loginUser = () => {
  localStorage.setItem("storedUserName", "admin");
  localStorage.setItem("storedPassword", "admin");
  localStorage.setItem("isUserLoggedIn", "false");

  console.log("Login button clicked");
  let enteredUsername = document.getElementById("example-input-email").value;
  let enteredPassword = document.getElementById("example-input-password").value;

  let storedUserName = localStorage.getItem("storedUserName");
  let storedPassword = localStorage.getItem("storedPassword");

  if (enteredUsername === storedUserName && enteredPassword == storedPassword) {
    localStorage.setItem("isUserLoggedIn", "true");
    alert("Logged In Successfully");
    location.reload();
  } else {
    alert("Invalid Credentials, Please try again!");
  }
  clearLoginInputFields();
};

let clearLoginInputFields = () => {
  document.getElementById("example-input-email").value = "";
  document.getElementById("example-input-password").value = "";
};

let handleLogin = () => {
  if (localStorage.getItem("isUserLoggedIn") === "true") {
    localStorage.setItem("isUserLoggedIn", "false");
    alert("Logged Out successfully, Please visit again!");
    location.reload();
  }
};

let verifyLoginStatus = () => {
  let isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
  let loginBtn = document.getElementById("sign-in-button");
  if (!isUserLoggedIn || isUserLoggedIn === "false") {
    localStorage.clear();
    loginBtn.innerText = "LOGIN";
    loginBtn.dataset.target = "#example-modal";
  } else if (isUserLoggedIn === "true") {
    loginBtn.dataset.target = "";
    loginBtn.innerText = "LOGOUT";
  }
};

verifyLoginStatus();

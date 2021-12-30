setHeaderTemplate();
setFooterTemplate();
 function setFooterTemplate(){
     var footerTemplate = `<div class="fot">
     <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#example-modal-signup" id="sign-up-button">
       Contact Us
     </button>   
    <div class="pf">©2020 ROOM SERVICE PVT.LTD.</div>
    <div class="divfoot"><a href="https://www.facebook.com" target="_blank"><img src="assests/images/facebook.png" alt="facebook" height="20" width="22"></a>
    <a href="https://www.instagram.com" target="_blank"><img src="assests/images/instagram.png" alt="instagram" height="20" width="22"></a>
    <a href="https://twitter.com" target="_blank"><img src="assests/images/twitter.png" alt="twitter" height="20" width="22"></a></div></div>`
   ;

   document.getElementById("footer").innerHTML += footerTemplate;
 }
 

 function setHeaderTemplate(){
     let headerTemplate =`<img src="D:\Project Website\Hotel_Booking_Website_Starter_Code\assests\images\logo.png" alt="logo" height="60" width="60"/>
            
     <button type="button"  class="btn btn-light" data-toggle="modal" data-target="#example-modal" id="sign-in-button">
         LOGIN
     </button>`;
     
     document.getElementById('header').innerHTML += headerTemplate;
 }
 
function paymentAlert(){
     if(document.getElementById('sign-in-button').innerText=="LOGOUT"){
     var pay = document.getElementById('payingBtn');
    alert("Hi your Booking is Successfully accepted!!!");
 }else{
     document.getElementById('payingBtn').setAttribute("disabled",true);
     alert('Please get login to make the payments');
 }
}
 
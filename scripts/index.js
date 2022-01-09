function viewmore(){
    var myobj1=  document.getElementById("sign-in-button1");
    var myobj2=  document.getElementById("mdiv");
    
        
    if(myobj1.innerText==="VIEW MORE"){
    document.getElementById("sign-in-button1").textContent = "VIEW LESS";
    myobj2.innerHTML += `<section class="maincontainer2">      
    <div class="cardd">   
        <a href="list.html" target="_self"><img id="hotelcard" src="https://media-cdn.tripadvisor.com/media/photo-s/15/4d/46/b8/chennai-madras.jpg" alt="chennai-madras"></a>
        <a href="list.html" target="_self"><div class="overlay1">
        <div class="alpha1">Chennai</div>
    </div></a>
    </div>
      
    <div class="cardd">
        <a href="list.html" target="_self"><img id="hotelcard" src="https://media-cdn.tripadvisor.com/media/photo-s/15/33/fc/fc/agra.jpg" alt="agra"></a>
        <a href="list.html" target="_self"><div class="overlay1">
            <div class="alpha1">Agra</div>
        </div></a>
       </div>    
   
  
    <div class="cardd">    
        <a href="list.html" target="_self"><img id="hotelcard" src="https://media-cdn.tripadvisor.com/media/photo-s/10/a3/3b/8a/screenshot-2017-09-12.jpg" alt="jaipur" ></a>
        <a href="list.html" target="_self"><div class="overlay1">
            <div class="alpha1">jaipur</div>
        </div></a>
       </div> 
   
  
    <div class="cardd">
        <a href="list.html" target="_self"><img id="hotelcard" src="https://media-cdn.tripadvisor.com/media/photo-s/0c/d2/2f/7a/palace-from-the-outside.jpg" alt="kolkata-calcutta"></a>
        <a href="list.html" target="_self"><div class="overlay1">
            <div class="alpha1">Bengaluru</div>
          </div></a>
        </div>
    </div> 
  
  </section>`;
}else if(myobj1.innerText === "VIEW LESS"){
    document.getElementById("sign-in-button1").textContent = "VIEW MORE";
    myobj2.innerHTML = '';
}
 
}




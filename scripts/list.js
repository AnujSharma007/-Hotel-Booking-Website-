

var hotels = ["Lemon Grass Retreat","COSI Pattaya Wong Amat Beach","U Jomtien Pattaya","Beach Gallery House","Pattaya Park Beach Resort",
"SN Plus Hotel","as.thailand.pattaya"];

let hotelData = [];

let loadHotelData = ()=>{
    hotels.map((eachhotels)=>{
        let url = `https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng?latitude=12.91285&longitude=100.87808&lang=en_US&hotel_class=1%2C2%2C3&limit=30&adults=1&amenities=beach%2Cbar_lounge%2Cairport_transportation&rooms=1&child_rm_ages=7%2C10&currency=USD&checkin=2020-01-08&zff=4%2C6&subcategory=hotel%2Cbb%2Cspecialty&nights=2=${eachhotels}`;
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url + eachhotels ,true);
        xhttp.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
        xhttp.setRequestHeader("x-rapidapi-key", "c19fafd0e2msh4211b01b3811b29p122931jsn55a72030c8aa");
        xhttp.send();

        xhttp.onreadystatechange = () =>{
            if(xhttp.readyState === 4 && xhttp.status === 200){
                let parsedResponse = JSON.parse(xhttp.response);
                console.log("hotel data->",parsedResponse);
                let hoteldata = parsedResponse.data[0];
                hotelData.push(hoteldata);
                addHotelToHome(hoteldata);
                return hoteldata;
            }
        }
    })
}

loadHotelData();

let addHotelToHome = (hoteldata) =>{
    let text = document.createTextNode(hoteldata.name);

    let span = document.createElement("span");
    span.setAttribute("class","hotel-title-text");
    span.appendChild(text);

    let hotelTextcontainer = document.createElement("div");
    hotelTextcontainer.setAttribute("class","hotel-text-container");
    hotelTextcontainer.appendChild(span);

    let container = document.createElement("div");
    container.setAttribute("class",'hotel-title');
    container.setAttribute("onclick","goToHotel(this)");

    container.setAttribute("hotel-name",data.name);

    container.appendChild(hotelTextcontainer);
    container.style.backgroundImage = `https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng?latitude=12.91285&longitude=100.87808&lang=en_US&hotel_class=1%2C2%2C3&limit=30&adults=1&amenities=beach%2Cbar_lounge%2Cairport_transportation&rooms=1&child_rm_ages=7%2C10&currency=USD&checkin=2020-01-08&zff=4%2C6&subcategory=hotel%2Cbb%2Cspecialty&nights=2("${data.photo.images.thumbnail}")`;

    let hotelTitleContainer = document.getElementsByClassName("sec")[0];
    hotelTitleContainer.appendChild(container);
}

let goToHotel= ()=>{

}


























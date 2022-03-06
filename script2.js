var request= new XMLHttpRequest();
request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function() {
    var data= JSON.parse(request.response)
    for (var i=0; i<data.length;i++) {
        console.log(`Name :${data[i].name} Region:${data[i].region} Subregion:${data[i].subregion} Population:${data[i].population}`)
    }
}
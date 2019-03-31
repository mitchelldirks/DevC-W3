
var valu = document.getElementById('valu');
for(var i=0;i<data.results.length;i++){
    //tagData=document.createElement('td');
    //tagData.innerHTML = data.results[i].name;
    //valu.appendChild(tagData);
    
console.log(data.results[i].name);
//console.log(data.results[i].rotation_period);
};

function renderHTML(data) {
    var htmlstring = "";
    htmlstring +="<table>"
        + "<tr><th>Name</th>" + "<th>Rotation Period</th>" + "<th>Orbital Period</th>" + "<th>Diameter</th>"+"<th>Gravity</th>" + "<th>Climate</th></tr>";
    for (ke = 0; ke < data.results.length; ke++) {
        htmlstring += "<tr> "
            + "<td>" + data.results[ke].name + "</td>"
            + "<td>" + data.results[ke].rotation_period + "</td>"
            + "<td>" + data.results[ke].orbital_period + "</td>"
            + "<td>" + data.results[ke].diameter + "</td>"
            + "<td>" + data.results[ke].gravity + "</td>"
            + "<td>" + data.results[ke].climate + "</td>"
            + "</tr>";
    }
        htmlstring+="</table>"
    Value.insertAdjacentHTML('beforeend', htmlstring);
    var br = "<br>";
    Value.insertAdjacentHTML('beforeend', br);
}

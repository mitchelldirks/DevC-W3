var Value = document.getElementById("valu");
var ourRequest = new XMLHttpRequest();
//for (var page = 1; page <= 3; page++) {
//  ourRequest.open('GET', 'https://swapi.co/api/planets/?page=' + page);
  ourRequest.open('GET', 'main.json');
ourRequest.onload = function () {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
};
ourRequest.send();
//};

/*function renderHTML(data) {
  var htmlstring = "";
  for (ke = 0; ke < data.results.length; ke++) {
    res = data[ke].residents
    htmlstring += "<tr> "
      + "<td>" + data.results[ke].nama + "</td>"
      + "<td>" + data.results[ke].rotation_period + "</td>"
      + "<td>" + data.results[ke].orbital_period + "</td>"
      + "<td>" + data.results[ke].diameter + "</td>"
      + "<td>" + data.results[ke].Climate + "</td>"
    + "</tr>";
  }
  Value.insertAdjacentHTML('beforeend', htmlstring);
  var br = "<br>";
  Value.insertAdjacentHTML('beforeend', br);
}*/
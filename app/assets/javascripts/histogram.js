var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

 document.addEventListener("DOMContentLoaded", function() {
  histogramGenerator();
});


function histogramGenerator(){
  resetHistogram();
  var bounds = document.getElementsByTagName('input');

  for(i = 0; i < grades.length; i++){
    if(grades[i] >= bounds[1].value){
      document.getElementById('A+.').innerHTML += "<div class='glyphicon glyphicon-user'></div>";
    }else if (grades[i] >= bounds[2].value){
      document.getElementById('A.').innerHTML += "<div class='glyphicon glyphicon-user'></div>";
    }else if (grades[i] > bounds[3].value){
      document.getElementById('A-.').innerHTML += "<div class='glyphicon glyphicon-user'></div>";
    }else if (grades[i] >= bounds[4].value){
      document.getElementById('B+.').innerHTML += "<div class='glyphicon glyphicon-user'></div>";
    }else if (grades[i] >= bounds[5].value){
      document.getElementById('B.').innerHTML += "<div class='glyphicon glyphicon-user'></div>";
    }else if (grades[i] >= bounds[6].value){
      document.getElementById('B-.').innerHTML += "<div class='glyphicon glyphicon-user'></div>";
    }else if (grades[i] >= bounds[7].value){
      document.getElementById('C+.').innerHTML += "<div class='glyphicon glyphicon-user'></div>";
    }else if (grades[i] >= bounds[8].value){
      document.getElementById('C.').innerHTML += "<div class='glyphicon glyphicon-user'></div>";
    }else if (grades[i] >= bounds[9].value){
      document.getElementById('C-.').innerHTML += "<div class='glyphicon glyphicon-user'></div>";
    }else if (grades[i] >= bounds[10].value){
      document.getElementById('D.').innerHTML += "<div class='glyphicon glyphicon-user'></div>";
    }else if (grades[i] >= bounds[11].value){
      document.getElementById('F.').innerHTML += "<div class='glyphicon glyphicon-user'></div>";
    }
  }
}

function checkBounds() {
  var bounds = document.getElementsByTagName('input');
  var valid = true;


  for(i = 0; i < bounds.length; i++){
    console.log(parseFloat(bounds[i].value));
    if(isNaN(parseFloat(bounds[i].value))){
      valid = false;
      break;
    }
    if(i == 0){
      if(parseFloat(bounds[i].value) < parseFloat(bounds[i+1].value)){
        valid = false;
        console.log("here1");
      }
    }else if(i == bounds.length){
      if(parseFloat(bounds[bounds.length - 1].value) > parseFloat(bounds[bounds.length - 2].value)){
        valid = false;
      }
    }else if(parseFloat(bounds[i].value) > parseFloat(bounds[i-1].value)){
      valid = false;
    }
  }

  var message = document.getElementById('title');

  if(valid){
    message.innerHTML = "Lower bounds";
    histogramGenerator();
  }else{
    message.innerHTML = "Lower bounds" + "         " +  "Invalid input!";
    resetHistogram();
  }
}

function resetHistogram() {
  document.getElementById('A+.').innerHTML = " ";
  document.getElementById('A.').innerHTML = " ";
  document.getElementById('A-.').innerHTML = " ";
  document.getElementById('B+.').innerHTML = " ";
  document.getElementById('B.').innerHTML = " ";
  document.getElementById('B-.').innerHTML = " ";
  document.getElementById('C+.').innerHTML = " ";
  document.getElementById('C.').innerHTML = " ";
  document.getElementById('C-.').innerHTML = " ";
  document.getElementById('D.').innerHTML = " ";
  document.getElementById('F.').innerHTML = " ";
}

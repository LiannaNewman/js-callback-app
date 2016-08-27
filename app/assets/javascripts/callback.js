function changeColors() {
  setTimeout(function() {
    document.getElementById('first').style.color = "red";
    setTimeout(function() {
      document.getElementById('second').style.color = "green";
      setTimeout(function() {
        document.getElementById('third').style.color = "blue";
        setTimeout(function() {
            document.getElementById('fourth').style.color = "purple";
        }, 1000)
      }, 1000);
    }, 1000);
  }, 1000);
}

function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

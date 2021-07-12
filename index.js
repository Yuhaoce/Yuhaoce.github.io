document.onreadystatechange = function () {
    if (document.readyState == "complete") {    
           var demo=  document.getElementsByClassName("loading-div")
              demo[0].className="attribute-changes"
           document.querySelector('body').style.overflowY='scroll'
    }
  }

document.onreadystatechange = function () {
    if (document.readyState == "complete") {    
        setTimeout(() => {
           var demo=  document.getElementsByClassName("loading-div")
              demo[0].className="attribute-changes"
           document.querySelector('body').style.overflowY='scroll'
             }, 1000);
    }
  }

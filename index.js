document.onreadystatechange = function () {
    if (document.readyState == "complete") {    
        setTimeout(() => {
                // $(".loading-div").hide();
                // $('body').css('overflow-y','scroll');
           var demo=  document.getElementsByClassName("loading-div")
              demo[0].className="attribute-changes"
             }, 1000);
    }
  }

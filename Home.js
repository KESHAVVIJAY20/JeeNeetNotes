$(document).ready(function() {
    $('#refreshModal').modal('show');
});


let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

$(document).ready(function(){
    $("#viewAll").click(function(){
        $(".slideshow").toggle();
        $("#viewAll").text(" ");
        $(".section-testing").toggle();
    });
  });
$(document).ready(function(){
    $(".note-1").click(function(){
        $(".sec-book-1").show();
        $(".main").hide();
        $(".sec-about").hide();
        $(".sec-contact").hide();
        $(".sec-TandC").hide();
        $(".sec-SoftCopy").hide();
        $(".sec-Account").hide();
    });
  });
$(document).ready(function(){
    $(".note-2").click(function(){
        $(".sec-book-2").show();
        $(".main").hide();
        $(".sec-about").hide();
        $(".sec-contact").hide();
        $(".sec-TandC").hide();
        $(".sec-SoftCopy").hide();
        $(".sec-Account").hide();
    });
  });
$(document).ready(function(){
    $(".note-3").click(function(){
        $(".sec-book-3").show();
        $(".main").hide();
        $(".sec-about").hide();
        $(".sec-contact").hide();
        $(".sec-TandC").hide();
        $(".sec-SoftCopy").hide();
        $(".sec-Account").hide();
    });
  });
$(document).ready(function(){
    $(".note-4").click(function(){
        $(".sec-book-4").show();
        $(".main").hide();
        $(".sec-about").hide();
        $(".sec-contact").hide();
        $(".sec-TandC").hide();
        $(".sec-SoftCopy").hide();
        $(".sec-Account").hide();
    });
  });
$(document).ready(function(){
    $(".note-5").click(function(){
        $(".sec-book-5").show();
        $(".main").hide();
        $(".sec-about").hide();
        $(".sec-contact").hide();
        $(".sec-TandC").hide();
        $(".sec-SoftCopy").hide();
        $(".sec-Account").hide();
    });
  });
$(document).ready(function(){
    $(".note-6").click(function(){
        $(".sec-book-6").show();
        $(".main").hide();
        $(".sec-about").hide();
        $(".sec-contact").hide();
        $(".sec-TandC").hide();
        $(".sec-SoftCopy").hide();
        $(".sec-Account").hide();
    });
  });
$(document).ready(function(){
    $(".note-7").click(function(){
        $(".sec-book-7").show();
        $(".main").hide();
        $(".sec-about").hide();
        $(".sec-contact").hide();
        $(".sec-TandC").hide();
        $(".sec-SoftCopy").hide();
        $(".sec-Account").hide();
    });
  });
$(document).ready(function(){
    $(".note-8").click(function(){
        $(".sec-book-8").show();
        $(".main").hide();
        $(".sec-about").hide();
        $(".sec-contact").hide();
        $(".sec-TandC").hide();
        $(".sec-SoftCopy").hide();
        $(".sec-Account").hide();
    });
  });
$(document).ready(function(){
    $(".back").click(function(){
        $(".sec-book").hide();
        $(".main").show();
        $(".sec-about").hide();
        $(".sec-contact").hide();
        $(".sec-TandC").hide();
        $(".sec-SoftCopy").hide();
        $(".sec-Account").hide();
    });
  });
$(document).ready(function(){
    $("#about").click(function(){
        $(".sec-book").hide();
        $(".main").hide();
        $(".sec-about").show();
        $(".sec-contact").hide();
        $(".sec-TandC").hide();
        $(".sec-SoftCopy").hide();
        $(".sec-Account").hide();
    });
  });
$(document).ready(function(){
    $("#contact").click(function(){
        $(".sec-book").hide();
        $(".main").hide();
        $(".sec-about").hide();
        $(".sec-contact").show();
        $(".sec-TandC").hide();
        $(".sec-SoftCopy").hide();
        $(".sec-Account").hide();
    });
  });
$(document).ready(function(){
    $("#TandC").click(function(){
        $(".sec-book").hide();
        $(".main").hide();
        $(".sec-about").hide();
        $(".sec-contact").hide();
        $(".sec-TandC").show();
        $(".sec-SoftCopy").hide();
        $(".sec-Account").hide();
    });
  });
$(document).ready(function(){
    $("#SoftCopy").click(function(){
        $(".sec-book").hide();
        $(".main").hide();
        $(".sec-about").hide();
        $(".sec-contact").hide();
        $(".sec-TandC").hide();
        $(".sec-SoftCopy").show();
        $(".sec-Account").hide();
    });
  });
$(document).ready(function(){
    $("#account").click(function(){
        $(".sec-book").hide();
        $(".main").hide();
        $(".sec-about").hide();
        $(".sec-contact").hide();
        $(".sec-TandC").hide();
        $(".sec-SoftCopy").hide();
        $(".sec-Account").show();
        $("#Mysubscribe").hide();
        $("#myacc").show();
    });
  });
$(document).ready(function(){
    $("#subscribe").click(function(){
        $(".sec-book").hide();
        $(".main").hide();
        $(".sec-about").hide();
        $(".sec-contact").hide();
        $(".sec-TandC").hide();
        $(".sec-SoftCopy").hide();
        $(".sec-Account").show();
        $("#myacc").hide();
    });
  });
$(document).ready(function(){
    $("#MyAccount").click(function(){
        $("#myacc").toggle();
        $("#Mysubscribe").hide();
    });
  });
$(document).ready(function(){
  $("#MySubscription").click(function(){
    $("#Mysubscribe").toggle();
    $("#myacc").hide();
    });
  });
$(document).ready(function(){
  $("#link-1").click(function(){
    $(".sec-book").hide();
        $(".main").hide();
        $(".sec-about").hide();
        $(".sec-contact").hide();
        $(".sec-TandC").hide();
        $(".sec-SoftCopy").hide();
        $(".sec-Account").show();
        $("#myacc").show();
    });
  $("#link-2").click(function(){
    $(".sec-book").hide();
        $(".main").hide();
        $(".sec-about").hide();
        $(".sec-contact").hide();
        $(".sec-TandC").hide();
        $(".sec-SoftCopy").hide();
        $(".sec-Account").show();
        $("#myacc").hide();
    });
  });

  // // show password
  function Show() {
    var x = document.getElementById("password");
    var y = document.getElementById('Confirm-password')
    var eyeClose = document.querySelector('.eye-hide')
    if (x.type === "password" || y.type === 'password') {
      x.type = "text";
      eyeClose.style.display='block';
    } else {
      x.type = "password";
    }
  }
  function hide() {
    var x = document.getElementById("password");
    var y = document.getElementById('Confirm-password')
    var eyeClose = document.querySelector('.eye-hide')
    if (x.type === "text") {
      x.type = "password";
      eyeClose.style.display='none';
    } else if (y.type === 'password'){
      y.type = "password";
      eyeClose.style.display='none';
    }else {
      x.type = "text";
    }
  }

  function Same(){
    var submit = document.getElementById('submit');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('Confirmpassword');
    var samePasswd = document.getElementById('samePasswd');
    if (password.innerHTML != confirmPassword.innerHTML){
      samePasswd.style.display='block';
    }
    else if (password.innerText === confirmPassword.innerText){
      samePasswd.style.display='none';
    }
  }
  // $(document).ready(function(){
  //   $(".submit").click(function(){
  //     var $passwd = $('#password');
  //     var $Confirmpasswd = $('#Confirm-password');
  //     var $samePass = $('#samePasswd')
  //     if ( $passwd != $Confirmpasswd){
  //       $samePass.show();
  //     }
  //   });
  // });


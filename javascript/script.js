//Switching Genre Covers on Dropdown Selection
var imageList = Array();
for (var i = 1; i <= 19; i++) {
    imageList[i] = new Image(70, 70);
    imageList[i].src = "images/genre-covers/genre-covers" + i + ".webp";
}
function switchImage() {
var selectedImage = document.createNewProject.switch.options[document.createNewProject.switch.selectedIndex].value;
document.genrePreview.src = imageList[selectedImage].src;
}
//sets the user color scheme
function setTheme(theme) {
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme);
}
window.onload = function getTheme() {
  const theme = localStorage.getItem('theme');
  theme && setTheme(theme);
}
//adds a show password option
  function showPassword() {
    var showPass = document.getElementById("pwd");
    if (showPass.type === "password") {
      showPass.type = "text";
    } else {
      showPass.type = "password";
    }
  } 
//~~~~~~~~~~~~~~~~~~~~~~~~~//
//#### Button Actions #####//
//~~~~~~~~~~~~~~~~~~~~~~~~~//
//takes user back to previous page - "cancel" button
function goBack() {
  history.go(-1);
}
//takes user back two pages (only to be used in Settings)
function goExtraBack() {
  history.go(-2);
}
//takes user to their profile page - after saving they can see the changes
function goForward() {
  history.go(-1);
}
//takes user to choose pfp page
function pfpChange() {
  location.href = "choose-pfp.html"
}
//takes user back to settings to save after changing pfp icon
function goSettings() {
  location.href = "settings.php"
}
function goChoosePfp() {
  location.href = "choose-pfp.html"
}
function goProjects() {
  location.href = "projects.php"
}
function goProfileUpdate() {
  location.href = "profile-create.html"
}

//SHOWS THE UPDATE PROGESS POPUP WHEN BUTTON IS PRESSED
function showPopup() {
  document.getElementById("popup").classList.toggle("show");
}
function hidePopup() {
  document.getElementById("popup").classList.remove("show");
}

function showProgressPopup() {
  document.getElementById("background-layer").classList.toggle("show");
}
function hideProgressPopup() {
  document.getElementById("background-layer").classList.remove("show");
}

function showWarning() {
  document.getElementById("warning").classList.toggle("show");
}
function hideWarning() {
  document.getElementById("warning").classList.remove("show");
}

// function adjustFooter() {
//   var body = document.body,
//       html = document.documentElement;

//   var height = Math.max( body.scrollHeight, body.offsetHeight, 
//                          html.clientHeight, html.scrollHeight, html.offsetHeight );
//   if (height < window.innerHeight) {
//     document.getElementById("footer").style.position = "fixed";
//     document.getElementById("footer").style.bottom = "0";
//   }else {
//     document.getElementById("footer").style.position = "relative";
//     document.getElementById("footer").style.bottom = "";
//   }
// }

/* When the user clicks on the button,
            toggle between hiding and showing the dropdown content */
            //PROFILE ICON
            function myFunction() {
              document.getElementById("myDropdown").classList.toggle("show");
              console.log("first success");
          }
          // Close the dropdown menu if the user clicks outside of it
          // window.onclick = function(event2) {
          // if (!event2.target.matches('.dropbtn')) {
          //     var dropdowns = document.getElementsByClassName("dropdown-content");
          //     var i;
          //     for (i = 0; i < dropdowns.length; i++) {
          //     var openDropdown = dropdowns[i];
          //     if (openDropdown.classList.contains('show')) {
          //         openDropdown.classList.remove('show');
          //         console.log("first success");
          //     }
          //     }
          // }
          // } 


          //  PROJECTS DROPDOWN
           function myFunction2() {
            document.getElementById("myDropdown2").classList.toggle("show");
            console.log("second success");
        }
        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function(event, events) {
          if (!event.target.matches('.dropbtn2')) {
            var dropdowns2 = document.getElementsByClassName("dropdown-content2");
            var i;
            for (i = 0; i < dropdowns2.length; i++) {
              var openDropdown2 = dropdowns2[i];
              if (openDropdown2.classList.contains('show2')) {
                openDropdown2.classList.remove('show2');
                console.log("second success close");
              }
            }
          }
          else if (!events.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var a;
            for (a = 0; a < dropdowns.length; a++) {
              var openDropdown = dropdowns[a];
              if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                  console.log("first success close");
              }
            }
          }
        }
      //   document.getElementById("myDropdown").addEventListener('click',function(event){
      //     event.stopPropagation();
      // })
      //   document.getElementById("myDropdown2").addEventListener('click',function(event){
      //     event.stopPropagation();
      // })
      

        // window.addEventListener('load', function() {
        //   // wait until the page loads before working with HTML elements
        //   document.addEventListener('click', function(event) {
        //     //click listener on the document
        //     document.querySelectorAll('.dropdown-contents').forEach(function(el) {
        //       if (el !== event.target) el.classList.remove('show')
        //       // close any showing dropdown that isn't the one just clicked
        //     });
        //     if (event.target.matches('.dropbtn')) {
        //       event.target.closest('.dropdown').querySelector('.dropdown-contents').classList.toggle('show')
        //     }
        //     // if this is a dropdown button being clicked, toggle the show class
        //   })
        // })
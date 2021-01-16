function nav_a_active(id_a){
    x=document.getElementById(id_a).parentElement;

}
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
} 
function accedercours(cours){
  document.getElementById(cours).style.display='inline-grid';
  document.getElementById('matiere').style.display='none';
  document.getElementById('rtr-btn').style.display='block';
}
function retour(){
  document.getElementById('matiere').style.display='inline-grid';
  document.getElementById('lescoursdemodule1').style.display='none';
  document.getElementById('rtr-btn').style.display='none';
}
function voir(pdf,courses){
  document.getElementById(pdf).style.display='block';
  document.getElementById(courses).style.display='none';

}
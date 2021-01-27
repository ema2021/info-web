var pdfmod='';
var rtr_btn = 0;//button de retour
function nav_a_active(id_a) {
  x = document.getElementById(id_a).parentElement;

}
window.onscroll = function () { myFunction() };

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
function accedercours(cours,mod_,matiere) {
  document.getElementById(mod_).style.display = 'inline-grid';
  document.getElementById(cours).style.display = 'inline-grid';
  document.getElementById(matiere).style.display = 'none';
  document.getElementById('rtr-btn').style.display = 'block';
  rtr_btn++;
}

function voir(pdf, courses, pdfpath) {
  document.getElementById(pdf).style.display = 'block';
  document.getElementById(courses).style.display = 'none';
  document.getElementById('pdfhere').data = pdfpath;
  pdfmod=courses;
}
function rtrbtn_(a, b) {
  document.getElementById(a).style.display = 'inline-grid';
  document.getElementById(b).style.display = 'none';
  rtr_btn--;
}
function retour(id_pluschar = '') {
  switch (rtr_btn) {
    case 1:
      dest = 'matiere' + id_pluschar;
      maintenant = 'lescoursdemodule1' + id_pluschar;
      rtrbtn_(dest, maintenant);
      document.getElementById('rtr-btn').style.display = 'none';
      break;
    case 2:
      dest = 'lescoursdemodule1' + id_pluschar;
      maintenant = 'courspdf' + id_pluschar;
      rtrbtn_(dest, maintenant);
      break;
    default:
      break;

  }
}
// function searchcours(){
//   document.getElementById('tr_cours').style.display='none';
//   document.getElementsById('acc-search').style.display='';
// }
function inscrire() {
  document.getElementById('inscrire_form').style.display = 'block';
}
function show(id_,scroll_) {
  document.getElementById(id_).style.display = 'block';
  window.scrollTo(0, scroll_);
}
function hide(id_) {
  document.getElementById(id_).style.display = 'none';
}
function precedent(dest,maintenant,displ_y){
  document.getElementById(dest).style.display = displ_y;
  document.getElementById(maintenant).style.display = 'none';
}
function precedentpdf(maintenant,displ_y){
  document.getElementById(pdfmod).style.display = displ_y;
  document.getElementById(maintenant).style.display = 'none';
}

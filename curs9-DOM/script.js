var commentsList = document.getElementById("comments-list");
console.log(commentsList);  //null -  nu e incarcat inca, de aia apare null in consola

window.addEventListener("load", onHtmlLoaded);

function onHtmlLoaded() {
    var commentsList = document.getElementById("comments-list");
    console.log(commentsList); // the element

console.log("comments items",
           document.getElementsByClassName("comment-item"));
console.log("comments items by tag",
           document.getElementsByTagName("section"));

var comentItems = document.getElementsByTagName("section");
console.log("first coment item", comentItems[0]);
console.log("second coment item", comentItems[1]);

console.log("first paragraph inside section",
           document.querySelector("section.coment-item > p"));

console.log("all paragraphs inside section",
           document.querySelectorAll("section.coment-item > p"));
  
  //Updating HTML elements
  var h1Array = document.getElementsByTagNames("h1");
  console.log(h1Array[0]);
}




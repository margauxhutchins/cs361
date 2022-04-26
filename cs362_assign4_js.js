// jQuery
$("nav a").hover(
    function(event) {
        // The mouse has entered the element, can reference the element via 'this'
      this.style.fontSize = "xx-large"; 
      console.log(this.style.fontSize);
    },
    function (event) {
        // The mouse has left the element, can reference the element via 'this'
      this.style.fontSize = "smaller"; 
      console.log(this.style.fontSize);
    }
 );
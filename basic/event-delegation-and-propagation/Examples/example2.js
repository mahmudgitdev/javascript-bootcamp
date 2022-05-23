<ul id="parent-list">
  <li id="post-1">Item 1</li>
  <li id="post-2">Item 2</li>
  <li id="post-3">Item 3</li>
  <li id="post-4">Item 4</li>
  <li id="post-5">Item 5</li>
  <li id="post-6">Item 6</li>
</ul>
// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
    // e.target is the clicked element!
    // If it was a list item
    if(e.target && e.target.nodeName == "LI") {
      // List item found!  Output the ID!
      console.log("List item ", e.target.id.replace("post-"), " was clicked!");
     }
  });

  // Get the parent DIV, add click listener...
document.getElementById("myDiv").addEventListener("click",function(e) {
    // e.target was the clicked element
      if(e.target && e.target.nodeName == "A") {
        // Get the CSS classes
        var classes = e.target.className.split(" ");
        // Search for the CSS class!
        if(classes) {
            // For every CSS class the element has...
            for(var x = 0; x < classes.length; x++) {
                // If it has the CSS class we want...
                if(classes[x] == "classA") {
                    // Bingo!
                    console.log("Anchor element clicked!");
                    // Now do something here....
                }
            }
        }
      }
    });
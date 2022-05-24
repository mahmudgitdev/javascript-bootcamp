#### Changing the dom element

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript can Change HTML</h2>

    <p id="p1">Hello World!</p>

    <script>
      document.getElementById("p1").innerHTML = "New text!";
    </script>

    <p>The paragraph above was changed by a script.</p>
  </body>
</html>
```

#### Updating the DOM element

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }
      .result {
        font-size: 20px;
        font-weight: 500;
        color: rebeccapurple;
      }
    </style>
  </head>
  <body>
    <h1>Update DOM JavaScript</h1>
    <div style="color: green;" class="result"></div>
    <button class="Btn">CLICK HERE</button>
    <h3>Click on the above button to create a new element</h3>
    <script>
      let resEle = document.querySelector(".result");
      let heading = document.createElement("h3");
      document.querySelector(".Btn").addEventListener("click", () => {
        let headingText = document.createTextNode("This is a random heading");
        heading.appendChild(headingText);
        resEle.appendChild(heading);
      });
    </script>
  </body>
</html>
```

```js
element.innerHTML = "<p>read this</p>"; //Change the inner HTML of an element
element.style.color = "blue"; //Change the style of an HTML element
element.setAttribute(important, "true"); //Change the attribute value of an HTML element
element.important = "true"; //Change the attribute value of an HTML element
```

### Removing dom element

```js
// select the target element
const e = document.querySelector("li:last-child");

// remove the list item
e.parentElement.removeChild(e);
```

```js
//removing element by ID
var element = document.getElementById("myElementID");
element.parentNode.removeChild(element);

//remove a dom element
var element = document.getElementById("someId");
element.parentNode.removeChild(element);

//remove element from array
var colors = ["red", "green", "blue", "yellow"];
var blue = colors.splice(2, 1); //first arg is array index to remove
//colors is now ["red","green","yellow"]
```

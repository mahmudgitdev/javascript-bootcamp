### Append an item to a list:

```js
const node = document.createElement("li");
const textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript appendChild() Demo</title>
  </head>
  <body>
    <ul id="menu"></ul>

    <script>
      function createMenuItem(name) {
        let li = document.createElement("li");
        li.textContent = name;
        return li;
      }
      // get the ul#menu
      const menu = document.querySelector("#menu");
      // add menu item
      menu.appendChild(createMenuItem("Home"));
      menu.appendChild(createMenuItem("Services"));
      menu.appendChild(createMenuItem("About Us"));
    </script>
  </body>
</html>
```

### Move an item from one list to another:

```js
const node = document.getElementById("myList2").lastElementChild;
document.getElementById("myList1").appendChild(node);
```

```html
<ul id="first-list">
  <li>Everest</li>
  <li>Fuji</li>
  <li>Kilimanjaro</li>
</ul>

<ul id="second-list">
  <li>Karakoram Range</li>
  <li>Denali</li>
  <li>Mont Blanc</li>
</ul>
```

```js
// get the first list
const firstList = document.querySelector("#first-list");
// take the first child element
const everest = firstList.firstElementChild;
// get the second list
const secondList = document.querySelector("#second-list");
// append the everest to the second list
secondList.appendChild(everest);
```

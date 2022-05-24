Event delegation takes advantage of event propagation.
It allows the event listener to be set on a parent element,
thus avoiding adding event listeners to all the elements.

The event listener is set on a parent element which listens for click events.
If parent element is clicked, the callback will compare
event.target (element which was clicked) against a common property.
This will be clear if we see the example below:

```html
<!DOCTYPE html>
<head>
    <title>Event Delegation and Propagation</title>
    <!-- some css styles to differentiate the elements -->
    <style>
        #box1 {
            height: 100px;
            width: 100px;
            background-color: chartreuse;
            padding: 30px;
        }
        #box2 {
            height: 100px;
            width: 100px;
            background-color: chocolate;
            padding: 30px;
        }
    </style>
</head>
<body>
    <div id="grid-container">
        <div id="box1">
            <button id="button1">Button 1</button>
        </div>
        <div id="box2">
            <button id="button2">Button 2</button>
        </div>
    </div>
    <script>
        document.querySelector("#grid-container").addEventListener("click", (e)=> {
            if(e.target.id === "box1"){
                console.log("Box 1 was clicked");
            }
            if(e.target.id === "box2"){
                console.log("Box 1 was clicked");
            }
            if(e.target.id === "button1"){
                console.log("button 1 was clicked");
            }
            if(e.target.id === "button2"){
                console.log("button 2 was clicked");
            }
        })
    </script>
</body>
</html>
```

When a button or element is clicked,
the listener of the parent element catches the bubbling event.

If we click on Button 1, then the output will be:
button 1 was clicked
or if we click on the 'box1' div, output will be:
Box 1 was clicked

Here, using event delegation we dont need to add a
click listener to every one of the elements like we saw
in the previous topic. We just need to add a event listener
to the parent div and by using event bubbling formula, we can access
the clicked child element by using 'e.target'

**Another classic example** of event delegation would be
this example below, which we might use regularly.

Suppose we have a div on which we have many input boxes.
We want to convert specific input values to uppercase. -->

```html
<!DOCTYPE html>
<head>
    <title>Event Delegation & Propagation</title>
</head>
<body>
    <div id="form">
        <input type="text" id="firstname" placeholder="First Name" data-uppercase>
        <input type="text" id="lastname" placeholder="Last Name" data-uppercase>
        <input type="text" id="phone" placeholder="Phone Number" >
        <input type="text" id="email" placeholder="Email" >
    </div>

    <!-- Here in this example, we select every input field which has a data-uppercase
    property and automatically convert them to uppercase characters. -->

    <script>
        document.querySelector("#form").addEventListener("keyup", (e)=> {
            if(e.target.dataset.uppercase != undefined){
                e.target.value = e.target.value.toUpperCase()
            }
        })
    </script>
</body>
</html>
```

ইফেক্ট বুঝতে হলে প্রথমে এই HTML ফাইলটি আপনার ব্রাউজারে ওপেন করে মাউসের রাইট বাটন ক্লিক করে Inspect এ ক্লিক করুন।
অতঃপর Console ট্যাবে ক্লিক করুন। এখন Event Bubbling ও Event Capturing কিভাবে হচ্ছে সেটা বুঝতে বক্সগুলোতে
ক্লিক করে দেখুন।

মনেকরি আমাদের কাছে নীচের কোড অনুযায়ী একটি HTML ফাইল আছে।

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Delegation and Propagation</title>

    <!-- CSS Style for Better Visualization -->
    <style>
      body {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      button {
        cursor: pointer;
      }
      div {
        padding: 30px;
        background-color: lightcyan;
      }
      .btn {
        border: 1px solid black;
        margin: 0 10px;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 1.5rem;
        color: white;
      }
      .green {
        background-color: green;
      }
      .blue {
        background-color: blue;
      }
      .purple {
        background-color: purple;
      }
    </style>
  </head>
  <body>
    <h2>Event Delegation Example</h2>
    <div id="btn-container">
      <div id="div1">
        <button id="green" class="none">Make Me Green</button>
      </div>
      <button id="blue">Make Me Blue</button>
      <button id="purple">Make Me Purple</button>
    </div>

    <!-- JavaScript Code for Functionality -->
    <script>
      const btnConatiner = document.getElementById("btn-container");
    </script>
  </body>
</html>
```

এখন আমরা কোন বাটনের সাথে ক্লিক ইভেন্ট যুক্ত না করে সেন্ট্রালি তাদের কন্টেইনার 'btn-container' এর সাথে ইভেন্টটি যুক্ত করবো। একই সাথে কোন element বা button এ ক্লিক হচ্ছে সেটা দেখার জন্য আমরা উপরের কোডের জাভাস্ক্রিপ্টের ভিতরে নীচের কোড যুক্ত করবো।

```js
btnConatiner.addEventListener("click", (e) => {
  console.log(e.target);
});
```

এখন আমরা 'btn-container' এর ভিতরে কোথায় ক্লিক করছি সেটা ব্রাউজারের console ট্যাবে খুব সুন্দর করে দেখতে পাবো। এখন আমরা চাইলে আমাদের ইচ্ছা মতো এটাকে কাজে লাগাতে পারি। এখানে আমরা বাটনের লেখা অনুযায়ী কাজ করার জন্য ইভেন্ট লিসেনারকে নীচের কোডের মতো করে লিখিঃ

```js
btnConatiner.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target.id === "green") {
    e.target.classList.add("btn", "green");
  } else if (e.target.id === "blue") {
    e.target.classList.add("btn", "blue");
  } else if (e.target.id === "purple") {
    e.target.classList.add("btn", "purple");
  }
});
```

এখন বাটনগুলোতে ক্লিক করে দেখো। আসলে 'btn-container' কিভাবে এই ক্লিক ইভেন্ট পাচ্ছে সেটা আগেই আমরা জেনেছি [event-capturing-and-bubbling](https://github.com/vivasoft-ltd/javascript-bootcamp/tree/main/basic/8.%20event-capturing-and-bubbling) পার্ট থেকে। এই ক্লিক ইভেন্টটি কিভাবে propagate হচ্ছে সেটা দেখতে চাইলে নীচের কোডের মতো করে ইভেন্ট লিসেনার যুক্ত করুন।

```js
btnConatiner.addEventListener("click", (e) => {
  console.log(e.path);
});
```

এখন আশাকরি ইভেন্ট bubbling, propagation এবং delegation নিয়ে আর কোন সংশয় থাকবে না।
হ্যাপি কোডিং ;)

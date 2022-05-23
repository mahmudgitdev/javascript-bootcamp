### Example of validate form data

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript Validation</h2>

    <p>Please input a number between 1 and 10:</p>

    <input id="numb" />

    <button type="button" onclick="myFunction()">Submit</button>

    <p id="demo"></p>

    <script>
      function myFunction() {
        // Get the value of the input field with id="numb"
        let x = document.getElementById("numb").value;
        // If x is Not a Number or less than one or greater than 10
        let text;
        if (isNaN(x) || x < 1 || x > 10) {
          text = "Input not valid";
        } else {
          text = "Input OK";
        }
        document.getElementById("demo").innerHTML = text;
      }
    </script>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript Validation</h2>

    <form action="/action_page.php" method="post">
      <input type="text" name="fname" required />
      <input type="submit" value="Submit" />
    </form>

    <p>
      If you click submit, without filling out the text field, your browser will
      display an error message.
    </p>
  </body>
</html>
```

```html
<html>
  <head>
    <title>Form Validation</title>
    <script type="text/javascript"></script>
  </head>

  <body>
    <form
      action="/cgi-bin/test.cgi"
      name="myForm"
      onsubmit="return(validate());"
    >
      <table cellspacing="2" cellpadding="2" border="1">
        <tr>
          <td align="right">Name</td>
          <td><input type="text" name="Name" /></td>
        </tr>

        <tr>
          <td align="right">EMail</td>
          <td><input type="text" name="EMail" /></td>
        </tr>

        <tr>
          <td align="right">Zip Code</td>
          <td><input type="text" name="Zip" /></td>
        </tr>

        <tr>
          <td align="right">Country</td>
          <td>
            <select name="Country">
              <option value="-1" selected>[choose yours]</option>
              <option value="1">USA</option>
              <option value="2">UK</option>
              <option value="3">INDIA</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right"></td>
          <td><input type="submit" value="Submit" /></td>
        </tr>
      </table>
    </form>
    <script type="text/javascript">
      function validate() {
        if (document.myForm.Name.value == "") {
          alert("Please provide your name!");
          document.myForm.Name.focus();
          return false;
        }
        if (document.myForm.EMail.value == "") {
          alert("Please provide your Email!");
          document.myForm.EMail.focus();
          return false;
        }
        if (
          document.myForm.Zip.value == "" ||
          isNaN(document.myForm.Zip.value) ||
          document.myForm.Zip.value.length != 5
        ) {
          alert("Please provide a zip in the format #####.");
          document.myForm.Zip.focus();
          return false;
        }
        if (document.myForm.Country.value == "-1") {
          alert("Please provide your country!");
          return false;
        }
        return true;
      }
    </script>
  </body>
</html>
```

```html
<html>
<body>
<script>
function validateform(){
var name=document.myform.name.value;
var password=document.myform.password.value;

if (name==null || name==""){
  alert("Name can't be blank");
  return false;
}else if(password.length<6){
  alert("Password must be at least 6 characters long.");
  return false;
  }
}
</script>
<body>
<form name="myform" method="post" action="http://www.javatpoint.com/javascriptpages/valid.jsp" onsubmit="return validateform()" >
Name: <input type="text" name="name"><br/>
Password: <input type="password" name="password"><br/>
<input type="submit" value="register">
</form>
</body>
</html>
```

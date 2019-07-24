function check(form)
{

if(form.userid.value == "Adil Khan" && form.pwd.value == "Adil@1004")
{
    window.open('resumedisplay.html', '_self');
  }
 else
 {
   alert("Incorrect Username or Password")
  }
}
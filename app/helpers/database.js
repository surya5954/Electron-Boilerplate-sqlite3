var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydb.db');

var register = document.getElementById('register');
register.addEventListener('click', function() {
    var pricing_form_data = $("#pricing-form").serializeArray();
    console.log(pricing_form_data);
    db.serialize(function() {
        var stmt = db.run("INSERT INTO table_user (name,email,username,password) VALUES (?,?,?,?)",
        [pricing_form_data[0].value,pricing_form_data[1].value,pricing_form_data[2].value,pricing_form_data[3].value]);
        // for(var i in form_data){
        //   stmt.run(form_data[i].value);
        // }
        // stmt.finalize();
    });
    alert("User registered succesfully!!!");
});
var loginBtn =document.getElementById('login-button');
loginBtn.addEventListener('click',function(){
  var login_form_data = $("#login-form").serializeArray();
  console.log(login_form_data);
  db.each("SELECT username from table_user",function(err,row){
    console.log(row.username);
    if(row.username === login_form_data[0].value){
      alert("User login Succesfully !!!");
      return;
    }
  });
});

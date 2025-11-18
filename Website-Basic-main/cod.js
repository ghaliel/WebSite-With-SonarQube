function _(e) {
    return document.getElementById(e);
}
let displayform = _('displayForm');
let forlogin = _('forLogin');
let loginForm = _('loginForm');
let forRegister = _('forRegister');
let registerForm = _('registerForm');
let formContainer = _('formContainer');
let foruser=_('foruser');
let User
displayform.addEventListener('click', showForm);

forlogin.addEventListener('click', (e) => {
    e.preventDefault;
    forRegister.classList.remove('active');
    forlogin.classList.add('active');
    if (loginForm.classList.contains('toggleForm')) {
        formContainer.style.transform = 'translate(0%)';
        formContainer.style.transition = 'transform .5s';
        loginForm.classList.remove('toggleForm');
        registerForm.classList.add('toggleForm');


    }
});

forRegister.addEventListener('click', (e) => {
    e.preventDefault;
    forlogin.classList.remove('active');
    forRegister.classList.add('active');
    if (registerForm.classList.contains('toggleForm')) {
        formContainer.style.transform = 'translate(-100%)';
        formContainer.style.transition = 'transform .5s';
        registerForm.classList.remove('toggleForm');
        loginForm.classList.add('toggleForm');
    }

});

function showForm() {
    document.querySelector('.formWrapper .card').classList.toggle('show');
}
function add(){

    var userNamevalue = document.getElementById('').value;
    var passwordvalue = document.getElementById('').value;

    if(passwordIn2.length<8){
document.getElementById('s1').innerHTML = "password must contains 8 characters";
    }else{
            var user = {};
            user.username = userNameIn1;
            user.password = passwordIn2;
            users.push(user); 
      
            console.log(users)
    }
 }

function show(){
    // le but est de creer les balises suivantes
    // <tr><td>username</td><td>password</td></tr>

    for(var i=0; i<users.length; i++){
        // la creation de la balise tr
        var tr = document.createElement('tr');

        // la creation de la premiere balise td
        var td1 = document.createElement('td');

        // la creation de la deuxieme balise td
        var td2 = document.createElement('td');

        //ajouter la valeur username dans td1
        td1.append(users[i].username)

        //ajouter la valeur password dans td2
        td2.append(users[i].password)

        //ajouter td1 et td2 dans tr
        tr.append(td1);
        tr.append(td2);

        //ajouter tr dans table1
        var table1 = document.getElementById('');
        table1.append(tr)

    }
}
function showPass(){

    var passValue = document.getElementById('');
    if(passValue.type == 'text'){
        passValue.type = 'password';
    }else if(passValue.type == 'password'){
        passValue.type = 'text';
    }
 }
 function login(){
    var userNameIn3 = document.getElementById('').value;
    var passwordIn4 = document.getElementById('').value;
    if(userNameIn3==''){
document.getElementById('s2').innerHTML = "username must be filled out";
        return false;
    }else if(passwordIn4==''){
document.getElementById('s2').innerHTML = "password must be filled out";
        return false;
    }
    for(var i=0;i<users.length;i++){
if(userNameIn3==users[i].username  && passwordIn4==users[i].password){   
                return true;
            }
    }
document.getElementById('s2').innerHTML = "password and username do not match";
    return false;
    }

function verifier(){
    var userName = document.getElementById('name2').value;
    var password1 = document.getElementById('password2').value;
    var password2 = document.getElementById('Confirmer3').value;

        document.getElementById('error1').style.display  = "none";
        document.getElementById('error2').style.display  = "none";
        document.getElementById('error3').style.display  = "none";

    if(userName==''){
        document.getElementById('error1').style.display = "inline";
                return false;
    }
    if(password1==''){
        document.getElementById('error2').style.display  = "inline";
            return false;
    }
    if(password1!=password2){
        document.getElementById('error3').style.display  = "inline";
            return false;
    }
    return true;
}
"use strict";
let userForm = new UserForm();
let tryToAuth = data => {console.log(data)}; // Какой смысл несет эта функция? 
userForm.loginFormCallback = data => ApiConnector.login(data, tryToAuth);
if(/* Нужно проверить выполнилась ли функция tryToAuth? */ ) {
location.reload();
} else loginErrorMessageBox("Неверный логин и/или пароль");


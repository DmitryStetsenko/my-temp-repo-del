let login = 'admin';
let password = 'abc';

let userLogin = prompt('Enter login:');
let userPwd;

console.log('Saved login: ', login);
console.log('Saved password: ', password);
console.log('******************************');

if (userLogin === login) {
  console.log('Login correct !!!');
  userPwd = prompt('Enter password:');

  if (userPwd === password) {
    console.log('Password correct !!!');
    console.log('Access granted !!!');
  } else {
    console.log('Password fail !!!');
    console.log('Access Denided !!!');
  }

} else {
  console.log('Login fail !!!');
  console.log('Access Denided !!!');
}

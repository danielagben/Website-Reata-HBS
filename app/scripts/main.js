import './helpers/jquery'
// import only components needed 
import './helpers/bootstrap' 
// 
import nav from './modules/nav';
import isi from './modules/isi';

const API = process.env.API_URL;
console.log(API);
//Vendors
// require('bootstrap/dist/js/bootstrap.min.js');
// require('bootstrap-select');
//end vendors

$(() => {
  nav();
  isi();
});

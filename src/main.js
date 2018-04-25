import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { API } from './api.js';

$(document).ready(function() {
  // $("form").submit(function(event) {
  //   event.preventDefault();
    console.log("Step 1");
    let newCall = new API();
    console.log("Step 2" + newCall);
    let promiseObject = newCall.requestAPI();
    console.log("Promise Object" + promiseObject);

    promiseObject.then(function(response) {
      let responseObject = JSON.parse(response);
      console.log("response Object: " + responseObject);
      let responseImage = responseObject.url;
      console.log("the respone image is " + responseImage);
      $("#output").append(`<img src="${responseImage}" alt="Doggo">`);
    }, function(error) {
      $(".output").append("There has been an error!: " + error);
    });

  // });
});

class API {

  // Javascript API request
  requestAPI() {
    let promise = new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://random.dog/woof.json');
      xhr.send();
      xhr.onload = function() {
        if (this.status === 200) {
          console.log("Request success!" + xhr.response);
          resolve(xhr.response);
          } else {
          reject(Error(xhr.statusText));
          }
      }
    });
    return promise;
  }

}

export { API };

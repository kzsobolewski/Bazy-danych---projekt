fetch('http://localhost:3315/worker/get')
  .then(
    function(response) {
      return response.json();
    }
  ).then(function(data) {
    console.log(data);

  })
  .catch(function(err) {
    console.log('Fetch Error: ', err);
  });

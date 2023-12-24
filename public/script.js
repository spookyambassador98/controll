document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners for ON and OFF buttons
  document.getElementById('onBtn').addEventListener('click', function () {
    sendData('ON');
  });

  document.getElementById('offBtn').addEventListener('click', function () {
    sendData('OFF');
  });

  // Function to send data to the server
  function sendData(data) {
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: data }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
});

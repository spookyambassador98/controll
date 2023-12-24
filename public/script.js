document.getElementById('onBtn').addEventListener('click', function () {
  sendData('ON');
});

document.getElementById('offBtn').addEventListener('click', function () {
  sendData('OFF');
});

function sendData(data) {
  fetch('/control', {
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

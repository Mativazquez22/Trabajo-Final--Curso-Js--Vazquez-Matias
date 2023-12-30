// Objeto para representar una cuota

function fetchData(url) {
  return fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('Error en la solicitud a la API');
          }
          return response.json();
      });
}

function calculateLoan() {
  // Obtener datos del formulario
  var loanAmount = document.getElementById('loanAmount').value;
  var interestRate = document.getElementById('interestRate').value;
  var loanTerm = document.getElementById('loanTerm').value;

  // Reemplazar la URL con la API externa real
  var apiUrl = 'https://api.example.com/loan-data';

  // Realizar la solicitud a la API externa
  fetchData(apiUrl)
      .then(data => {
          // Realizar cálculos utilizando datos del formulario y la API
          var principal = parseFloat(loanAmount);
          var calculateInterest = parseFloat(interestRate) / 100 / 12;
          var calculatePayments = parseFloat(loanTerm);

          var x = Math.pow(1 + calculateInterest, calculatePayments);
          var monthlyPayment = (principal * x * calculateInterest) / (x - 1);

          // Mostrar el resultado en la página
          var resultElement = document.getElementById('result');
          resultElement.innerHTML = 'Cuota Mensual: $' + monthlyPayment.toFixed(2) + '<br>Datos adicionales desde la API: ' + data.additionalData;
      })
      .catch(error => console.error('Error al cargar datos desde la API: ', error));
}

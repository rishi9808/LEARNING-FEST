function calculateEMI() {
    const principal = parseFloat(document.getElementById('principal').value) || 0;
    const interestRate = parseFloat(document.getElementById('interest').value) || 0;
    const tenure = parseFloat(document.getElementById('tenure').value) || 0;

    // Monthly interest rate
    const monthlyInterestRate = (interestRate / 100) / 12;

    // Number of monthly payments
    const numberOfPayments = tenure;

    // Calculate EMI
    const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    // Display the result
    document.getElementById('result').textContent = `Monthly EMI: ${emi.toFixed(2)}`;
  }
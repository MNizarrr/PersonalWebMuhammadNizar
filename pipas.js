document.getElementById('carbonForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const powerUsage = parseFloat(document.getElementById('powerUsage').value);
    const hours = parseFloat(document.getElementById('hours').value);
    const energySource = document.getElementById('energySource').value;

    let emissionFactor;

    if (energySource === 'coal') {
        emissionFactor = 820;
    } else if (energySource === 'naturalGas') {
        emissionFactor = 450;
    } else if (energySource === 'renewable') {
        emissionFactor = 0;
    }

    const energyConsumed = powerUsage * hours / 1000;
    const carbonEmissions = energyConsumed * emissionFactor;

    document.getElementById('carbonOutput').textContent = `Total Jejak Emisi Karbon: ${carbonEmissions.toFixed(2)} gram CO2`;
    document.getElementById('result').style.display = 'block';
});
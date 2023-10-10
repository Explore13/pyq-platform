document.addEventListener('DOMContentLoaded', () => {
    const sensorForm = document.getElementById('sensorForm');
    const sensorList = document.getElementById('sensorList');
  
    sensorForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const condition = document.getElementById('condition').value;
  
      const response = await fetch('/api/sensor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, condition }),
      });
  
      if (response.status === 201) {
        const sensorData = await response.json();
        displaySensor(sensorData);
        sensorForm.reset();
      } else {
        alert('Error saving sensor data.');
      }
    });
  
    async function displaySensor(sensorData) {
      const sensorElement = document.createElement('div');
      sensorElement.innerHTML = `<strong>Name:</strong> ${sensorData.name}, <strong>Condition:</strong> ${sensorData.condition}`;
      sensorList.appendChild(sensorElement);
    }
  });
  
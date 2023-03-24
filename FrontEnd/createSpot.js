const createFile = async () => {
  console.log('createFile function called');
  const url = '/create_file';
  const userId = 0000;
  const numPlate = document.getElementById('number-plate').value;
  const fleetNum = document.getElementById('fleet-number').value;
  const operator = document.getElementById('operatorDropdown').value;
  const region = document.getElementById('regionDropdown').value;
  const route = document.getElementById('route').value;
  const location = document.getElementById('location').value;

  console.log('Form values:', numPlate, fleetNum, operator, region, route, location);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `user_id=${userId}&num_plate=${numPlate}&fleet_num=${fleetNum}&operator=${operator}&region=${region}&route=${route}&location=${location}`
    });

    if (!response.ok) {
      throw new Error('Failed to create file.');
    }

    const data = await response.text();
    console.log('Response data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};

console.log('JavaScript code running');
const createLogButton = document.getElementById('createLogButton');
if (createLogButton) {
  createLogButton.addEventListener('click', () => {
    console.log('Button clicked');
    createFile();
  });
}

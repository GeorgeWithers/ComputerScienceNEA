// Handle change event for first dropdown
function changeDropdown() {
  // Get reference to first dropdown and second dropdown
  var firstDropdown = document.getElementById('firstDropdown');
  var secondDropdown = document.getElementById('secondDropdown');
  // Get selected option from first dropdown
  var selectedOption = firstDropdown.options[firstDropdown.selectedIndex].value;

  // Only reset second dropdown options if first dropdown is changed
  if (secondDropdown.options.length === 0 || secondDropdown.options[0].value !== selectedOption) {
    secondDropdown.innerHTML = '';
    if (selectedOption === 'Arriva') {
      var option1 = document.createElement('option');
      option1.text = 'Chirk';
      option1.value = 'Chirk';
      secondDropdown.add(option1);
      var option2 = document.createElement('option');
      option2.text = 'London';
      option2.value = 'London';
      secondDropdown.add(option2);
      var option3 = document.createElement('option');
      option3.text = 'Midlands North';
      option3.value = 'Midlands-North';
      secondDropdown.add(option3);
    } else if (selectedOption === 'Independents') {
      var option1 = document.createElement('option');
      option1.text = 'Abelio';
      option1.value = 'Abelio';
      secondDropdown.add(option1);
      var option2 = document.createElement('option');
      option2.text = 'Select';
      option2.value = 'Select';
      secondDropdown.add(option2);
    }
  }
  // Get selected value from second dropdown  
  var selectedValue = secondDropdown.options[secondDropdown.selectedIndex].value;

  // Load fleet list from JSON file
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Parse JSON response
      var fleetList = JSON.parse(xhr.responseText);
      // Populate table with fleet list data
      var fleetTable = document.getElementById('fleet-table');
      fleetTable.innerHTML = '';
      // Create header row for table
      var headerRow = document.createElement('tr');
      var headerCols = ['Fleet Number', 'Number Plate', 'Manufacturer', 'Body', 'Chassis', 'Year', 'Seats', 'Depot'];
      for (var i = 0; i < headerCols.length; i++) {
        var headerCol = document.createElement('th');
        headerCol.textContent = headerCols[i];
        headerRow.appendChild(headerCol);
      }
      // Create row for each item in fleet list
      fleetTable.appendChild(headerRow);
      for (var i = 0; i < fleetList.length; i++) {
        var fleetItem = fleetList[i];
        var row = document.createElement('tr');
        var cols = [fleetItem.fleetNumber, fleetItem.numberPlate, fleetItem.manufacturer, fleetItem.body, fleetItem.chasis, fleetItem.year, fleetItem.seats, fleetItem.depot];
        for (var j = 0; j < cols.length; j++) {
          var col = document.createElement('td');
          col.textContent = cols[j];
          row.appendChild(col);
        }
        fleetTable.appendChild(row);
      }

      // Set value of second dropdown back to selected value
      for (var i = 0; i < secondDropdown.options.length; i++) {
        if (secondDropdown.options[i].value === selectedValue) {
          secondDropdown.options[i].selected = true;
          break;
        }
      }
    }
  };
  // Load fleet list from JSON file
  // Construct fleet list URL and send the request
  var fleetListUrl = `fleetLists/${selectedOption}-${selectedValue}.json`;
  xhr.open('GET', fleetListUrl, true);
  xhr.send();
}
function loadFleetList() {
  var firstDropdown = document.getElementById('firstDropdown');
  var secondDropdown = document.getElementById('secondDropdown');
  var operator = firstDropdown.value;
  var region = secondDropdown.value;
  var fleetListUrl = `fleetLists/${operator}-${region}.json`;

  // Load fleet list from JSON file
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
  // Check if response is ready and request is finished
    if (xhr.readyState === 4 && xhr.status === 200) {
    // Parse the JSON response
      var fleetList = JSON.parse(xhr.responseText);

      // Populate table with fleet list data
      var fleetTable = document.getElementById('fleet-table');
      fleetTable.innerHTML = '';
      var headerRow = document.createElement('tr');
    // Add table header row
      var headerCols = ['Fleet Number', 'Number Plate', 'Manufacturer', 'Body', 'Chassis', 'Year', 'Seats', 'Depot'];
      for (var i = 0; i < headerCols.length; i++) {
        var headerCol = document.createElement('th');
        headerCol.textContent = headerCols[i];
        headerRow.appendChild(headerCol);
      }
      fleetTable.appendChild(headerRow);
    // Add table rows for each fleet item
      for (var i = 0; i < fleetList.length; i++) {
        var fleetItem = fleetList[i];
        var row = document.createElement('tr');
        var cols = [fleetItem.fleetNumber, fleetItem.numberPlate, fleetItem.manufacturer, fleetItem.body, fleetItem.chasis, fleetItem.year, fleetItem.seats, fleetItem.depot];
        for (var j = 0; j < cols.length; j++) {
          var col = document.createElement('td');
          col.textContent = cols[j];
          row.appendChild(col);
        }
        fleetTable.appendChild(row);
      }
    }
  };
  xhr.open('GET', fleetListUrl, true);
  xhr.send();
}

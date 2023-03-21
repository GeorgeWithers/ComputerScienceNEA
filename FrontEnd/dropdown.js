function changeDropdown() {
    var operatorSelect = document.getElementById('firstDropdown');
    var regionSelect = document.getElementById('secondDropdown');
    var operator = operatorSelect.value;
    var region = regionSelect.value;
    var fleetListUrl = fleetLists[operator][region];
    
    // Load fleet list from JSON file
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var fleetList = JSON.parse(xhr.responseText);
        
        // Populate table with fleet list data
        var fleetTable = document.getElementById('fleet-table');
        fleetTable.innerHTML = '';
        var headerRow = document.createElement('tr');
        var headerCols = ['Vehicle Number', 'Make', 'Model', 'Year'];
        for (var i = 0; i < headerCols.length; i++) {
          var headerCol = document.createElement('th');
          headerCol.textContent = headerCols[i];
          headerRow.appendChild(headerCol);
        }
        fleetTable.appendChild(headerRow);
        for (var i = 0; i < fleetList.length; i++) {
          var fleetItem = fleetList[i];
          var row = document.createElement('tr');
          var cols = [fleetItem.vehicle_number, fleetItem.make, fleetItem.model, fleetItem.year];
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
  
function search_stops() {
    // Declare variables \\
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input01");
    filter = input.value.toUpperCase();
    table = document.getElementById("table01");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query \\
    for (i = 1; i < tr.length; i++) {
      // Hide the row initially \\
      tr[i].style.display = "none";
      td = tr[i].getElementsByTagName("td");

      // Allows user to search for stop_id \\
      for (var j = 0; j < td.length; j++) {
        cell = tr[i].getElementsByTagName("td")[1];
        if (cell) {
          if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            break;
          }
        }
        // Allows user to search for stop_name \\
        cell2 = tr[i].getElementsByTagName("td")[2];
        if (cell2) {
          if (cell2.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            break;
          }
        }
        // Allows user to search for town (where bus stop is located) \\
        cell3 = tr[i].getElementsByTagName("td")[3];
        if (cell3) {
          if (cell3.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            break;
          }
        }
      }
    }
  }
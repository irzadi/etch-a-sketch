
function generateTable(c,r) {
    // creates a <table> element and a <tbody> element
    const ctr = document.createElement("div");
    ctr.setAttribute("id","main-container");
  
    // creating all cells
    for (let i = 0; i < c; i++) {
      // creates a table row
      const row = document.createElement("div");
      row.setAttribute("class","grid-row");
  
      for (let j = 0; j < r; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("div");
        cell.setAttribute("class","grid-column");
        const cellText = document.createTextNode(`Column ${i+1}, Row ${j+1}, `);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      ctr.appendChild(row);
    }
  
    // appends <table> into <body>
    document.body.appendChild(ctr);
    // sets the border attribute of tbl to '2'
    ctr.setAttribute("border", "2");
  }

  generateTable(10,15);
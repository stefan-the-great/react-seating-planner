import React from 'react';
import "../styles/exportData.css"

function ExportData({allTables}) {

  const exportData = () => {
    console.log(allTables);
    console.log("");
    allTables.forEach((table, index) => {
      console.log("Table ", index + 1);
      
      table.forEach((person, index) => {
        console.log((index+1) + ". " + person.name + " " + person.surname);
        
      });

      console.log("");

      
    });
  };
  return (
    <div className="exportData">
        <button className="exportBtn" onClick={exportData}>Save</button>
    </div>
  )
}

export default ExportData
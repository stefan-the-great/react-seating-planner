import React from 'react';
import "../styles/exportData.css"

function ExportData({allTables}) {

  const exportData = () => {
      console.log(allTables);
  };
  return (
    <div className="exportData">
        <button className="exportBtn" onClick={exportData}>Save</button>
    </div>
  )
}

export default ExportData
import React from 'react';
import "../styles/tableSettings.css"
import "../styles/table.css"

function TableSettings({tableName, setTableName, tableSize, setTableSize, tableLength, allTables, setAllTables}) {
    // const [modalState, setModalState] = useState(false)

    const updateTableOrder =(e, tableName) => {
        setTableName(parseInt(e.target.value));

        let prvTableIndex = tableName;
        // let newTableIndex = parseInt(e.target.value);
        const tableContent = allTables.filter((table, index) => index === prvTableIndex);

        // console.log(prvTableIndex);
        // console.log(newTableIndex);
        // console.log(tableContent);

        // console.log();

        // const updateAllTables = (allTables, prvTableIndex) => {
        //     let currTableRemoved = allTables.filter((table, index) => index !== prvTableIndex);
        //     let currTableAdded =  allTables.splice(newTableIndex, 0, tableContent);
        // }
        
        console.log(tableContent[0]);
        // console.log(allTables);
        // console.log(allTables.splice(newTableIndex, 0, tableContent[0]));
        // setAllTables(allTables.filter((table, index) => index !== prvTableIndex));
        // setAllTables(allTables.splice(newTableIndex, 0, tableContent));
    }
  return (
    <>
    <div className="tableDetails">
        <div className="tableName">Table {" "}
            <input type="number"
            id="tableNameInp" 
            value={tableName + 1}
            onChange={(e) => {updateTableOrder(e, tableName)}} 
            min={1} />
        </div>
        <input type="number" 
            className="peopleNum" 
            value={tableLength} 
            onChange={(e) => {
                setTableSize(e.target.value)
            }}
            style={{color: tableLength >= tableSize ? "red" :"dimgrey"}} 
            min={1} />
    </div>
        {/* <div className="tableSettingModal">
            <div className="tableName">Table {tableKey + 1}</div>
        <div className="peopleNum" style={{color: tableLength >= tableSize ? "red" :"limegreen"}}>
            {tableLength}
        </div> */}
            {/* <div className="tableNameWrapper">
                <label htmlFor="tableName">Table </label>
                <input type="number" name="tableName" id="tableName" placeholder={tableKey + 1} />
            </div>
            
            <div className="tableSizeWrapper">
                <label htmlFor="tableName">Table Size</label>
                <input type="number" name="tableSize" id="tableSize" />
            </div> */}
        {/* </div> */}
    
    </>
  )
}

export default TableSettings

export default function ConvertToCSV({columns, tasks}) {
    // Export Table Header Row Should Be Table Names
    var headerRow = ''
    for (let i = 0; i < columns.length; i++) {
        headerRow = headerRow + columns[i].title + ',';
    }

    console.log(headerRow);

    var countArray = new Array(columns.length + 1).fill(0);


    for (let n = 0; n < tasks.length; n++) {       
        countArray[tasks[n].status] = countArray[tasks[n].status] + 1
    }
    
    const maxValue = Math.max(...countArray)

    tasks.sort((a, b) => a.status - b.status)

    console.log(tasks);
    

    for (let i = 0; i < maxValue; i++) {
        for (let y = 0; y < tasks.length; y++) {
            const element = tasks[y];
            
        }
        
    }
    
  
    return 
}

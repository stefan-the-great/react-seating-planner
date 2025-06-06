
export default function ConvertToCSV(tasks) {
    // // Export Table Header Row Should Be Table Names
    // var headerRow = ''
    // for (let i = 0; i < columns.length; i++) {
    //     headerRow = headerRow + columns[i].title + ',';
    // }

    // console.log(headerRow);

    // var countArray = new Array(columns.length + 1).fill(0);


    // for (let n = 0; n < tasks.length; n++) {       
    //     countArray[tasks[n].status] = countArray[tasks[n].status] + 1
    // }
    
    // const maxValue = Math.max(...countArray)

    // tasks.sort((a, b) => a.status - b.status)

    // console.log(tasks);
    

    // for (let i = 0; i < maxValue; i++) {
    //     for (let y = 0; y < tasks.length; y++) {
    //         const element = tasks[y];
            
    //     }
        
    // }

    console.log("FUNCT RUNS");

    // ! ADD LETTER TO NAME
    var newTasks = [];

    tasks.forEach(task => {
        task.letter = task.name.split(' ')[1][0].toUpperCase();
        var temp = {
            Letter: task.letter,
            Name: task.name,
            "Table Number": task.status
        }
        newTasks.push(temp)
    });

    console.log(newTasks);
    
    // var newTasks = tasks.map((task) => (...task, letter: task.name)
    
    if (!newTasks || newTasks.length === 0) {
        return '';
    }
    const headers = Object.keys(newTasks[0]);
    const csvRows = newTasks.map(row => headers.map(header => row[header]).join(','));
    console.log([headers.join(','), ...csvRows].join('\n'));
    
    return [headers.join(','), ...csvRows].join('\n');  
    
    // if (!tasks || tasks.length === 0) {
    //     return '';
    // }
    // const headers = Object.keys(tasks[0]);
    // const csvRows = tasks.map(row => headers.map(header => row[header]).join(','));
    // console.log([headers.join(','), ...csvRows].join('\n'));
    
    // return [headers.join(','), ...csvRows].join('\n');  
}

export default function SortNamesAsc(nameList) {
    nameList.forEach(item => {
        item.letter = item.name.split(' ')[0][0]
        if (!(item.letter === undefined)) {
            item.letter = item.letter.toUpperCase()
        } else item.letter = "Z"
        
    });
    nameList.sort(function(a, b){
        // if(a.name.split(' ')[1] < b.name.split(' ')[1]) { return -1; }
        // if(a.name.split(' ')[1] > b.name.split(' ')[1]) { return 1; }
        if(a.letter < b.letter) { return -1; }
        if(a.letter > b.letter) { return 1; }
        return 0
    })
    
    return nameList
}

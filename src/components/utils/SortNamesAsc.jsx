export default function SortNamesAsc(nameList) {
    nameList.sort(function(a, b){
        if(a.name.split(' ')[1].toUpperCase() < b.name.split(' ')[1].toUpperCase()) { return -1; }
        if(a.name.split(' ')[1].toUpperCase() > b.name.split(' ')[1].toUpperCase()) { return 1; }
        return 0
    })
    
    return nameList
}

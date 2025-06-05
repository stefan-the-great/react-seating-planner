
export default function FormatNameInput(index, nameInput) {
    console.log(index);
    
    var inputArray = String(nameInput).split(' ')

    const fName = inputArray[0];
    const sName = () => {
        var sNameHolder = ''
        for (let i = 1; i < inputArray.length; i++) {
            sNameHolder = sNameHolder + " " + inputArray[i];
        }

        return sNameHolder
    } 

    const sNameFinal = sName()
  
    return {
        id: index,
		rsvp: "Confirmed",
		name: fName,
		surname: sNameFinal
    }
}

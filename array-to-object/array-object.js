function arrayObject(array) {
    let result = {
        strings: [],
        numbers: [],
        booleans: []
    };

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'string') {
            result['strings'] += array[i] + " ";
        }
        if (typeof array[i] == 'number') {
            result['numbers'] += array[i] + " ";
        }
        if (typeof array[i] == 'boolean') {
            result['booleans'] += array[i] + " ";
        }
    }

    let insert = document.getElementById("insert");
    for (let object in result) {
        let pNode = document.createElement('p');
        pNode.innerHTML = object + ": " + result[object];
        insert.append(pNode);
    }
    console.log(result)
}
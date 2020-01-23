function heeHaw(number) {
    // node to be appended to
    let insert = document.getElementById("insert");

    // check if parameter is a number
    if (isNaN(number)) {
        // error node
        let pNode = document.createElement('p');
        pNode.innerHTML = "That isn't a number";
        insert.append(pNode);
    } else {
        for (let i = 1; i <= number; i++) {
            // new p node created
            let pNode = document.createElement('p');

            if (i % 3 === 0 && i % 5 === 0) {
                // if number evenly divides into 3 AND 5 print Hee Haw!

                // set value of pNode
                pNode.innerHTML = "Hee Haw!";

                // append to parent
                insert.append(pNode);
            } else if (i % 3 === 0) {
                // else if number evenly divides into 3 print Hee!
                pNode.innerHTML = "Hee!";
                insert.append(pNode);
            } else if (i % 5 === 0) {
                // else if number evenly divides into 5 print Haw!
                pNode.innerHTML = "Haw!";
                insert.append(pNode);
            } else {
                // else number does not evenly divide by 3 AND/OR 5, print value of i
                pNode.innerHTML = "" + i;
                insert.append(pNode);
            }
        }
    }
}
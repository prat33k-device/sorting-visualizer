
let isBubSorting = false;

// returns a promise which is resolved after ms miliseconds when its called
function delay(ms) {
    const promsie = new Promise(function(resolutionFunc, rejectionFunc) {
        setTimeout(resolutionFunc, ms);
    });
    return promsie;
}

function resetClasses(arr) {
    // {h: 100, classes: "extra classes names"}
    return arr.map((ele) => {
        return {h: ele.h, classes: ""}
    });
}

async function bubbleSort(arr, setBars, speed) {

    isBubSorting = true;

    for(let i = 0; i < arr.length-1; i++) {
        let swap = false;
        for(let j = 0; j < arr.length - i - 1; j++) {

            if(Number(arr[j].h) > Number(arr[j+1].h)) {

                //swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                swap = true;
            }

            //update the styling of the divs
            
            arr = resetClasses(arr);
            arr[j].classes = "swap-div";
            arr[j+1].classes = "swap-div";
            
            //updates the state
            setBars([...arr]);   // just passing arr does not work 

            // waits for the returned promise to be resolved
            await delay(speed);
        }

        if(!swap) break;
    }

    // after sorting animation
    arr = resetClasses(arr);
    setBars([...arr]);

    for(let i = 0; i < arr.length; i++) {
        arr[i].classes = "sorted-div";
        setBars([...arr]);
        await delay(10);
    }

    isBubSorting = false;
}

export {bubbleSort, isBubSorting};
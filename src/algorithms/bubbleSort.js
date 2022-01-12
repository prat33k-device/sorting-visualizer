
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

async function bubbleSort(arr, setBars) {

    for(let i = 0; i < arr.length-1; i++) {
        for(let j = i; j <= arr.length-1; j++) {

            if(Number(arr[i].h) > Number(arr[j].h)) {

                //swap
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

            //update the styling of the divs
            
            arr = resetClasses(arr);
            arr[i].classes = "swap-div";
            arr[j].classes = "swap-div";
            
            //updates the state
            setBars([...arr]);   // just passing arr does not work 

            // waits for the returned promise to be resolved
            await delay(5);
        }
    }

    // after sorting animation
    arr = resetClasses(arr);
    setBars([...arr]);

    for(let i = 0; i < arr.length; i++) {
        arr[i].classes = "sorted-div";
        setBars([...arr]);
        await delay(10);
    }

}

export default bubbleSort;
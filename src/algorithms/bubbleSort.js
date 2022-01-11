
function bubbleSort(arr, setBars) {

    for(let i = 0; i < arr.length-1; i++) {
        for(let j = i; j <= arr.length-1; j++) {
            if(Number(arr[i].h) > Number(arr[j].h)) {

                //swap

                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                
                arr[i].classes = "swap-div";
                arr[j].classes = "swap-div";
                
                //updates the state
                setBars([...arr]);

            }
            
        }
    }

    
    
}

export default bubbleSort;
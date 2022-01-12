// let i = 0, j = 0;
// function func(arr, i, j, setBars) {
//     setTimeout( () => {
//         if(Number(arr[i].h) > Number(arr[j].h)) {

//             //swap

//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
            
//             arr[i].classes = "swap-div";
//             arr[j].classes = "swap-div";
            
//             //updates the state
//             setBars([...arr]);

//         }
//     }, 1000);
// }

// function bubbleSort(arr, setBars) {

//     for( i = 0; i < arr.length-1; i++) {
//         for( j = i; j <= arr.length-1; j++) {

//             func(arr, i, j, setBars);
            
//         }
//     }

    
    
// }

const delay = ms => new Promise(res => setTimeout(res, ms));


async function bubbleSort(arr, setBars) {


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

                await delay(5);
                console.log("Waited 1s");
    
            }
            
        }
    }


    
    
    
};

export default bubbleSort;
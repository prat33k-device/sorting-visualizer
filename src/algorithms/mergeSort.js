
let isMerSorting = false;

//[{updateArr: array to be updated, start: starting index}]
var animation = [];

function delay(ms) {
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, ms);
    });
}


function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
  
    //[{value: a[1], idx: 1}]
    var L = new Array(n1); 
    var R = new Array(n2);
  
    for (var i = 0; i < n1; i++)
        L[i] = {
            value: arr[l + i],
            idx: l + i
        };
    for (var j = 0; j < n2; j++)
        R[j] = {
            value: arr[m + 1 + j],
            idx: m + 1 + j
        };
  
  
    i = 0;
  
    j = 0;
  
    var k = l;
  
    while (i < n1 && j < n2) {
        if (Number(L[i].value.h) <= Number(R[j].value.h)) {
            arr[k] = L[i].value;

            i++;
        }
        else {
            arr[k] = R[j].value;

            j++;
        }

        k++;
    }
  
    while (i < n1) {
        arr[k] = L[i].value;

        i++;
        k++;
    }
  
    while (j < n2) {
        arr[k] = R[j].value;

        j++;
        k++;
    }

    animation.push({
        updateArr: arr.slice(l, r+1),
        start: l
    });
}
  

function mergeSort(arr,l, r){
    console.log("from mergeSort functon");
    if(l>=r){
        return;
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}

function resetClasses(arr) {
    return arr.map((ele)=>{
        return {
            h: ele.h,
            classes: ""
        };
    });
}

async function handleMergeSort(arr, setBars, speed) {
    // arr = [{h: 100, classes: "extra classes names"}, {}, ...]

    isMerSorting = true;

    //empty the animation
    animation = [];
    const tempArr = arr;
    console.log(arr, tempArr);

    mergeSort(tempArr, 0, tempArr.length-1);
    console.log(arr, tempArr);
    

    for(let k = 0; k < animation.length; k++) {
        
        var updateArr = animation[k].updateArr;
        var start = animation[k].start;

        for(let i = 0; i < updateArr.length; i++) {
            arr[i+start] = updateArr[i];

            //update the bars state
            setBars([...arr]);
            await delay(speed);
        }


        // //animate
        // arr = resetClasses(arr);
        // arr[i].classes = "swap-div";
        
    }
    
    isMerSorting = false;
}

export {handleMergeSort, isMerSorting};





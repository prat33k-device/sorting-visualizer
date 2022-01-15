
let isSorting = false;

function delay(ms) {
    const promsie = new Promise(function(resolutionFunc, rejectionFunc) {
        setTimeout(resolutionFunc, ms);
    });
    return promsie;
}

function mergeSort() {

}

export {mergeSort, isSorting};
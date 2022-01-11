import randomHeight from "./randomHeight";

function randomArray(n) {
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(randomHeight());
    }

    return arr;
}

export default randomArray;
import {isBubSorting} from "./bubbleSort";
import {isMerSorting} from "./mergeSort";

function isSorting() {
    return isBubSorting || isMerSorting;
}

export default isSorting;
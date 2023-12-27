function findIndices(array, targetValue) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const sum = array[left] + array[right];
        if (sum == targetValue) {
            return [left, right];
        }
        else if (sum < targetValue) {
            left++;
        }
        else {
            right--;
        }
    }

    return null;
}

const array = [1, 3, 5, 7, 9, 10, 11];
const targetSum = 14;
const result = findIndices(array, targetSum);

if (result) {
    const [index1, index2] = result;
    console.log(`Index ${index1} (value = ${array[index1]}) and index ${index2} (value= ${array[index2]}) make a sum ${targetSum}`);
}
else {
    console.log('No Indices Found.');
}
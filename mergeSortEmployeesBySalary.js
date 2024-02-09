function mergeSort(arr){
    if (arr.length <= 1){
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);

    return mergeById ( mergeSort(left), mergeSort(right));

}

function mergeById(left, right){
    let emptyArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    //while (leftIndex < left.length && rightIndex < right.length) {
        while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].salary < right[rightIndex].salary){
            emptyArr.push(left[leftIndex]);
            leftIndex++;
        } else {
            emptyArr.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return emptyArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const unsortedEmployees = [
    { id: 101, name: "Saurav", salary: 60000, performanceRating: 4.5 },
    { id: 103, name: "Amol", salary: 30000, performanceRating: 4.2 },
    { id: 102, name: "Tushar", salary: 100000, performanceRating: 4.8 },
    { id: 104, name: "Ashish", salary: 30000, performanceRating: 4.3 }
];

console.log("Unsorted Employees:", unsortedEmployees);

const sortedEmployeesBySalary = mergeSort(unsortedEmployees);
console.log("Sorted Employees by ID:", sortedEmployeesBySalary);
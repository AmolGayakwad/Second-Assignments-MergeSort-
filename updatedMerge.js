const fs = require('fs');

// Function to merge two sorted CSV files
function merge(leftFile, rightFile, outputFile) {
    const leftData = fs.readFileSync(leftFile, 'utf8').split('\n').slice(1);
    const rightData = fs.readFileSync(rightFile, 'utf8').split('\n').slice(1);

    let leftIndex = 0;
    let rightIndex = 0;
    const mergedData = [];

    while (leftIndex < leftData.length && rightIndex < rightData.length) {
        const leftAge = parseInt(leftData[leftIndex].split(',')[1]);
        const rightAge = parseInt(rightData[rightIndex].split(',')[1]);

        if (leftAge <= rightAge) {
            mergedData.push(leftData[leftIndex++]);
        } else {
            mergedData.push(rightData[rightIndex++]);
        }
    }

    while (leftIndex < leftData.length) {
        mergedData.push(leftData[leftIndex++]);
    }

    while (rightIndex < rightData.length) {
        mergedData.push(rightData[rightIndex++]);
    }

    fs.writeFileSync(outputFile, 'Name,Age,Gender\n' + mergedData.join('\n'));
}

merge('patients1.csv', 'patients2.csv', 'merged_patients.csv');

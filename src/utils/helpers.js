export const secondsToHoursAndMinutes = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return {hours, minutes};
}

export const sortByTargetIds = (arr, targetIds) => {
    const sortedArray = [];
    const remainingArray = [];

    arr.forEach(obj => {
        if (targetIds.includes(parseInt(obj.Id))) {
            sortedArray.push(obj);
        } else {
            remainingArray.push(obj);
        }
    });

    return sortedArray.concat(remainingArray);
}
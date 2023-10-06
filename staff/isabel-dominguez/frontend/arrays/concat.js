function concat(...arrays) {

    const concatenatedArray = [];

    for (let i = 0; i < arrays.length; i++) {
        const currentArray = arrays[i];
        for (let j = 0; j < currentArray.length; j++) {
            concatenatedArray.push(currentArray[j]);
        }
    }

    return concatenatedArray;
}

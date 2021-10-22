function twoHighest(arr) {
    return arr
        .filter((v, i, a) => a.indexOf(v) === i)  
        .sort((a, b) => b - a)  
        .slice(0, 2);  
    };
    
    const demoArray = [15, 20, 20, 17];
    const result = twoHighest(demoArray);

    console.log(result);
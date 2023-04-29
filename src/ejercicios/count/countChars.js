const countChars = users => {
    const unir = users.map(user => user.name.first + user.name.last).join('').toLowerCase();
    let nombres=[];
    for (const char of unir) {
        let count = 0;
        for(let i=0;i <unir.length; i++){
            if(char===unir[i])
                count++;
        }
        nombres.push({letra: char, repeticiones: count});
    }
    return nombres.sort((a, b) => a.repeticiones - b.repeticiones).reverse()[0];
}

export default countChars
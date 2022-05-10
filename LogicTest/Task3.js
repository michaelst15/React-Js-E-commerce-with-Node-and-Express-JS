const digit = (value) => {
    let isNum = ''
    let spliter = value.split('')
    for(let i = 0; i < spliter.length; i++) {
        if(!isNaN(Number(spliter[i]))){
            isNum = isNum + spliter[i]
        }
    }
    let allData = []; allData.push(isNum); 
    let a = 0;
    let b = '';
    spliter = isNum.length - 1
    for(let c = spliter; c >= 0; c--){
        let tmp = isNum.split('')[a]
        let tmp2 = parseInt(spliter) - a
        if(tmp2 == 0){
            return allData
        }
        for(let d = tmp2; d > 0; d--){
            b = b + '0'
        }
        tmp2 = tmp + b; 
        allData.push(tmp2);
        a++;
        b = ''
    }
    return allData
}
console.log(digit('9.86-A5.321').join('\n'));
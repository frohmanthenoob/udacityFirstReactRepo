export function camelcaseToText(str) {
    const upCaseRegx = /\.?([A-Z])/g,
        camelCase = (all, letter) => {
            return " " + letter;
        },
        upCaseFirst = (text) => {
            return text.charAt(0).toUpperCase() + text.slice(1)
        };
    return upCaseFirst(str.replace(upCaseRegx, camelCase));
}

export function classedByProperty(arr,prop){
    let tempText = [],
    classedObj = arr.reduce((accumulator,currentValue)=>{
        if(tempText.includes(currentValue[prop])){
            accumulator[currentValue[prop]].push(currentValue)
        } else {
            accumulator[currentValue[prop]]=[];
            accumulator[currentValue[prop]].push(currentValue);
            tempText.push(currentValue[prop])
        }
        return accumulator;
    },{});
    return classedObj
}
function diStringMatch(s){
    let result = [s.length+1];
    let l = 0;
    let r = s.length;
    let index = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] == "I"){
            result[index] = l;
            index++;
            l++
        }
        else{
            result[index] = r;
            index++;
            r--;
        }
    }
    if(s.length -1 == "I"){
        result[index] = l;
    }
    else{
        result[index] = r;
    }
    return result
}
const s = "IDID"
console.log(diStringMatch(s));
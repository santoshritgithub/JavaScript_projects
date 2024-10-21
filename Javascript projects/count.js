//count number of each letter of given string
const str ="Hari om radhe sHyam ma Gauri shanker sita ram";
const obj={}
for (const x of str) {
    console.log(x);
    if(obj[x]){
        obj[x]+=1
    }else{
        obj[x]=1
    }
}
console.log(obj)
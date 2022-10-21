let regex = /.?(\d{3}).*(\d{3}).?(\d{4})/

let phoneNums = ['(541) 471 3918 1', '((603)281-0308', '(814)-462-8074', '9794443106'];

let numSimplified = phoneNums.map((num) => {
    if(num.match(/\d/g).length === 10){
        let match = num.match(regex)
        let simpleNum = ''
        for(let i = 1; i <= 3; i++){
           simpleNum += match[i];
        }
        return simpleNum;
    }
    else {
        return 'Invalid number'
    }
});


let people = ['Smith, Mr. John', 'Davis, Ms Nicole', 'Robinson, Mrs. Rebecca', 'Armstrong, Dr Sam', 'Downey, Mr. Robert'];

// let target = [
//     {
//         title: 'Mr',
//         firstname: 'John',
//         lastname: 'Smith'
//     }
// ]

//match (\D+)\, (mr\.?|mrs\.?|dr\.?|ms\.?) (\D+)
let regex2 = /(\D+)\, (mr\.?|mrs\.?|dr\.?|ms\.?) (\D+)/i
//test ^\D+\, [md]rs?.? \D+$
let regex3 = /^\D+\, [md]r?s?.? \D+$/i


let namesExtract = people.map((person) => {
    if(regex3.test(person)){
            let personObj ={};
            let personSeparated = person.match(regex2);
        for(let i = 1; i <= 3; i++){
            if(i === 2) {
                personObj['title'] = personSeparated[2];
            }
            else if(i === 3) {
                personObj['firstname'] = personSeparated[3];
            }
            else if(i === 1) {
                personObj['lastname'] = personSeparated[1];
            }
        }  
        return personObj
    } else {
        return 'invalid name';
    }
})
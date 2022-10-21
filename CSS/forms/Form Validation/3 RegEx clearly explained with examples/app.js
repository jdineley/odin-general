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
let regex2 = /([a-z]+)\,\s(mr|mrs|dr|ms)\.?\s([a-z]+)/i
//test ^\D+\, [md]rs?.? \D+$
let regex3 = /^[a-z]+\,\s[md]r?s?.?\s[a-z]+$/i


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

let urls = ['https://www.google.com/gmail', 'http://www.medium.com', 'https://twitter.com/home'];

let regex4 = /^https?:\/\/(w{3}\.)?\w+\.\w+\/?\w*$/
let regex5 = /(https?):\/\/(www)?\.?(\w+)\.(\w+)\/?(\w+)?/
// let pieces = [
//     {
//         type: 'schema',
//         regex: /https?/
//     },
//     {
//         type: 'subdomain',
//         regex: /www/
//     },
//     {
//         type: 'second_level_domain',
//         regex: /\w+/
//     },
//     {
//         type: 'top_level_domain',
//         regex: /\w+/
//     },
//     {
//         type: 'subdirectory',
//         regex: /\w+/
//     }
// ]
let pieces = ['schema', 'subdomain', 'second-level-domain', 'top-level-domain', 'subdirectory']

// let urlSeparated = urls[0].match(regex5);


let urlExtract = urls.map((url) => {
    // console.log(regex4.test(url));
    console.log(url.match(regex5))
    let urlObj = {url: url};
    if(regex4.test(url)){
        urlObj.invalid = 'NO'
        let urlSeparated = url.match(regex5);
        // console.log(urlSeparated.length);
        for(let i = 1; i < urlSeparated.length; i++){
            if(urlSeparated[i]){
                urlObj[pieces[i-1]] = urlSeparated[i]
            } else {
                urlObj[pieces[i-1]] = 'NA'
            }
        }
    return urlObj;
    } else {
        urlObj.invalid = 'YES'
        return urlObj;
    }
})
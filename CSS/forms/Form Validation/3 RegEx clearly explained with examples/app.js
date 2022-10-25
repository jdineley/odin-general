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

// Phone numbering verification
let regex3 = /^[a-z]+\,\s[md]r?s?.?\s[a-z]+$/i

// Phone group capturing
let regex2 = /([a-z]+)\,\s(mr|mrs|dr|ms)\.?\s([a-z]+)/i


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

// url verification
let regex4 = /^https?:\/\/(w{3}\.)?\w+\.\w+\/?\w*$/
// url group capturing
let regex5 = /(https?):\/\/(www)?\.?(\w+)\.(\w+)\/?(\w+)?/

let urlPieces = ['schema', 'subdomain', 'second-level-domain', 'top-level-domain', 'subdirectory']

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
                urlObj[urlPieces[i-1]] = urlSeparated[i]
            } else {
                urlObj[urlPieces[i-1]] = 'NA'
            }
        }
    return urlObj;
    } else {
        urlObj.invalid = 'YES'
        return urlObj;
    }
})

let emails = ['jasonchong_98@hotmail.com', 'jason-chong-14@unimelb.edu.au','Jason.Chong@quantium.com.au'];
let emailPieces = ['username', 'domain_name', 'domain'];

// email form verification
let regex6 = /^[a-z0-9\-\_\.]+@[a-z]+\.[a-z]+\.?[a-z]*$/i
// email group capturing
let regex7 = /([a-z0-9\-\_\.]+)@([a-z]+)\.([a-z]+\.?[a-z]*)/i

let emailExtract = emails.map((email) => {
    let emailObj = {email: email};
    if(regex6.test(email)){
        emailObj.invalid = 'NO';
        let emailSeparated = email.match(regex7);
        console.log(emailSeparated);
        for(let i = 1; i < emailSeparated.length; i++){
            if(emailSeparated[i]){
                emailObj[emailPieces[i-1]] = emailSeparated[i]
            } else {
                emailObj[emailPieces[i-1]] = 'NA'
            }
        }
        return emailObj;
    } else {
        emailObj.invalid = 'YES'
        return emailObj;
    }
})


let addresses = ['21 Bungana Drive, Kybunga SA 5453',
 'Thomas Lane, Fitzroy North VIC 3068', 
 '107 Quayside Vista, Kingston ACT 2604', 
 '94 Prince Street, Lower Coldstream NSW 2460', 
 'George Street, Brisbane QLD'];


let addressPieces = ['house_number', 'street_name', 'suburb', 'state', 'postcode'];

// Address verification
let regex8 = /^[0-9a-zA-Z\s]+\,\s[a-zA-Z\s]+\s[A-Z]+\s?[0-9]*/
// Address group capture
let regex9 = /([0-9]*)\s([0-9a-zA-Z\s]+)\,\s([a-zA-Z\s]+)\s([A-Z]+)\s?([0-9]*)/

let addressExtract = addresses.map((address) => {
    let addressObj = {address: address};
    if(regex8.test(address)){
        addressObj.invalid = 'NO';
        let addressSeparated = address.match(regex9);
        console.log(addressSeparated);
        for(let i = 1; i < addressSeparated.length; i++){
            if(addressSeparated[i]){
                addressObj[addressPieces[i-1]] = addressSeparated[i]
            } else {
                addressObj[addressPieces[i-1]] = 'NA'
            }
        }
        return addressObj;
    } else {
        addressObj.invalid = 'YES'
        return addressObj;
    }
})
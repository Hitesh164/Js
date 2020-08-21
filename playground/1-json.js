const fs=require('fs');
const dataBuffer=fs.readFileSync('1-json.json');
const dataJson=dataBuffer.toString();
const data=JSON.parse(dataJson);

data.name='andrew';
data.planet='anothePlanet';
console.log(data);
const user=JSON.stringify(data);
 fs.writeFileSync('1-json.json',user);

//fs.writeFileSync()
// const fs=require('fs');
// const dataBuffer= fs.readFileSync('1-json.json');
// const dataJSON=dataBuffer.toString();
// const data=JSON.parse(dataJSON);
// console.log(dataJSON);
// console.log(data);
// const book ={
//     title: 'ego is enemy',
//     author: 'MSD'
// }
// //console.log(book.title);
// const bookJSON=JSON.stringify(book);
// fs.writeFileSync('1-json.json',bookJSON);
// console.log(bookJSON);
// const parse=JSON.parse(bookJSON);
// console.log(parse.title);
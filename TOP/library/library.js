//comment for commit

myLibrary = [];

const bookCreator = (title, author, pubYear, read, numPages) => {
    let timeReqToRead = (numPages/80).toFixed(2);
    return { title, author, pubYear, read, numPages, timeReqToRead }; 
};

let devilWearsPrada = bookCreator(`The Devil Wears Prada`, `Lauren Weisberger`, 2003, false, 384);



console.log(myLibrary);
console.log(devilWearsPrada);
myLibrary.push(devilWearsPrada);
console.log(myLibrary);

`Beware of all enterprises that require new clothes -Henry David Thoreau`
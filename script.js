// import jsdom from 'jsdom'
// const jsdom =require("jsdom");
// const{ JSDOM } = jsdom;
// console.log("hello!")


// how to select the element by it id 
// let heading = document.getElementById("heading");
// console.log(heading);
// console.dir(heading);

//how to select the element by its class
// let heading4= document.getElementsByClassName("heading4");
// console.log(heading4);
// console.dir(heading4);

// how to select the element by its tagname
// let paraghaph = document.getElementsByTagName("p");
// console.dir(paraghaph)
// console.log(paraghaph)


//Query Selector // it return the node list 

let firstelements= document.querySelector('p'); //1st element return karta hai 
console.dir(firstelements)


// let allelements= document.querySelectorAll('p'); //all element return karta hai 
// console.dir(allelements)



//properties
// get , set , change / update
tagNames=firstelements.tagName;
console.log(tagNames)

// we want to print the first child of the body
console.dir(document.body.firstChild);


// if we want to known the innerText
let div =document.querySelector("div");
console.log(div);
divInnertext=div.innerText;
console.log(divInnertext) //its return pure text


//InnerHTML
divInnerHtml=div.innerHTML;
console.log(divInnerHtml);// its return text with all tag

// document.getElementById("innerHTML").innerHTML="this is all the inner"
// document.getElementById("divInnerHtml").innerHTML=divInnerHtml

//inner content , it show the all e hidden content
let hiddenelement = document.getElementById("hidden");
console.log(hiddenelement);

Whathidden=hiddenelement.textContent;
console.log(Whathidden);

document.getElementById("hiddenelement").innerHTML="the hidden element"
document.getElementById("para").innerHTML=Whathidden



//how to change the content

let myheading=document.querySelector("h1");
console.log(myheading);

myheading.innerText="new heading"  // it change the h1 heading fruit to new heading
myheading.innerHTML="<i>new heading</i>"  // it change the h1 styling
myheading.style.color="blue" // it change color of the heading
myheading.style.backgroundColor="red"; //it changes the background color



const fruitList = document.getElementById('fruit-list');
fruitList.classList.add('highlight');
console.log(fruitList.className);



const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    button.classList.add('clicked');
    console.log(button.className); 
});
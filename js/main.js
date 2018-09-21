var myDiv = document.createElement("div");
	myDiv.classList.add("size");
	myDiv.classList.add("bgColor");

	document.body.appendChild(myDiv);

myDiv.style.backgroundColor = "tomato";

var newDiv = document.createElement("div");
	newDiv.id = "first";

var myH1 = document.createElement("h1");
	myH1.textContent = "Hello World!";

newDiv.appendChild(myH1);

document.body.appendChild(newDiv);

var nextDiv = document.createElement("div");
	nextDiv.id = "second";

document.body.appendChild(nextDiv);

var newH1 = document.createElement("h1");
var t = document.createTextNode("My name is Bengy.");
	newH1.appendChild(t);
	nextDiv.appendChild(newH1);

var image = document.createElement("img");
var button = document.createElement("button");

image.src = "https://cdn1-www.dogtime.com/assets/uploads/2010/12/puppies.jpg"
button.innerText = "Click"
button.setAttribute("onclick", "hi()");

var images = [
	{
		path: "https://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg",
		desc: "This is a bulldog puppy"
	},
	{
		path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVecM35S3Hto2HkIHywIHRmFWWPQoS2CP30istrWLyJH0ioFzz",
		desc: "This is a golden retriever puppy"
	},
	{
		path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy51Lwg4yZHwGtecmv-Kfc1xe__Xv3BqzEZCz1b6hGc3LSye7q6A",
		desc: "This is a pug puppy"
	},
];

document.body.appendChild(image);
document.body.appendChild(button);
var counter = 0;
function hi() {
	counter++;
	if(counter >= images.length) {
		counter = 0
	}
	image.src = images[counter].path;
	image.alt = images[counter].desc;

};




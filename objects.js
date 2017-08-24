
//defining an object
var car = {
	make: "Honda",
	model: "Civic",
	color: "red",
	speed: 160,
	drive: function(){return "drive";}
};


//defining an array (also is an object)
var shoppinglist = [
	"Apple", "Orange", "Pear"
];

//embedding objects and arrays with other objects and arrays
var othercar = {
	make: "Acura",
	speed: 200,
	engine: {
		size: 2.0,
		make: "Honda",
		fuel: "petrol",
		pistons: ["piston1", "piston2"]
	}
};


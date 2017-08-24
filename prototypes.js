//color and weight properties vary, unlike the methods (verbs) which will stay the same for each new instance variable.
//So we will create a separate "protoype" apple object that specifically only calls the eat and throw functions.

function Apple (color, weight)
{
	this.color = color;
	this.weight = weight;
}	

Apple.protoype = {
	eat: function(){return this;},
	throw: function(){return "throw the apple";}
};

var apple1 = new Apple ("red", 99);
var apple2 = new Apple ("green", 109);
var apple3 = new Apple ("yellow", 299);
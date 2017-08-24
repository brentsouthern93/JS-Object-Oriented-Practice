//Constructor functions should (but don't have to) start with capital letters.

// Constructor function object that has "instructions" as it's parameters to be called to create copies of new objects.
function Apple( x, y, color, score )
{ 
//this.x refers to the property of the object. The "= x" refers to the value that will be changed. same goes for each other property.  
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
}

//intance variables for newly created apple objects with different properties.
var apple1 = new Apple( 10, 20, "red", 200 );
var apple2 = new Apple( 100, 200, "green", 50 );
var apple3 = new Apple( 20, 200, "pink", 10 );
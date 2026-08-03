/* var
- Function scoped.
- Can be redeclared.
- Can be reassigned.
- Hoisted and initialized with undefined.
- Initialization is optional.

let
- Block scoped.
- Cannot be redeclared in the same scope.
- Can be reassigned.
- Hoisted but stays in the Temporal Dead Zone until declared.
- Initialization is optional.

const
- Block scoped.
- Cannot be redeclared.
- Cannot be reassigned.
- Hoisted but stays in the Temporal Dead Zone until declared.
- Must be initialized at the time of declaration.
- Object and array contents can be modified, but the variable cannot be reassigned.
*/
{
    //block
    var x = 100
    console.log("x : ",x)
    let y = 200
    console.log("p : ",y)
}
    console.log("outer block x : ",x) 
//  console.log("outer block y : ",y) error

{
    let c = 20
}

{
    //console.log("c : ",c) error
}


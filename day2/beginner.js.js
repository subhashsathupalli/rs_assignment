function scope()
{
    console.log(val);
    val = "sathu";
    console.log(val);
    function closure()
    {
        val = "sathupalli";
        console.log(val);
    }
    return closure;
}

let val = "subbu"
let data = scope()
data();
console.log(val);
 
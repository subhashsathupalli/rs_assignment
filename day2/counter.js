const prompt = require("prompt-sync")({sigint:true});

function closure()
{
   function retrive()
    {
        let count =0;
        let value= parseInt(prompt("enter 1 for increment and 0 for decrement: "));
        if(value===1)
        {
            let cycle = prompt("enter number of times you want to increment the count: ");
            let i = increment(cycle);
            console.log(`you are incremented ${i} times`);
        }
        else if(value===0)
        {
           let cycle = prompt("enter number of times you want to  decrement the count: ");
           let i= decrement(cycle);
           console.log(`you are decremented ${cycle} times and value= ${i}`);
        } 
        else
        {
            console.log("wrong number");
            return;
        }

        function increment(times)
        {
            let i=1
            while(i<=times)
            {
                count++;
                i++;
            }
            return count;
        }
        function decrement(times)
        {
            let i=1;
            while(i<=times)
            {
                count--;
                i++
            }
        return count;
        }
    } 
  return retrive;
}
let data = closure();
data();
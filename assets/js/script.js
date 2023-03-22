const container = document.querySelector(".container");
let inner;

for(let i=1;i<=100;i++)
{
  const cell= document.createElement("div");
  cell.classList.add("cell");

  if(!(i%3) && !(i%5))
  {
    inner = "FizzBuzz";
    cell.classList.add("fizzbuzz");
  } else if(!(i%3)) {
    inner = "Fizz";
    cell.classList.add("fizz");
  } else if(!(i%5)) {
    inner = "Buzz"
    cell.classList.add("buzz");
  } else {
    inner = i;
  }  

  cell.append(inner)
  container.append(cell);
}
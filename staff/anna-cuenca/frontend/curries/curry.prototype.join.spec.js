console.log("TEST curry join");

var c = new Curry("a", "b", "c");

separator1 = "";
separator2 = "-";

console.log(
  "CASE for array1 = [a,b,c] and separator1 = (space) results in newArray = [abc]"
);
console.log(c.join(separator1));
//[abc]

console.log(
  "CASE for array1 = [a,b,c] and separator1 = (-) results in newArray = [a-b-c]"
);
console.log(c.join(separator2));
//[abc]

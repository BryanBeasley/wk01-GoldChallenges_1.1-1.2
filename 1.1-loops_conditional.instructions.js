// TODO - 1. Write a for loop that counts from 0-10. Each time the loop runs, it should invoke a callback function (see step 2).
/* ************************

!   for (let i = 0; i <= 10; i++) {
!   callBack(i);
!   }

************************** */
//TODO 2. Declare a function named callback. This function needs to accept a parameter. Inside the function, console.log each number (0-10) from the previously written for loop. Your console should look like the screenshot below. After you've successfully console.logged 0-10 (as pictured above), move on to step 3.
/* ************************

! for (let i = 0; i <= 10; i++) {
!  console.log(i);
!  callBack(i);
!   } 

************************** */
//TODO 3. Inside of the callback function, write a conditional that checks if the number is even or odd. If the number is even, console.log 'the number is even'. If the number is odd, console.log 'the number is odd'. Your console should now look like the screenshot below.

//TODO NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS
/* ************************

! for (let i = 0; i <= 10; i++) {
!  console.log(i);
!  callBack(i);
!   } 

************************** */


for (i = 0; i <= 10; i++) {
  console.log(i);
  callBack(i);
}
function callBack(i) {
  if (i === 0) {
    console.log("the number is even");
  } else if (i % 2 === 0) {
    console.log("the number is even");
  } else {
    console.log("the number is odd");
  }
}
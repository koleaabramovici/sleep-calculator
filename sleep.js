function getSleepHours(day) {
  switch(day){
    case 'monday':
      return 9;
    case 'tuesday':
      return 8;
    case 'wednesday':
      return 8;
    case 'thursday':
      return 7;
    case 'friday':
      return 9;
    case 'saturday':
      return 10;
    case 'sunday':
      return 9;           
  }
} 
//const getActualSleepHours = () =>{
  //const fun1 = 
  //getSleepHours('monday') +
  //getSleepHours('tuesday') +
  //getSleepHours('wednesday') +
  //getSleepHours('thursday') +
  //getSleepHours('friday') +
  //getSleepHours('saturday') +
  //getSleepHours('sunday');
  //return fun1;
//}
const getActualSleepHours = () => {
  const fun = 9 + 8 + 8 + 7 + 9 + 10 + 9;
  return fun;
} 


//const getIdealSleepHours = () => {
  //const idealHours = 8;
  //return idealHours * 7;
//}
const getIdealSleepHours = (num1) => {
  return num1 * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
   if(actualSleepHours === idealSleepHours){
     console.log('User got the perfect amount of sleep.');
   } else if(actualSleepHours > idealSleepHours) {
     console.log('User got 4 hours more sleep than nedeed.');
   } else if(actualSleepHours < idealSleepHours) {
     console.log('User should get some rest.')
   }
}

console.log(calculateSleepDebt())















    


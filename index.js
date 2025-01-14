function scuberGreetingForFeet(distance){
  // Write your code here!
  // If the ride is less than or equal to 400 feet, customer gets a free sample
  // If the ride is between 400 and 2000, return 'That will be twenty bucks.'
  // If the ride is between 2000 and 2500, return 'I will gladly take your thirty bucks.'
  // If the ride is more than 2500 feet, return 'No can do.'
  if (distance <= 400) {
    return 'This one is on me!';
    } else if (distance >=400 && distance <= 2000) {
      return 'That will be twenty bucks.';
    } else if (distance >= 2000 && distance <= 2500) {
      return 'I will gladly take your thirty bucks.';
    } else if (distance >= 2500) {
      return 'No can do.'
    }
  }

  // If the city is 'NYC', return 'Ok, sounds good.'
  // If the city is not 'NYC', return 'No go.'
  function ternaryCheckCity(city){
    return city === 'NYC' ? 'Ok, sounds good.': 'No go.'
  }

  // If the tip is generous, return 'Thank you so much.'
  // If the tip is not as generous, return 'Thank you.'
  // Anything else, 'Bye.'
  function switchOnCharmFromTip(tip){
    switch (tip) {
      case 'generous':
        return 'Thank you so much.'
      case 'not as generous':
        return 'Thank you.'
      case 'thanks for everything':
        return 'Bye.'
    }
  }
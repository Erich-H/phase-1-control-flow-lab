function scuberGreetingForFeet(ride){
  // Write your code here!
  const free = "This one is on me!"
  const charged= "I will gladly take your thirty bucks."
  const notAllowed = "No can do."
  if(ride <= 400){
    return free
  }
  else if (ride > 2000  && ride < 2500){
    return charged
  }
  else {
    return notAllowed
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const isNYC = "Ok, sounds good."
  const noGo = "No go."
  return (city === "NYC" ? isNYC: noGo)
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return "Thank you so much."
    break
    case 'not as generous':
      return "Thank you."
    break
    case 'thanks for everything':
      return "Bye."
    break
  }
}
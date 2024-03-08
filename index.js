function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(message = "go to the office") {
    return `This Monday, I will ${message}.`
}

function wrapAdjective(highlight) {
  return function(adjective) {
    return `You are ${highlight}${adjective}${highlight}!`;
  }
}






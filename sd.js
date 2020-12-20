const getSleepHours = day =>{
    if(day === 'Monday'){
      return 8
    }
    else if(day === 'Tuesday'){
      return 3
    }
  
    else if(day === 'Wednesday'){
      return 8
    }
  
    else if(day === 'Thursday'){
      return 6
    }
  
    else if(day === 'Friday'){
      return 8
    }
  
    else if(day === 'Saturday'){
      return 10
    }
  
    else if(day === 'Sunday'){
      return 8
    }
  }
  
  const getActualSleepHours = () =>{
   return  getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')  
  }
  
  //console.log(getActualSleepHours())
  
  const getIdealSleepHours = () => {
    let idealHours= 8
    return idealHours * 7
  }
  
  //console.log(getIdealSleepHours())
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()
  
    if(actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep')
    }
  
    else if(actualSleepHours > idealSleepHours){
      console.log('You got' + (actualAleepHours - idealSleepHours) + 'more sleep than you need')
    }
  
    else if(actualSleepHours < idealSleepHours){
      console.log('You got ' +  (idealSleepHours - actualSleepHours) + ' hours less sleep than you need this week. Get some rest')
    }
  }
  
  console.log(calculateSleepDebt())
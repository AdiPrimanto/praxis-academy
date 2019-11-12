//https://medium.com/easyread/penerapan-oop-dalam-javascript-part-1-98ed3a427e77

class Car {
  
    constructor(type, color) {
      this.type =  type
      this.color = color
      this.engineStatus = 'off'
    }
    
    engineStart () {
      
      this.engineStatus = 'on'
      console.log('engine start')
    }
    
    engingeStop () {
      this.engineStatus = 'off'
      console.log('engine start')
    }
    
    static isEngineOn (car) {
      if (car.engineStatus === 'on') {
        console.log('Engine On')
      } else {
        console.log('Engine off')
      }
    }    
    
  }
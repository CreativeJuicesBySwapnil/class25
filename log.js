class Log extends Base{
    constructor(x,y,h,AB){
    super(x,y,20,h,AB)
       this.image=loadImage("sprites/wood2.png")
       Matter.Body.setAngle(this.body,AB)
           }

    
}
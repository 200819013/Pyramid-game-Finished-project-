class SlingShot{
    constructor(bodyA, pointB){
        //for additional properties
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 70
        }
        //this is a key word used to denote object of this class
        //we are taking bodyA and pointB from the programmer to creating the object
        this.pointB = pointB
        //object with constraint property
        this.body = Constraint.create(options);
        //adds this.sling to our world
        World.add(world, this.body);
    }

    fly(){
        //null means nothing and the constaint is released using this function
        this.body.bodyA = null;
    }
    attach(body){
        this.body.bodyA = body
        
    }

    display(){
        if(this.body.bodyA){
            push()
            strokeWeight(3)
            stroke("yellow")
            line(this.body.bodyA.position.x, this.body.bodyA.position.y,this.pointB.x,this.pointB.y)
            pop()

            //line(starting point,ending point)
            //line(x1,y1,x2,y2)
            
    }
     
} 

}
class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }

        this.sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.sling);
    }

    attatch(body) {
        this.sling.bodyA = body; 
    } 

    fly() {
        this.sling.bodyA = null;
    }

    display() {
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(7);
            stroke("rgb(42, 23, 8)")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
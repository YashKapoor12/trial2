class Chain{
	constructor(xx,yy){
	var options={
		bodyA:character1.character,
		pointB:{x:xx,y:yy},
		stiffness:0.05,
		length:50
	};
    this.chain=Constraint.create(options);
    this.xx=xx;
    this.yy=yy;
	World.add(world,this.chain);
	}
	display(){
		if(this.chain.bodyA){
			push();
			var pos=this.chain.bodyA.position;
			stroke('blue');
			strokeWeight(3)
			line(pos.x,pos.y,this.xx,this.yy)
			pop()
		}
	}	
	release(){
		this.chain.bodyA=null;
		World.remove(world,this.chain)
	}
}
class Platform{
	constructor(x,y,w,h){
		var options={
			isStatic:true,
			restitution:0,
			friction:0.7
		}
		this.body=Bodies.rectangle(x,y,w,h,options);
		this.w=w;
		this.h=h;
		World.add(world,this.body);
	}

	display(){
		push();
		var pos=this.body.position;
		translate(pos.x,pos.y);
		rectMode(CENTER)
		fill('cyan')
		rect(0,0,this.w,this.h);
		pop();
	}
}
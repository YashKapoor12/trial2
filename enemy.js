class Boss{
	constructor(x,y,w,h){
		var options={
			isStatic:false
		}
		this.body=Bodies.rectangle(x,y,w,h,options);
		this.w=w;
		this.h=h;
		World.add(world,this.body)
	}
	display(){
		push();
		rectMode(CENTER)
		var pos=this.body.position;
		translate(pos.x,pos.y);
		rect(0,0,this.w,this.h);
		pop();
	}
}
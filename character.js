class Character{
	constructor(x,y,w,h){
		var options={
			restitution:0,
			friction:1.9
		}
		this.character=Bodies.rectangle(x,y,w,h,options);
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;		
		World.add(world,this.character);
	}
	display(img){
		push();
		var pos=this.character.position;
		translate(pos.x,pos.y);
		var angle=this.character.angle;
		rotate(angle)
		imageMode(CENTER)
		image(img,0,0,this.w,this.h);
		pop();

	}
}
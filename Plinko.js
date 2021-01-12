class Plinko
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=5;
		
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var particlepos=this.body.position;		
			push()
			translate(particlepos.x, particlepos.y);
			fill("white");
			ellipseMode(RADIUS)
			ellipse( 0,0,this.r*2, this.r*2)
			pop()
			
	}

}
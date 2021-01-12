class Particle
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0.5,
			friction:1,
			density:0.5
			}
		this.x=x;
		this.y=y;
		this.r=5;
		this.color=color(random(0,255), random(0,255), random(0,255));
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var particlepos=this.body.position;		
			push()
			translate(particlepos.x, particlepos.y);
			fill(this.color);
			ellipseMode(RADIUS)
			ellipse( 0,0,this.r*2, this.r*2)
			pop()
			
	}

}
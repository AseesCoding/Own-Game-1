var hakuhealth = 200;
var narutohealth = 100;

function preload()
{

backgroundimg = loadImage("images/backgroundimg.jpg")
hakuimg = loadImage("images/enemyhakuimg.png")
narutoimg = loadImage("images/narutoimg.png")
weaponimg = loadImage("images/weapon_.png")
enemyweaponimg = loadImage("images/enemyweapon.png")
fireballimg = loadAnimation("images/finalfire1.png","images/finalfire2.png")


}
function setup() 
{
  createCanvas(1500,700);

  naruto = createSprite(1200,500, 50, 50);
  naruto.addImage(narutoimg)
  naruto.scale=0.7

  enemy = createSprite(200,500,50,50)
  enemy.addImage(hakuimg)
  enemy.scale=0.7

  invisibleG = createSprite(750,700,1500,20)
  
  hakuweaponGrp = new Group();
  fireballGrp = new Group();
}

function draw() 
{
  background(backgroundimg);  
  drawSprites();
  fill("blue")
  textSize(20)
  text("x : "+mouseX+"y : "+mouseY,mouseX,mouseY)

  stroke("yellow")
  strokeWeight(5)
  text("Haku Health : "+hakuhealth,200,80)
  text("Naruto Health : "+narutohealth,1100,80)

  if(keyDown("1"))
  {
      spawnfireball()
  }
  spawnenemyweapon()
  console.log(naruto.y)
  if(keyDown("space")&&naruto.y>350)
  {
    naruto.velocityY=-6
  }

  naruto.velocityY=naruto.velocityY+0.2
  naruto.collide(invisibleG)

  if(hakuweaponGrp.isTouching(naruto))
  {
    hakuweaponGrp.destroyEach();
    narutohealth = narutohealth-10
  }

  if(fireballGrp.isTouching(enemy))
  {
    fireballGrp.destroyEach();
    hakuhealth = hakuhealth-10;
  }
}

function spawnfireball()
{
  fireball = createSprite(naruto.x,naruto.y,50,50)
  fireball.addAnimation("fireball",fireballimg)
  fireball.scale=0.4

  fireball.velocityX=random(-4,-8)

  fireballGrp.add(fireball);
}
function spawnenemyweapon()
{
  if(frameCount % 150 === 0)
  {
  hakuweapon = createSprite(315,500,50,50)
  hakuweapon.addImage(enemyweaponimg)
  hakuweapon.scale=0.3
  hakuweapon.velocityX=8

  hakuweaponGrp.add(hakuweapon);
}
} 
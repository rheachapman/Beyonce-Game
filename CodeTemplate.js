$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	initializeLib(ctx);
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;

	numObjects = 0;
	numObjectsLoaded =0;
	var screen = 0;
	var keys = [];
	var key;
	var name;
	var grade1, grade2, grad3, grade4
	var choice1
	var button1 =createButton (230,100,200,100, 'Images/play.png', "PRESS ME COOL KID")
		button1.job = function (){screen = 3
		mySound.play();
	}	
	var button2 =createButton (230,200,200,100, 'Images/instructions.png', "PRESS ME COOL KID")
		button2.job = function (){screen = 4
	}
	var button3 =createButton (230,300,200,100, 'Images/credits.png', "PRESS ME COOL KID")
		button3.job = function (){screen = 6
	}
	


	// ("I gave it a job, now back to work!");
		//alert ("for good measure");
		//alert("Play, wait a couple seconds")
		
	
		
	
	//var road = createObjectPic ("Images/rr.jpeg")
	var bey = createObjectPic ("Images/bey.png")
	var bey2 = createObjectPic ("Images/bey2.png")
	var car = createObjectPic ("Images/car.png")
	var ivy = createObjectPic("Images/ivy.png");
	var car2 = createObjectPic ("Images/car2.png")	
	var mySound =addSound ('Sounds/crazy.mp3', true);
	var thumb = createObjectPic ("Images/thumbs.png")
	
	
	
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{

	/////////////////////
	///STATE VARIABLES
	/// All your variables get their start values here.
	/*
	console.log("WOOOOOOO!!!");
	name = prompt ("Enter a name!","Queen Bee");
	console.log ("The name entered is " + name);
	grade1 = parseInt(prompt ("Gimmie a grade!", "The first grade please"));
	grade2 = parseInt(prompt ("Gimmie a grade!", "The second grade please"));
	grade3 = parseInt(prompt ("Gimmie a grade!", "The third grade please"));
	grade4 = parseInt(prompt ("Gimmie a grade!", "The fourth grade please"));
	
	
	
	if (grade1 > 100){
		grade1 = parseInt(prompt ("Gimmie a grade!", "The first grade please"));
	}
	if (grade2 > 100 || grade2 < 0){
		grade2 = parseInt(prompt ("Grade 2 Invalid!", "Do Better"));
	}
	if (grade3 > 100 || grade3 < 0){
		grade3 = parseInt(prompt ("Grade 3 Invalid!", "Do Better"));
	}
	if (grade4 > 100 || grade4 < 0){
		grade4 = parseInt(prompt ("Grade 4 Invalid!", "Do Better"));
	}
	
	//Job is to upgrade grade1 checker and do grade 3 & 4
	
	
	console.log ("The average grade is " + (grade1+grade2+grade3+grade4)/4);
	//Now that we have grade checking lets do some more names!
	name = prompt ("Enter a new name!","Right here");
	if(name == "Rhea"){
		console.log ("That's a great name, in fact its the best name. Suppa Cool");
	}else{
		console.log ("Get a new name");
	}
	
	}
	name = prompt ("What's your name?" , "Type your name, Beyonce");
	if (name== "Beyonce") {
		console.log ("Welcome Queen Bee, would you like to...?");
		choice1= prompt ("A-Sing         B- Dance", "");
	
		if (choice1== "A"|| choice1 =='a') {
			console.log ("What song?");
			choice = prompt ("A - Drunk in Love B- Single Ladies ");
			if(choice == "A" || choice == 'a') {//Management option A
				console.log ("Good pick, click on the song below ")
			}	
		} if (choice1=="B" || choice1 == 'b') { //Management option B
			console.log ("What song?");
			choice = prompt ("A - Drunk in Love B- Single Ladies ");
		if(choice == "A" || choice == 'a') {//Management option C
			console.log ("Click on the song below");
		}
		}
	*/
		
    /*road.x=1;
	road.y=10
	road.speedx = 9;
	road.speedy = 9;
	road.scale = .35;
	*/
	
	
	bey.x=1;
	bey.y=10
	bey.speedx = 9;
	bey.speedy = 9;
	bey.scale = .35;
	
	bey2.x=1;
	bey2.y=10
	bey2.speedx = 9;
	bey2.speedy = 9;
	bey2.scale = .185;
	
	
	car.x=90;
	car.y=100
	car.speedx = -35;
	car.speedy = -13;
	car.scale = .7;
	
	car2.x=455;
	car2.y=300
	car2.speedx = -45;
	car2.speedy = -13;
	car2.scale = .7;
	
	ivy.x=500;
	ivy.y=400
	ivy.speedx = 9;
	ivy.speedy = 9;
	ivy.scale = .15;
	
	// A whole new story!
	
	/*
	
	*/
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	


	
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		///////////////////////
		//	CLEAR THE SCREEN
		////////////////////
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0, w, h);	
		
		
		
		if(screen == 0){
		/////////////////////
		//	LOADING SCREEN
			ctx.fillStyle = 'red';
			ctx.fillText("Loading Images & Sounds: " + numObjectsLoaded + "/" + numObjects,100,100)
		
			if(numObjectsLoaded >= numObjects) screen = 1;
		
		}else if(screen == 1){
		////////////////////
		//	MAIN MENU
		
		button1.draw ();
			ctx.fillStyle = 'white'
			ctx.fillText("Loaded",100,100);
		button2.draw();
		button3.draw();
		
		}else if(screen == 2){
		
		////////////////////
		//	GAME SCREEN 1
		}
		else if(screen == 3){
		//another game screen
		//road.draw ();
		car.x = car.x + car.speedx
			if (car.x>  w- car.width   || car.x <+7) car.speedx = car.speedx * -1
		car2.x = car2.x + car2.speedx
			if (car2.x> w - car2.width || car2.x <+7) car2.speedx = car2.speedx * -1
		bey.draw ();
		bey2.draw ();
		car.draw ();
		car2.draw ();
		ivy.draw ();
		
		if(car.collideObject (bey)) {
			car.speedx = car.speedx * -1;
			car.speedy = car.speedy * -1;
			//screen =7
			//
			location.reload ();}
	
		if(car.collideObject (bey2)) {
				car.speedx = car.speedx * -1;
				car.speedy = car.speedy * -1;
				location.reload ();
				}
			
		if(car2.collideObject (bey)) {
				car2.speedx = car2.speedx * -1;
				car2.speedy = car2.speedy * -1;
				location.reload ();
				}
	
		if(car2.collideObject (bey2)) {
				car2.speedx = car2.speedx * -1;
				car2.speedy = car2.speedy * -1;
				location.reload ();
				}	
			
		if(bey.collideObject (ivy)) {
			bey.speedx = bey.speedx * -1;
			bey.speedy = bey.speedy * -1;
			screen =7
			}
		
		if(bey2.collideObject (ivy)) {
			bey2.speedx = bey2.speedx * -1;
			bey2.speedy = bey2.speedy * -1;
			screen =8
			}
		
		}else if(screen == 4){
		 ctx.fillstyle='black'
		 ctx.fillRect (0,0,w,h);
		 ctx.fillStyle= 'black'
		 ctx.fillText ("Instructions",250,80)
		 ctx.font = '20pt Verdana'
		 ctx.fillText ("Try to get Beyonce to her daughter",80,110)
		 ctx.fillText ("Blue Ivy, without bumping into the",85,140)
		 ctx.fillText ("paparazzi!",250,170)
		 ctx.fillText ("Good luck and Have fun!",160,200)
		}
		else if(screen == 6){
		ctx.fillstyle='black'
		 ctx.fillRect (0,0,w,h);
		 ctx.fillStyle= 'black'
		 ctx.fillText ("Credits:",245,80)
		 ctx.font = '20pt Verdana'
		 ctx.fillText ("Producer",240,110)
		 ctx.fillText ("Rhea Chapman",200,140)
		 ctx.fillText ("Assistant Producers",175,170)
		 ctx.fillText ("Mr.Guzy, Juliana Commisso, Laureta Hasku",40,200)
		 ctx.fillText ("and Jaeden Macisaac",170,230)
		 }
		
		else if(screen == 7){
		ctx.fillstyle='black'
		ctx.fillRect (0,0,w,h);
		ctx.fillStyle= 'black'
		ctx.fillText ("Congratulation",220,80)
		ctx.font = '20pt Verdana'
		ctx.fillText ("YOU WON, BEE!",210,110)
		thumb.draw ();
		thumb.x=200;
		thumb.y=150
		 }
		 
		else if(screen == 8){
		ctx.fillstyle='black'
		ctx.fillRect (0,0,w,h);
		ctx.fillStyle= 'black'
		ctx.fillText ("Congratulation",220,80)
		ctx.font = '20pt Verdana'
		ctx.fillText ("YOU WON, BEE!",210,110)
		thumb.draw ();
		thumb.x=200;
		thumb.y=150
		
		 }
		
		
		
		for(var i=0; i < keys.length; i++){
		key = keys[i];
		if(key==37){//left
			bey.x -= bey.speedx
				if(bey.x <0) bey.x = 640
	
		}else if (key == 38){//up
			bey.y -= bey.speedy
			if(bey.y <0) bey.y = 480
	
		}else if (key == 39){//right
			bey.x += bey.speedx
			if(bey.x >640) bey.x = 0
	
		}else if (key == 40){//down
			bey.y += bey.speedy
			if(bey.y >480) bey.y = 0			
		}
		
		if(key==65){//left
			bey2.x -= bey2.speedx
				if(bey2.x <0) bey2.x = 640
	
		}else if (key == 87){//up
			bey2.y -= bey2.speedy
			if(bey2.y <0) bey2.y = 480
	
		}else if (key == 68){//right
			bey2.x += bey2.speedx
			if(bey2.x >640) bey2.x = 0
	
		}else if (key == 83){//down
			bey2.y += bey2.speedy
			if(bey2.y >480) bey2.y = 0
		}
		
		
		}
		
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	

	function getKeyIndex(val){
		var result = -1;
		for(var i=0; i < keys.length;i++){
			if(keys[i] == val) result = i;
		}
		
		return result
	}
	
	
	function removeKeyIndex(val){
		
		for(var i=0; i < keys.length;i++){
			if(keys[i] == val) {
				keys.splice(i,1)
				i--;
			}
		}
		
		
	}
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	
	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		//Runs this code whenever the mouse is clicked
		//For more screens for your game, just add more else ifs
		if(screen == 0){
		
		
		}else if (screen == 1){
		if(button1.isMouseOver()) button1.job()
		
		if(button2.isMouseOver()) button2.job()	
		if(button3.isMouseOver()) button3.job()	
		}
		
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;
		updateMouse(mx,my);

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		//var key = evt.keyCode;
		keys.push(evt.keyCode)
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
	// up 38
	//down 40
	//right 39
	//left 37
	
	/*
		if(key==37){//left
			bey.x -= bey.speedx
				if(bey.x <0) bey.x = 640
	
		}else if (key == 38){//up
			bey.y -= bey.speedy
			if(bey.y <0) bey.y = 480
	
		}else if (key == 39){//right
			bey.x += bey.speedx
			if(bey.x >640) bey.x = 0
	
		}else if (key == 40){//down
			bey.y += bey.speedy
			if(bey.y >480) bey.y = 0
		}
		
		if(key==65){//left
			bey2.x -= bey2.speedx
				if(bey2.x <0) bey2.x = 640
	
		}else if (key == 87){//up
			bey2.y -= bey2.speedy
			if(bey2.y <0) bey2.y = 480
	
		}else if (key == 68){//right
			bey2.x += bey2.speedx
			if(bey2.x >640) bey2.x = 0
	
		}else if (key == 83){//down
			bey2.y += bey2.speedy
			if(bey2.y >480) bey2.y = 0
		}
		
		*/
	
	
	}, false); //End the event listener

	
window.addEventListener('keyup', function(evt){
		
		removeKeyIndex(evt.keyCode)
	
	}, false);
	

})


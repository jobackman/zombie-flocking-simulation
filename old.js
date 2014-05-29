// SPAWNZOMBIE

			/*	var zombie = new THREE.Mesh( new THREE.CylinderGeometry( 0, 15, 15, 12 ), new THREE.MeshBasicMaterial( {color: 0xff0000, wireframe: true}) );		
				
				zombie.position.x = Math.floor(Math.random() * planeWidth) - planeWidth / 2;
				zombie.position.y = Math.floor(Math.random() * planeHeight) - planeHeight / 2;
				zombie.dx = Math.random() - 0.5;
				zombie.dy = Math.random() - 0.5;
				var len = Math.sqrt(zombie.dx*zombie.dx + zombie.dy*zombie.dy);
				zombie.dx /= len;
				zombie.dy /= len;
				zombie.rotation.z = Math.atan2(zombie.dy, zombie.dx);
	
				flock.push(zombie);				
				scene.add(zombie);
				*/
				
// -----------------------------------------------------------------------------------------------------------				
// SPAWNHUMAN


				/*
var human = new THREE.Mesh( new THREE.CylinderGeometry( 0, 15, 15, 12 ), new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe: true}) );		
				human.position.x = Math.floor(Math.random() * planeWidth) - planeWidth / 2;
				human.position.y = Math.floor(Math.random() * planeHeight) - planeHeight / 2;
				human.dx = Math.random() - 0.5;
				human.dy = Math.random() - 0.5;
				var len = Math.sqrt(human.dx*human.dx + human.dy*human.dy);
				human.dx /= len;
				human.dy /= len;
				human.bitten = 0;
				human.rotation.z = Math.atan2(human.dy, human.dx);
				
				people.push(human);
				scene.add(human);
*/


// -----------------------------------------------------------------------------------------------------------				
// CUBES:  init 

/*
			var geometry = new THREE.BoxGeometry( 50, 50, 50 );
			var material = new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.FlatShading, overdraw: 0.5 } );

			for ( var i = 0; i < numCubes; i ++ ) {
				var cube = new THREE.Mesh( geometry, material );

				cube.scale.z = Math.floor( Math.random() * 2 + 1 );

				cube.position.x = Math.floor( ( Math.random() * planeWidth - planeWidth/2) / 50 ) * 50 + 25;
				cube.position.z = cube.scale.z * 50 / 2;
				cube.position.y = Math.floor( ( Math.random() * planeHeight -planeHeight/2) / 50 ) * 50 + 25;
				
				cubes.push(cube);
				scene.add(cube);
			}
*/
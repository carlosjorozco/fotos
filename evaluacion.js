window.onload=cambiarimagen;

var imat1= "<img src='";
var tama= "'height='400vw' width='400'/>";

var lentra= "<img src='";
var lsali= "<img src='./principal.jpg' height='400vw' width='400'/>";



function cambiarimagen()
{
		var i1=document.getElementById('ima1');
		i1.addEventListener("click",function()
								{	
									clinEn("./moto1.jpg");
								}
								);
	
		i1.addEventListener("mouseover",function()
								{	
									entra("./moto1.jpg");
								}
								);
		
		i1.addEventListener("mouseout",salir);
									
				
								
		
		var i2=document.getElementById('ima2');
		i2.addEventListener("click",function()
								{	
									clinEn("./moto2.jpg");
								}
								);
		
		i2.addEventListener("mouseover",function()
								{	
									entra("./moto2.jpg");
								}
								);
		i2.addEventListener("mouseout",salir);
		

	
		var i3=document.getElementById('ima3');
		i3.addEventListener("click",function()
								{	
									clinEn("./moto3.jpg");
								}
								);
		
		i3.addEventListener("mouseover",function()
								{	
									entra("./moto3.jpg");
								}
								);
		i3.addEventListener("mouseout",salir);
		

		
		var i4=document.getElementById('ima4');
		i4.addEventListener("click",function()
									{	
									clinEn("./moto4.jpg");
									}
								);
		
		i4.addEventListener("mouseover",function()
								{	
									entra("./moto4.jpg");
								}
								);
		i4.addEventListener("mouseout",salir);
		
		
		var i5=document.getElementById('ima5');
		i5.addEventListener("click",function()
									{	
									clinEn("./moto5.jpg");
									}
									);
		
		i5.addEventListener("mouseover",function()
								{	
									entra("./moto5.jpg");
								}
								);
		i5.addEventListener("mouseout",salir);
		
		
		var i6=document.getElementById('ima6');
		i6.addEventListener("click",function()
									{
										clinEn("./moto6.jpg");
									}
									);
		
	
		i6.addEventListener("mouseover",function()
								{	
									entra("./moto6.jpg");
								}
								);
		i6.addEventListener("mouseout",salir);
		

		var i7=document.getElementById('ima7');
		i7.addEventListener("click",function(){	
										clinEn("./moto7.jpg");
									});
		
		i7.addEventListener("mouseover",function()
								{	
									entra("./moto7.jpg");
								}
								);
		i7.addEventListener("mouseout",salir);

		var i8=document.getElementById('ima8');
		i8.addEventListener("click",function(){	
										clinEn("./moto8.jpg");
									});

		i8.addEventListener("mouseover",function()
								{	
									entra("./moto8.jpg");
								}
								);
		i8.addEventListener("mouseout", salir);

		var i9=document.getElementById('ima9');
		i9.addEventListener("click",function(){	
										clinEn("./moto9.jpg");
									});
		
		i9.addEventListener("mouseover",function()
								{	
									entra("./moto9.jpg");
								}
								);	
		i9.addEventListener("mouseout",salir);
}

function clinEn(imagen){

	imat1 +=imagen;
	imat1 +=tama;
	var k=document.getElementById("imagenprincipal").innerHTML= imat1;
	lsali= imat1;
	imat1= "<img src='";
}


function entra(imagen){
	lentra +=imagen;
	lentra +=tama;
	var k=document.getElementById("imagenprincipal").innerHTML= lentra;
	lentra= "<img src='";
}
function salir(imagen){

	var k=document.getElementById("imagenprincipal").innerHTML= lsali;

	

	
}


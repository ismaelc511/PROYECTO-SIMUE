/* --------------------------------------------------------------------------*/
  /*                     FUNCIÓN especial - animaciones 			                    */
  /* ------------------------------------------------------------------------- */

		const ul =document.querySelector(".ul_contenedor");

		function frames(){
			const animacion = ul.animate([
				{transform: "Translatey(0px)"},
				{transform: "Translatey(-100px)"},
			],{
				easing:"linear",
				iteration:1,
				duration:500
			});
			return animacion.finished;
		}
		function displace(){
			frames()
			.then((res)=>{
				ul.appendChild(document.querySelector(".ul_contenedor >li"))
			})
		}
		this.setInterval(()=>{
			displace();
		},2000)



		const li =document.querySelector(".contenedor_imagenes_2");

		function framex(){
			const animaciones = li.animate([
				{transform: "Translatex(500px)"}
			],{
				easing:"linear",
				iterations:1,
				duration:600
			});
			return animaciones.finished;
		}
		function displaces(){
			framex()
			.then((res)=>{
				li.appendChild(document.querySelectorAll(".contenedor_imagenes_2 li")[0])
			})
		}
		this.setInterval(()=>{
			displaces();
		},5000)
//criar referencias ao elementos da pagina 
const frm = document.querySelector("form"); 
const resp1 = document.querySelector("h3"); 
const resp2 = document.querySelector("h4"); 

frm.addEventListener("submit", (e) => {
    //evita o envio do formulário 
    e.preventDefault(); 

    console.log("iuyiojkpoop")
   //obter os valores digitados
   const lado1 = Number(frm.inLado1.value); 
   const lado2 = Number(frm.inLado2.value); 
   const lado3 = Number(frm.inLado3.value); 

   const soma1 = (lado1 + lado2);
   const soma2 = (lado1 + lado3);
   const soma3 = (lado2 + lado3);

   if(soma1 < lado3){
        resp1.innerText = `Não pode formar um triangulo`;
   } else if(soma2 < lado2){
        resp1.innerText = `Não pode formar um triangulo`;
   } else if(soma3 < lado1){
        resp1.innerText = `Não pode formar um triangulo`;
   }else{
        resp1.innerText = `pode formar um triangulo`;
   }
   

   if((lado1 == lado2) && (lado2 == lado3) && (lado1 == lado3)){
        resp2.innerText = `Triangulo equilátero`;
        resp2.style.color = "red"; 
   }else if((lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)){
        resp2.innerText = `Triangulo escaleno`;
        resp2.style.color = "green"; 
    } else{
        resp2.innerText = `Triangulo isosceles`;
        resp2.style.color = "blue"; 
   }


   
})

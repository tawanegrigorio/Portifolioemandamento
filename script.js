function enviar() {
   const nome = document.getElementById('nome').value;
   const email = document.getElementById('email').value
   const mensagem = document.getElementById('mensagem').value; 

   const texto = `Oi Tawane, eu sou ${nome}.\n Este é o meu email: ${email}.\n ${mensagem}`;
   const numero = "+5588981520089";

   window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`);


}

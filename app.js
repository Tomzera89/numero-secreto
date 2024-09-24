alert('Seja Bem Vindo ao Jogo do Número Secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let palpite;
let tentativas = 1;

//while é um comando de repetição
while (palpite != numeroSecreto) {
   palpite = prompt(`Escolha um numero entre 1 e ${numeroMaximo}.`);
   if (palpite == numeroSecreto) {
      break;
   } else {
      if (palpite > numeroSecreto) {
         alert('Seu palpite é maior que o numero secreto! Tente novamente.');
      } else {
         if (palpite < numeroSecreto) {
            alert('Seu palpite é menor que o numero secreto! Tente novamente.');
         }
         //tentativas = tentativas + 1;
         tentativas++
      }
   }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }

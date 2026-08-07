// Módulo ESM é a vesão
// moderna e recomendada
// utiliza import/export

import {alugarFilme,devolverFilme} from './alugar-filme.js'

console.log(alugarFilme('barbie','R$65,12'))
console.log(alugarFilme('mickey','R$45,20'))
console.log(alugarFilme('shrek','R$58,90'))

console.log(devolverFilme('barbie'))
console.log(devolverFilme('mickey'))
console.log(devolverFilme('shrek'))

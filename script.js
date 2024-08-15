let nota = 275;

let tip = ((nota >= 50) && (nota <= 300))? nota * 0.15 : nota * 0.2;

let totalPrice = nota + tip;
console.log(`Nota a fost ${nota}, bacșișul a fost ${tip} și valoarea totală ${totalPrice}`);
alert('Відкрий Console');

var phonePrice = 15.678;
var tabletPrice = 123.965;
var laptopPrice = 90.2345;

var maxNumber = Math.max(phonePrice, tabletPrice, laptopPrice);
console.log(`Максимальна ціна товару: ${maxNumber}`);

var minNumber = Math.min(phonePrice, tabletPrice, laptopPrice);
console.log(`Мінімальна ціна товару: ${minNumber}`);

var ollPrice = phonePrice + tabletPrice + laptopPrice;
console.log(`Загальна сума всіх товарів складає: ${ollPrice}`);

var minRoundedPrice = Math.floor(phonePrice) + Math.floor(tabletPrice) + Math.floor(laptopPrice);
console.log(`Сума товарів з округленням в меншу сторону складає: ${minRoundedPrice}`);

var maxRoundedPrice = Math.ceil((ollPrice / 100)) * 100;
console.log(`Сума товарів округлена до сотень складає: ${maxRoundedPrice}`);

var evenOdd = minRoundedPrice % 2 == 0 ? true : false;
console.log(`Чи є сума всіх товарів парним числом?: ${evenOdd}`);

var change = 500 - ollPrice;
console.log(`Решта при купівлі всіх товарів складає: ${change}`);

var averagePrice = (ollPrice / 3).toFixed(2);
console.log(`Середнє значення цін, округлене до другого знаку після коми складає: ${averagePrice}`);

var discount = Math.random().toFixed(2);
console.log(`Ваша знижка складає: ${discount}%`)

var toPayCostumer = ollPrice - (ollPrice * discount).toFixed(2);
console.log(`Сума до оплати враховуючи знижку складає: ${toPayCostumer}`);

var costProduct = phonePrice / 2 + tabletPrice / 2 + laptopPrice / 2;

var profit = (costProduct - toPayCostumer).toFixed(2);
console.log(`Чистий прибуток складає: ${profit}`)
var urls = ['bosch-2000','bosch-3000','bosch-6000','bosch-9000','makita-td-110'];
var brands = ['BOSCH','Makita','Vagner','Mega','Proline'];
var titles = ['Перфоратор BOSCH BFG 2000','Перфоратор BOSCH BFG 3000','Перфоратор BOSCH BFG 6000','Перфоратор BOSCH BFG 9000','Шуруповерт Makita TD-110e'];

var products = [];
for (var i=0; i<18; i++){
	var product = {
		url: urls[getRandomNumber(0,urls.length)],
		brand: brands[getRandomNumber(0,brands.length)],
		title: titles[getRandomNumber(0,titles.length)],
		
	}
}
products.push(product);
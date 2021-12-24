//console.log('Hi');

//const add = document.querySelector('[data-action = "add"]');
var r = 0;

const htm = document.querySelector('.cardss');
const hm = document.querySelector('.nadpis');

window.addEventListener('click', function(event){
	if(event.target.hasAttribute('data-car')){
		console.log('u did');
const rr = ` <p style="border:2px solid #555; border-radius:5px; width: 200px; text-align:center;  margin:20px; padding:20px;" >Ваша корзина пуста </p>`;
		htm.remove();
 hm.insertAdjacentHTML('beforeend',rr);
		
	}
});
window.addEventListener('click', function(event){
	

  if(event.target.hasAttribute('data-cart')){
	const but = event.target.closest('.design-item');
	//event.target.closest('.nadpis').remove();

	const arr = {
		imgS: but.querySelector('.des-img').getAttribute('src'),
		cen: but.querySelector('.cena').innerText,
		
	};
const newOne = `  <div class = "design-it">

            <div class = "design-img">

              <a href="">
                <img src = "${arr.imgS}" style="width:100%; " alt = "" class = "des-img">
              </a>

            </div>
           
          </div>
          
          <div class = "design-title" align=”right”>

            <a href = "#" class = "name">Название: Купальный костюм</a>
            <p class = "dannye"> 
              
              Цвета:             
              розовый,белый <br> Размеры: X, XL, XS, L <br> Материал: Хлопок  <br> Цена: ${arr.cen} <br> ID товара: 010</p>
            
          </div>
           </div>
`;
	

	

r=++r;;
console.log(r);
//window.location.href='bucket.html';
htm.insertAdjacentHTML('beforeend',newOne);

	
}

});

if(r>=1){
	event.target.closest('.nadpis').remove();
		
}
total();

function total(){
	const id = document.querySelectorAll('.cardss');
	console.log(id);

	id.forEach(function(item){

		const prise =  item.querySelector('.cena');
		console.log(prise);
	})
}
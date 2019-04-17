
// Захостить на гитхабе приложение, которое:

// читает куки на клиенте, и если там есть дата последнего посещения, выводит ее на страницу
// пишет в куки на клиенте текущую дату посещения

let p = document.body.appendChild(document.createElement('p'));
var res = document.cookie
    .split ( "; " )
    .map ( x =>  {
        var tmp = x.split ( "=" );
        tmp[0] === 'Your last visit' ? p.innerText = tmp[0] + ' : '+ tmp[1].split( 'GMT' )[0]: p.innerText ='Hello! it is your first visit!';
})
 document.cookie =`Your last visit = ${new Date}`







//  localStorage
// Объявить функцию, которая будет вызываться в момент изменения хэш-части адреса страницы

// и сохранять в localStorage клиента hash-часть адреса страницы как pageId

// и время входа ( в секундах ) как startTime

// Назначить эту функцию обработчиком события hashchange объекта window

// Желательно, чтобы при изменении хеш-части адреса происходило обновление контента страницы без перезагрузки

// ( например, изменялся заголовок и картинка, чтобы создать иллюзию перехода на новую страницу )

// Отслеживать в панели разработчика изменения в localStorage



// let image =document.body.appendChild(document.createElement('img'));
let text =document.body.appendChild(document.createElement('p'));
document.body.style.backgroundImage=`url(https://picsum.photos/900/900/?random)`;
document.body.style.backgroundSize= 'cover';
document.body.style.fontSize = "xx-large";
const historyArr = [];
change = function() {
    historyArr.push( { "pageId": location.hash, "starttime": Math.round(new Date().getTime()/1000)});
    localStorage.setItem ( "history", JSON.stringify(historyArr));
    document.body.style.backgroundImage=`url(https://picsum.photos/900/900/?random/${Math.round((Math.random())*1000)})`;
    // image.src = `https://picsum.photos/200/300/?random/${Math.round((Math.random())*1000)}`;
    text.innerHTML = 'This is page number :' + location.hash.substring(1);
};

window.addEventListener('hashchange',change);






// Напилить код, который:

// вставляет кнопку на страницу
// добавляет обработчика события click кнопки
// Обработчик события click:

// вычисляет случайное целое число от 1 до 20000 и помещает его в переменную winner
// добавляет :point_right: картинку
// ждет 4 секунды
// плавно изменяет непрозрачность картинки до 0, в процессе изменяя src картинки на :point_right: новое значение
// плавно изменяет непрозрачность картинки до 1
// ждет еще 2 секунды, и делает fetch-запрос на гитхабовский API, чтобы получить данные юзера под номером winner
// при получении ответа изменяет src картинки на аватарку юзера, а так же вставляет логин юзера под фотографией
// ждет еще 10 секунд и удаляет картинку и подпись
// На время показа картинок кнопку лучше прятать




var addElem = ( tagName, container ) =>
    ( container ? container : document.body )
        .appendChild (
            document.createElement ( tagName )
        );

var timeOut = time => new Promise (
    resolve => setTimeout ( () => resolve(), time )
);

var container = addElem ( "div" )
container.className = "flex-container";
var startButton = addElem ( 'button', container );
startButton.innerText = 'Крутить рулетку';

startButton.onclick = event => {
    var winnwer = Math.round ( Math.random() * 20000 );
    var user;
    event.target.style.display = "none";
    function show( photoURL, login ) {
        img.src = photoURL;
        user = addElem ( "h4", container );
        user.innerText = `winner: ${login}`;
    }
    var img = addElem( "img", container );
    img.height = "200";
    img.src = "https://thumbs.gfycat.com/LivelyObviousAnhinga-size_restricted.gif";
    img.style.transition = "all 0.5s";
    timeOut ( 2500 )
        .then ( () => img.src = "https://thumbs.gfycat.com/OddWideHookersealion-small.gif" );
    timeOut ( 1800 )
        .then ( () => img.style.opacity = 0 );
    timeOut ( 2500 )
        .then ( () => img.style.opacity = 1 );
    timeOut ( 2500 )
        .then (
            () => fetch ( `https://api.github.com/users?since=${winnwer}` )
                      .then ( response => response.json()
                          .then ( users => show ( users[0].avatar_url, users[0].login ) )
                      )
        )
    timeOut ( 10000 )
        .then ( () => {
            img.remove();
            user.remove();
            event.target.style.display = "block";
        })
};

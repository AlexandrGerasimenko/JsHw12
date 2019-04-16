
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


console.log(location.hash);
window.onhashchange = function() {
    localStorage.setItem (  {"name":"Иван","lastVisit":"27.02.2018","lastPage":"/home/page_07"} );
    alert( 'Спасибо' )}
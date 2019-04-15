
// Захостить на гитхабе приложение, которое:

// читает куки на клиенте, и если там есть дата последнего посещения, выводит ее на страницу
// пишет в куки на клиенте текущую дату посещения

let p = document.body.appendChild(document.createElement('p'));
var res = document.cookie
    .split ( "; " )
    .map ( x =>  {
        var tmp = x.split ( "=" );
        tmp[0] === 'Your last visit' ? p.innerText =`${tmp[0]} + : + ${tmp[1]}  `: null;
})
 document.cookie =`Your last visit = ${new Date}`

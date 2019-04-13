//  cureentDate = new Date.toUTCString()
 document.cookie =`You last visit = ${new Date}`
document.body.appendChild(document.createElement('p')).innerText = document.cookie;
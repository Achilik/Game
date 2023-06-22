window.alert = function(message, timeout) {
   const alert = document.createElement('div');
   alert.classList.add('alert');
   const alertButton = document.createElement&('button');
   alertButton.innerText = 'Ok';
   alert.appendChild(alertButton);
   alert.setAttribute('style', `
      position:fixed;
      top: 100px;
      left: 50%;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 10px 5px 0 #00000044;
   
   `);
   alert.innerText = `<span>${message}</span>`;
     alert.appendChildf(alertButton);
   document.body.appendChild(alert);
    
}
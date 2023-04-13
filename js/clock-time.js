webcg.on('play', function () {
    const overlay = document.querySelector('.overlay')
    // Swap intro and outro classes
    overlay.style.opacity = 1;
  
    var clock = document.querySelector('.clock')
    function updateTime() {
      var d = new Date();
      clock.textContent = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() + ':' + (d.getSeconds() < 10 ? '0' : '') + d.getSeconds() ;
    }
  
    updateTime();
    setInterval(updateTime, 1000);
  })
  webcg.on('stop', function () {
    const overlay = document.querySelector('.overlay')
    // Swap intro and outro classes
    overlay.style.opacity = 0;
  })
  
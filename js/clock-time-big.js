webcg.on('data', function (data) {
  document.querySelector('.line-1').innerHTML = data.f0 ? data.f0.text || data.f0 : '';
  document.querySelector('.line-2').innerHTML = data.f1 ? data.f1.text || data.f1 : '';
})

webcg.on('play', function () {
  const overlay = document.querySelector('.overlay')
  // Swap intro and outro classes
  overlay.style.opacity = 1;

  var clock = document.querySelector('.time')
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


// Set initial data for webcg-devtools
window.debugData = { 'f0': 'Lower third with a subtitle', 'f1': 'and CSS animations' }
var h;
var m;
var s;

webcg.on('data', function (data) {
  h = data.f0 ? data.f0.text || data.f0 : '';
  m = data.f1 ? data.f1.text || data.f1 : '';
  s = data.f2 ? data.f2.text || data.f2 : '';
  document.querySelector('.line-1').innerHTML = data.f3 ? data.f3.text || data.f3 : '';
  document.querySelector('.line-2').innerHTML = data.f4 ? data.f4.text || data.f4 : '';
})

webcg.on("play", function () {
  const overlay = document.querySelector(".overlay");
  // Swap intro and outro classes
  overlay.style.opacity = 1;

  

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }

  function tick() {
    var start = new Date;
    start.setHours(h,m,s);

    var now = new Date;
    if (now > start) { // too late, go to tomorrow
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    var ss = pad(remain % 60);
    document.querySelector('.countdown').innerHTML =
      hh + ":" + mm + ":" + ss;
    setTimeout(tick, 1000);
  }
  tick();
});
webcg.on("stop", function () {
  const overlay = document.querySelector(".overlay");
  // Swap intro and outro classes
  overlay.style.opacity = 0;
});

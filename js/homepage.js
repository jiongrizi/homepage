/**
 * Created by Administrator on 2019/11/1.
 */
window.onload = function() {
  var isMobile = window.matchMedia && window.matchMedia('(max-width: 735px)').matches
  var docHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  var docWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var controller = new ScrollMagic.Controller();

  var tween = new TimelineMax()
    .to('.parallax-bg img', 10, { y: '-50%' })

  var scene = new ScrollMagic.Scene({
    triggerElement: ".section-parallax",
    triggerHook: 'onEnter',
    duration: docHeight + document.querySelector('.section-parallax').offsetHeight
  })
    .setTween(tween)
    .addTo(controller);

  function tweenFn(container) {
    return new TimelineMax()
      .add('Start')
      .to(container + ' .font-headline-4', 1, { y: 0, opacity: 1 }, 'Start')
      .to(container + ' .font-subtitle', 1, { y: 0, opacity: 1 }, "-=0.5")
      .to(container + ' .ant-image', 1, { y: 0, opacity: 1 }, 'Start')
  }

  for(var i=1; i <= 5; i++) {
    new ScrollMagic.Scene({
      triggerElement: ".section-point-" + i ,
      triggerHook: 'onCenter'
    })
      .setTween(tweenFn(".section-point-" + i ))
      .addTo(controller);
  }

  var scenePackage = new ScrollMagic.Scene({
    triggerElement: ".section-package",
    triggerHook: 'onEnter',
    duration: docHeight + document.querySelector('.section-package').offsetHeight
  })
    .setTween(
      new TimelineMax()
        .to('.package-bg img', 10, { y: function () {
          return -(docWidth * 853 / 1280 - 800)
        } })
    )
    .addTo(controller);
}
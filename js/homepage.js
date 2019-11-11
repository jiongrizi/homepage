/**
 * Created by Administrator on 2019/11/1.
 */
window.onload = function() {
  //配置
  var config = {
    vx: 4,	//小球x轴速度,正为右，负为左
    vy: 4,	//小球y轴速度
    height: 2,	//小球高宽，其实为正方形，所以不宜太大
    width: 2,
    count: 200,		//点个数
    color: "255, 255, 255", 	//点颜色
    stroke: "220, 220, 220", 		//线条颜色
    dist: 6000, 	//点吸附距离
    e_dist: 20000, 	//鼠标吸附加速距离
    max_conn: 10 	//点到点最大连接数
  }

  //调用
  CanvasParticle(config);

  var docHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  var controller = new ScrollMagic.Controller();

  var tween = new TimelineMax()
    .to('.parallax-bg', 10, { y: '50%' })


  var scene = new ScrollMagic.Scene({
    triggerElement: ".section-parallax",
    triggerHook: 'onEnter',
    duration: docHeight + document.querySelector('.section-parallax').offsetHeight
  })
    .setTween(tween)
    .addIndicators({name: "loop"})
    .addTo(controller);
}
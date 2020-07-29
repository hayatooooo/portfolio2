function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  //要素を指定し、styleを設定
  TweenMax.set("svg", {
    visibility: "visible"
  });

  //回数分のリピート
  const circleTimeline = new TimelineMax({repeat: -1});

  //circleクラスの要素を0.4秒かけてfill-opacity(図形の内部の不透明度を指定)を1にする。0.2秒毎に実行
  circleTimeline.staggerTo(".circle circle", 0.4, {
    attr: {
      "fill-opacity": 1
    }
  }, 0.2)
  //circleクラスの要素を0.4秒かけてfill-opacity(図形の内部の不透明度を指定)を0にする。0.2秒毎に実行
  .staggerTo(".circle circle", 0.4, {
    attr: {
      "fill-opacity": 0
    }
  }, 0.2, 0.4);

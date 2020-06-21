function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  
  TweenMax.set('svg', {
    visibility: 'visible'
  });

  const circleTimeline = new TimelineMax({repeat: -1});
  
  circleTimeline.staggerTo('.circle circle', 0.4, {
    attr: {
      "fill-opacity": 1
    }
  }, 0.2)
  .staggerTo('.circle circle', 0.4, {
    attr: {
      "fill-opacity": 0
    }
  }, 0.2, 0.4);
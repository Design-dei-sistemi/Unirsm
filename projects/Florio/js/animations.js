var controller = new ScrollMagic.Controller();
//funzione che assegna agli stroke l'effetto tratteggio
//in cui sia il dash che il gap hanno la lunghezza dello stroke stesso
///////////////////////////////////////////////

///pin del titolo
//UPDATE > il pinning parte subito, non appena header inizia ad uscire dal browser
// e dura 300px... poi vedi tu se aumentarne la durata
//ho aggiunto in simukltanea anche un fade sulle mani, qui sotto
//che poi viene associato alla riga 23
var tween = TweenMax.to("#header .mani", 2.0, {
    css: {
        opacity: 0
    }
});

var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: "#header",
        triggerHook: "onLeave",
        duration: "900"
    })
    .setPin("#scroll")
    .setTween(tween)
    .addTo(controller);

//creo il tween per le mani
//mano 1 
var tween = TweenMax.to("#mano1", 1.0, {
    css: {
        left: "-1000px",
        top: "-450px"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#header",
    triggerHook: "onLeave",
    duration: 800
}).setTween(tween).addTo(controller);

//mano2
var tween = TweenMax.to("#mano2", 1.0, {
    css: {
        left: "-1000px",
        bottom: "-300px"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#header",
    triggerHook: "onLeave",
    duration: 800
}).setTween(tween).addTo(controller);
//mano3
var tween = TweenMax.to("#mano3", 1.5, {
    css: {
        right: "-1000px",
        top: "-600px"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#header",
    triggerHook: "onLeave",
    duration: 800
}).setTween(tween).addTo(controller);

//mano4
var tween = TweenMax.to("#mano4", 1.5, {
    css: {
        right: "-1000px",
        bottom: "-600px"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#header",
    triggerHook: "onLeave",
    duration: 800
}).setTween(tween).addTo(controller);



//////////////////////////////strappi
 var tween = TweenMax.from("#statement", 1.5, {
        css: {
          height: "0vh"
        }
      });
      new ScrollMagic.Scene({
        triggerElement: "#paragrafo",
        triggerHook: "onLeave",
        triggerOffset:1000,
        duration: 400
      }).setTween(tween).addTo(controller);

//mano2sez2
//UPDATE > Ho dato sia alla mano che al testo h2 la stessa classe, 
//timeline in scrollmagic: ho dato la stessa classe agli elementi che devono muoversi assieme
//(la mano e l'h2), così con una classe sola li comando assieme
//dopodichè, a movimento avvenutio, faccio un tweening sull'opacity della mano
//serve la timeline che 
var scene = new ScrollMagic.Scene({
        triggerElement: '#fadein',
        triggerHook: "onEnter",
        duration: 900
    }).setTween(new TimelineMax()
        // set initial styles
        .to('.mano2sez2', 200, {
            css: {
                left: "0px"
            }
        }, 400)
        // make sure the timeline is as long as the scene
        .to('img.mano2sez2', 300, {
            css: {
                opacity: "0"
            }
        }, 600))
    .addTo(controller);
//////////////////////////////////
// new ScrollMagic.Scene({
//     triggerElement: "#strapposopra2",
//     triggerHook: "onEnter",
//     duration: 900
// }).setTween(tween).addTo(controller);

////mano europa
var scene = new ScrollMagic.Scene({
        triggerElement: '.manoeuropa',
        triggerHook: "onEnter",
        duration: 900
    }).setTween(new TimelineMax()
        // set initial styles
        .to('.manoeuropa', 300, {
            css: {
                left: "0px"
            }
        }, 400)
        // make sure the timeline is as long as the scene
        .to('#manostatement3', 300, {
            css: {
                opacity: "0"
            }
        }, 600))
    .addTo(controller);


 var strappo2 = TweenMax.from("#statementobiezione", 1.5, {
        css: {
          height: "0vh"
        }
      });
      new ScrollMagic.Scene({
        triggerElement: "#obiezione",
        triggerHook: "onEnter",
        triggerOffset:1000,
        duration: 500
      }).setTween(strappo2).addTo(controller);

 var strappo3 = TweenMax.from("#statement4", 1.5, {
        css: {
          height: "0vh"
        }
      });
      new ScrollMagic.Scene({
        triggerElement: "#regioni",
        triggerHook: "onEnter",
        triggerOffset:1000,
        duration: 500
      }).setTween(strappo3).addTo(controller);


 var strappo4 = TweenMax.from("#storiestat", 1.5, {
        css: {
          height: "0vh"
        }
      });
      new ScrollMagic.Scene({
        triggerElement: "#testimonianze",
        triggerHook: "onEnter",
        triggerOffset:1000,
        duration: 500
      }).setTween(strappo4).addTo(controller);

//////////////////////grafico obiezioni migrazioni 
var revealElements = document.getElementsByClassName("digit");
for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
            offset: 50, // start a little later
            triggerHook: 0.9,
        })
        .setClassToggle(revealElements[i], "visible") // add class toggle
        .addTo(controller);
}



//////////////////////////////////////// equilibrio 

var scene = new ScrollMagic.Scene({
        triggerElement: '#move',
        triggerHook: "onEnter",
        duration: 800
    }).setTween(new TimelineMax()
        // set initial styles
        .to('.move', 200, {
            css: {
                left: "500px"
            }
        }, 300)
        // make sure the timeline is as long as the scene
        .to('.move', 300, {
            css: {
                left:"-800px"
            }
        }, 300))

    .addTo(controller);

//////////////////////cambio background ???

var background= new ScrollMagic.Scene({triggerElement:"#dignita1",
triggerHook:"#onEnter"})

.setClassToggle("#dignita1","make_rosa")
.addIndicators({name:"1 - add a class"})
.addTo(controller);
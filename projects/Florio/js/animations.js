var controller = new ScrollMagic.Controller();


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
        triggerElement: "#intro",
        triggerHook: "onEnter",
        duration: "900"
    })
    .setPin("#scroll")
    .setTween(tween)
    .addTo(controller);

//creo il tween per le mani
//mano 1 
var tween1 = TweenMax.to("#mano1", 1.0, {
    css: {
        left: "-1000px",
        top: "-450px"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#header",
    triggerHook: "onLeave",
    duration: 800
}).setTween(tween1).addTo(controller);

//mano2
var tween2 = TweenMax.to("#mano2", 1.0, {
    css: {
        left: "-1000px",
        bottom: "-300px"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#header",
    triggerHook: "onLeave",
    duration: 800
}).setTween(tween2).addTo(controller);
//mano3
var tween3 = TweenMax.to("#mano3", 1.5, {
    css: {
        right: "-1000px",
        top: "-600px"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#header",
    triggerHook: "onLeave",
    duration: 800
}).setTween(tween3).addTo(controller);

//mano4
var tween4 = TweenMax.to("#mano4", 1.5, {
    css: {
        right: "-1000px",
        bottom: "-600px"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#header",
    triggerHook: "onLeave",
    duration: 800
}).setTween(tween4).addTo(controller);



//////////////////////////////strappi
var tween5 = TweenMax.from("#statement", 1.5, {
    css: {
        height: "0vh"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#paragrafo",
    triggerHook: "onEnter",
    offset: 700,
    duration: 400
}).setTween(tween5).addTo(controller);

//mano2sez2

var scene = new ScrollMagic.Scene({
        triggerElement: '#contestostorico',
        triggerHook: "onLeave",
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


////mano europa
var scene = new ScrollMagic.Scene({
        triggerElement: '.manoeuropa',
        triggerHook: "onEnter",
        duration: 1200
    }).setTween(new TimelineMax()
        // set initial styles
        .to('.manoeuropa', 300, {
            css: {
                left: "0px"
            }
        }, 500)
        // make sure the timeline is as long as the scene
        .to('#manostatement3', 300, {
            css: {
                opacity: "0"
            }
        }, 700))
    .addTo(controller);


var strappo2 = TweenMax.from("#statementobiezione", 1.5, {
    css: {
        height: "0vh"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#strappo-trigger",
    triggerHook: "onEnter",
    offset: 300,
    duration: 500
}).setTween(strappo2).addTo(controller);

var strappo3 = TweenMax.from("#statement4", 1.5, {
    css: {
        height: "0vh"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#obiezione",
    triggerHook: "onLeave",
    offset: 300,
    duration: 500
}).setTween(strappo3).addTo(controller);


var strappo4 = TweenMax.from("#storiestat", 1.5, {
    css: {
        height: "0vh"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#storie1",
    triggerHook: "onEnter",
    offset: 300,
    duration: 500
}).setTween(strappo4).addTo(controller);

var strappo5 = TweenMax.from("#tantestat", 1.5, {
    css: {
        height: "0vh"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#testimonianze",
    triggerHook: "onLeave",
    triggerOffset: 1000,
    duration: 500
}).setTween(strappo5).addTo(controller);

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



var scene = new ScrollMagic.Scene({
        triggerElement: '#manimove',
        triggerHook: "onEnter",
        duration: 2800
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
                left: "-800px"
            }
        }, 300))

    .addTo(controller);
//GUADARE QUI PER IL PINNING

//////////////////////
//CAMBIO BACKGROUND 
var background = TweenMax.to("#dignitastat", 1.5, {
    backgroundColor: '#FFEDDF'
});
new ScrollMagic.Scene({
    triggerElement: "#dignitastat",
    triggerHook: "onEnter",
    offset: 600,
    duration: 300
}).setTween(background).addTo(controller);
//
var background = TweenMax.to("#dignita1", 1.5, {
    backgroundColor: '#FFEDDF'
});
new ScrollMagic.Scene({
    triggerElement: "#dignitastat",
    triggerHook: "onEnter",
    offset: 600,
    duration: 300
}).setTween(background).addTo(controller);
//
var color = TweenMax.to("#dignitastat", 1.5, {
    color: '#0E0F26'
});
new ScrollMagic.Scene({
    triggerElement: "#dignitastat",
    triggerHook: "onEnter",
    offset: 600,
    duration: 300
}).setTween(color).addTo(controller);

var tweenCopertura = new TimelineMax().add(TweenMax.to("#copertura", 1.5, {
    css: {
        left: "95vw"
    }
}));


new ScrollMagic.Scene({
        triggerElement: "#trig",
        duration: 700,
        offset: 200,
        triggerHook: "onLeave"
    }).setTween(tweenCopertura)
    .addTo(controller);
///////////////////////////////////////////
///////////////////////////////////////////////
//
years = ["1982", "1983", "1985", "1987", "1989", "1991", "1993", "1995", "1997", "1999", "2001", "2003", "2005", "2007", "2009", "2011", "2012", "2013", "2014", "2015", "2016", "2017"];
values = ["17,2", "16,9", "14,9", "13,3", "11,80", "11", "10,50", "9,70", "9,80", "9,90", "9,50", "9,60", "9,60", "9,10", "8,50", "8", "7,90", "7,60", "7,10", "6,60", "6,50", "6,20"];
opacity = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0.9", "0.80", "0.7", "0.5", "0.3", "0"];
padding = ["1%", "2%", "3%", "4%", "5%", "6%", "7%", "8%", "9%", "10%", "11%", "12%", "13%", "14%", "15%", "16%", "17%", "18%", "19%", "20%", "21%", "22%", "23%"];
new ScrollMagic.Scene({
        triggerElement: "#trig",
        duration: 700,
        offset: 200,
        triggerHook: "onLeave"
    }).setTween(tweenCopertura)
    .addTo(controller)
    .on("progress", function (e) {
        offset = Math.floor(years.length / 90 * e.progress.toFixed(3) * 100);
        //padding = Math.floor(15 / 90 * e.progress.toFixed(3) * 100);
        //console.log(offset);

        $("#copertura").css("padding-top", padding[offset]);
        $("#copertura h4").html(years[offset]);
        $("#copertura h2").html(values[offset]);
        $("#copertura").css("background-color", "rgba(255, 237, 223," + opacity[offset] + " )");

    });

//////////////////////////////////////// 
//BISTICCIO MANI
//TODO
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-equilibrio",
        duration: 3500,
        offset: 400
    }).setPin("#move")
    .setTween(new TimelineMax()
        // set initial styles
        .to('#move', 300, {
            css: {
                left: "0px"
            }
        }, 300)
        .to('#move', 300, {
            css: {
                left: "300px"
            }
        }, 600)
        .to('#move', 300, {
            css: {
                left: "500px"
            }
        }, 900)
        // make sure the timeline is as long as the scene
        .to('#move', 300, {
            css: {
                left: "0px"
            }
        }, 1200)
        .to('#move', 300, {
            css: {
                left: "500px"
            }
        }, 1500)
        .to('#move', 300, {
            css: {
                left: "0px"
            }
        }, 600)
        .to('#move', 300, {
            css: {
                left: "500px"
            }
        }, 1800)
        // make sure the timeline is as long as the scene
        .to('#move', 300, {
            css: {
                left: "0px"
            }
        }, 2100))
    .addTo(controller);

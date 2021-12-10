"use strict";
$(function () {
  var interpos = [
    {
      masque: {
        width: 58,
        height: 149,
        retrait: 15,
      },
      sprite: {
        nom: "etatInitial",
        left: -600,
        // top: -0,
        bottom: -452,
      },
    },

    /// A LAISSER MASQUE ///////////,
    //   masque: {
    //     width: 31,
    //     height: 83,
    //     retrait: 15,
    //   },
    //   sprite: {
    //     nom: "etatInitial",
    //     left: -334,
    //     top: -16,
    //   },
    // },
    ///////////////////////////////////////
    {
      masque: {
        width: 83,
        height: 135,
        retrait: 30,
      },
      sprite: {
        nom: "run5",
        left: -50,
        bottom: -264,
      },
    },
    {
      masque: {
        width: 69,
        height: 136,
        retrait: 29,
      },
      sprite: {
        nom: "run9",
        left: -57,
        bottom: -78,
      },
    },
    {
      masque: {
        width: 73,
        height: 139,
        retrait: 29,
      },
      sprite: {
        nom: "run6",
        left: -176,
        bottom: -264,
      },
    },
    {
      masque: {
        width: 83,
        height: 133,
        retrait: 31,
      },
      sprite: {
        nom: "run11",
        left: -310,
        bottom: -78,
      },
    },
    {
      masque: {
        width: 68,
        height: 136,
        retrait: 29,
      },
      sprite: {
        nom: "run3",
        left: -318,
        bottom: -457,
      },
    },
    {
      masque: {
        width: 77,
        height: 129,
        retrait: 29,
      },
      sprite: {
        nom: "run10",
        left: -180,
        bottom: -79,
      },
    },
    {
      masque: {
        width: 101,
        height: 126,
        retrait: 37,
      },
      sprite: {
        nom: "run8",
        left: -439,
        bottom: -265,
      },
    },
    {
      masque: {
        width: 36,
        height: 74,
        retrait: 21,
      },
      sprite: {
        nom: "run1",
        left: -33,
        top: -22,
      },
    },
    {
      masque: {
        width: 55,
        height: 69,
        retrait: 37,
      },
      sprite: {
        nom: "run2",
        left: -94,
        top: -27,
      },
    },
    {
      masque: {
        width: 42,
        height: 71,
        retrait: 31,
      },
      sprite: {
        nom: "run4",
        left: -251,
        top: -25,
      },
    },
    {
      masque: {
        width: 37,
        height: 73,
        retrait: 37,
      },
      sprite: {
        nom: "run7",
        left: -177,
        top: -130,
      },
    },
    {
      masque: {
        width: 32,
        height: 75,
        retrait: 19,
      },
      sprite: {
        nom: "run12",
        left: -256,
        top: -231,
      },
    },
    {
      masque: {
        width: 100,
        height: 100,
        retrait: 50,
      },
      sprite: {
        nom: "mouvSpecial",
        left: -565,
        top: -230,
      },
    },
  ];

  // var serieRun = [etatInitial, run1, run2, run3, run4, run5, run6, run2, 'run9', run10, run11];
  var timing = 90;
  var $container = $("#container");
  var $sprite = $("#contenu");

  var $decorMobile = $(".decormobile");

  var listeDesObstacles = [
    {
      nom: "sol",
      left: 0,
      width: 500,
      height: $(".sol").css("height"),
      transparence: true,
    },
    //,{
    //   nom: "solBas",
    //   left: 500,
    //   width:500,
    //   height: 50,
    //   transparence: true
    // }
  ];

  ////////////////////////////////////////////////////////////////////////
  //////////////////////// GESTION DES EVENEMENTS ////////////////////////
  ////////////////////////////////////////////////////////////////////////
  var $tag = $(".tag");
  var $tagOpacity = $tag.css("opacity");
  $tag.click(function () {
    $tag.css("opacity", $tagOpacity);
    $tagOpacity = parseFloat($tagOpacity) + 0.05;
    console.log($tagOpacity);
  });

  $tag.mousemove(function () {});

var $boutonDActionFeu = $("#boutonfeutricolore")
let $leftInitialFeuTri = parseFloat($boutonDActionFeu.css('left'));
setInterval(function(){

  $boutonDActionFeu.animate({
    height: '25px',
    width: '25px',
    left: $leftInitialFeuTri - 7 + 'px',
    bottom: '65px',
    duration: 10
  });
  $boutonDActionFeu.animate({
    height: '10px',
    width: '10px',
    left: $leftInitialFeuTri + 'px',
    bottom: '75px',
    duration: 10
  });

},10);

var $boutonDActionFille = $("#boutonfille")
let $leftInitialFille = parseFloat($boutonDActionFille.css('left'));
setInterval(function(){

  $boutonDActionFille.animate({
    height: '25px',
    width: '25px',
    left: $leftInitialFille - 7 + 'px',
    bottom: '65px',
    duration: 10
  });
  $boutonDActionFille.animate({
    height: '10px',
    width: '10px',
    left: $leftInitialFille + 'px',
    bottom: '75px',
    duration: 10
  });
},10);

var $boutonDActionTracteur = $("#boutontracteur")
let $leftInitialTracteur = parseFloat($boutonDActionTracteur.css('left'));
setInterval(function(){

  $boutonDActionTracteur.animate({
    height: '25px',
    width: '25px',
    left: $leftInitialTracteur - 7 + 'px',
    bottom: '65px',
    duration: 10
  });
  $boutonDActionTracteur.animate({
    height: '10px',
    width: '10px',
    left: $leftInitialTracteur + 'px',
    bottom: '75px',
    duration: 10
  });
},10);







  ////////////////////////////////////////////////////////////////////////
  /////////////////////// GESTION DES COORDONNEES ////////////////////////
  ////////////////////////////////////////////////////////////////////////
  // var coordoSprite = {
  //   left: interpos[0].sprite.left,
  //   bottom: interpos[0].sprite.bottom,
  // };

  var coordoContainer = {
    left: 100,
    bottom: $(".sol").css("height"),
    width: interpos[0].masque.width,
    height: interpos[0].masque.height,
    point_central: 20,
  };
  $container.css({
    left: coordoContainer.left,
    bottom: coordoContainer.bottom,
    width: coordoContainer.width,
    height: coordoContainer.height,
  });

  $sprite.css({
    left: interpos[0].sprite.left,
    bottom: interpos[0].sprite.bottom,
  });

  var indexImage = 1;
  var animationADroiteEnCours = false;
  var animationAGaucheEnCours = false;
  var animationSauterEnCours = false;
  var animationEnBasEnCours = false;
  var position, increment;
  var sautEnCours = false;
  var compteur = 0;
  var appuiLong = false;

  // var tabSaut = [30, 50, 60, 65, 67, 69, 67, 65, 60, 50, 30];
  // var indexSaut = 0;

  var monJeu = {
    directions: {
      haut: false,
      droite: false,
      bas: false,
      gauche: false,
      etatInitial: true,
    },
    rechercheObstacle: function () {
      for (var i = 0; i < listeDesObstacles.length; i++) {
        var $obstacle = listeDesObstacles[i];

        if (
          parseFloat($container.css("left")) > $obstacle.left &&
          parseFloat($container.css("left")) < $obstacle.left + $obstacle.width
        ) {
          $container.css("bottom", $obstacle.height);
        }
      }
    },

    mouvementHorizontal: function (position, increment) {
      var positionActuelleContainer = parseFloat($container.css(position));

      //Test de la position left du container pour ne pas le faire sortir de l'écran à gauche ou à droite
      if (position == "left" && positionActuelleContainer + increment < 10) {
        //Test marge à gauche, on bloque le left au left mini
        $container.css("left", 10);
        coordoContainer.bottom = parseFloat($container.css("bottom"));
      } else {
        if (
          position == "left" &&
          positionActuelleContainer + increment > 1010
        ) {
          // test marge à droite, on bloque le left au left maxi
          $container.css("left", 1010);
          coordoContainer.bottom = parseFloat($container.css("bottom"));
        } else {
          if (position == "left") {
            $container.css(position, positionActuelleContainer + increment);
            coordoContainer.bottom = parseFloat($container.css("bottom"));
          }
        }
      }

      // alert(indexImage);
      // Cas du saut vertical:
      if (increment == "sautEnHauteur") {
        sautEnCours = true;
        // console.dir(sautEnCours);
        $container.css({
          width: interpos[7].masque.width + "px",
          height: interpos[7].masque.height + "px",
        });

        // Switch de l'image du sprite:
        $sprite.css({
          left: interpos[7].sprite.left + "px",
          bottom: interpos[7].sprite.bottom + "px",
        });

        // console.dir(sautEnCours);
        // console.log(positionActuelleContainer);

        if (positionActuelleContainer + 150 <= coordoContainer.bottom + 150) {
          var saut = function () {
            $container
              .animate(
                { bottom: coordoContainer.bottom + 100 },
                { duration: 75 }
              )
              .animate(
                { bottom: coordoContainer.bottom + 150 },
                { duration: 125 }
              )
              .animate(
                { bottom: coordoContainer.bottom + 100 },
                { duration: 125 }
              )
              .animate({ bottom: coordoContainer.bottom }, { duration: 50 });
          };
          saut();
          // console.dir(sautEnCours);

          // console.dir(tabSaut[indexSaut]);

          // }
          sautEnCours = false;
          // console.dir(sautEnCours);
        }
        // Ajustement des dimensions du container:
      }

      // var animation = function(){
      if (!increment) {
        indexImage = 0;
      } // si pas d'incrément fourni alors on retourne à l'état initial

      if (increment != "sautEnHauteur") {
        $container.css({
          width: interpos[indexImage].masque.width + "px",
          height: interpos[indexImage].masque.height + "px",
          bottom: coordoContainer.bottom + "px",
        });

        // Switch de l'image du sprite:
        $sprite.css({
          left: interpos[indexImage].sprite.left + "px",
          bottom: interpos[indexImage].sprite.bottom + "px",
        });
      }
      // };
      indexImage++;
      if (indexImage == 7) {
        indexImage = 1;
      }
    }, //fin incrémentation de la position
    avancementDecor: function (increment) {
      var leftdecor = parseFloat($decorMobile.css("left")) + increment + "px";
      $decorMobile.css("left", leftdecor);
    },

    retourEtatInitial: function () {},

    // },

    leMoteurPourLesAnimations: function (tempsEcoule) {
      if (this.directions.gauche) {
        this.rechercheObstacle();
        this.mouvementHorizontal("left", -17);
        $container.addClass("containerinverse");
        this.avancementDecor(17);
      }
      if (this.directions.droite) {
        $container.removeClass("containerinverse");
        this.rechercheObstacle();
        this.mouvementHorizontal("left", 17);
        this.avancementDecor(-17);
      }
      if (this.directions.haut) {
        this.mouvementHorizontal("bottom", "sautEnHauteur");
      }
      if (this.directions.bas) {
        // this.mouvementVertical("top", 17);
      }
      // if (this.directions.etatInitial && sautEnCours === false) {
      if (this.directions.etatInitial) {
        this.mouvementHorizontal("bottom", 0);
      }
    }, // fin du moteur animations

    start: function () {
      var ici = this;
      window.addEventListener("keydown", function (event) {
        ici.directions.etatInitial = false;
        var codeTouche = event.keyCode;
        var appuiLong = event.repeat;
        // console.dir('repeat: ' + appuiLong);
        // console.dir(codeTouche);
        switch (codeTouche) {
          case 37:
            ici.directions.gauche = true;
            break;
          case 38:
            sautEnCours = true;
            // console.dir('appui touche: ' + sautEnCours);
            // if (appuiLong == false) {
            ici.directions.haut = true;
            // }
            // sautEnCours=true;
            console.dir("repeat: " + appuiLong);
            // console.dir('appui touche: direction.haut: ' + ici.directions.haut);
            break;
          case 39:
            // console.dir('repeat: ' + appuiLong);
            ici.directions.droite = true;
            break;
          case 40:
            ici.directions.bas = true;
            break;
        }
      });

      window.addEventListener("keyup", function (event) {
        ici.directions.etatInitial = true;
        var codeTouche = event.keyCode;
        // console.dir(codeTouche);
        switch (codeTouche) {
          case 37:
            ici.directions.gauche = false;
          case 38:
            ici.directions.haut = false;
          // sautEnCours=false;
          case 39:
            ici.directions.droite = false;
          case 40:
            ici.directions.bas = false;
        }
      });

      window.setInterval(function () {
        ici.leMoteurPourLesAnimations(0);
      }, timing);
    },
  };
  monJeu.start();

  // },25);

  // });
});

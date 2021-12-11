"use-strict";
$(function () {
  var interpos = [
    {
      masque: {
        width: 58,
        height: 149,
      },
      sprite: {
        nom: "etatInitial",
        left: -600,
        bottom: -452,
      },
    },
    {
      masque: {
        width: 83,
        height: 135,
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
      },
      sprite: {
        nom: "run8",
        left: -439,
        bottom: -265,
      },
    },
    {
      masque: {
        width: 136,
        height: 141,
      },
      sprite: {
        nom: "mouvCoup",
        left: -563,
        bottom: -104,
      },
    },
    {
      masque: {
        width: 80,
        height: 150,
      },
      sprite: {
        nom: "mouvAction",
        left: -599,
        bottom: -282,
      },
    },
    {
      masque: {
        left: 61,
        bottom: 207,
        width: 21,
        height: 55,
      },
      sprite: {
        nom: "etatInitialMini",
        left: -222,
        bottom: -167,
        height: 233,
      },
    },
    {
      masque: {
        left: 52,
        bottom: 207,
        width: 30,
        height: 53,
      },
      sprite: {
        nom: "run5Mini",
        left: -19,
        bottom: -97,
        height: 233,
      },
    },
    {
      masque: {
        left: 52,
        bottom: 207,
        width: 26,
        height: 53,
      },
      sprite: {
        nom: "run9Mini",
        left: -21,
        bottom: -28,
        height: 233,
      },
    },
    {
      masque: {
        left: 60,
        bottom: 207,
        width: 23,
        height: 53,
      },
      sprite: {
        nom: "run6Mini",
        left: -69,
        bottom: -98,
        height: 233,
      },
    },
    {
      masque: {
        left: 52,
        bottom: 207,
        width: 30,
        height: 49,
      },
      sprite: {
        nom: "run11Mini",
        left: -113,
        bottom: -29,
        height: 233,
      },
    },
    {
      masque: {
        left: 54,
        bottom: 207,
        width: 25,
        height: 50,
      },
      sprite: {
        nom: "run3Mini",
        left: -118,
        bottom: -169,
        height: 233,
      },
    },
    {
      masque: {
        left: 52,
        bottom: 207,
        width: 29,
        height: 48,
      },
      sprite: {
        nom: "run10Mini",
        left: -66,
        bottom: -29,
        height: 233,
      },
    },
    {
      masque: {
        left: 50,
        bottom: 207,
        width: 37,
        height: 47,
      },
      sprite: {
        nom: "run8Mini",
        left: -163,
        bottom: -98,
        height: 233,
      },
    },
  ];

  ////////////////////////////////////////////////////////////////////////
  /////////////////////// DECLARATION DE VARIABLES ///////////////////////
  ////////////////////////////////////////////////////////////////////////

  // var serieRun = [etatInitial, run1, run2, run3, run4, run5, run6, run2, 'run9', run10, run11];
  var timing = 50;
  var $decorMobile = $(".decormobile");
  var sortiePanneauAutorisee = false;
  var delaiFinIntro = 3500;
  var $hauteurSol = $(".sol").css("height");

  var listeDesObstacles = [
    {
      nom: "sol",
      left: 0,
      width: 500,
      height: $hauteurSol,
      transparence: true,
    },

    {
      nom: "panneauPieton",
      left: 10,
      width: 150,
      height: 50,
      transparence: true,
    },
  ];

  var animationADroiteEnCours = false;
  var animationAGaucheEnCours = false;
  var animationSauterEnCours = false;
  var animationEnBasEnCours = false;
  var position, increment;
  var sautEnCours = false;
  var compteur = 0;
  var appuiLong = false;

  var chronoIntro;
  var introDuJeu = true;
  var $container = $("#container");
  var $sprite = $("#contenu");
  var indexImage = 10;
  var indexImageMini = 11;
  var indexImageMaxi = 18;
  var sautPanneau;
  var listeImagesPanneauPieton = [];

  // Création de la liste d'images de panneau piéton:
  for (let i = 0; i < 8; i++) {
    var imagePanneau = document.getElementsByClassName("panneau_pieton_" + i);
    listeImagesPanneauPieton[i] = imagePanneau;
  }

  ////////////////////////////////////////////////////////////////////////
  //////////////// DECLARATION DES COORDONNEES DE STICKY /////////////////
  ////////////////////////////////////////////////////////////////////////

  var initialiseSticky = function (index) {
    $container.css({
      left: interpos[index].masque.left,
      bottom: interpos[index].masque.bottom,
      width: interpos[index].masque.width,
      height: interpos[index].masque.height,
    });

    console.dir(interpos[index].masque.left);
    console.dir(interpos[index].masque.bottom);
    console.dir(interpos[index].masque.width);
    console.dir(interpos[index].masque.height);

    $sprite.css({
      left: interpos[index].sprite.left,
      bottom: interpos[index].sprite.bottom,
      height: interpos[index].sprite.height,
    });
  };

  initialiseSticky(indexImage);

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////// OBJET JEU ///////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  var monJeu = {
    directions: {
      haut: false,
      droite: false,
      bas: false,
      gauche: false,
      etatInitial: true,
      coup: false,
      action: false,
    },
    parametres: {
      debutTimerIntro: NaN,
      currentTimerIntro: NaN,
      tempoClous: [0, 250, 750, 1250, 1750, 2250, 2750, 3250],
      dernièreDirection: "",
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
        // coordoContainer.bottom = parseFloat($container.css("bottom"));
      } else {
        if (
          position == "left" &&
          positionActuelleContainer + increment > 1010
        ) {
          // test marge à droite, on bloque le left au left maxi
          $container.css("left", 1010);
          // coordoContainer.bottom = parseFloat($container.css("bottom"));
        } else {
          if (position == "left") {
            $container.css(position, positionActuelleContainer + increment);
            // coordoContainer.bottom = parseFloat($container.css("bottom"));:
          }
        }
      }

      switch (position) {
        case "coup":
          indexImage = 8;
          break;
        case "action":
          indexImage = 9;
          break;
        case "etatInitial":
          indexImage = 0;
          break;
        case "etatInitialMini":
          indexImage = 10;
          break;
      }
      ////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////// REGLAGE DU SAUT VERTICAL /////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////
      if (position == "sautEnHauteur") {
        sautEnCours = true;
        $container.css({
          width: interpos[7].masque.width + "px",
          height: interpos[7].masque.height + "px",
        });

        // Switch de l'image du sprite:
        $sprite.css({
          left: interpos[7].sprite.left + "px",
          bottom: interpos[7].sprite.bottom + "px",
        });

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
        }
      }

      ////////////////////////////////////////////////////////////////////////////////////
      /////////////////// REGLAGE DU CONTAINER ET DU SPRITE EN COURANT ///////////////////
      ////////////////////////////////////////////////////////////////////////////////////
      if (increment != NaN) {
        $container.css({
          left: interpos[indexImage].masque.left + "px",
          width: interpos[indexImage].masque.width + "px",
          height: interpos[indexImage].masque.height + "px",
          bottom: interpos[indexImage].masque.bottom + "px",
        });

        $sprite.css({
          left: interpos[indexImage].sprite.left + "px",
          bottom: interpos[indexImage].sprite.bottom + "px",
        });
      }
      indexImage++;

      if (indexImage == indexImageMaxi) {
        indexImage = indexImageMini;
      }
    },

    avancementDecor: function (increment) {
      var leftdecor = parseFloat($decorMobile.css("left")) + increment + "px";
      $decorMobile.css("left", leftdecor);
    },

    leMoteurPourLesAnimations: function (tempsEcoule) {
      if (this.directions.gauche) {
        if (introDuJeu == false) {
          $container.addClass("containerinverse");
          this.rechercheObstacle();
          this.mouvementHorizontal("left", -17);
          this.avancementDecor(17);
        }
      }
      if (this.directions.droite) {
        if (introDuJeu == false) {
          $container.removeClass("containerinverse");
          this.rechercheObstacle();
          this.mouvementHorizontal("left", 17);
          this.avancementDecor(-17);
        } else {
          this.mouvementHorizontal("left", 0);
        }
      }
      if (this.directions.haut) {
        if (introDuJeu == false) {
          this.mouvementHorizontal("sautEnHauteur", NaN);
        }
      }
      if (this.directions.bas) {
        if (introDuJeu == false) {
        }
      }
      if (this.directions.etatInitial) {
        if (introDuJeu == false) {
          this.mouvementHorizontal("etatInitial", NaN);
        } else {
          // if (sortiePanneauAutorisee == false){
          this.mouvementHorizontal("etatInitialMini", NaN);
          // }
        }
      }
      if (this.directions.action) {
        if (introDuJeu == false) {
          this.mouvementHorizontal("action", NaN);
        }
      }
      if (this.directions.coup) {
        if (introDuJeu == false) {
          this.mouvementHorizontal("coup", NaN);
        }
      }
    }, // fin du moteur animations

    start: function () {
      var ici = this;
      window.addEventListener("keydown", function (event) {
        ici.directions.etatInitial = false;
        var codeTouche = event.keyCode;
        var appuiLong = event.repeat;

        switch (codeTouche) {
          case 37:
            ici.directions.gauche = true;
            break;
          case 38:
            ici.directions.haut = true;
            break;
          case 39:
            if (introDuJeu == true) {
              // Chronométrage du temps d'appui sur la touce flèche droite:
              var dateAppui = new Date();
              if (isNaN(ici.parametres.debutTimerIntro)) {
                ici.parametres.debutTimerIntro = dateAppui.getTime();
              } else {
                ici.parametres.currentTimerIntro = dateAppui.getTime();
              }
              chronoIntro =
                ici.parametres.currentTimerIntro -
                ici.parametres.debutTimerIntro;
              // Check des clous à colorer en fonction du temps d'appui
              for (let i = 0; i < listeImagesPanneauPieton.length; i++) {
                if (chronoIntro > ici.parametres.tempoClous[i]) {
                  listeImagesPanneauPieton[i][0].style.zIndex = i + 1;

                  console.log(ici.parametres.listeImagesPanneauPieton);
                }
              }
            }
            ici.directions.droite = true;
            break;
          case 40:
            ici.directions.bas = true;
            break;
          case 13:
            ici.directions.action = true;
            break;
          case 32:
            ici.directions.coup = true;
            break;
        }
      });

      window.addEventListener("keyup", function (event) {
        // if (chronoIntro > delaiFinIntro){
        ici.directions.etatInitial = true;
        // }

        if (introDuJeu == true && chronoIntro > delaiFinIntro) {
          ici.directions.etatInitial = false;
        }
        var codeTouche = event.keyCode;

        switch (codeTouche) {
          case 37:
            ici.directions.gauche = false;
          case 38:
            ici.directions.haut = false;
          case 39:
            if (introDuJeu == true) {
              if (chronoIntro < delaiFinIntro) {
                // Si le joueur lève la che la touche avant la fin de l'intro
                ici.parametres.debutTimerIntro = NaN; // Réinitialisation des tempos
                ici.parametres.currentTimerIntro = NaN;
                //Réinitialisation de l'affichage du panneau
                for (let i = 0; i < listeImagesPanneauPieton.length; i++) {
                  listeImagesPanneauPieton[i][0].style.zIndex = 1;
                }
                listeImagesPanneauPieton[0][0].style.zIndex = 2;
              }
            }
            //fin lorsqu'on a passé + de 3sec sur la flèche de droite
            if (chronoIntro > delaiFinIntro) {
              //Réinitialisation de l'affichage du panneau

              for (let i = 0; i < listeImagesPanneauPieton.length; i++) {
                console.log("i=", i);
                listeImagesPanneauPieton[i][0].style.zIndex = 1;
              }
              listeImagesPanneauPieton[0][0].style.zIndex = 2;

              // var panneauInit =
              //   document.getElementsByClassName("panneau_pieton_0");
              //   for (let i = 0; i < ici.parametres.listeImagesPanneauPieton.length; i++){
              //     ici.parametres.listeImagesPanneauPieton[i][0].style.zIndex = 1;
              //   }
              // panneauInit[0].style.zIndex = 2;

              // sortiePanneauAutorisee = true;

              $container.css({
                left: interpos[17].masque.left,
                bottom: interpos[17].masque.bottom,
                width: interpos[17].masque.width,
                height: interpos[17].masque.height,
              });

              $sprite.css({
                left: interpos[17].sprite.left,
                bottom: interpos[17].sprite.bottom,
              });
              // console.log($hauteurSol);

              // $container.animate(
              //   {
              //     bottom: parseFloat($hauteurSol) + 200 + "px",
              //     left: 100,
              //   },
              //   80
              // );
              // $container.animate(
              //   {
              //     bottom: parseFloat($hauteurSol) + 220 + "px",
              //     left: 120,
              //   },
              // 120
              // );

              var angle = (75 * Math.PI) / 180;
              var vitesseInitiale = 60;
              var gravite = 15;
              var x = 0;
              var z;

              // var calculTrajectoire = ;

              var sautPanneau = setInterval(function () {
                z =  207 + (-0.5 * ((gravite / (vitesseInitiale * vitesseInitiale)) * (x * x)) * (1 + Math.tan(angle) * Math.tan(angle)) + x * Math.tan(angle));
                $container.css({
                  bottom: z + "px",
                  left: 50 + x + "px",
                });
                x++;
                if (z<parseFloat($hauteurSol) + 0){
                  clearInterval(sautPanneau);
                }
              }, 4);

              // function stopSautPanneau() {
              //   // if (pareseFloat(z) < parseFloat($hauteurSol)) {
              //   clearInterval(sautPanneau);
              //   // }
              // }
              // console.log(z);
              // $container.css({
              //   left: interpos[7].masque.left,
              //   bottom: interpos[7].masque.bottom,
              //   width: interpos[7].masque.width,
              //   height: interpos[7].masque.height,
              // });

              // $sprite.css({
              //   left: interpos[7].sprite.left,
              //   bottom: interpos[7].sprite.bottom,
              //   height: '630px',
              // });
              ici.parametres.debutTimerIntro = NaN;
              ici.parametres.currentTimerIntro = NaN;

              // indexImage = 0;
              // indexImageMini = 1;
              // indexImageMaxi = 7;
              // initialiseSticky(indexImage);
              // introDuJeu = false;
            }

            ici.directions.droite = false;
          case 40:
            ici.directions.bas = false;
          case 13:
            ici.directions.action = false;
            break;
          case 32:
            ici.directions.coup = false;
            break;
        }
      });

      window.setInterval(function () {
        ici.leMoteurPourLesAnimations(0);
      }, timing);
    },
  };
  monJeu.start();

  ////////////////////////////////////////////////////////////////////////
  //////////////////////// GESTION DES ANIMATIONS ////////////////////////
  ////////////////////////////////////////////////////////////////////////

  /////////////////////////// BOUTONS D'ACTION ///////////////////////////
  var $boutonDActionFeu = $("#boutonfeutricolore");
  let $leftInitialFeuTri = parseFloat($boutonDActionFeu.css("left"));
  setInterval(function () {
    $boutonDActionFeu.animate({
      height: "25px",
      width: "25px",
      left: $leftInitialFeuTri - 7 + "px",
      bottom: "65px",
      duration: 10,
    });
    $boutonDActionFeu.animate({
      height: "10px",
      width: "10px",
      left: $leftInitialFeuTri + "px",
      bottom: "75px",
      duration: 10,
    });
  }, 10);

  var $boutonDActionFille = $("#boutonfille");
  let $leftInitialFille = parseFloat($boutonDActionFille.css("left"));
  setInterval(function () {
    $boutonDActionFille.animate({
      height: "25px",
      width: "25px",
      left: $leftInitialFille - 7 + "px",
      bottom: "65px",
      duration: 10,
    });
    $boutonDActionFille.animate({
      height: "10px",
      width: "10px",
      left: $leftInitialFille + "px",
      bottom: "75px",
      duration: 10,
    });
  }, 10);

  var $boutonDActionTracteur = $("#boutontracteur");
  let $leftInitialTracteur = parseFloat($boutonDActionTracteur.css("left"));
  setInterval(function () {
    $boutonDActionTracteur.animate({
      height: "25px",
      width: "25px",
      left: $leftInitialTracteur - 7 + "px",
      bottom: "65px",
      duration: 10,
    });
    $boutonDActionTracteur.animate({
      height: "10px",
      width: "10px",
      left: $leftInitialTracteur + "px",
      bottom: "75px",
      duration: 10,
    });
  }, 10);

  ///////////////////////////// FEU DE VOITURE /////////////////////////////

  var $feu = $(".feu");
  var $widthFeu = parseFloat($feu.css("width"));
  var $leftFeu = parseFloat($feu.css("left"));
  var $heightFeu = parseFloat($feu.css("height"));
  setInterval(function () {
    let facteur = parseInt(100 * Math.random()) / 100;
    $feu.css({
      left: 210 + ($leftFeu - $widthFeu / 2) - ($widthFeu * facteur) / 2 + "px",
      width: $widthFeu * facteur + "px",
      height: $heightFeu * facteur + "px",
    });
  }, 100);

  ////////////////////////////////////////////////////////////////////////
  //////////////////////// GESTION DES EVENEMENTS ////////////////////////
  ////////////////////////////////////////////////////////////////////////
  var $tag = $(".tag");
  var $tagOpacity = $tag.css("opacity");
  // $tag.click(function () {
  //   $tag.css("opacity", $tagOpacity);
  //   $tagOpacity = parseFloat($tagOpacity) + 0.05;
  //   console.log($tagOpacity);
  // });

  $tag.mousemove(function () {
    $tag.css("opacity", $tagOpacity);
    $tagOpacity = parseFloat($tagOpacity) + 0.003;
    console.log($tagOpacity);
  });
});

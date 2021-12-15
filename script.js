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
        height: 630,
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
        height: 630,
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
        height: 630,
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
        height: 630,
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
        height: 630,
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
        height: 630,
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
        height: 630,
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
        height: 630,
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
        height: 630,
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
        height: 630,
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

  // var sortiePanneauEnCours = false;

  // var delaiFinIntro = 100;
  var $hauteurSol = $("#sol").css("height");
  // console.log("hauteur du sol :", $hauteurSol);
  // var sautEnCours = false;
  var timing = 60;
  var $feuRouge = $(".feuRouge");
  var $feuOrange = $(".feuOrange");
  var $feuVert = $(".feuVert");
  var $container = $("#container");
  var $sprite = $("#contenu");
  var indexImage = 10;
  var indexImageMini = 11;
  var indexImageMaxi = 18;
  var listeImagesPanneauPieton = [];
  // var nouveauLeft = 100;

  // Création de la liste d'images de panneau piéton:
  // for (let i = 0; i < 8; i++) {
  //   var imagePanneau = document.getElementsByClassName("panneau_pieton_" + i);
  //   listeImagesPanneauPieton[i] = imagePanneau;
  // }

  var listeImagesPanneauPieton = document.querySelectorAll(
    ".calque_panneau_pieton"
  );
  // var appliZIndex = function (element, item, objet) {
  //   element.style.zIndex = "1";
  // };
  // listeImagesPanneauPieton.forEach(appliZIndex);
  // listeImagesPanneauPieton[0].style.zIndex = "2";
  // console.log(listeImagesPanneauPieton);
  var listeBoutonsAction = document.querySelectorAll("button");
  // $bouton = $('button');
  // console.log(listeBoutonsAction);

  var decor_mobile = document.getElementsByClassName("decor_mobile");
  // console.log(decor_mobile);

  //Récupération des styles CSS et affectation dans le DOM
  var affectationStyleDecorMobile = function () {
    for (let i = 0; i < decor_mobile.length; i++) {
      var styleDecor = window.getComputedStyle(decor_mobile[i]);
      // console.log("styledecor : ", styleDecor);
      // console.log("styledecor.left : ", styleDecor.left);
      decor_mobile[i].style.left = styleDecor.left;
      decor_mobile[i].style.width = styleDecor.width;
      decor_mobile[i].style.height = styleDecor.height;
    }
  };
  affectationStyleDecorMobile();
  // console.log(decor_mobile);

  // console.log(boutonsAction);
  var listeDesObstacles = document.getElementsByClassName("obstacle");
  console.log(listeDesObstacles);

  var affectationStyleObstacles = function () {
    for (let i = 0; i < listeDesObstacles.length; i++) {
      var styleObstacle = window.getComputedStyle(listeDesObstacles[i]);
      // console.log("styledecor : ", styleDecor);
      // console.log("styleobstacle.left : ", styleObstacle.left);
      listeDesObstacles[i].style.left = styleObstacle.left;
      listeDesObstacles[i].style.width = styleObstacle.width;
      listeDesObstacles[i].style.height = styleObstacle.height;
      listeDesObstacles[i].style.opacity = styleObstacle.opacity;
    }
  };
  affectationStyleObstacles();
  // console.log(listeDesObstacles);
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
      droite: false,
      bas: false,
      gauche: false,
      derniere: "",
      etatInitial: true,
      coup: false,
      action: false,
      obstacle: false,

      sortiePanneauEnCours: false,
    },
    parametres: {
      debutTimerIntro: NaN,
      currentTimerIntro: NaN,
      tempoClous: [0, 200, 400, 600, 800, 1000, 1200, 1500],
      dernièreDirection: "",
      actionFeuTricolore: [1, 0, 0, 0],
      chronoIntro: 0,
      delaiFinIntro: 100,
      autorisationInit: false,
      introDuJeu: true,
    },
    detectionAction: function () {
      console.log("entrée dans la fonction de détection de bouton");
      for (var i = 0; i < listeBoutonsAction.length; i++) {
        var bouton = listeBoutonsAction[i];
        var extremiteContainer =
          parseFloat($container.css("left")) +
          parseFloat($container.css("width"));
        var styleBouton = window.getComputedStyle(bouton);

        if (
          extremiteContainer > parseFloat(styleBouton.left) - 3 &&
          extremiteContainer <
            parseFloat(styleBouton.left) + parseFloat(styleBouton.width) + 3
        ) {
          console.log("bouton d'action appuyé :", bouton.id);
          this.lancementAction(bouton.id);
        }
      }
    },

    gestionDesCoups: function (indexObstacleATraiter) {
      if (listeDesObstacles.length > 0) {
        console.log("obstacle à traiter: ", indexObstacleATraiter);


        if (indexObstacleATraiter == 0) {
        var opaciteObstacle =
          listeDesObstacles[indexObstacleATraiter].style.opacity;
        opaciteObstacle = opaciteObstacle - 0.1;
        listeDesObstacles[indexObstacleATraiter].style.opacity =
          opaciteObstacle;
        console.log(listeDesObstacles);
        
        if (opaciteObstacle < 0.1) {
          // listeDesObstacles[indexObstacleATraiter].parentNode.removeChild(
          //   listeDesObstacles[indexObstacleATraiter]
          // );
          listeDesObstacles[indexObstacleATraiter].style.left = '100000px';
            //   listeDesObstacles[indexObstacleATraiter]


          this.directions.obstacle = false;
          console.log(listeDesObstacles);
        }
      }

      if (indexObstacleATraiter == 1) {
        var $ballon = $('.ballon');
        $ballon.animate({
          bottom: '3000px',
          left: '6000px',
          duration: 1000,
        })
        
        
        // var opaciteObstacle =
        //   listeDesObstacles[indexObstacleATraiter].style.opacity;
        // opaciteObstacle = opaciteObstacle - 0.1;
        // listeDesObstacles[indexObstacleATraiter].style.opacity =
        //   opaciteObstacle;
        // console.log(listeDesObstacles);
        
        // if (opaciteObstacle < 0.1) {
        //   listeDesObstacles[indexObstacleATraiter].parentNode.removeChild(
        //     listeDesObstacles[indexObstacleATraiter]
        //   );
        //   this.directions.obstacle = false;
        //   console.log(listeDesObstacles);
        // }
      }




      }
    },

    lancementAction: function (idBouton) {
      console.log("entrée dans la fonction de lancement d'action");
      switch (idBouton) {
        case "boutonfeutricolore":
          switch (this.parametres.actionFeuTricolore[0]) {
            case 1:
              $feuRouge.css("background-color", "rgb(255, 0, 0)");
              var photo1 = document.getElementById("identite_1");
              photo1.style.display = "block";
              break;
            case 2:
              $feuOrange.css("background-color", "rgb(255, 187, 0)");
              var photo2 = document.getElementById("identite_2");
              photo2.style.display = "block";
              break;
            case 3:
              $feuVert.css("background-color", "rgb(9, 251, 70)");
              var photo3 = document.getElementById("identite_3");
              photo3.style.display = "block";
              break;
            case 4:
              this.parametres.actionFeuTricolore[0] = 0;
              $feuRouge.css("background-color", "rgb(131, 38, 38)");
              $feuOrange.css("background-color", "rgb(138, 77, 27)");
              $feuVert.css("background-color", "rgb(23, 58, 31)");
              break;
          }
          this.parametres.actionFeuTricolore[0]++;
          break;
      }
    },

    detectionObstacle: function (increment) {
      if (listeDesObstacles.length > 0) {
        console.log("entrée dans la fonction de détection d'obstacle");
        console.log(listeDesObstacles);
        var extremiteContainer =
          parseFloat($container.css("left")) +
          parseFloat($container.css("width"));
        console.log(
          "dans la fonction détection d'obstacle; extrémité container :",
          extremiteContainer
        );

        for (let i = 0; i < listeDesObstacles.length; i++) {
          var obstacle = listeDesObstacles[i];
          console.log("obstacle.style.left : ", obstacle.style.left);

          if (extremiteContainer >= parseFloat(obstacle.style.left) - 20) {
            console.log("obstacle touché ");
            this.directions.obstacle = true;
            return i;
          } else {
            this.directions.obstacle = false;
            console.log("aucun obstacle détecté");
          }
        }
      }
    },

    mouvementHorizontal: function (position, increment) {
      console.log(
        " début de la fonction mouvement horizontal increment =",
        increment
      );
      var positionActuelleContainer = parseFloat($container.css(position));

      //Test de la position left du container pour ne pas le faire sortir de l'écran à gauche ou à droite
      if (position == "left" && positionActuelleContainer + increment < 10) {
        //Test marge à gauche, on bloque le left au left mini
        $container.css("left", 10);
        console.log(
          "on va à gauche, et on arrive au bord de écran, le left est calibré à 10px: ",
          $container.css("left")
        );
        // coordoContainer.bottom = parseFloat($container.css("bottom"));
      } else {
        if (
          position == "left" &&
          positionActuelleContainer + increment > parseFloat(screen.width) - 30
        ) {
          // test marge à droite, on bloque le left au left maxi
          $container.css("left", parseFloat(screen.width) - 30);
          console.log(
            "on va à droite, et on arrive au bord de écran, le left est calibré à 1010px :",
            $container.css("left")
          );
          // coordoContainer.bottom = parseFloat($container.css("bottom"));
        } else {
          if (position == "left") {
            $container.css(position, positionActuelleContainer + increment);
            console.log(
              "on va à droite, les left du container est de :",
              $container.css("left"),
              "indeximage =",
              indexImage
            );
            console.log("increment =", increment);
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
          increment = "0";
          break;
        case "etatInitialMini":
          indexImage = 10;
          break;
      }

      ////////////////////////////////////////////////////////////////////////////////////
      /////////////////// REGLAGE DU CONTAINER ET DU SPRITE EN COURANT ///////////////////
      ////////////////////////////////////////////////////////////////////////////////////
      if (increment != NaN) {
        // console.log("on va changer le sprite");
        // console.log('on va affecter une nouvelle valeur de left :', $container.css("left"), 'indexImage = ', indexImage);
        // console.log("interpos[indexImage].masque.left = ",interpos[indexImage].masque.left)
        // console.log("interpos[indexImage].masque.width = ",interpos[indexImage].masque.width)
        // console.log("interpos[indexImage].masque.heigth = ",interpos[indexImage].masque.height)
        //         console.log("interpos[indexImage].masque.bottom = ",interpos[indexImage].masque.bottom)
        // console.log("increment =", increment);
        // $container.css({
        //   left: interpos[indexImage].masque.left + increment + "px",
        //   width: interpos[indexImage].masque.width + "px",
        //   height: interpos[indexImage].masque.height + "px",
        //   bottom: interpos[indexImage].masque.bottom + "px",
        // });
        $container.css({
          // left: interpos[indexImage].masque.left + increment + "px",
          width: interpos[indexImage].masque.width + "px",
          height: interpos[indexImage].masque.height + "px",
          // bottom: interpos[indexImage].masque.bottom + "px",
        });

        $sprite.css({
          left: interpos[indexImage].sprite.left + "px",
          bottom: interpos[indexImage].sprite.bottom + "px",
          height: interpos[indexImage].sprite.height + "px",
        });
      }

      // console.log('on a affecté une nouvelle valeur de left :', $container.css("left"),  'indexImage = ', indexImage);

      indexImage++;
      if (indexImage == indexImageMaxi) {
        indexImage = indexImageMini;
      }

      // this.avancementDecor(increment);
    },

    avancementDecor: function (increment) {
      // console.log("on avance le décor, l'incrément est de: ", increment);
      for (let element of decor_mobile) {
        var nouveauLeft = parseFloat(element.style.left) + increment;
        element.style.left = nouveauLeft + "px";
      }
    },

    leMoteurPourLesAnimations: function () {
      ///////// ALLER A GAUCHE /////////////
      if (this.directions.gauche) {
        if (this.parametres.introDuJeu == false) {
          $container.addClass("containerinverse");
          this.detectionObstacle();
          this.mouvementHorizontal("left", -13);
          this.avancementDecor(17);
        }
      }

      ///////// ALLER A DROITE /////////////
      if (this.directions.droite) {
        if (!this.parametres.introDuJeu) {
          console.log(
            "appui touche droite, intro finie, on calcule le déplacement du container. son left actuel est : ",
            $container.css("left")
          );

          // $container.removeClass("containerinverse");
          this.detectionObstacle();
          if (this.directions.obstacle == false) {
            this.mouvementHorizontal("left", 10);
            this.avancementDecor(-20);
          } else {
            // console.log('obstacle détecté, incrément est de 0');
            this.mouvementHorizontal("left", -10);
            this.avancementDecor(20);
          }
        } else {
          console.log(
            "appui touche droite, intro en cours, le déplacement du container est nul (toujours dans le panneau), son left actuel est : ",
            $container.css("left")
          );
          this.mouvementHorizontal("left", 0);
        }
      }

      ///////// RETOUR ETAT INITIAL /////////////
      if (this.directions.etatInitial) {
        if (this.parametres.introDuJeu == false) {
          // console.log('retour etat initial normal')
          this.mouvementHorizontal("etatInitial", NaN);
        } else {
          // console.log('retour etat initial mini')
          this.mouvementHorizontal("etatInitialMini", NaN);
        }
      }
      ///////// ACTION /////////////
      if (
        this.directions.action &&
        !this.directions.gauche &&
        !this.directions.droite &&
        !this.directions.coup
      ) {
        // console.log(this.directions.gauche , this.directions.droite, this.directions.bas, this.directions.  )
        if (this.parametres.introDuJeu == false) {
          console.log("appui sur la touche action");
          this.mouvementHorizontal("action", NaN);
          // this.detectionAction();
        }
      }

      ///////// COUP /////////////
      if (this.directions.coup) {
        if (this.parametres.introDuJeu == false) {
          this.mouvementHorizontal("coup", NaN);
          var indexObstacle = this.detectionObstacle();
          console.log(this.directions.obstacle);
          if (this.directions.obstacle == true) {
            console.log("coup porté sur obstacle: ", indexObstacle);
            this.gestionDesCoups(indexObstacle);
          } else {
            console.log("coup dans le vent");
          }
        }
      }
    }, // fin du moteur animations

    start: function () {
      var ici = this;
      window.addEventListener("keydown", function (event) {
        // console.log('appui touche');
        // console.log("appui touche, left container : ", $container.css("left"));
        ici.directions.etatInitial = false;
        var codeTouche = event.keyCode;

        // console.log("appui touche, état intro du jeu: ", introDuJeu);
        switch (codeTouche) {
          case 37:
            if (
              !ici.directions.droite &&
              !ici.directions.action &&
              !ici.directions.coup &&
              !ici.parametres.introDuJeu
            ) {
              ici.directions.gauche = true;
            }

            break;

          case 39:
            if (ici.parametres.introDuJeu == true) {
              // console.log("eappui touche ntrée dans l'intro");
              // Chronométrage du temps d'appui sur la touce flèche droite:
              var dateAppui = new Date();
              if (isNaN(ici.parametres.debutTimerIntro)) {
                ici.parametres.debutTimerIntro = dateAppui.getTime();
              } else {
                ici.parametres.currentTimerIntro = dateAppui.getTime();
              }
              ici.parametres.chronoIntro =
                ici.parametres.currentTimerIntro -
                ici.parametres.debutTimerIntro;
              // Check des clous à colorer en fonction du temps d'appui
              for (let i = 0; i < listeImagesPanneauPieton.length; i++) {
                if (ici.parametres.chronoIntro > ici.parametres.tempoClous[i]) {
                  // listeImagesPanneauPieton[i][0].style.zIndex = i + 1;
                  listeImagesPanneauPieton[i].style.zIndex = i + 1;

                  // console.log(ici.parametres.listeImagesPanneauPieton);
                }
              }

              // console.log('eappui touche mais on est sorti de l\'intro');
              ici.directions.droite = true;
            }
            if (
              !ici.directions.gauche &&
              !ici.directions.coup &&
              !ici.directions.action &&
              !ici.parametres.introDuJeu
            ) {
              ici.directions.droite = true;
            }

            break;

          case 13:
            if (
              !ici.directions.droite &&
              !ici.directions.coup &&
              !ici.directions.gauche &&
              !ici.parametres.introDuJeu
            ) {
              ici.directions.action = true;
            }
            break;
          case 32:
            if (
              !ici.directions.droite &&
              !ici.directions.action &&
              !ici.directions.gauche &&
              !ici.parametres.introDuJeu
            ) {
              ici.directions.coup = true;
            }

            break;
        }
      });

      window.addEventListener("keyup", function (event) {
        // console.log('autorisation:', ici.parametres.autorisationInit);
        if (ici.parametres.autorisationInit == true) {
          ici.directions.sortiePanneauEnCours = false;
        }
        // console.log("relache touche");
        // console.log(
        //   "relache touche, left container : ",
        //   $container.css("left")
        // );
        $container.removeClass("containerinverse");
        if (
          ici.parametres.introDuJeu == true &&
          ici.parametres.chronoIntro > ici.parametres.delaiFinIntro
        ) {
          // console.log(
          //   "relache touche, on est toujours dans lintro mais le seuil chrono est  dépassé, chrono: ",
          //   chronoIntro,
          //   "délai :",
          //   delaiFinIntro
          // );
          ici.directions.etatInitial = false;
        }
        var codeTouche = event.keyCode;

        switch (codeTouche) {
          case 37:
            ici.directions.gauche = false;
            ici.directions.derniere = "gauche";

            if (!ici.directions.droite) {
              ici.directions.etatInitial = true;
            }

            break;
          case 39:
            ici.directions.derniere = "droite";
            if (ici.parametres.introDuJeu == true) {
              // console.log("relache touche, on est toujours dans l'intro");

              if (ici.parametres.chronoIntro < ici.parametres.delaiFinIntro) {
                // console.log(
                //   "relache touche, on est toujours dans l'intro et le chrono est encore sous le seuil"
                // );
                // Si le joueur lève la che la touche avant la fin de l'intro
                ici.parametres.debutTimerIntro = NaN; // Réinitialisation des tempos
                ici.parametres.currentTimerIntro = NaN;
                //Réinitialisation de l'affichage du panneau
                for (let i = 0; i < listeImagesPanneauPieton.length; i++) {
                  // listeImagesPanneauPieton[i][0].style.zIndex = 1;
                  listeImagesPanneauPieton[i].style.zIndex = 1;
                }
                // listeImagesPanneauPieton[0][0].style.zIndex = 2;
                listeImagesPanneauPieton[0].style.zIndex = 2;
                ici.parametres.debutTimerIntro = NaN;
                ici.parametres.currentTimerIntro = NaN;
                console.log(
                  "relache touche dans l'intro on remet les compteurs à zéro: ",
                  ici.parametres.debutTimerIntro,
                  ici.parametres.currentTimerIntro
                );
              }

              //fin lorsqu'on a passé + de 3sec sur la flèche de droite
              if (ici.parametres.chronoIntro > ici.parametres.delaiFinIntro) {
                // console.log(
                //   "relache touche, on est toujours dans l'intro et le chrono a dépassé seuil"
                // );
                // console.log("on peut sortir de l'intro");
                //Réinitialisation de l'affichage du panneau
                for (let i = 0; i < listeImagesPanneauPieton.length; i++) {
                  // console.log("i=", i);
                  // listeImagesPanneauPieton[i][0].style.zIndex = 1;
                  listeImagesPanneauPieton[i].style.zIndex = 1;
                }
                listeImagesPanneauPieton[0].style.zIndex = 2;
                // listeImagesPanneauPieton[0][0].style.zIndex = 2;

                // Passage sur le sprite image run8mini:

                // Lancement de l'animation de sortie de panneau:
                var angle = (75 * Math.PI) / 180;
                var vitesseInitiale = 60;
                var gravite = 15;
                var x = 0;
                ici.directions.sortiePanneauEnCours = true;
                var sautPanneau = setInterval(function () {
                  // ici.directions.sortiePanneauEnCours = true;
                  // console.log("lancement du saut du panneau");
                  $container.css({
                    left: interpos[17].masque.left,
                    bottom: interpos[17].masque.bottom,
                    width: interpos[17].masque.width,
                    height: interpos[17].masque.height,
                  });

                  $sprite.css({
                    left: interpos[17].sprite.left,
                    bottom: interpos[17].sprite.bottom,
                    height: interpos[17].sprite.height,
                  });

                  z =
                    207 +
                    (-0.5 *
                      ((gravite / Math.pow(vitesseInitiale, 2)) *
                        Math.pow(x, 2)) *
                      (1 + Math.pow(Math.tan(angle), 2)) +
                      x * Math.tan(angle));

                  $container.css({
                    bottom: z + "px",
                    left: 50 + x + "px",
                  });
                  x++;
                  if (z < parseFloat($hauteurSol)) {
                    clearInterval(sautPanneau);
                    ici.directions.sortiePanneauEnCours = false;
                    // Passage sur le sprite image etatinitial mini:
                    $container.css({
                      left: 50 + x + "px",
                      bottom: parseFloat($hauteurSol) + "px",
                      width: interpos[10].masque.width,
                      height: interpos[10].masque.height,
                    });
                    $sprite.css({
                      left: interpos[10].sprite.left,
                      bottom: interpos[10].sprite.bottom,
                      height: interpos[10].sprite.height,
                    });
                    // console.log("sortie du panneau terminée");
                    // console.log("left du container: ", $container.css("left"));

                    $sprite.animate({
                      height: interpos[00].sprite.height,
                      // width: "100px",
                      left: interpos[00].sprite.left,
                      bottom: interpos[00].sprite.bottom,
                      duration: 10,
                    });

                    $container.animate({
                      height: interpos[00].masque.height,
                      width: interpos[00].masque.width,
                      // left: $leftInitialFille + "px",
                      bottom: interpos[00].masque.bottom,
                      duration: 10,
                    });

                    indexImage = 0;
                    indexImageMini = 1;
                    indexImageMaxi = 7;
                    // ici.parametres.autorisationInit = true;
                  }
                }, 4);

                ici.parametres.debutTimerIntro = NaN;
                ici.parametres.currentTimerIntro = NaN;

                initialiseSticky(indexImage);

                ici.parametres.introDuJeu = false;

                console.log(
                  "intro du jeu: ",
                  ici.parametres.introDuJeu,
                  "sortiepanneau en cours : ",
                  ici.directions.sortiePanneauEnCours
                );
              }
            }
            ici.directions.droite = false;
            // ici.directions.sortiePanneauEnCours=false;
            if (
              ici.directions.gauche == false &&
              ici.directions.coup == false &&
              ici.directions.action == false &&
              ici.directions.sortiePanneauEnCours == false
              // &&               ici.parametres.autorisationInit == false
            ) {
              // console.log(
              // ici.directions.gauche ,
              // ici.directions.coup ,
              // ici.directions.action ,
              // ici.directions.sortiePanneauEnCours ,
              //  ici.parametres.autorisationInit);

              // console.log('retour à init par la droite');
              ici.directions.etatInitial = true;
            }
            // }
            break;

          case 13:
            if (ici.parametres.introDuJeu == false) {
              ici.directions.action = false;
              ici.detectionAction();

              console.log(
                "sortie action ",
                ici.directions.coup,
                ici.directions.gauche,
                ici.directions.droite,
                ici.directions.sortiePanneauEnCours
              );
              if (
                !ici.directions.coup &&
                !ici.directions.gauche &&
                !ici.directions.droite &&
                !ici.directions.sortiePanneauEnCours
              ) {
                ici.directions.etatInitial = true;
                console.log(ici.directions.etatInitial);
              }
            }
            break;
          case 32:
            ici.directions.coup = false;
            console.log(
              "sortie de coup ",
              ici.directions.coup,
              ici.directions.action,
              ici.directions.gauche,
              ici.directions.droite,
              ici.directions.sortiePanneauEnCours
            );

            if (
              !ici.directions.action &&
              !ici.directions.gauche &&
              !ici.directions.droite &&
              !ici.directions.sortiePanneauEnCours
            ) {
              ici.directions.etatInitial = true;
            }

            break;
        }
      });

      // requestAnimationFrame(
      //  ici.leMoteurPourLesAnimations()
      // )

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
  var $bouton = $("button");
  setInterval(function () {
    $bouton.animate({
      opacity: "0",
    });
    $bouton.animate({
      opacity: "1",
    });
  }, 1);

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
  var $tag = $("#tag");
  var $tagOpacity = $tag.css("opacity");

  $tag.mousemove(function () {
    $tag.css("opacity", $tagOpacity);
    $tagOpacity = parseFloat($tagOpacity) + 0.003;
  });
});

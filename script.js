"use-strict";


window.addEventListener('DOMContentLoaded', function(){


$(function () {
  var $hauteurSol = $("#sol").css("height");

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
        bottom: parseFloat($hauteurSol) + 157,
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
        bottom: parseFloat($hauteurSol) + 157,
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
        bottom: parseFloat($hauteurSol) + 157,
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
        bottom: parseFloat($hauteurSol) + 157,
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
        bottom: parseFloat($hauteurSol) + 157,
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
        bottom: parseFloat($hauteurSol) + 157,
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
        bottom: parseFloat($hauteurSol) + 157,
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
        bottom: parseFloat($hauteurSol) + 157,
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
  var compteurRats = 0;
  // Création de la liste d'images de panneau piéton:

  var listeImagesPanneauPieton = document.querySelectorAll(
    ".calque_panneau_pieton"
  );
  var listeBoutonsAction = document.querySelectorAll("button");

  var decor_mobile = document.getElementsByClassName("decor_mobile");

  //Récupération des styles CSS et affectation dans le DOM
  var affectationStyleDecorMobile = function () {
    for (let i = 0; i < decor_mobile.length; i++) {
      var styleDecor = window.getComputedStyle(decor_mobile[i]);
      decor_mobile[i].style.left = styleDecor.left;
      decor_mobile[i].style.width = styleDecor.width;
      decor_mobile[i].style.height = styleDecor.height;
    }
  };
  affectationStyleDecorMobile();

  console.log(decor_mobile);
  var listeDesObstacles = document.getElementsByClassName("obstacle");

  var affectationStyleObstacles = function () {
    for (let i = 0; i < listeDesObstacles.length; i++) {
      var styleObstacle = window.getComputedStyle(listeDesObstacles[i]);
      listeDesObstacles[i].style.left = styleObstacle.left;
      listeDesObstacles[i].style.width = styleObstacle.width;
      listeDesObstacles[i].style.height = styleObstacle.height;
      listeDesObstacles[i].style.opacity = styleObstacle.opacity;
    }
  };
  affectationStyleObstacles();

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
      tempoClous: [0, 100, 200, 350, 500, 700, 900, 1000],
      dernièreDirection: "",
      actionFeuTricolore: [1, 0, 0, 0],
      chronoIntro: 0,
      delaiFinIntro: 1100,
      autorisationInit: false,
      introDuJeu: true,
      compteurBoutonFille: 0,
      compteurActionFille: 0,
      apparitionBoutonFille: false,
      succes: ["#html_pic", "#css", "#js", "#jquery", "#node", "#mongo"],
      finDuJeu: false,
    },

    attributionSucces: function (indexSucces) {
      $succes = $(this.parametres.succes[indexSucces]);
      $succes.animate({
        opacity: 1,
      });
    },

    detectionAction: function () {
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
  
          this.lancementAction(bouton.id);
        }
      }
    },

    gestionDesCoups: function (indexObstacleATraiter) {
      // var $message = $("#message");
      if (listeDesObstacles.length > 0) {
        

        if (indexObstacleATraiter == 0) {
          var opaciteObstacle =
            listeDesObstacles[indexObstacleATraiter].style.opacity;
          opaciteObstacle = opaciteObstacle - 0.1;
          listeDesObstacles[indexObstacleATraiter].style.opacity =
            opaciteObstacle;


          if (opaciteObstacle < 0.1) {
            listeDesObstacles[indexObstacleATraiter].style.left = "100000px";
            var $boutonvoiture = $("#boutonvoitureenfeu");
            $boutonvoiture.css("display", "none");
            this.attributionSucces(3);
            this.directions.obstacle = false;
            
          }
        }

        if (indexObstacleATraiter == 1) {
          if (this.parametres.compteurBoutonFille == 0) {
            var $ballon = $(".ballon");
            $ballon.animate({
              bottom: "3000px",
              left: "6000px",
            });
            listeBoutonsAction[2].style.display = "block";
            this.parametres.apparitionBoutonFille = true;
          }

          if (
            this.parametres.apparitionBoutonFille &&
            this.parametres.compteurActionFille > 0
          ) {
            var $fille = $("#filleauballon");

            $fille.animate({
              bottom: "3000px",
              left: "6000px",
            });

            listeBoutonsAction[2].style.display = "none";
            this.attributionSucces(4);
          }
        }

        if (indexObstacleATraiter == 2) {
          if (compteurRats < 30) {
            
            $poubelle = $("#poubellefrappe");
            $boitearats = $("#boitearats");
            compteurRats++;
            $boitearats.append(`<img src="images/rat.svg" class="rat">`);
            $nouveauRat = $(".rat");

            $nouveauRat.css({
              width: "75px",
              position: "absolute",
              bottom: "0",
            });
            $nouveauRat.animate(
              {
                bottom: "0",
                left: "4000px",
                opacity: "0",
              },
              4000
            );

            this.attributionSucces(5);
          } else {
            $poubelle.animate(
              {
                bottom: "3000px",
                left: "4000px",
                opacity: "0",
              },
              500
            );
            var $boutonpoubelle = $("#boutonpoubelle");
            $boutonpoubelle.css("display", "none");
          }
        }
      }
    },

    lancementAction: function (idBouton) {
      var $message = $("#message");
      
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
              this.attributionSucces(1);
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
        case "boutonfille":
          this.parametres.compteurBoutonFille++;
          if (this.parametres.compteurBoutonFille == 1) {
            $message.text(
              "lui rendre son ballon...",
              this.parametres.compteurBoutonFille
            );
          }
          if (this.parametres.compteurBoutonFille == 2) {
            $message.text("");
            var $ballon = $(".ballon");
            $ballon.animate({
              bottom: "100px",
              left: "48px",
            });
            this.parametres.compteurBoutonFille = 0;
            listeBoutonsAction[2].style.display = "none";
          }

          break;

        case "boutonbus":
          $message.text(
            "Sticky aime l'art de rue, sur ce bus sera sa future oeuvre ! Prenez une bombe créez ensemble !"
          );
          setTimeout(function () {
            $message.text("");
          }, 5000);
          break;

        case "boutonvoitureenfeu":
          $message.text("Kickez moi cette épave !");
          setTimeout(function () {
            $message.text("");
          }, 4000);

          break;

        case "boutonpoubelle":
          $message.text(
            "Sticky aime quand c'est propre, aidez le à nettoyer..."
          );
          setTimeout(function () {
            $message.text("");
          }, 4000);

          break;

        case "boutonparasol":
          $message.text(
            "Bravo! Sticky est désormais libre et a aquis les succès nécessaires à la poursuite de sa vie rêvée !"
          );
          var $parasol = $("#parasol");
          var $plagiste = $("#plagiste");
          var $messagefin = $("#messagefin");
          var $boutonparasol = $("#boutonparasol");

          $container.animate({ opacity: 0 }, 500);
          $parasol.animate({ opacity: 0 }, 500);
          $plagiste.animate({ opacity: 1 }, 500);
          $messagefin.animate({ opacity: 1 }, 500);
          $boutonparasol.css("display", "none");

          this.parametres.finDuJeu = true;
      }
    },

    detectionObstacle: function (increment) {
      if (listeDesObstacles.length > 0) {
        var extremiteContainer =
          parseFloat($container.css("left")) +
          parseFloat($container.css("width"));
     
        for (let i = 0; i < listeDesObstacles.length; i++) {
          var obstacle = listeDesObstacles[i];

          if (extremiteContainer >= parseFloat(obstacle.style.left) - 20) {
            this.directions.obstacle = true;
            return i;
          } else {
            this.directions.obstacle = false;
          }
        }
      }
    },

    mouvementSticky: function (position, increment) {
      var positionActuelleContainer = parseFloat($container.css(position));

      //Test de la position left du container pour ne pas le faire sortir de l'écran à gauche ou à droite
      if (position == "left" && positionActuelleContainer + increment < 10) {
        //Test marge à gauche, on bloque le left au left mini
        $container.css("left", 10);

        // coordoContainer.bottom = parseFloat($container.css("bottom"));
      } else {
        if (
          position == "left" &&
          positionActuelleContainer + increment >
            screen.width - 0.6 * screen.width
        ) {
          // test marge à droite, on bloque le left au left maxi
          $container.css("left", parseFloat(screen.width) - 0.6 * screen.width);

          // coordoContainer.bottom = parseFloat($container.css("bottom"));
        } else {
          if (position == "left") {
            $container.css(position, positionActuelleContainer + increment);
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
        $container.css({
          width: interpos[indexImage].masque.width + "px",
          height: interpos[indexImage].masque.height + "px",
        });

        $sprite.css({
          left: interpos[indexImage].sprite.left + "px",
          bottom: interpos[indexImage].sprite.bottom + "px",
          height: interpos[indexImage].sprite.height + "px",
        });
      }

      indexImage++;
      if (indexImage == indexImageMaxi) {
        indexImage = indexImageMini;
      }
    },

    avancementDecor: function (increment) {
      if (
        parseFloat(decor_mobile[0].style.left) + increment <= 0 &&
        parseFloat(decor_mobile[0].style.left) + increment > -4600
      ) {
        for (let element of decor_mobile) {
          var nouveauLeft = parseFloat(element.style.left) + increment;
          element.style.left = nouveauLeft + "px";
        }
      }
    },

    leMoteurPourLesAnimations: function () {
      ///////// ALLER A GAUCHE /////////////
      if (this.directions.gauche) {
        if (this.parametres.introDuJeu == false) {
          $container.addClass("containerinverse");
          this.detectionObstacle();
          this.mouvementSticky("left", -13);
          this.avancementDecor(17);
        }
      }

      ///////// ALLER A DROITE /////////////
      if (this.directions.droite) {
        if (!this.parametres.introDuJeu) {
          this.detectionObstacle();
          if (this.directions.obstacle == false) {
            this.mouvementSticky("left", 10);
            this.avancementDecor(-20);
          } else {
            this.mouvementSticky("left", -10);
            this.avancementDecor(20);
          }
        } else {
          this.mouvementSticky("left", 0);
        }
      }

      ///////// RETOUR ETAT INITIAL /////////////
      if (this.directions.etatInitial) {
        if (this.parametres.introDuJeu == false) {
          this.mouvementSticky("etatInitial", NaN);
        } else {
          this.mouvementSticky("etatInitialMini", NaN);
        }
      }
      ///////// ACTION /////////////
      if (
        this.directions.action &&
        !this.directions.gauche &&
        !this.directions.droite &&
        !this.directions.coup
      ) {
        if (this.parametres.introDuJeu == false) {
          
          this.mouvementSticky("action", NaN);
        }
      }

      ///////// COUP /////////////
      if (this.directions.coup) {
        if (this.parametres.introDuJeu == false) {
          this.mouvementSticky("coup", NaN);
          var indexObstacle = this.detectionObstacle();
          
          if (this.directions.obstacle == true) {
          
            this.gestionDesCoups(indexObstacle);
          } else {
          
          }
        }
      }
    },
    // fin du moteur animations

    start: function () {
      var ici = this;
      window.addEventListener("keydown", function (event) {
        ici.directions.etatInitial = false;
        var codeTouche = event.keyCode;

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
              // Chronométrage du temps d'appui sur la touce flèche droite:
              var dateAppui = new Date();
              if (isNaN(ici.parametres.debutTimerIntro)) {
                ici.parametres.debutTimerIntro = dateAppui.getTime();
              } else {
                var dateActuelle = new Date();
                ici.parametres.currentTimerIntro = dateActuelle.getTime();
              }
              ici.parametres.chronoIntro =
                ici.parametres.currentTimerIntro -
                ici.parametres.debutTimerIntro;

              // Check des clous à colorer en fonction du temps d'appui
              for (let i = 0; i < listeImagesPanneauPieton.length; i++) {
                if (ici.parametres.chronoIntro > ici.parametres.tempoClous[i]) {
                  listeImagesPanneauPieton[i].style.zIndex = i + 1;
                }
              }

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
        ici.parametres.debutTimerIntro = NaN;

        if (ici.parametres.autorisationInit == true) {
          ici.directions.sortiePanneauEnCours = false;
        }

        $container.removeClass("containerinverse");
        if (
          ici.parametres.introDuJeu == true &&
          ici.parametres.chronoIntro > ici.parametres.delaiFinIntro
        ) {
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
              if (ici.parametres.chronoIntro <= ici.parametres.delaiFinIntro) {
                
                // Si le joueur lève la che la touche avant la fin de l'intro
                ici.parametres.debutTimerIntro = NaN; // Réinitialisation des tempos
                ici.parametres.currentTimerIntro = NaN;
                ici.parametres.chronoIntro = NaN;
                //Réinitialisation de l'affichage du panneau
                for (let i = 0; i < listeImagesPanneauPieton.length; i++) {
                  listeImagesPanneauPieton[i].style.zIndex = 1;
                }

                listeImagesPanneauPieton[0].style.zIndex = 2;
              }

              //fin lorsqu'on a passé + de 3sec sur la flèche de droite
              if (ici.parametres.chronoIntro > ici.parametres.delaiFinIntro) {
                //Réinitialisation de l'affichage du panneau
                for (let i = 0; i < listeImagesPanneauPieton.length; i++) {
                  listeImagesPanneauPieton[i].style.zIndex = 1;
                }
                listeImagesPanneauPieton[0].style.zIndex = 2;

                // Passage sur le sprite image run8mini:

                // Lancement de l'animation de sortie de panneau:
                var angle = (75 * Math.PI) / 180;
                var vitesseInitiale = 60;
                var gravite = 15;
                var x = 0;
                ici.directions.sortiePanneauEnCours = true;
                ici.attributionSucces(0);
                var $message = $("#message");
                $message.text("");
                var sautPanneau = setInterval(function () {
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

                    $sprite.animate({
                      height: interpos[00].sprite.height,
                      left: interpos[00].sprite.left,
                      bottom: interpos[00].sprite.bottom,
                      duration: 10,
                    });

                    $container.animate({
                      height: interpos[00].masque.height,
                      width: interpos[00].masque.width,
                      bottom: interpos[00].masque.bottom,
                      duration: 10,
                    });

                    indexImage = 0;
                    indexImageMini = 1;
                    indexImageMaxi = 7;
                  }
                }, 4);

                ici.parametres.debutTimerIntro = NaN;
                ici.parametres.currentTimerIntro = NaN;

                initialiseSticky(indexImage);

                ici.parametres.introDuJeu = false;
              }
            }
            ici.directions.droite = false;

            if (
              ici.directions.gauche == false &&
              ici.directions.coup == false &&
              ici.directions.action == false &&
              ici.directions.sortiePanneauEnCours == false
            ) {
              ici.directions.etatInitial = true;
            }

            break;

          case 13:
            if (ici.parametres.introDuJeu == false) {
              ici.directions.action = false;
              ici.detectionAction();

              if (
                !ici.directions.coup &&
                !ici.directions.gauche &&
                !ici.directions.droite &&
                !ici.directions.sortiePanneauEnCours
              ) {
                ici.directions.etatInitial = true;
              }
            }
            break;
          case 32:
            ici.directions.coup = false;

            if (ici.parametres.apparitionBoutonFille) {
              ici.parametres.compteurActionFille++;
            }

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

      var jeu = window.setInterval(function () {
        ici.leMoteurPourLesAnimations(0);
        if (ici.parametres.finDuJeu) {
          clearInterval(jeu);
        }
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
  var $bus = $("#bus");

  var $tagOpacity = $tag.css("opacity");

  $bus.mousemove(function (event) {
    $tag.css("opacity", $tagOpacity);

    if ($tagOpacity > 0.3) {
      monJeu.attributionSucces(2);
    }
    $tagOpacity = parseFloat($tagOpacity) + 0.004;
  });
});
});//  fin du DOM Content loaded
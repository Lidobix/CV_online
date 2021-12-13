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
  var timing = 50;

  
  var delaiFinIntro = 100;
  var $hauteurSol = $("#sol").css("height");
  console.log("hauteur du sol :", $hauteurSol);

  
  var sautEnCours = false;
 
  var actionFeuTricolore = [1, 0, 0, 0];

  var $feuRouge = $(".feuRouge");
  var $feuOrange = $(".feuOrange");
  var $feuVert = $(".feuVert");
  var chronoIntro;
  var introDuJeu = true;
  var $container = $("#container");
  var $sprite = $("#contenu");
  var indexImage = 10;
  var indexImageMini = 11;
  var indexImageMaxi = 18;
  var listeImagesPanneauPieton = [];
  var nouveauLeft = 100;

  // Création de la liste d'images de panneau piéton:
  // for (let i = 0; i < 8; i++) {
  //   var imagePanneau = document.getElementsByClassName("panneau_pieton_" + i);
  //   listeImagesPanneauPieton[i] = imagePanneau;
  // }

  var listeImagesPanneauPieton = document.querySelectorAll(
    ".calque_panneau_pieton"
  );
  var appliZIndex = function (element, item, objet) {
    element.style.zIndex = "1";
  };
  listeImagesPanneauPieton.forEach(appliZIndex);
  listeImagesPanneauPieton[0].style.zIndex = "2";
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
  // console.log(listeDesObstacles);

  var affectationStyleObstacles = function () {
    for (let i = 0; i < listeDesObstacles.length; i++) {
      var styleObstacle = window.getComputedStyle(listeDesObstacles[i]);
      // console.log("styledecor : ", styleDecor);
      // console.log("styleobstacle.left : ", styleObstacle.left);
      listeDesObstacles[i].style.left = styleObstacle.left;
      listeDesObstacles[i].style.width = styleObstacle.width;
      listeDesObstacles[i].style.height = styleObstacle.height;
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
      haut: false,
      droite: false,
      bas: false,
      gauche: false,
      derniere: "",
      etatInitial: true,
      coup: false,
      action: false,
      obstacle: false,
    },
    parametres: {
      debutTimerIntro: NaN,
      currentTimerIntro: NaN,
      tempoClous: [0, 200, 400, 600, 800, 1000, 1200, 1500],
      dernièreDirection: "",
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

    lancementAction: function (idBouton) {
      console.log("entrée dans la fonction de lancement d'action");
      switch (idBouton) {
        case "boutonfeutricolore":
          // console.log(
          //   "bouton appuyé: feu tricolore, ",
          //   "appuin°",
          //   actionFeuTricolore[0]
          // );
          switch (actionFeuTricolore[0]) {
            case 1:
              $feuRouge.css("background-color", "rgb(255, 0, 0)");
              var photo1 = document.getElementById("identite_1");
              photo1.style.display = "block";
              break;
            case 2:
              $feuVert.css("background-color", "rgb(9, 251, 70)");
              var photo3 = document.getElementById("identite_2");
              photo3.style.display = "block";
              break;
            case 3:
              $feuOrange.css("background-color", "rgb(255, 187, 0)");
              var photo2 = document.getElementById("identite_3");
              photo2.style.display = "block";
              break;
            case 4:
              actionFeuTricolore[0] = 0;
              $feuRouge.css("background-color", "rgb(131, 38, 38)");
              $feuOrange.css("background-color", "rgb(138, 77, 27)");
              $feuVert.css("background-color", "rgb(23, 58, 31)");
              break;
          }
          actionFeuTricolore[0]++;
          break;
      }
    },

    detectionObstacle: function (increment) {
      console.log("entrée dans la fonction de détection d'obstacle");

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
        // console.log('obstacle.left : ', parseFloat(obstacle.left));

        if (extremiteContainer >= parseFloat(obstacle.style.left) - 20) {
          // increment=0;
          console.log("obstacle touché ");
          this.directions.obstacle = true;
        } else {
          this.directions.obstacle = false;
          console.log(
            "aucun obstacle détecté, bottom actuel :",
            $container.css("bottom")
          );
        }

        // this.lancementAction(bouton.id);
      }
    },

    mouvementHorizontal: function (position, increment) {
      // console.log("increment =", increment);
      var positionActuelleContainer = parseFloat($container.css(position));

      //Test de la position left du container pour ne pas le faire sortir de l'écran à gauche ou à droite
      if (position == "left" && positionActuelleContainer + increment < 10) {
        //Test marge à gauche, on bloque le left au left mini
        $container.css("left", 10);
        // console.log(
        //   "on va à gauche, et on arrive au bord de écran, le left est calibré à 10px: ",
        //   $container.css("left")
        // );
        // coordoContainer.bottom = parseFloat($container.css("bottom"));
      } else {
        if (
          position == "left" &&
          positionActuelleContainer + increment >  (parseFloat(screen.width)-30) 
        ) {
          // test marge à droite, on bloque le left au left maxi
          $container.css("left", parseFloat(screen.width)-30);
          // console.log(
          //   "on va à droite, et on arrive au bord de écran, le left est calibré à 1010px :",
          //   $container.css("left")
          // );
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
          // if(this.directions.derniere == "gauche") {

          // $container.css('left', parseFloat($container.css('left')) + 10 + 'px');

          // }
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
      if (position == "sautEnHauteur" && sautEnCours == false) {
        console.log(
          'demande de saut détectée, sautEnCours actuel  ="',
          sautEnCours
        );
        sautEnCours = true;
        console.log("demande de saut détectée, incrément actuel  =", increment);

        console.log("saut en cours =", sautEnCours);
        $container.css({
          width: interpos[7].masque.width + "px",
          height: interpos[7].masque.height + "px",
        });

        console.log("bottom du container :", $container.css("bottom"));
        // On affiche le sprite du saut:
        $sprite.css({
          left: interpos[7].sprite.left + "px",
          bottom: interpos[7].sprite.bottom + "px",
        });

        if (this.directions.obstacle == false) {
          var bottomDeRef = $hauteurSol;
        }

        var saut = function () {
          console.log("entrée dans la fonction de saut");
          console.log("bottom de ref :", bottomDeRef);

          $container
            .animate(
              { bottom: parseFloat(bottomDeRef) + 100 + "px" },
              { duration: 75 }
            )
            .animate(
              { bottom: parseFloat(bottomDeRef) + 150 + "px" },
              { duration: 125 }
            )
            .animate(
              { bottom: parseFloat(bottomDeRef) + 100 + "px" },
              { duration: 125 }
            )
            .animate(
              { bottom: parseFloat(bottomDeRef) + "px" },
              { duration: 50 }
            );
        };
        saut();
      }
      //////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////// SAUT EN LONGUEUR GAUCHE /////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////



      //////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////// SAUT EN LONGUEUR DROITE/////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////
if (position == "sautenlongueur"){

  sautEnCours = true;
  console.log("demande de saut en longueur");
  var leftActuel = parseFloat($container.css("left"));
  console.log("left actuel du container: ", leftActuel);
  $sprite.css({
    left: interpos[7].sprite.left + "px",
    bottom: interpos[7].sprite.bottom + "px",
  });
  $container.css({
    width: interpos[7].masque.width + "px",
    height: interpos[7].masque.height + "px",
  });
  var x = 0;
  var sautenLongueur = function () {
    console.log("entrée dans la fonction de calcul de trajectoire");
    
    // $container.css("left", x + "px");
    var angle = (75 * Math.PI) / 80;
    var vitesseInitiale = 85;
    var gravite = 15;
    
    console.log("hauteur du sol: ", $hauteurSol);

    // Equation de trajectoire:
    var z =
      parseFloat($hauteurSol) +
      (-0.5 *
        ((gravite / Math.pow(vitesseInitiale, 2)) * Math.pow(x, 2)) *
        (1 + Math.pow(Math.tan(angle), 2)) +
        x * Math.tan(angle));
    // console.log("position z :", z);

    if (z >= parseFloat($hauteurSol)) {
      $container.css({
        bottom: z + "px",
        left: x + leftActuel + "px",
        
      });
      x = x + 10;
      console.log("exécution du saut");
      console.log("left actuel du container :", $container.css('left'));
      console.log("valeur du noouveau z calculé :", z);

      // for (let element of decor_mobile) {
      //   nouveauLeft = parseFloat(element.style.left) -5;
      //   element.style.left = nouveauLeft + "px";
      // }




      requestAnimationFrame(sautenLongueur);
    }
  };
  requestAnimationFrame(sautenLongueur);
  console.log("valeur du noouveau z calculé à la fin du saut:", z);
  


}



      ////////////////////////////////////////////////////////////////////////////////////
      /////////////////// REGLAGE DU CONTAINER ET DU SPRITE EN COURANT ///////////////////
      ////////////////////////////////////////////////////////////////////////////////////
      if (increment != NaN && position != "sautEnHauteur") {
        // console.log("on va changer le sprite");
        // console.log('on va affecter une nouvelle valeur de left :', $container.css("left"), 'indexImage = ', indexImage);
        // console.log("increment =", increment);
        $container.css({
          left: interpos[indexImage].masque.left + increment + "px",
          width: interpos[indexImage].masque.width + "px",
          height: interpos[indexImage].masque.height + "px",
          bottom: interpos[indexImage].masque.bottom + "px",
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
      // console.log("on avance le décor");
             for (let element of decor_mobile) {
        nouveauLeft = parseFloat(element.style.left) + increment;
        element.style.left = nouveauLeft + "px";
             }
    
    },

    leMoteurPourLesAnimations: function () {
      if (this.directions.gauche && !this.directions.haut) {
        if (introDuJeu == false) {
          $container.addClass("containerinverse");
          this.detectionObstacle();
          this.mouvementHorizontal("left", -13);
          this.avancementDecor(17);
        }
      }
      if (this.directions.droite && !this.directions.haut) {
        if (introDuJeu == false) {
          console.log(
            // "appui touche droite, intro finie, on calcule le déplacement du container. son left actuel est : ",
            $container.css("left")
          );
          $container.removeClass("containerinverse");
          this.detectionObstacle();
          if (this.directions.obstacle == false) {
            this.mouvementHorizontal("left", 10);
            this.avancementDecor(-20);
          } else {
            this.mouvementHorizontal("left", 0);
            this.avancementDecor(-12);
          }
        } else {
          // console.log(
          // "appui touche droite, intro en cours, le déplacement du container est nul (toujours dans le panneau), son left actuel est : ",
          //   $container.css("left")
          // );
          this.mouvementHorizontal("left", 0);
        }
      }

      if (this.directions.droite && this.directions.haut && !introDuJeu && !sautEnCours) {
        $container.removeClass("containerinverse");
        this.mouvementHorizontal("sautenlongueur", 10);    
      }

      if (this.directions.gauche && this.directions.haut && !introDuJeu && !sautEnCours) {
        $container.addClass("containerinverse");
        this.mouvementHorizontal("sautenlongueur", -10);    
      }

      if (
        this.directions.haut && !this.directions.gauche && !this.directions.droite) {
        console.log("demande de saut vertical uniquement");
        if (introDuJeu == false) {
          this.detectionObstacle();
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
          this.mouvementHorizontal("etatInitialMini", NaN);
        }
      }
      if (this.directions.action) {
        if (introDuJeu == false) {
          // console.log("appui sur la touche action");
          this.mouvementHorizontal("action", NaN);
          // this.detectionAction();
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
        // console.log('appui touche');
        // console.log("appui touche, left container : ", $container.css("left"));
        ici.directions.etatInitial = false;
        var codeTouche = event.keyCode;

        // console.log("appui touche, état intro du jeu: ", introDuJeu);
        switch (codeTouche) {
          case 37:
            ici.directions.gauche = true;
            break;
          case 38:
            ici.directions.haut = true;
            break;
          case 39:
            if (introDuJeu == true) {
              // console.log("eappui touche ntrée dans l'intro");
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
                  // listeImagesPanneauPieton[i][0].style.zIndex = i + 1;
                  listeImagesPanneauPieton[i].style.zIndex = i + 1;

                  // console.log(ici.parametres.listeImagesPanneauPieton);
                }
              }
            }
            // console.log('eappui touche mais on est sorti de l\'intro');
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
        // console.log("relache touche");
        // console.log(
        //   "relache touche, left container : ",
        //   $container.css("left")
        // );

        ici.directions.etatInitial = true;

        if (introDuJeu == true && chronoIntro > delaiFinIntro) {
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
            break;
          case 38:
            sautEnCours = false;
            ici.directions.haut = false;

            break;
          case 39:
            ici.directions.derniere = "droite";
            if (introDuJeu == true) {
              // console.log("relache touche, on est toujours dans l'intro");

              if (chronoIntro < delaiFinIntro) {
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
              if (chronoIntro > delaiFinIntro) {
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

                var sautPanneau = setInterval(function () {
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
                  }
                }, 4);

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
                // console.log(
                //   "on efface les chronos après la sortie du panneau ",
                //   ici.parametres.debutTimerIntro,
                //   ici.parametres.currentTimerIntro
                // );

                // console.log($container.css("left"));

                // $container.css('left','204px');

                // indexImage = 0;
                // indexImageMini = 1;
                // indexImageMaxi = 7;
                initialiseSticky(indexImage);

                introDuJeu = false;

                console.log(introDuJeu);
              }
            }

            ici.directions.droite = false;
            break;
          case 40:
            ici.directions.bas = false;
            break;
          case 13:
            if (introDuJeu == false) {
              ici.detectionAction();
            }
            ici.directions.action = false;

            break;
          case 32:
            ici.directions.coup = false;
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

  // var $boutonDActionFeu = $("#boutonfeutricolore");
  // let $leftInitialFeuTri = parseFloat($boutonDActionFeu.css("left"));
  // setInterval(function () {
  //   $boutonDActionFeu.animate({
  //     height: "25px",
  //     width: "25px",
  //     left: $leftInitialFeuTri - 7 + "px",
  //     bottom: "65px",
  //     duration: 10,
  //   });
  //   $boutonDActionFeu.animate({
  //     height: "10px",
  //     width: "10px",
  //     left: $leftInitialFeuTri + "px",
  //     bottom: "75px",
  //     duration: 10,
  //   });
  // }, 10);

  // var $boutonDActionFille = $("#boutonfille");
  // let $leftInitialFille = parseFloat($boutonDActionFille.css("left"));
  // setInterval(function () {
  //   $boutonDActionFille.animate({
  //     height: "25px",
  //     width: "25px",
  //     left: $leftInitialFille - 7 + "px",
  //     bottom: "65px",
  //     duration: 10,
  //   });
  //   $boutonDActionFille.animate({
  //     height: "10px",
  //     width: "10px",
  //     left: $leftInitialFille + "px",
  //     bottom: "75px",
  //     duration: 10,
  //   });
  // }, 10);

  // var $boutonDActionTracteur = $("#boutontracteur");
  // let $leftInitialTracteur = parseFloat($boutonDActionTracteur.css("left"));
  // setInterval(function () {
  //   $boutonDActionTracteur.animate({
  //     height: "25px",
  //     width: "25px",
  //     left: $leftInitialTracteur - 7 + "px",
  //     bottom: "65px",
  //     duration: 10,
  //   });
  //   $boutonDActionTracteur.animate({
  //     height: "10px",
  //     width: "10px",
  //     left: $leftInitialTracteur + "px",
  //     bottom: "75px",
  //     duration: 10,
  //   });
  // }, 10);

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

  $tag.mousemove(function () {
    $tag.css("opacity", $tagOpacity);
    $tagOpacity = parseFloat($tagOpacity) + 0.003;
  });
});

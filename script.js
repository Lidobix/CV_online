"use-strict";

window.addEventListener("DOMContentLoaded", function () {
  $(function () {
    const monJeu = {
      directions: {
        droite: false,
        bas: false,
        gauche: false,
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
        actionFeuTricolore: [1, 0, 0, 0],
        chronoIntro: 0,
        delaiFinIntro: 1100,
        autorisationInit: false,
        introDuJeu: true,
        navigateur: "",
        compteurBoutonFille: 0,
        compteurActionFille: 0,
        apparitionBoutonFille: false,
        succes: ["#html_pic", "#css", "#js", "#jquery", "#node", "#mongo"],
        finDuJeu: false,
        listeBoutonsAction: [],
        decor_mobile: [],
        listeDesObstacles: [],
        listeImagesPanneauPieton: [],
        indexImage: 10,
        indexImageMini: 11,
        indexImageMaxi: 18,
        $container: $("#container"),
        $sprite: $("#contenu"),
        compteurRats: 0,
        $hauteurSol: 0,
        angleDeg: 0,
        vitesseInitiale: 0,
        gravite:0,
        interpos: [
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
              bottom: parseFloat($("#sol").css("height")) + 157,
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
              bottom: parseFloat($("#sol").css("height")) + 157,
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
              bottom: parseFloat($("#sol").css("height")) + 157,
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
              bottom: parseFloat($("#sol").css("height")) + 157,
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
              bottom: parseFloat($("#sol").css("height")) + 157,
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
              bottom: parseFloat($("#sol").css("height")) + 157,
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
              bottom: parseFloat($("#sol").css("height")) + 157,
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
              bottom: parseFloat($("#sol").css("height")) + 157,
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
        ],
      },

      initialisationDesVariables: function () {
        /////////// DEFINITION DE LA LISTE DES BOUTONS D'ACTION ///////////

        this.parametres.listeBoutonsAction =
          document.querySelectorAll("button");

        /////////// DEFINITION DE LA LISTE DES ELEMENTS DE DECOR ///////////

        this.parametres.decor_mobile =
          document.getElementsByClassName("decor_mobile");

        for (let i = 0; i < this.parametres.decor_mobile.length; i++) {
          const styleDecor = window.getComputedStyle(
            this.parametres.decor_mobile[i]
          );
          this.parametres.decor_mobile[i].style.left = styleDecor.left;
          this.parametres.decor_mobile[i].style.width = styleDecor.width;
          this.parametres.decor_mobile[i].style.height = styleDecor.height;
        }

        /////////////// DEFINITION DE LA LISTE DES OBSTACLES ///////////////

        this.parametres.listeDesObstacles =
          document.getElementsByClassName("obstacle");

        for (let i = 0; i < this.parametres.listeDesObstacles.length; i++) {
          const obstacle = this.parametres.listeDesObstacles[i];
          const styleObstacle = window.getComputedStyle(obstacle);
          obstacle.style.left = styleObstacle.left;
          obstacle.style.width = styleObstacle.width;
          obstacle.style.height = styleObstacle.height;
          obstacle.style.opacity = styleObstacle.opacity;
        }

        /////// DEFINITION DE LA LISTE DES CALQUES DU PANNEAU PIETON ///////

        this.parametres.listeImagesPanneauPieton = document.querySelectorAll(
          ".calque_panneau_pieton"
        );
      },

      initialiseSticky(index) {
        this.parametres.$container.css({
          left: this.parametres.interpos[index].masque.left,
          bottom: this.parametres.interpos[index].masque.bottom,
          width: this.parametres.interpos[index].masque.width,
          height: this.parametres.interpos[index].masque.height,
        });
        this.parametres.$sprite.css({
          left: this.parametres.interpos[index].sprite.left,
          bottom: this.parametres.interpos[index].sprite.bottom,
          height: this.parametres.interpos[index].sprite.height,
        });

        /////////////////////// DEFINITION DU NAVIGATEUR ///////////////////////

        const refNavigateur = window.navigator.userAgent;
        const tableauNavigateur = ["Firefox", "Edg", "Chrome"];
        let i = -1;
        let testNavigateur = false;

        while (testNavigateur == false) {
          i++;
          testNavigateur = refNavigateur.includes(tableauNavigateur[i]);
        }

        switch (tableauNavigateur[i]) {
          case "Firefox":
            this.parametres.navigateur = "Firefox";
            break;
          case "Edg":
            this.parametres.navigateur = "Edge";
            break;
          case "Chrome":
            this.parametres.navigateur = "Chrome";
        }

        if (this.parametres.navigateur == "Firefox") {
          this.parametres.angleDeg = 84;
          this.parametres.vitesseInitiale = 115;
          this.parametres.gravite = 65;
        } else {
          this.parametres.angleDeg = 75;
          this.parametres.vitesseInitiale = 60;
          this.parametres.gravite = 15;
        }
      },

      animations: function () {
        ///////////////////// ANIMATION DES BOUTONS D'ACTION /////////////////////
        const $bouton = $("button");
        setInterval(function () {
          $bouton.animate({
            opacity: "0",
          });
          $bouton.animate({
            opacity: "1",
          });
        }, 1);

        //////////////////////////MATION DU FEU DE VOITURE //////////////////////

        const $feu = $(".feu");
        const $widthFeu = parseFloat($feu.css("width"));
        const $leftFeu = parseFloat($feu.css("left"));
        const $heightFeu = parseFloat($feu.css("height"));
        setInterval(function () {
          let facteur = parseInt(100 * Math.random()) / 100;
          $feu.css({
            left:
              210 +
              ($leftFeu - $widthFeu / 2) -
              ($widthFeu * facteur) / 2 +
              "px",
            width: $widthFeu * facteur + "px",
            height: $heightFeu * facteur + "px",
          });
        }, 100);
      },

      attributionSucces: function (indexSucces) {
        $succes = $(this.parametres.succes[indexSucces]);
        $succes.animate({
          opacity: 1,
        });
      },

      detectionAction: function () {
        for (let i = 0; i < this.parametres.listeBoutonsAction.length; i++) {
          const bouton = this.parametres.listeBoutonsAction[i];
          let extremiteContainer =
            parseFloat(this.parametres.$container.css("left")) +
            parseFloat(this.parametres.$container.css("width"));
          const styleBouton = window.getComputedStyle(bouton);

          if (
            extremiteContainer > parseFloat(styleBouton.left) - 10 &&
            extremiteContainer <
              parseFloat(styleBouton.left) + parseFloat(styleBouton.width) + 10
          ) {
            this.lancementAction(bouton.id);
          }
        }
      },

      gestionDesCoups: function (indexObstacleATraiter) {
        if (this.parametres.listeDesObstacles.length > 0) {
          if (indexObstacleATraiter == 0) {
            let opaciteObstacle =
              this.parametres.listeDesObstacles[indexObstacleATraiter].style
                .opacity;
            opaciteObstacle = opaciteObstacle - 0.1;
            this.parametres.listeDesObstacles[
              indexObstacleATraiter
            ].style.opacity = opaciteObstacle;

            if (opaciteObstacle < 0.1) {
              this.parametres.listeDesObstacles[
                indexObstacleATraiter
              ].style.left = "100000px";
              const $boutonvoiture = $("#boutonvoitureenfeu");
              $boutonvoiture.css("display", "none");
              this.attributionSucces(3);
              this.directions.obstacle = false;
            }
          }

          if (indexObstacleATraiter == 1) {
            const $boutonFille = $("#boutonfille");
            const $ballon = $(".ballon");
            const $fille = $("#filleauballon");
            const $filleAvecBallon = $(".filleavecballon");
            const $filleSansBallon = $(".fillesansballon");

            if (this.parametres.compteurBoutonFille == 0) {
              $ballon.animate({
                bottom: "3000px",
                left: "6000px",
              });

              $filleAvecBallon.css("display", "none");
              $filleSansBallon.css("display", "block");

              $boutonFille.css("display", "block");
              this.parametres.apparitionBoutonFille = true;
            }

            if (
              this.parametres.apparitionBoutonFille &&
              this.parametres.compteurActionFille > 0
            ) {
              $fille.animate({
                bottom: "3000px",
                left: "6000px",
              });
              $boutonFille.css("display", "none");
              this.attributionSucces(4);
            }
          }

          if (indexObstacleATraiter == 2) {
            if (this.parametres.compteurRats < 30) {
              $poubelle = $("#poubellefrappe");
              $boitearats = $("#boitearats");
              this.parametres.compteurRats++;
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
              const $boutonpoubelle = $("#boutonpoubelle");
              $boutonpoubelle.css("display", "none");
            }
          }
        }
      },

      lancementAction: function (idBouton) {
        const $message = $("#message");

        switch (idBouton) {
          case "boutonfeutricolore":
            const $feuRouge = $(".feuRouge");
            const $feuOrange = $(".feuOrange");
            const $feuVert = $(".feuVert");

            switch (this.parametres.actionFeuTricolore[0]) {
              case 1:
                $feuRouge.css("background-color", "rgb(255, 0, 0)");
                const photo1 = document.getElementById("identite_1");
                photo1.style.display = "block";
                break;
              case 2:
                $feuOrange.css("background-color", "rgb(255, 187, 0)");
                const photo2 = document.getElementById("identite_2");
                photo2.style.display = "block";
                break;
              case 3:
                $feuVert.css("background-color", "rgb(9, 251, 70)");
                const photo3 = document.getElementById("identite_3");
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
            const $filleAvecBallon = $(".filleavecballon");
            const $filleSansBallon = $(".fillesansballon");
            const $ballon = $(".ballon");
            const $boutonFille = $("#boutonfille");
            this.parametres.compteurBoutonFille++;
            if (
              this.parametres.compteurBoutonFille == 1 &&
              $boutonFille.css("display") == "block"
            ) {
              $message.text(
                "lui rendre son ballon...",
                this.parametres.compteurBoutonFille
              );
            }
            if (this.parametres.compteurBoutonFille == 2) {
              $message.text("");
              $ballon.animate({
                bottom: "100px",
                left: "48px",
              });
              $filleAvecBallon.css("display", "block");
              $filleSansBallon.css("display", "none");
              this.parametres.compteurBoutonFille = 0;
              $boutonFille.css("display", "none");
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
            const $boutonvoiture = $("#boutonvoitureenfeu");
            if ($boutonvoiture.css("display") == "block") {
              $message.text("Kickez moi cette épave !");
              setTimeout(function () {
                $message.text("");
              }, 4000);
            }
            break;

          case "boutonpoubelle":
            const $boutonpoubelle = $("#boutonpoubelle");
            if ($boutonpoubelle.css("display") == "block") {
              $message.text(
                "Sticky aime quand c'est propre, aidez le à nettoyer..."
              );
              setTimeout(function () {
                $message.text("");
              }, 4000);
            }
            break;

          case "boutonparasol":
            $message.text(
              "Bravo! Sticky est désormais libre et a aquis les succès nécessaires à la poursuite de sa vie rêvée !"
            );
            const $parasol = $("#parasol");
            const $plagiste = $("#plagiste");
            const $messagefin = $("#messagefin");
            const $boutonparasol = $("#boutonparasol");

            this.parametres.$container.animate({ opacity: 0 }, 600);
            $parasol.animate({ opacity: 0 }, 600);
            $plagiste.animate({ opacity: 1 }, 600);
            $messagefin.animate({ opacity: 1 }, 600);
            $boutonparasol.css("display", "none");

            this.parametres.finDuJeu = true;
        }
      },

      detectionObstacle: function () {
        if (this.parametres.listeDesObstacles.length > 0) {
          const extremiteContainer =
            parseFloat(this.parametres.$container.css("left")) +
            parseFloat(this.parametres.$container.css("width"));

          for (let i = 0; i < this.parametres.listeDesObstacles.length; i++) {
            const obstacle = this.parametres.listeDesObstacles[i];

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
        const positionActuelleContainer = parseFloat(
          this.parametres.$container.css(position)
        );

        //Test de la position left du container pour ne pas le faire sortir de l'écran à gauche ou à droite
        if (position == "left" && positionActuelleContainer + increment < 10) {
          //Test marge à gauche, on bloque le left au left mini
          this.parametres.$container.css("left", 10);
        } else {
          if (
            position == "left" &&
            positionActuelleContainer + increment >
              screen.width - 0.55 * screen.width
          ) {
            // test marge à droite, on bloque le left au left maxi
            this.parametres.$container.css(
              "left",
              parseFloat(screen.width) - 0.55 * screen.width
            );
          } else {
            if (position == "left") {
              this.parametres.$container.css(
                position,
                positionActuelleContainer + increment
              );
            }
          }
        }

        switch (position) {
          case "coup":
            this.parametres.indexImage = 8;
            break;
          case "action":
            this.parametres.indexImage = 9;
            break;
          case "etatInitial":
            this.parametres.indexImage = 0;
            increment = "0";
            break;
          case "etatInitialMini":
            this.parametres.indexImage = 10;
            break;
        }

        /////////////////// REGLAGE DU CONTAINER ET DU SPRITE EN COURANT ///////////////////

        if (increment != NaN) {
          this.parametres.$container.css({
            width:
              this.parametres.interpos[this.parametres.indexImage].masque
                .width + "px",
            height:
              this.parametres.interpos[this.parametres.indexImage].masque
                .height + "px",
          });

          this.parametres.$sprite.css({
            left:
              this.parametres.interpos[this.parametres.indexImage].sprite.left +
              "px",
            bottom:
              this.parametres.interpos[this.parametres.indexImage].sprite
                .bottom + "px",
            height:
              this.parametres.interpos[this.parametres.indexImage].sprite
                .height + "px",
          });
        }

        this.parametres.indexImage++;
        if (this.parametres.indexImage >= this.parametres.indexImageMaxi) {
          this.parametres.indexImage = this.parametres.indexImageMini;
        }
      },

      avancementDecor: function (increment) {
        if (
          parseFloat(this.parametres.decor_mobile[0].style.left) + increment <=
            0 &&
          parseFloat(this.parametres.decor_mobile[0].style.left) + increment >
            -4600
        ) {
          for (let element of this.parametres.decor_mobile) {
            const nouveauLeft = parseFloat(element.style.left) + increment;
            element.style.left = nouveauLeft + "px";
          }
        }
      },

      leMoteurPourLesAnimations: function () {
        ///////// ALLER A GAUCHE /////////////
        if (this.directions.gauche) {
          if (this.parametres.introDuJeu == false) {
            this.parametres.$container.addClass("containerinverse");
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
            const indexObstacle = this.detectionObstacle();

            if (this.directions.obstacle == true) {
              this.gestionDesCoups(indexObstacle);
            } else {
            }
          }
        }
      },
      // fin du moteur animations
      debutIntroDuJeu(contexte) {
        // Chronométrage du temps d'appui sur la touce flèche droite:
        const dateAppui = new Date();
        if (isNaN(contexte.parametres.debutTimerIntro)) {
          contexte.parametres.debutTimerIntro = dateAppui.getTime();
        } else {
          const dateActuelle = new Date();
          contexte.parametres.currentTimerIntro = dateActuelle.getTime();
        }
        contexte.parametres.chronoIntro =
          contexte.parametres.currentTimerIntro -
          contexte.parametres.debutTimerIntro;

        // Check des clous à colorer en fonction du temps d'appui
        for (
          let i = 0;
          i < contexte.parametres.listeImagesPanneauPieton.length;
          i++
        ) {
          if (
            contexte.parametres.chronoIntro > contexte.parametres.tempoClous[i]
          ) {
            contexte.parametres.listeImagesPanneauPieton[i].style.zIndex =
              i + 1;
          }
        }

        contexte.directions.droite = true;
      },

      finIntroDuJeu(contexte) {
        if (
          contexte.parametres.chronoIntro <= contexte.parametres.delaiFinIntro
        ) {
          // Si le joueur lève la touche avant la fin de l'intro
          contexte.parametres.debutTimerIntro = NaN; // Réinitialisation des tempos
          contexte.parametres.currentTimerIntro = NaN;
          contexte.parametres.chronoIntro = NaN;
          //Réinitialisation de l'affichage du panneau
          for (
            let i = 0;
            i < contexte.parametres.listeImagesPanneauPieton.length;
            i++
          ) {
            contexte.parametres.listeImagesPanneauPieton[i].style.zIndex = 1;
          }

          contexte.parametres.listeImagesPanneauPieton[0].style.zIndex = 2;
        }

        //fin lorsqu'on a passé + de 3sec sur la flèche de droite
        if (
          contexte.parametres.chronoIntro > contexte.parametres.delaiFinIntro
        ) {
          //Réinitialisation de l'affichage du panneau
          for (
            let i = 0;
            i < contexte.parametres.listeImagesPanneauPieton.length;
            i++
          ) {
            contexte.parametres.listeImagesPanneauPieton[i].style.zIndex = 1;
          }
          contexte.parametres.listeImagesPanneauPieton[0].style.zIndex = 2;

          // Passage sur le sprite image run8mini:

          // Lancement de l'animation de sortie de panneau:

          const angleRad = (contexte.parametres.angleDeg * Math.PI) / 180;
          const vitesseInitiale = contexte.parametres.vitesseInitiale;

          const gravite = contexte.parametres.gravite;
          let x = 0;
          contexte.directions.sortiePanneauEnCours = true;
          contexte.attributionSucces(0);
          $("#message").text("");

          const sautPanneau = setInterval(function () {
            contexte.parametres.$container.css({
              left: contexte.parametres.interpos[17].masque.left,
              bottom: contexte.parametres.interpos[17].masque.bottom,
              width: contexte.parametres.interpos[17].masque.width,
              height: contexte.parametres.interpos[17].masque.height,
            });

            contexte.parametres.$sprite.css({
              left: contexte.parametres.interpos[17].sprite.left,
              bottom: contexte.parametres.interpos[17].sprite.bottom,
              height: contexte.parametres.interpos[17].sprite.height,
            });

            z =
              207 +
              (-0.5 *
                ((gravite / Math.pow(vitesseInitiale, 2)) * Math.pow(x, 2)) *
                (1 + Math.pow(Math.tan(angleRad), 2)) +
                x * Math.tan(angleRad));

            contexte.parametres.$container.css({
              bottom: z + "px",
              left: 50 + x + "px",
            });
            x++;
            if (z < parseFloat($("#sol").css("height"))) {
              clearInterval(sautPanneau);
              contexte.directions.sortiePanneauEnCours = false;
              // Passage sur le sprite image etatinitial mini:
              contexte.parametres.$container.css({
                left: 50 + x + "px",
                bottom: parseFloat($("#sol").css("height")) + "px",
                width: contexte.parametres.interpos[10].masque.width,
                height: contexte.parametres.interpos[10].masque.height,
              });
              contexte.parametres.$sprite.css({
                left: contexte.parametres.interpos[10].sprite.left,
                bottom: contexte.parametres.interpos[10].sprite.bottom,
                height: contexte.parametres.interpos[10].sprite.height,
              });

              contexte.parametres.$sprite.animate({
                height: contexte.parametres.interpos[00].sprite.height,
                left: contexte.parametres.interpos[00].sprite.left,
                bottom: contexte.parametres.interpos[00].sprite.bottom,
                duration: 10,
              });

              contexte.parametres.$container.animate({
                height: contexte.parametres.interpos[00].masque.height,
                width: contexte.parametres.interpos[00].masque.width,
                bottom: contexte.parametres.interpos[00].masque.bottom,
                duration: 10,
              });

              contexte.parametres.indexImage = 0;
              contexte.parametres.indexImageMini = 1;
              contexte.parametres.indexImageMaxi = 7;
            }
          }, 4);

          this.parametres.debutTimerIntro = NaN;
          this.parametres.currentTimerIntro = NaN;

          this.initialiseSticky(this.parametres.indexImage);
          this.parametres.introDuJeu = false;
        }
      },

      start: function () {
        this.initialisationDesVariables();
        this.initialiseSticky(10);
        this.animations();
        const ici = this;

        //////////////////////////// EVENEMENT KEYDOWN //////////////////////////
        window.addEventListener("keydown", function (event) {
          ici.directions.etatInitial = false;
          const codeTouche = event.keyCode;

          switch (codeTouche) {
            case 37:
              if (
                !ici.directions.droite &&
                !ici.directions.action &&
                !ici.directions.coup &&
                !ici.parametres.introDuJeu &&
                !ici.directions.sortiePanneauEnCours
              ) {
                ici.directions.gauche = true;
              }

              break;

            case 39:
              if (ici.parametres.introDuJeu == true) {
                ici.debutIntroDuJeu(ici);
              }
              if (
                !ici.directions.gauche &&
                !ici.directions.coup &&
                !ici.directions.action &&
                !ici.parametres.introDuJeu &&
                !ici.directions.sortiePanneauEnCours
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

        /////////////////////////////// EVENEMENT KEYUP ///////////////////////////////

        window.addEventListener("keyup", function (event) {
          ici.parametres.debutTimerIntro = NaN;
          ici.parametres.$container.removeClass("containerinverse");
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

              if (!ici.directions.droite) {
                ici.directions.etatInitial = true;
              }

              break;
            case 39:
              if (ici.parametres.introDuJeu == true) {
                ici.finIntroDuJeu(ici);
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

        ///////////////////////// EVENEMENT TAG SUR LE BUS /////////////////////////

        const $tag = $("#tag");
        const $bus = $("#bus");
        const $bombe = $("#bombe");
        let $tagOpacity = $tag.css("opacity");

        $bus.mousemove(function (event) {
          $tag.css("opacity", $tagOpacity);
          if (monJeu.parametres.navigateur != "Firefox") {
            $bombe.css("left", event.pageX + "px");
            $bombe.css("bottom", screen.height - event.pageY - 180 + "px");
          }

          if ($tagOpacity > 0.3) {
            monJeu.attributionSucces(2);
          }
          $tagOpacity = parseFloat($tagOpacity) + 0.004;
        });

        $bus.mouseout(function () {
          $bombe.css("left", $("#boutonbus").css("left"));
          $bombe.css("bottom", $("#sol").css("height"));
        });

        const jeu = window.setInterval(function () {
          ici.leMoteurPourLesAnimations(0);
          if (ici.parametres.finDuJeu) {
            clearInterval(jeu);
          }
        }, 60);
      },
    };

    monJeu.start();
  });
}); //  fin du DOM Content loaded

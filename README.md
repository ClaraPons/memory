#MEMORY The game is deployed in : https://singular-marshmallow-57b4e9.netlify.app/


// Définition des règles du jeu :

1) Tout d’abord, étaler les cartes (20 cartes) face contre table afin que le joueur ne puisse les identifier. Une fois cela fait, le premier joueur retourne 2 cartes de son choix.

2) Si les cartes sont identiques, le joueur les conserve à côté de lui et rejoue. Il marque un point

3) Si les cartes ne sont pas identiques, le joueur les retourne face cachée de nouveau. Il recommence

4) Le jeu de termine une fois que toutes les paires ont été trouvées.

// Fonctionnalités de l'App :

Déroulement d'une partie :

- un input pour ajouter le nom du joueur
- un bouton PLAY pour commencer le jeu
- les cartes apparaissent face caché
- la partie est lancée

Scores :

- on transforme le score en nombre de coup pour trouver toutes les paires
- on calcule en combien de coups le joueur trouve toutes les paires
- on affiche à la fin son score (soit le nombre de coups utilisé pour finir le jeu)
- Redémarrage de partie
- un bouton pour relancer la partie

// Definition of done

Fonctionnalités minimum pour que le jeu fonctionne :

- que l'input pour enregistrer nom de joueur fonctionne
- que le bouton pour lancer la partie fonctionne
- que les cartes s'affichent correctement au clic
- que les cartes se retournent correctement
- que le calcul du nombre de coups fonctionne
- que les cartes se retournent au clic
- que la partie finisse quand toutes les cartes sont retournées
- que le bouton relance de la partie fonctionne

Fonctionnalités "bonus" :

- une animation sur l'affichage des cartes
- un système de trophée selon le nombre de coups utilisé (exemple : si les paires sont trouvées en moins de 10 coups, trophée platine)
- ajouter du son sur chaque clic
- une animation sur chaque carte au clic
- une animation à la fin pour afficher la victoire
- niveau de difficulté

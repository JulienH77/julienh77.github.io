# julienh77.github.io
HUB of all my works

## 
## 
### FUTURE PROJECTS :

Mon idée préférée : « Où sommes-nous ? » — un explorateur géographique aléatoire

Le principe :

Tu arrives sur une carte du monde, tu cliques sur « Explorer », et le site te génère aléatoirement un endroit du monde.

Puis tu dois deviner :

🌍 Pays
🏙️ Ville / région
📍 éventuellement position approximative

Le jeu pourrait fonctionner avec plusieurs modes :

Mode 1 — Image satellite
Une zone aléatoire apparaît sur une carte satellite et tu dois deviner où elle se trouve.

Mode 2 — Carte muette
Une carte très minimaliste est affichée et tu dois cliquer sur l'endroit où tu penses être.

Mode 3 — Indices
Après quelques secondes, tu peux demander des indices :
🌡 Climat → 🏔 Relief → 🚗 Réseau routier → 🏳️ Pays voisin

Et à la fin :

Score : 8 420 points
Distance : 37 km
Pays : France 🇫🇷

Ça colle énormément à ton profil parce que tu as déjà Haute-Marne Guessr, mais là tu pourrais faire quelque chose de beaucoup plus orienté cartographie/web et à l'échelle mondiale. Ton HUB présente justement déjà Guessr comme un mini-jeu GeoGuessr local.

Pourquoi je pense que c'est une bonne addition

Le gros avantage est que tu peux commencer très simplement.

V1 :

Leaflet
fond OpenStreetMap
quelques coordonnées aléatoires
clic sur la carte
calcul de distance avec Turf.js
score
bouton « nouvelle partie »

Et c'est déjà un projet terminé.

Puis tu peux progressivement ajouter :

V1.1
→ plusieurs manches
→ score total
→ chrono

V1.2
→ catégories : France / Europe / monde

V1.3
→ relief
→ population
→ climat
→ réseau routier

V2
→ vrai système de classement
→ statistiques personnelles
→ historique des parties

Et tout peut rester 100 % GitHub Pages + JavaScript, donc parfaitement adapté à ton environnement.

Mais j'ai une deuxième idée que je trouve encore plus intéressante pour ton portfolio
« La Terre en mouvement »

Une carte interactive permettant de regarder comment un phénomène évolue dans le temps.

Par exemple :

Population mondiale
→ 1800 → 1900 → 1950 → 2000 → 2025

ou

Températures mondiales

ou

Urbanisation

ou

Déforestation

Avec une grosse frise temporelle en bas :

1800 ───── 1850 ───── 1900 ───── 1950 ───── 2000 ───── 2025

Tu déplaces le curseur et la carte se transforme.

Là, tu pourrais vraiment montrer tes compétences de géomaticien : données → traitement → cartographie → interface web.

Et visuellement, ça peut être très beau.

Une troisième idée, plus originale
« Quelle ville te correspond ? »

L'utilisateur répond à 5–10 questions :

🌡 Tu préfères chaud ou froid ?
🌊 Mer ou montagne ?
🏙️ Grande ville ou petite ville ?
🚶 Marcher ou voiture ?
🌧 Plutôt humide ou sec ?

Le site calcule ensuite les villes qui correspondent le mieux.

Et la réponse pourrait être :

Ta ville idéale : Ljubljana 🇸🇮
87 % de compatibilité

Avec une carte interactive montrant les villes candidates.

C'est relativement facile techniquement, mais beaucoup plus « projet web » que simple carte.

Et une quatrième que je trouve très « Julien »
« La France vue du sol »

Tu choisis une commune française et le site affiche une sorte de fiche cartographique :

CHAUMONT

Altitude : 245 m
Population : …
Superficie : …
Température moyenne : …
Distance à Paris : …
Rivière la plus proche : …

avec :

carte Leaflet
relief
orthophoto
limites communales
statistiques
éventuellement une petite silhouette 3D

Tu pourrais même faire une recherche :

« Rechercher une commune »

→ Chaumont
→ la carte vole jusqu'à Chaumont
→ les informations apparaissent.

Ça ferait un très bon projet portfolio de géomaticien, probablement plus professionnel que le côté jeu.

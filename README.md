# Projet d'apprentissage profond visant à classifier des courants artistiques

Ce repository github héberge notre projet visant à l'élaboration d'un réseau de neurone classifiant des oeuvres picturales. 

## Statut du projet 

Des premiers résultats relativement satisfaisant ont été obtenu sur la clasification de cubisme, impressionisme et "dogeArt". Néanmmois si vous souhaitez en prendre la suite en repartant de l'artchiecture que nous proposons libre à vous. Voici la matrice de confusion propduite sur l'ensemble de test en l'état actuel : 

<p align="center">
<img src="https://github.com/theurt/theurt/blob/main/matrice_confusion.PNG" alt="Matrice de confusion"/>
</p>
 
## Comment installer ? 

Nous vous recommandons de créer un notebook [Google Colab](https://colab.research.google.com/) (en raison de la puissance de calcul mise à dispositionà) et d'y importer les notebooks figurant dans la section rendu_final. Vous pouvez toutefois installer les notebooks jupyter en local sur votre machine en suivant par exemple le lien suivant : 
[installer_notebook](https://www.csestack.org/install-use-jupyter-notebook-python-example/#:~:text=%20Follow%20the%20steps%20for%20Writing%20Your%20First,you%20can%20write%20your%20first%20program.%20More%20)

## Organisation du dépôt

- Les dossiers apprentissage, test et validation contiennent les images que notre réseau de neurones exploitent classifiées sous la forme d'ensemble éponyme.
- Le dossier img contient toutes les img que nouds avons collectés pour le projet.
- Le dossier script_base_donnees contient les différentes scripts pyhton et javascript utilisés pour générer la base de données des images.
- Le dossier rendu_final comporte les notebooks ayant permis l'entrainement des poids (que vous pourrez télécharger) ainsi que celui vous permettant de réutiliser nos réseaux de neurones CNN en l'état sur un pool d'images que vous souhaitez.

              
## Auteurs du projet 

- Arnaud Li
- Thibault Mousset
- Maxime Henry
- Tom Heurtebise                                                                                                                                                                                                                                

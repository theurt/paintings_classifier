Pour utiliser : 

ETAPE 0 : INSTALLER L'EXTENSION CHROME

	Installer google Chrome 
	Taper chrome://extensions dans la barre de recherche
	Activer le mode développeur (en haut à droite)
	Cliquer sur le bouton "Charger l'extension non empaquetée" puis parcourir les fichiers à la recherche du dossierd l'extension

ETAPE 1 : GENERER UNE LISTE D'URL DES IMAGES SOUHAITEES
	Aller sur Google Images
	Defiler la barre de recherche pour charger autant d'images que nécessaires
	Cliquer sur l'icone puzzle (plugin) en haut à droite 
	Cliquer sur l'extensions "image_data_set"
	Cliquer sur le bouton "Generate pool of images"
	S'assurer qu'un fichier "urls_database.txt" est présent dans le dossier de téléchargement par défaut associé à Chrome

ETAPE 2 : TELECHARGER LES IMAGES DONT LES URLS SONT DANS LE FICHIER URLS_DATABASE.TXT

	Dans un bash taper, python3 download_images.py --urls [emplacement du fihcier urls_databse.txt] --output [dossier de sortie] --name [prefixe
	pour le nom des images]

ETAPE 3 : ELIMINATION DES DOUBLONS 

	Dans un bash lancer python3 detect_and_remove.py --input [path_dataset] --remove 1 pour supprimer les images en plusieurs exemplaires.

ETAPE 4 : ELIMINATION DES ABERRATIONS
	Inspecter les images une par une pour supprimmer les aberrations (ex : une personne peignant un tableau)
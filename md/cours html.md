### Le langage HTML

1. HTML

HyperText Markeup Language *Langage de balises hypertexte*

Un fichier `html` est un fichier de texte (comme markdown par exemple). On ouvre un fichier de 2 façon :
- le développeur => avec un éditeur de code (ex: visualStudio Code)
- l'utilisateur => avec un navigateur (ex: firefox) 

Le plus souvent les balises html sont en couple (ouvrante/fermante) mais il existe aussi des balises *orpheline* :
- `<MaBalise></MaBalise>`
- `<Mabalise>`

La structure minimale d'une page web  est:

```html
<!DOCTYPE html>
<html>
    <head></head>
    <body></body>
</html>
```

Le site de réference pour les langages du web est le site des developpeurs de Mozilla.
[https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)

Quelques balises à connaître:
- <body></body> contient tt ce qui est visible sur la page
- <head></head> contient tt ce qui n est pas visible sur la page `<titles></titles>`
- <h1></h1> permet de faire des titres sur la page 
- <br> pour casser la ligne
- <p></p> pr faire un paragraphe
- <a href="" ></a> permet c'accrocher le curseur pour cliquer vers un lien
- <img> pour inserer une image
- <ul></ul> pour réaliser des items dans une liste désordonner
- <ol></ol> pour réaliser des items dans une liste ordonnée
- <li></li> pour insérer des items dans une liste


Les balises ouvrantes peuvent contenir des attributs définis sur le site de réference ou l'attribut `class=""` <br>
<MaBalise attribut=""></MaBalise>
----------------------------------
Pour donner le chemin relatif vers un fichier, on utilise:
- `./` pour chercher dans le dossier courant
-`../` pour chercher dans le dossier au dessus


2. Le CSS
Cascading Style Sheet *feuille de style cascade*
[https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties)

Pour définir du style, il faut un sélecteur (élement html ou class), des accolades, une propriété, une valeur.
```css
selecteur{
    propriete:valeur;
}

On peut écrire le CSS :
- dans le fichier html entre les balises `<style></style>`
- dans un fichier dédié avec l'extension `.css` ; il faut ajouter une balise <link rel="stylesheet" href="">

Il existe plus de 500 propriétés et encore d'avantage de valeurs possibles mais souvent, les valeurs sont :
- des couleurs (soit un nom soit un code comme RGB(0-255,0-255,0-255))

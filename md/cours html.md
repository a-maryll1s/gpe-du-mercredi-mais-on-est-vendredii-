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
- des tailles : plusieurs unités sont possibles 
    -`px` pour pixels
    - `em` relatif à la taille de police
    - `%` relatif à la taille de contenant




Remarque: Quand le sélecteur cas est un élément HTML (par exemple `p`) alors les propriétés s'appliquent à tous les éléments du même type.

Pour différencier des éléments de même nature, on peut utiliser l'atttribut `class` ou `id`. Dans ce cas, le sélécteur est le nom de la classe précédé d'un `.` ou le nom de l'identification précédé d'un `#`. 

Remarque: le contenu d'un élément HTML suit le principe du modèle en boite.
[https://www.w3schools.com/Css/css_boxmodel.asp](https://www.w3schools.com/Css/css_boxmodel.asphttps://www.w3schools.com/Css/css_boxmodel.asp)

Trois propriétés importantes sont liés à ce modele:
- `border` pour le style de la bordure
- `padding` pour l'espace interne
- `margin` pour la marge de la bordure

Remarque: Il existe des propriétés spécifiques au txt, en particulier:
- `text-align` pour justifier le txt.
- `font` pour la police de caractère


Il existe deux balises HTML qui permettent de grouper des éléments ou du txt:
- `<div></div>`
- `<span></span>`

3. Javascript

ctr + shift + i

Il s'agit d'un langage de programmation comme Python mais initialement dédié au Web.

C'est un langage prévu pour intérgir avec une page HTML : le document peut se représenter ainsi :
dom (document object model)
window
├── alert()
└── document
    ├── getElementById()
    ├── querySelector()
    │       ↓
    │   élément HTML
    │       ├── innerHTML
    │       ├── style
    │       │     ├── color
    │       │     ├── backgroundColor
    │       │     └── display
    │       └── addEventListener()

Le JS permet de rendre une page HTML plus dynamique notamment grâce aux formulaires `<form></form>`

Les éléments HTML intéractifs sont généralement des `<input type ="">` :
- button
- checkbox
text
-range
-password ...



Pour écrire du JS on utilise les balises `<script></script>` et :
- on écrit directement le code dans le fichier HTML
- on écrit le code dans un fichier .js

Pour attraper un élément sur la page afin de le manipuler avec JS, on peut utiliser:
-`querySelector()`
-`getElementById()`

On écrira :
```js
let elementHTML = document.querySelector("");  //avec selecteur css
let elementHTML = document.getElementById(""); //avec un id
```

La plupart des éléments HTML interactifs ont une propriété `value`.
```js
console.log(elementHTML.value);
```
JS est capable d'associer un évènement à un élément HTML:

- click
- change
- input
- mouseover ....

On utilise la méthode `addEventListener()`

```js
elementHTML.addEventListener("event", function(){
// faire qqchose
});
```
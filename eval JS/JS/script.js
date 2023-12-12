   //menu burger
   const burger = document.querySelector('#burger');
   const nav = document.querySelector('#menu_content');

   // ouverture
   burger.addEventListener('click', () => {
       nav.classList.toggle('dispNone');
   });
   // fermeture
   nav.addEventListener('click', () => {
       nav.classList.toggle('dispNone');
   });

   document.addEventListener("click", () => {
       if (!nav.contains(event.target) && event.target !== burger) {
           nav.classList.add('dispNone');
       }
   });

   // appel de l'API & selection / setup des différentes catégories   
   const btn = document.querySelector("#btn");
   const baseApiUrl = "https://randomuser.me/api/";
   const image = document.querySelector("#image-personne");
   const personneName = document.querySelector("#personne_name");
   const job = document.querySelector("#job");
   const basedIn = document.querySelector("#based");
   const villeName = document.querySelector("#ville_name");
   const paysName = document.querySelector("#pays_name");
   const age = document.querySelector("#age");

   // const pour genération d'un nouveau profil de personne
   const createPersonne = (data) => {
       console.log(data);
       image.src = data.photo["image_personne"];
       personneId.textContent = `#${data.id}`;
       personneName.textContent = data.name;
   }

   // const pour chercher l'URL de l'API pour récupérer le JSON et transferer ses données dans le JS
   const fetchUrl = async (url) => {
       const data = await fetch(url);
       if (data.status == 200) {
           const reponse = await data.json();
           createPersonne(reponse);
       } else {
           console.log("Il ya eu une erreur");
       }
   }

   // géneration de l'id correspondant a un nouveau profil 
   const changePersonne = () => {
       const randomId = parseInt(Math.random() * 150) + 1;
       const apiUrl = baseApiUrl + randomId;

       fetchUrl(apiUrl);
   }

   // evenement permettant l'utilisation du bouton permettant la géneration du nouveau profil
   btn.addEventListener("click", changePersonne);
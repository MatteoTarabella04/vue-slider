/* 
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/

const { createApp } = Vue

createApp({
   data() {
      return {
         activeImg: 0,
         autoplay: '',
         contentArray: {

            images: [
               "img/01.webp",
               "img/02.webp",
               "img/03.webp",
               "img/04.webp",
               "img/05.webp",
            ],

            titles: [
               "Marvel's Spiderman Miles Morale",
               "Ratchet & Clank: Rift Apart",
               "Fortnite",
               "Stray",
               "Marvel's Avengers",
            ],

            descriptions: [
               "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
               "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
               "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
               "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.",
               "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
            ],
         }
      }
   },

   methods: {

      prev() {
         console.log('prev');
         this.activeImg--
         if (this.activeImg < 0) {
            this.activeImg = this.contentArray.images.length - 1;
         }
      },
      next() {
         console.log('next');
         this.activeImg++
         if (this.activeImg === this.contentArray.images.length) {
            this.activeImg = 0;
         }
      },
      showThumb(index) {
         this.activeImg = index;
      },
      autoplayOn() {
         this.autoplay = setInterval(() => {
            this.next();
         }, 3000);
      },
      
      autoplayOff() {
         clearInterval(this.autoplay);
      },
   }
}).mount('#app');
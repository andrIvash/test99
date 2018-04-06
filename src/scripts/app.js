const slider = require('./common/slider');
import Validation from './component/validation';
import getData from './common/getData';

// slider(); // инициализируем слайдер

const form = document.querySelector('#form');
console.log(Validation.init(form));

form.addEventListener('submit', function(){
  if(Validation.result()) {
    getData('http://localhost:3000').then(function(response) {
      console.log("Success!", response);
    }, function(error) {
      console.error("Failed!", error);
    });
  }
});

// new Vue({
//   el: '#app',
//   data: {
//     loading: false,
//     text: 'Hello All from Vue!!!'
//   },

//   components: {
//     hello: require('./component/hello')
//   },

//   mounted: function() {
//     console.log('Running App version 1.0 ! ');
//     // ajax
//     const that = this;
//     // setTimeout(function(){  
//     //   that.loading = false;
//     // }, 5000);
//   },
//   methods: {
//     wasClicked: function(msg) {
//       console.log('parent click' ,msg);
//     },
//     wasSubmited: function(msg) {
//       console.log('parent click' ,msg);
//       // this.send('localhost:3000/api/user', msg)
//     }
//   }
// })


module.exports =  {
  template: '#hello-template',

  props: ['text', 'show'],

  data: function() {
    return {
      msg: 'result',
      name: 'enter name',
      age: 'enter age',
      email: 'enter email'
    };
  },

  mounted: function() {
    console.log('hello block !');
  },
  methods: {
    onClick: function() {
      this.$emit('clicked', {code: 200, msg:'OK'});
      console.log('clicked');
    },
    onSubmit: function() {
      this.$emit('submited', {
        name: this.name,
        age: this.age,
        email: this.email
      });
      console.log('submit');
    }
  }
}
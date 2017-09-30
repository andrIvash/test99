module.exports =  {
  template: '#hello-template',

  props: ['text', 'show'],

  data: function() {
    return {
      msg: 'result'
    };
  },

  mounted: function() {
    console.log('hello block !');
  },
  methods: {
    onClick: function() {
      this.$emit('clicked', msg);
      console.log('clicked');
    }
  }
}
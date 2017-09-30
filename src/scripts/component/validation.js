module.exports = (function(){

  var _form = null;
  var _result = false;

  function _init(form) {
    console.log('validation init');
    _form = form;
    console.log(_form.elements);
    _addListeners();

  }

  function _addListeners() {
    _form.addEventListener('submit', function(ev){
      ev.preventDefault();
      _validate(_form, _onEmptyVariant)
    });
    _form.addEventListener('reset', function(){
      _clear(_form);
    });
  }

  function _validate(form, method) {
    console.log('submit');
    _result = true;
    [].forEach.call(form.elements, function(elem) {
      if(elem.tagName !== 'BUTTON') {
        if (!method(elem)) {
        elem.classList.add('error');
        _result = false;
      }
      }
    });
  }

  function _clear(form) {
    [].forEach.call(form.elements, function(elem) {
        elem.classList.remove('error');
    });
  }

  function _onResult() {
     return _result;
  }
  function _onEmptyVariant(elem) {
     return elem.value == '' ? false : true;
  }

  function _onLengthVariant(elem) {
    return elem.value == '' ? false : true;
  }

  return {
    init: _init,
    result: _onResult
  }

})()



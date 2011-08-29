
var Turanslit = {
    
  init : function(element) {
    element.onkeypress = this.keyPressHandler;
  },
  
  deactivate : function (element) {
    element.onkeypress = null;
  },
  
  keyPressHandler : function (e) {
      
    var caret = Turanslit.utils.getCaretPosition(this);
    var value = this.value;
    var keyCode = e.keyCode;
    
    var previousChar = value.substring(caret, caret-1);
    
    var keyPressResult = false;
    
    // h
    if (keyCode == 104) {
        switch (previousChar) {
            case 'c':
                Turanslit.utils.changePreviousChar('\u00E7', caret, this);
                break;
            case 's':
                Turanslit.utils.changePreviousChar('\u015F', caret, this);
                break;
            case 'g':
                Turanslit.utils.changePreviousChar('\u011F', caret, this);
                break;
            case 'C':
                Turanslit.utils.changePreviousChar('\u00C7', caret, this);
                break;
            case 'S':
                Turanslit.utils.changePreviousChar('\u015E', caret, this);
                break;
            case 'G':
                Turanslit.utils.changePreviousChar('\u011E', caret, this);
                break;
            default: keyPressResult = true;
        }

    }
    
    // i
    else if (keyCode == 105) {
        switch (previousChar) {
            case 'I':
                Turanslit.utils.changePreviousChar('\u0130', caret, this);
                break;
            case 'i':
                Turanslit.utils.changePreviousChar('\u0131', caret, this);
                break;
            default:
                keyPressResult = true;
        }
        
    }
    
    // o
    else if (keyCode == 111) {
        switch (previousChar) {
            case 'O':
                Turanslit.utils.changePreviousChar('\u00D6', caret, this);
                break;
            case 'o':
                Turanslit.utils.changePreviousChar('\u00F6', caret, this);
                break;
            default:
                keyPressResult = true;
        }
        
    }
    
    // u
    else if (keyCode == 117) {
        switch (previousChar) {
            case 'U':
                Turanslit.utils.changePreviousChar('\u00DC', caret, this);
                break;
            case 'u':
                Turanslit.utils.changePreviousChar('\u00FC', caret, this);
                break;
            default:
                keyPressResult = true;
        }
        
    }
    
    // a
    else if (keyCode == 97) {
        switch (previousChar) {
            case 'A':
                Turanslit.utils.changePreviousChar('\u018F', caret, this);
                break;
            case 'a':
                Turanslit.utils.changePreviousChar('\u0259', caret, this);
                break;
            default:
                keyPressResult = true;
        }
        
    }
    
    // e
    else if (keyCode == 101) {
        switch (previousChar) {
            case 'E':
                Turanslit.utils.changePreviousChar('\u018F', caret, this);
                break;
            case 'e':
                Turanslit.utils.changePreviousChar('\u0259', caret, this);
                break;
            default:
                keyPressResult = true;
        }
        
    }
    
    else {
        keyPressResult = true;    
    }
    
    
    return keyPressResult;
  },

  utils : {
      
      getCaretPosition : function(obj) {
        obj.focus();
        if (obj.selectionStart) {
            return obj.selectionStart;
        }
            
        return 0;
      },
      
      changePreviousChar : function(ch, caret, element) {
          var value = element.value;
          element.value = value.substr(0, caret-1) + ch + value.substr(caret, value.length);
          element.selectionStart = caret;
          element.selectionEnd = caret;
      }
  }

};

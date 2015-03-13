
var Turanslit = {

    init: function (element) {
        element.onkeypress = this.keyPressHandler;
    },

    deactivate: function (element) {
        element.onkeypress = null;
    },

    keyPressHandler: function (e) {

        var caret = Turanslit.utils.getCaretPosition(this),
            value = this.value,
            keyCode = e.keyCode,
            previousChar = value.substring(caret, caret - 1),
            keyPressResult = false;

        if (keyCode === 104) {
            // h

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
            default:
                keyPressResult = true;
            }
        } else if (keyCode === 105) {
            // i

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
        } else if (keyCode === 111) {
            // o

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
        } else if (keyCode === 117) {
            // u

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
        } else if (keyCode === 97) {
            // a

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
        } else if (keyCode === 101) {
            // e

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
        } else {
            keyPressResult = true;
        }

        return keyPressResult;
    },

    utils: {

        getCaretPosition: function (obj) {
            obj.focus();
            if (obj.selectionStart) {
                return obj.selectionStart;
            }

            return 0;
        },

        changePreviousChar: function (ch, caret, element) {
            var value = element.value;
            element.value = value.substr(0, caret - 1) + ch + value.substr(caret, value.length);
            element.selectionStart = caret;
            element.selectionEnd = caret;
        }
    }
};

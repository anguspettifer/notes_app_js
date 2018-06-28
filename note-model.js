// This code uses the constructor and prototype pattern, as instructed. But a user can alter the text of the note in the browser after it has been instantiated.

(function(exports) {
  function Note(text) {
    this.text = text;
  };

  Note.prototype.returnNoteText = function () {
    return this.text;
  };

  exports.Note = Note;
})(this);

// The code below allows the user to create a new note, with the text set upon instantiation, and it can't subsequently be changed through the use of a closure. But it doesn't use the constructor and prototype pattern, which we had been instructed to do in the weekly challenge!

// (function(exports) {
//   function Note(text) {
//     var text = text;
//     return function() {
//       return text;
//     }
//   };
//
//   exports.Note = Note;
// })(this);

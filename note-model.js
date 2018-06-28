(function(exports) {
  function Note(text) {
    this.text = text;
  };

  Note.prototype.returnNoteText = function () {
    return this.text;
  };

  exports.Note = Note;
})(this);

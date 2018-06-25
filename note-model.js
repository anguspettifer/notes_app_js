(function(exports) {
  function Note(text) {
    this.text = text;
  };

  exports.Note = Note;
})(this);

Note.prototype.returnNoteText = function () {
  return this.text;
};

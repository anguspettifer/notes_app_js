(function(exports) {
  function Note() {
    this.text = "";
  };

  exports.Note = Note;
})(this);

Note.prototype.returnNoteText = function () {
  return this.text;
};

Note.prototype.writeNote = function (noteContent) {
  this.text = noteContent;
};

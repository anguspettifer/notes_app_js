(function(exports) {

  function NoteList() {
    this.noteArray = [];
  };

  exports.NoteList = NoteList;
})(this);

NoteList.prototype.returnNoteArray = function () {
  return this.noteArray;
};

NoteList.prototype.addNote = function (text) {
  var note = new Note(text);
  this.noteArray.push(note);
};

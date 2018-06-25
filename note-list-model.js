(function(exports) {
  var note = new Note();

  function NoteList() {
    this.noteArray = [];
  };

  exports.NoteList = NoteList;
})(this);

NoteList.prototype.returnNoteArray = function () {
  return this.noteArray;
};

NoteList.prototype.addNote = function (note) {
  this.noteArray.push(note.text);
};

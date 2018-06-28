(function(exports) {

  function NoteList() {
    this.noteArray = [];
  };

  NoteList.prototype.returnNoteArray = function () {
    return this.noteArray;
  };

  NoteList.prototype.addNote = function (text) {
    var id = this.noteArray.length;
    var note = new Note(text, id);
    this.noteArray.push(note);
  };

  exports.NoteList = NoteList;
})(this);

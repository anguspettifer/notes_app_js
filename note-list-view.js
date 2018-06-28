(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.returnHTML = function () {
    var listHTML = `<ul>`
    var noteArray = this.noteList.returnNoteArray()
    noteArray.forEach(function(note){
      listHTML += `<li><div>${note.returnNoteText()}</div></li>`;
    });
    listHTML += `</ul>`
    return listHTML
  };

  exports.NoteListView = NoteListView;
})(this);

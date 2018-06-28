(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.returnHTML = function () {
    var listHTML = `<ul>`
    var noteArray = this.noteList.returnNoteArray()
    noteArray.forEach(function(note){
      var noteText = note.returnNoteText().slice(0,20);
      var noteId = note.returnNoteId();
      listHTML += `<li><div><a href="#notes/${noteId}">${noteText}</a></div></li>`;
    });
    listHTML += `</ul>`
    return listHTML
  };

  exports.NoteListView = NoteListView;
})(this);

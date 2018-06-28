(function(exports) {
  function NoteController(noteListView, element) {
    this.noteListView = noteListView;
    this.element = element;
  };

  NoteController.prototype.getHTML = function () {
    this.element.innerHTML = this.noteListView.returnHTML()
  };

  exports.NoteController = NoteController;
})(this);



//Displaying note list
var noteList = new NoteList();
noteList.addNote("Favourite drink: orangina");
var noteListView = new NoteListView(noteList)
var element = document.getElementById('app');
var noteController = new NoteController(noteListView, element);
noteController.getHTML();

//Displaying single note
// var note = new Note("Notey McNoteFace")
// var singleNoteView = new SingleNoteView(note);
// var element = document.getElementById('app');
// var noteController = new NoteController(singleNoteView, element);
// noteController.getHTML();

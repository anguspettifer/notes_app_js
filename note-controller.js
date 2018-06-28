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



//move to another file
var noteList = new NoteList();
noteList.addNote("Favourite drink: orangina");
var noteListView = new NoteListView(noteList)
var element = document.getElementById('app');
var noteController = new NoteController(noteListView, element);
noteController.getHTML();

(function(exports) {
  function NoteController(noteListView) {
    this.noteListView = noteListView;
  };

  NoteController.prototype.getHTML = function (element) {
    element.innerHTML = this.noteListView.returnHTML()
  };

  exports.NoteController = NoteController;
})(this);

//move to another file
var noteList = new NoteList();
noteList.addNote("Favourite drink: orangina");
var noteListView = new NoteListView(noteList)
var noteController = new NoteController(noteListView);

var element = document.getElementById('app');
noteController.getHTML(element);

(function(exports) {
  function NoteController(noteList, element) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
    this.element = element;
  };

  NoteController.prototype.getHTML = function () {
    this.element.innerHTML = this.noteListView.returnHTML()
  };

  exports.NoteController = NoteController;
})(this);



//Displaying note list
var noteList = new NoteList();
noteList.addNote("Favourite drink: orangina", Note);
var element = document.getElementById('app');
var noteController = new NoteController(noteList, element);
noteController.getHTML();

function makeUrlChangeShowSingleNote() {
  window.addEventListener("hashchange", showSingleNote);
};

function showSingleNote() {
        showNote(getNoteFromUrl(window.location));
      };

function getNoteFromUrl(location) {
  return location.hash.split("#notes/")[1];
};

function showNote(note) {
  document
    .getElementById("app")
    .innerHTML = note;
};

console.log(location.hash.split("#notes/")[1]);

makeUrlChangeShowSingleNote();
//Displaying single note
// var note = new Note("Notey McNoteFace")
// var singleNoteView = new SingleNoteView(note);
// var element = document.getElementById('app');
// var noteController = new NoteController(singleNoteView, element);
// noteController.getHTML();

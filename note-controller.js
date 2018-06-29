(function(exports) {
  function NoteController(noteList, element) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
    this.element = element;
  };

  NoteController.prototype.getHTML = function () {
    this.element.innerHTML = this.noteListView.returnHTML()
  };


  NoteController.prototype.displayNote = function (noteId) {
    for (var i=0; i < this.noteList.returnNoteArray().length; i++) {
      if(this.noteList.returnNoteArray()[i].returnNoteId() === parseInt(noteId)) {
        return this.noteList.returnNoteArray()[i].returnNoteText();
      }
    }
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

function showNote(noteId) {
  document
    .getElementById("app")
    .innerHTML = noteController.displayNote(noteId);
};

makeUrlChangeShowSingleNote();

function submitNote() {
  window.addEventListener("submit", function(event) {
    event.preventDefault();
    submit();
  });
};

function submit() {
  var note1 = document.getElementById('note').value
  noteList.addNote(note1, Note);
  noteController.getHTML();
}

submitNote()
//Displaying single note
// var note = new Note("Notey McNoteFace")
// var singleNoteView = new SingleNoteView(note);
// var element = document.getElementById('app');
// var noteController = new NoteController(singleNoteView, element);
// noteController.getHTML();

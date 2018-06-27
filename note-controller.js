(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteList.addNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(noteList)
  };

  NoteController.prototype.getHTML = function () {
    var element = document.getElementById('app')
    element.innerHTML = this.noteListView.returnHTML()
  };



  exports.NoteController = NoteController;
})(this);



// function changeText() {
//   var element = document.getElementById('app')
//   element.innerHTML = "howdy"
// }
// changeText()

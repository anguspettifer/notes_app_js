(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
    this.noteHTML = [];
  };

  exports.NoteListView = NoteListView;
})(this);

NoteListView.prototype.returnHTML = function () {
  this.noteHTML.push("<ul>");
  for(var i = 0; i < this.noteList.length; i++) {
    this.noteHTML.push("<li><div>" + this.noteList[i] + "</div></li>");
  }
  this.noteHTML.push("</ul>");
  return this.noteHTML.join("");
};

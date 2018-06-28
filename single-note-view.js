(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  };

  SingleNoteView.prototype.returnHTML = function () {
    var text = this.note.returnNoteText();
    return `<div>${text}</div>`;
  };

  exports.SingleNoteView = SingleNoteView;
})(this);

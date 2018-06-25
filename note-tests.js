function testNoteText() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.text === "My favourite language is JavaScript");
};

testNoteText();


function testNoteList() {
  var noteList = new NoteList();
  noteList.addNote("My favourite language is JavaScript");
  assert.isTrue(noteList.noteArray[0] === "My favourite language is JavaScript");
};

testNoteList();

function testNoteListView() {
  var noteListView = new NoteListView(["First note", "Second note"]);
  assert.isTrue(noteListView.returnHTML() === "<ul><li><div>First note</div></li><li><div>Second note</div></li></ul>");
};

testNoteListView();

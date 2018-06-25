function testNoteText() {
  var note = new Note();
  note.writeNote("My favourite language is JavaScript");
  assert.isTrue(note.text === "My favourite language is JavaScript");
};

testNoteText();


function testNoteList() {
  var note = new Note();
  var noteList = new NoteList();
  note.writeNote("My favourite language is JavaScript");
  noteList.addNote(note);
  assert.isTrue(noteList.noteArray[0] === "My favourite language is JavaScript");
};

testNoteList();

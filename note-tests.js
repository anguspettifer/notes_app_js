function testNoteText() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.text === "My favourite language is JavaScript");
};

testNoteText();


function testNoteList() {
  var noteList = new NoteList();
  noteList.addNote("My favourite language is JavaScript");
  noteList.addNote("My favourite language is Ruby");
  assert.isTrue(noteList.noteArray[0]['text'] === "My favourite language is JavaScript" );
  assert.isTrue(noteList.noteArray[1]['text'] === "My favourite language is Ruby" );
};

testNoteList();

function testNoteListView() {
  var noteList = new NoteList();
  noteList.addNote("First note");
  noteList.addNote("Second note");
  console.log(noteList);
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML().includes("<ul><li><div>First note</div></li><li><div>Second note</div></li></ul>"));
};

testNoteListView();

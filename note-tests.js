function NoteDouble(text, id) {
  this.text = text;
  this.id = id;
};

NoteDouble.prototype = {
  returnNoteText: function() {
    return this.text;
  },
  returnNoteId: function() {
    return this.id;
  }
};

function NoteListDouble() {
  this.noteArray = [];
};

NoteListDouble.prototype = {
  returnNoteArray: function() {
    return this.noteArray;
  },
  addNote: function(text, NoteDouble) {
    var id = this.noteArray.length;
    var noteDouble = new NoteDouble(text, id);
    this.noteArray.push(noteDouble);
  }
};

function NoteListViewDouble(noteListDouble) {};

NoteListViewDouble.prototype = {
  returnHTML: function() {
    return "<ul><li><div>Favourite drink: coke</div></li></ul>";
  }
};

function testNoteText() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue("testNoteText", note.returnNoteText() === "My favourite language is JavaScript");
};

testNoteText();

function testNoteId() {
  var note = new Note("text", 5);
  assert.isTrue("testNoteId", note.returnNoteId() === 5);
};

testNoteId();

function testNoteListText() {

  var noteList = new NoteList();
  noteList.addNote("My favourite language is JavaScript", NoteDouble);
  noteList.addNote("My favourite language is Ruby", NoteDouble);
  assert.isTrue("testNoteListText", noteList.noteArray[0]['text'] === "My favourite language is JavaScript" );
  assert.isTrue("testNoteListText", noteList.noteArray[1]['text'] === "My favourite language is Ruby" );
};

testNoteListText();

function testNoteListId() {

  var noteList = new NoteList();
  noteList.addNote("text one", NoteDouble);
  noteList.addNote("text two", NoteDouble);
  assert.isTrue("testNoteListId", noteList.noteArray[0]['id'] === 0);
  assert.isTrue("testNoteListId", noteList.noteArray[1]['id'] === 1);
}

testNoteListId();

function testNoteListView() {

  var noteListDouble = new NoteListDouble();
  noteListDouble.addNote("First note which is more than 20 characters", NoteDouble);
  noteListDouble.addNote("Second note", NoteDouble);
  var noteListView1 = new NoteListView(noteListDouble);
  assert.isTrue("testNoteListView", noteListView1.returnHTML().includes(`<ul><li><div><a href="#notes/0">First note which is </a></div></li><li><div><a href="#notes/1">Second note</a></div></li></ul>`));
};

testNoteListView();

function testInstatiateNoteController() {

  var noteListDouble = new NoteListDouble();
  var noteController = new NoteController(noteListDouble);
  assert.isTrue("testInstatiateNoteController", noteController)
};

testInstatiateNoteController();

function testNoteControllerHTML() {

  var noteListDouble = new NoteListDouble();

  var element = {innerHTML: "hello"}
  var noteListViewDouble = new NoteListViewDouble(noteListDouble);
  var noteController = new NoteController(noteListDouble, element);
  noteController.noteListView.returnHTML =  function() {
    return "<ul><li><div>Favourite drink: coke</div></li></ul>"
  }
  noteController.getHTML()
  assert.isTrue("testNoteControllerHTML", element.innerHTML === "<ul><li><div>Favourite drink: coke</div></li></ul>")
};

testNoteControllerHTML();

function testSingleNoteView() {

  var noteDouble = new NoteDouble("Notey McNoteFace and all of his lovely friends")
  var singleNoteView = new SingleNoteView(noteDouble);
  assert.isTrue("testSingleNoteView", singleNoteView.returnHTML().includes("<div>Notey McNoteFace and all of his lovely friends</div>"));
};

testSingleNoteView()

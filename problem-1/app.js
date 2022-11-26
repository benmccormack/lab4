const { Observable } = require("rxjs");

let i = 0;

var createButton = document.getElementById('createNote');
Rx.Observable.fromEvent(createButton, 'click')
  .subscribe(() => createNote());



function createNote() {
  //checking that text has been entered into the note
  if (document.getElementById("noteText").value != "" || null) {
    var div = document.createElement("div");

    //giving the note an id and incrementing it
    div.id = "note" + i;
    i++;

    //all notes have the same class name so that they are all styled the same
    div.className = "note";

    //creating the note
    div.style.backgroundColor = document.getElementById("noteColor").value;
    //document.body.appendChild(div);
    document.body.appendChild(div);

    //adding the notes text
    let content = document.createTextNode(
      document.getElementById("noteText").value
    );
    div.appendChild(content);

    //note spacer
    content = document.createElement("br");
    div.appendChild(content);

    //delete note button
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete Note";
    div.appendChild(deleteButton);
    deleteButton.onclick = function () {
      deleteNote(div.id);
    };

    //edit note button
    let editButton = document.createElement("button");
    editButton.className = "edit";
    editButton.textContent = "Edit Note";
    div.append(editButton);
    editButton.onclick = function () {
      editNote(div.id);
    }
  }
  else {
    alert("Cannot create empty note, please enter some text.")
  }

}

function editNote(noteID) {
  //asks user for updated text
  let text = prompt("Please enter updated text");
  if (text != "" || null) {
    //note is retrieved and the text is changed.
    let note = document.getElementById(noteID);
    note.textContent = text;
    let spacer = document.createElement("br");
    note.appendChild(spacer);

    //delete note button
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete Note";
    note.appendChild(deleteButton);
    deleteButton.onclick = function () {
      deleteNote(note.id);
    };

    //edit note button
    let editButton = document.createElement("button");
    editButton.className = "edit";
    editButton.textContent = "Edit Note";
    note.append(editButton);
    editButton.onclick = function () {
      editNote(note.id);
    }
  }
  else {
    alert("Cannot create empty note, please enter some text.")
  }
}

function deleteNote(noteID) {
  //note is retrieved using its unique ID and deleted.
  note = document.getElementById(noteID);
  note.remove();
};

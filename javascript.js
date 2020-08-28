// Add a new task
function AddNewTask(GivenObjectTask) {
    var NewTask = GivenObjectTask.value;
    var NewTask = NewTask.trimRight();
    var NewTask = " " + NewTask.trimStart();

    if (NewTask.length > 3) {
      if (!(document.getElementById(NewTask))) {
        var Box = document.createElement("INPUT");
        Box.id = NewTask;
        Box.type = "checkbox";
        Box.addEventListener("click", function(event) {
            localStorage.setItem(NewTask, true)
          }
        );

        var Label = document.createElement("LABEL");
        var TextNode = NewTask;
        var TextNode = document.createTextNode(TextNode);
        Label.htmlFor = NewTask;
        Label.appendChild(TextNode);

        var paragraph = document.createElement("P");
        paragraph.appendChild(Box);
        paragraph.appendChild(Label);

        document.getElementById("list_tasks").appendChild(paragraph);
        StoreTask(NewTask);
      }
    } else {
      window.alert("The task should be at least 3 characters long!");
    }
};
// save in localStorage the NewTask and its "checkness" state
function StoreTask(NewTask) {
  var Checkness = document.getElementById(NewTask).checked;
  localStorage.setItem(NewTask, Checkness);
}

// restore the tasks onload()
function LoadStoredTasks() {
  for (i = 0; i < localStorage.length; i++) {
    var StoredTask = localStorage.key(i)

    var Box = document.createElement("INPUT");
    Box.id = StoredTask;
    Box.type = "checkbox";
    Box.addEventListener("click", function(event) {
      var Id = this.id;
      localStorage.setItem(Id, true);
      }
    );

    if (localStorage.getItem(StoredTask) == "true") {
      Box.checked = true
    };

    var Label = document.createElement("LABEL");
    var TextNode = StoredTask;
    var TextNode = document.createTextNode(TextNode);
    Label.htmlFor = StoredTask;
    Label.appendChild(TextNode);

    var paragraph = document.createElement("P");
    paragraph.appendChild(Box);
    paragraph.appendChild(Label);

    document.getElementById("list_tasks").appendChild(paragraph);
  };

}

// Reset button
function ResetList() {
  document.getElementById("list_tasks").innerHTML = "";
  localStorage.clear()
}


// cycle through Salmy pictures as tasks get completed


/*  DONE- add eventListener to check when you press Enter, and then run the button
    - use Salmy to communicate that the NewTask is invalid instead of opening a popup
    - localStorage setting to keep the boxinos
    -
*/

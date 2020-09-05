// Add a new task
function AddNewTask(GivenObjectTask) {
    var NewTask = GivenObjectTask.value;
    var NewTask = NewTask.trimRight();
    var NewTask = " " + NewTask.trimStart();
    var ActiveDiv = document.getElementsByClassName("active")[0];


    if (NewTask.length > 3) {
      if (!(localStorage.getItem(NewTask))) {
        StoreTask(NewTask, ActiveDiv);

        var Box = CreateBoxElement(NewTask);
        var Label = CreateLabelElement(NewTask);
        var Paragraph = CreateParagraphElement(Box, Label);

        ActiveDiv.appendChild(Paragraph);
      }
    } else {
      window.alert("The task should be at least 3 characters long!");
    }
    GivenObjectTask.value = "";
};

// Create a Box
function CreateBoxElement(TaskName) {
  var StoredTask = localStorage.getItem(TaskName).slice(0, 5);
  var Box = document.createElement("INPUT");
  Box.id = TaskName;
  Box.type = "checkbox";
  Box.addEventListener("click", function(event) {
      localStorage.setItem(TaskName, (StoredTask + true));
  //    setTimeout(function() { /
      localStorage.removeItem(TaskName);
  //    }, 10000); //
    }
  );
  return Box;
}
// Create a Label for the Box
function CreateLabelElement(TaskName) {
  var Label = document.createElement("LABEL");
  var TextNode = TaskName;
  var TextNode = document.createTextNode(TextNode);
  Label.htmlFor = TaskName;
  Label.appendChild(TextNode);
  return Label
}
// Create a P element where to append Box and Label
function CreateParagraphElement(Box, Label) {
  var paragraph = document.createElement("P");
  paragraph.appendChild(Box);
  paragraph.appendChild(Label);
  return paragraph
}

// save in localStorage the NewTask and its "checkness" state
function StoreTask(NewTask, ActiveDiv) {
  var Checkness = "false";

  if (toggleIterator%2 == 0) {
      localStorage.setItem(NewTask, ("Today" + Checkness));
  } else {
      localStorage.setItem(NewTask, ("Tmrrw" + Checkness))
  }
}

// restore the tasks onload()
function LoadStoredTasks() {
  for (i = 0; i < localStorage.length; i++) {
    var StoredTask = localStorage.key(i)
    var TestDate = localStorage.getItem(StoredTask).slice(0, 5);
    if (TestDate == "Today") {
      var ListTasks = document.getElementById("list_tasks");
    } else {
      var ListTasks = document.getElementById("list_tomorrow_tasks");
    }

    var Box = CreateBoxElement(StoredTask);
    var Label = CreateLabelElement(StoredTask)
    var Paragraph = CreateParagraphElement(Box, Label)

    var TestCheckness = localStorage.getItem(StoredTask).slice(5, 9);
    if (TestCheckness == "true") {
      Box.checked = true
    };

    ListTasks.appendChild(Paragraph);
  };

}

// Reset button
function ResetList() {
  document.getElementById("list_tasks").innerHTML = " ";
  for (j = 0; j < localStorage.length; j++) {
    var StoredTask = localStorage.key(j)
    var TestDate = localStorage.getItem(StoredTask).slice(0, 5);
    if (TestDate == "Today") {
      localStorage.removeItem(StoredTask);
      (j == localStorage.length) || j--;
    }
  }
}

// cycle through Salmy pictures as tasks get completed


/*  - use Salmy to communicate that the NewTask is invalid instead of opening a popup
    DONE - localStorage setting to keep the boxinos
    -
*/

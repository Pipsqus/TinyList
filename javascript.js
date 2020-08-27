// Add a new task
function AddNewTask() {
    var GivenObjectTask = document.getElementById("NewTask");
    var NewTask = GivenObjectTask.value;
    var NewTask = NewTask.trimRight();
    var NewTask = " " + NewTask.trimStart();

    if (NewTask.length > 3) {
      if (!(document.getElementById(NewTask))) {
        var Box = document.createElement("INPUT");
        Box.id = NewTask;
        Box.type = "checkbox";

        var Label = document.createElement("LABEL");
        var TextNode = NewTask
        var TextNode = document.createTextNode(TextNode)
        Label.htmlFor = NewTask;
        Label.appendChild(TextNode)

        var paragraph = document.createElement("P");
        paragraph.appendChild(Box);
        paragraph.appendChild(Label)

        document.getElementById("list_tasks").appendChild(paragraph);
        StoreTask(NewTask);
      }
    } else {
      window.alert("The task should be at least 3 characters long!")
    }
};
// save in localStorage the NewTask just appended by the previous function
function StoreTask(NewTask) {
  console.log("temporary function")
}


// ONLOAD restore the previously added tasks

// eventListener for pressing Enter while writing on the input box



/*  - add eventListener to check when you press Enter, and then run the button
    - use Salmy to communicate that the NewTask is invalid instead of opening a popup
    - localStorage setting to keep the boxinos
    -
*/

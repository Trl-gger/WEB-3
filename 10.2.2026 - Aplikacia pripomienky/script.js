const ADDBUTTON = document.getElementById("addButton");

ADDBUTTON.addEventListener("click", () => {
    const TASKLIST = document.getElementById("taskList");
    const TASKINPUT = document.getElementById("taskInput");

    const TASKTEXT = TASKINPUT.value;

    if (!TASKTEXT) {
        console.log("Dopln text");
        return;
    }

    console.log(TASKTEXT);
});

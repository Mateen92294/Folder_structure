import { useState, useReducer } from "react";
import { Container, Button } from "react-bootstrap";
import { FaFolder } from "react-icons/fa6";
import { FaRegFile } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import FolderDivision from "./components/FolderDivision";
import FolderStructure from "./components/FolderStructure";
import FolderReducer from "./FolderReducer";

const initialTasks = [
  { id: 1, name: "Webstorm.dmg", folder: "Applications" },
  { id: 2, name: "FileZila.dmg", folder: "Applications" },
  { id: 3, name: "Mattermost.dmg", folder: "Applications" },
  { id: 4, name: "Pycharm.dmg", folder: "Applications" },
  { id: 5, name: "Screenshot1.jpg", folder: "Desktop" },
  { id: 6, name: "videopal.mp4", folder: "Desktop" },
  { id: 7, name: "Document1.jpg", folder: "Documents" },
  { id: 8, name: "Document2.jpg", folder: "Documents" },
  { id: 9, name: "Document3.jpg", folder: "Documents" },
  { id: 10, name: "Printerdriver.jpg", folder: "Downloads/Drivers" },
  { id: 11, name: "cameradriver.jpg", folder: "Downloads/Drivers" },
];

const App = () => {
  const [showB1, setShowB1] = useState(false);
  const [showB2, setShowB2] = useState(false);
  const [showB3, setShowB3] = useState(false);
  const [showB4, setShowB4] = useState(false);
  const [showB5, setShowB5] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState("");
  const [tasks, dispatch] = useReducer(FolderReducer, initialTasks);

  const handleEdit = (task) => {
    setEditingTaskId(task.id);
    setEditedTaskName(task.name);
    if (editingTaskId !== null && editedTaskName.trim() !== "") {
      dispatch({
        type: "EDIT",
        payload: { id: editingTaskId, name: editedTaskName },
      });
      setEditingTaskId(null);
      setEditedTaskName("");
    }
  };

  const handleDelete = (taskId) => {
    dispatch({ type: "DELETE", payload: taskId });
  };

  return (
    <Container className="justify-content-center align-items-center">
      <h1>Click on Arrow to Edit/Delete a file</h1>
      <FolderDivision structure={1}>
        <FolderStructure>
          <FaFolder />
          <Button variant="light" onClick={() => setShowB1(!showB1)}>
            {showB1 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </Button>
          Applications
        </FolderStructure>

        {showB1 && (
          <FolderDivision structure={2}>
            {tasks
              .filter((task) => task.folder === "Applications")
              .map((task) => (
                <FolderStructure key={task.id}>
                  <FaRegFile />
                  {editingTaskId === task.id ? (
                    <input
                      type="text"
                      value={editedTaskName}
                      onChange={(e) => setEditedTaskName(e.target.value)}
                    />
                  ) : (
                    <span>{task.name}</span>
                  )}

                  <Button
                    variant="outline-dark"
                    size="sm"
                    className="button-spacing"
                    onClick={() => handleEdit(task)}
                  >
                    {editingTaskId === task.id ? "Save" : "Edit"}
                  </Button>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    className="button-spacing"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </Button>
                </FolderStructure>
              ))}
          </FolderDivision>
        )}
      </FolderDivision>

      <FolderDivision>
        <FolderStructure>
          <FaFolder />
          <Button variant="light" onClick={() => setShowB2(!showB2)}>
            {showB2 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </Button>
          Desktop
        </FolderStructure>

        {showB2 && (
          <FolderDivision structure={2}>
            {tasks
              .filter((task) => task.folder === "Desktop")
              .map((task) => (
                <FolderStructure key={task.id}>
                  <FaRegFile />
                  {editingTaskId === task.id ? (
                    <input
                      type="text"
                      value={editedTaskName}
                      onChange={(e) => setEditedTaskName(e.target.value)}
                    />
                  ) : (
                    <span>{task.name}</span>
                  )}

                  <Button
                    variant="outline-dark"
                    size="sm"
                    className="button-spacing"
                    onClick={() => handleEdit(task)}
                  >
                    {editingTaskId === task.id ? "Save" : "Edit"}
                  </Button>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    className="button-spacing"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </Button>
                </FolderStructure>
              ))}
          </FolderDivision>
        )}
      </FolderDivision>

      <FolderDivision structure={1}>
        <FolderStructure>
          <FaFolder />
          <Button variant="light" onClick={() => setShowB3(!showB3)}>
            {showB3 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </Button>
          Documents
        </FolderStructure>

        {showB3 && (
          <FolderDivision structure={2}>
            {tasks
              .filter((task) => task.folder === "Documents")
              .map((task) => (
                <FolderStructure key={task.id}>
                  <FaRegFile />
                  {editingTaskId === task.id ? (
                    <input
                      type="text"
                      value={editedTaskName}
                      onChange={(e) => setEditedTaskName(e.target.value)}
                    />
                  ) : (
                    <span>{task.name}</span>
                  )}

                  <Button
                    variant="outline-dark"
                    size="sm"
                    className="button-spacing"
                    onClick={() => handleEdit(task)}
                  >
                    {editingTaskId === task.id ? "Save" : "Edit"}
                  </Button>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    className="button-spacing"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </Button>
                </FolderStructure>
              ))}
          </FolderDivision>
        )}
      </FolderDivision>

      <FolderDivision structure={1}>
        <FolderStructure>
          <FaFolder />
          <Button variant="light" onClick={() => setShowB4(!showB4)}>
            {showB4 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </Button>
          Downloads
        </FolderStructure>

        {showB4 && (
          <FolderDivision structure={2}>
            <FolderStructure>
              <FaFolder />
              <Button variant="light" onClick={() => setShowB5(!showB5)}>
                {showB5 ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </Button>
              Drivers
            </FolderStructure>

            {showB5 && (
              <FolderDivision structure={3}>
                {tasks
                  .filter((task) => task.folder === "Downloads/Drivers")
                  .map((task) => (
                    <FolderStructure key={task.id}>
                      <FaRegFile />{" "}
                      {editingTaskId === task.id ? (
                        <input
                          type="text"
                          value={editedTaskName}
                          onChange={(e) => setEditedTaskName(e.target.value)}
                        />
                      ) : (
                        <span>{task.name}</span>
                      )}
                      <Button
                        variant="outline-dark"
                        size="sm"
                        className="button-spacing"
                        onClick={() => handleEdit(task)}
                      >
                        {editingTaskId === task.id ? "Save" : "Edit"}
                      </Button>
                      <Button
                        variant="outline-dark"
                        size="sm"
                        className="button-spacing"
                        onClick={() => handleDelete(task.id)}
                      >
                        Delete
                      </Button>
                    </FolderStructure>
                  ))}
              </FolderDivision>
            )}
          </FolderDivision>
        )}
      </FolderDivision>
    </Container>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { createFolderAsync } from "../../redux/Slice/folderSlice";
const CreateFolder = ({ setIsCreateFolderModelOpen }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true);
  const [folderName, setFolderName] = useState("");

  const { userId, userFolders, currentFolder } = useSelector(
    (state) => ({
      userId: state.login.user,
      userFolders: state.folder.userFolders,
      currentFolder: state.folder.currentFolder,
    }),
    shallowEqual
  );
  console.log(currentFolder);
  console.log(userFolders);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (folderName) {
      if (folderName.length > 3) {
        if (!checkFolderPresent(folderName)) {
          let str = "folder";
          const path_2 = currentFolder.map((item) => {
            if (item != "Root") str += "/" + item;
          });
          const data = {
            createdAt: new Date(),
            name: folderName,
            userId: userId,
            createdBy: "hardik",
            path: str,
            parent: currentFolder,
            lastAccessed: null,
            updatedAt: new Date(1713780153632),
          };
          console.log(str);
          if (str != "folder") {
            str += "/folder";
          }
          dispatch(createFolderAsync({ data, str }));
          console.log(data);
        } else {
          alert("folder already have");
        }
      } else {
        alert("folder must have alteast 3 characters");
      }
    }
  };

  const checkFolderPresent = (name) => {
    const folderPresent = userFolders.find((folder) => folder === name);
    if (folderPresent) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Create Folder</Modal.Title>
          <Button
            variant="white"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsCreateFolderModelOpen(false);
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicFolderName" className="my-2">
              <Form.Control
                type="text"
                placeholder="Enter folder name..."
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicFolderSubmit" className="mt-5">
              <Button type="submit" className="form-control" variant="primary">
                Add Folder
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      {/* <Button
        // onClick={() => setShowModal(true)}
        variant="outline-dark"
        className="border-1 d-flex align-items-center justify-content-between rounded-2"
      >
        <FontAwesomeIcon icon={faFolder} />
        &nbsp; Create Folder
      </Button> */}
    </>
  );
};

export default CreateFolder;

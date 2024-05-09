import { getStorage, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../Firebase";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { createFolderAsync } from "../../redux/Slice/folderSlice";
import { ConstructionOutlined } from "@mui/icons-material";
const CreateFile = ({ setIsCreateFolderModelOpen2 }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true);
  const [file, setFile] = useState();
  const [folderName, setFolderName] = useState("");
  const [loading1, setLoading1] = useState(false);

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageRef = ref(storage, `${Date.now()}-${file.name}`);
    const uploadResult = await uploadBytes(imageRef, file);
    console.log(uploadResult);
    setLoading1(true);
    if (folderName) {
      if (folderName.length > 3) {
        if (!checkFolderPresent(folderName)) {
          let str = "folder";
          const path_2 = currentFolder.map((item) => {
            if (item != "Root") str += "/" + item + "/folder";
          });
          const data = {
            createdAt: new Date(),
            name: folderName,
            userId: userId,
            createdBy: "hardik",
            path: str,
            url: uploadResult.ref.fullPath,
            parent: currentFolder,
            lastAccessed: null,
            updatedAt: new Date(1713780153632),
            type: "file",
          };
          console.log(str);
          // if (str != "folder") {
          //   str += "/folder";
          // }
          dispatch(createFolderAsync({ data, str }));
          console.log(data);
        } else {
          alert("folder already have");
        }
      } else {
        alert("folder must have alteast 3 characters");
      }
    }

    // Create a root reference
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
          <Modal.Title>Create File</Modal.Title>
          <Button
            variant="white"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsCreateFolderModelOpen2(false);
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label></Form.Label>
                <Form.Control
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                />
              </Form.Group>
              {/* <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <button onClick={(e) => handleSubmit(e, file)}>
                {" "}
                click for submit file in firebse storage
              </button> */}
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

export default CreateFile;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./notes.css";

const Notes = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);


  const userName = useSelector((state) => state.user.userName);

  const handleSave = () => {
    if (title && content) {
      const updatedTime = new Date().toLocaleString(); // Get current time
      if (isEditing) {
        const updatedNotes = [...notes];
        updatedNotes[editIndex] = { title, content, updatedTime };
        setNotes(updatedNotes);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        const newNote = { title, content, updatedTime };
        setNotes([...notes, newNote]);
      }
      setModalOpen(false);
      setTitle("");
      setContent("");
    } else {
      alert("Please fill in both the title and content");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setTitle(notes[index].title);
    setContent(notes[index].content);
    setIsEditing(true);
    setModalOpen(true);
  };

  return (
    <div className="container">
      <h2 className="mt-3">Good Morning <span className="text-info">{userName || "Guest"}</span>!</h2>

      <div
        className="bg-warning rounded-circle p-3 position-fixed bottom-0 end-0 mb-3 me-3"
        onClick={() => {
          setModalOpen(true);
          setIsEditing(false);
          setTitle("");
          setContent("");
        }}
        style={{ cursor: "pointer" }}
      >
        📃
      </div>

     
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="d-flex justify-content-between align-items-center">
              <h4>{isEditing ? "Edit Note" : "Add a Note"}</h4>
              <span
                className="close-btn cursor-pointer fs-5"
                onClick={() => {
                  setModalOpen(false);
                  setTitle("");
                  setContent("");
                  setIsEditing(false);
                  setEditIndex(null);
                }}
              >
                &times;
              </span>
            </div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <textarea
              placeholder="Write your note here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ width: "100%", height: "150px", marginBottom: "10px" }}
            />
            <div className="d-flex gap-3">
              <button onClick={handleSave}>{isEditing ? "Update" : "Save"}</button>
              <button
                onClick={() => {
                  setModalOpen(false);
                  setTitle("");
                  setContent("");
                  setIsEditing(false);
                  setEditIndex(null);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notes List */}
      <div className="notes-list">
        {notes.length > 0 &&
          notes.map((note, index) => (
            <div key={index} className="note-card">
              <div className="d-flex justify-content-between align-items-center">
                <span>Note {index + 1}</span>
                <span onClick={() => handleEdit(index)} style={{ cursor: "pointer" }}>
                  🎯
                </span>
              </div>
              <h5 className="mt-3">{note.title}</h5>
              <p>{note.content}</p>
              <div className="note-footer">
                <span className="fs-6">Last updated: {note.updatedTime}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Notes;

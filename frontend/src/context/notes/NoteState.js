import React, { useState } from "react";
import noteContext from "./noteContext";
import { getAllNotesAPI } from "../../config/api";

const NoteState = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // Fetch notes from server
  const getNotes = async () => {
    try {
      const response = await getAllNotesAPI();
      if (response.data.success) {
        setNotes(response.data.notes);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  return (
    <noteContext.Provider value={{ notes, getNotes }}>
      {children}
    </noteContext.Provider>
  );
};

export default NoteState;

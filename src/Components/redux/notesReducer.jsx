// notesReducer.js

// Initial state for the notes
const initialState = {
    notes: [],
  };
  
  // Notes reducer to handle saving notes
  const notesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SAVE_NOTE":
        return {
          ...state,
          notes: [...state.notes, action.payload], // Add the new note to the notes array
        };
      default:
        return state;
    }
  };
  
  export default notesReducer;
  
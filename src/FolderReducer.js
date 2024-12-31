const FolderReducer = (state, action) => {
  switch (action.type) {
    case "EDIT":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, name: action.payload.name }
          : task
      );

    case "DELETE": {
      return state.filter((d) => d.id !== action.payload);
    }
    default: {
      return state;
    }
  }
};

export default FolderReducer;

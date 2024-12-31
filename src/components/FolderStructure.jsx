import { useContext } from "react";
import { JsonContext } from "../Context";

const FolderStructure = ({ children }) => {
  const structure = useContext(JsonContext);
  switch (structure) {
    case 1:
      return <h2>{children}</h2>;
    case 2:
      return <h4>{children}</h4>;
    case 3:
      return <h6>{children}</h6>;
  }
};

export default FolderStructure;

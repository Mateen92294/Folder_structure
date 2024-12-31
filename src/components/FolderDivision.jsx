import { useContext } from "react";
import { JsonContext } from "../Context";

const FolderDivision = ({ children }) => {
  const structure = useContext(JsonContext);
  return (
    <section>
      <JsonContext.Provider value={structure + 1}>
        {children}
      </JsonContext.Provider>
    </section>
  );
};

export default FolderDivision;

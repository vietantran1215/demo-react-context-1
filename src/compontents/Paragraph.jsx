import { useContext } from "react";
import ContentContext from "../context/ContentContext";

const Paragraph = () => {
  const { contextData } = useContext(ContentContext);
  return (
    <p>{contextData.paragraph}</p>
  );
}
 
export default Paragraph;
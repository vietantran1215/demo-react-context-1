import { useContext } from "react";
import ContentContext from "../context/ContentContext";

const Title = () => {
  const { contextData } = useContext(ContentContext);
  return (
    <>
      <h1>{contextData.title}</h1>
    </>
  );
}
 
export default Title;
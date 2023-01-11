
import { Link } from "react-router-dom";

const List = () => {
 

  return (
    <>
      <div>
        <Link to="/">strona głowna</Link> <br />
        <Link to="/addlist">dodaj listę</Link>
        <div> zapisane listy</div>
      </div>
    </>
  );
};

export default List;

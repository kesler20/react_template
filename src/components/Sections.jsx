import {
  DragBtn,
} from "../components/StyledElements";

const Database = () => {
  const filterByQuery = () => {
    return [
      { name: "this", total: 10 },
      { name: "this", total: 10 },
      { name: "that", total: 10 },
    ];
  };

  return (
    <div className="flex-column">
      <DragBtn className="flex">
        <i className="fa fa-bars"></i>
      </DragBtn>
    </div>
  );
};

export default Database;

import {MyContext} from "../App";
import {useContext} from "react";
import {observer} from "mobx-react-lite";

const FilterInput = observer(() => {
  const { filter, setFilter } = useContext(MyContext);
  return (
    <input value={filter} onChange={(evt) => setFilter(evt.target.value)} />
  );
});

export default FilterInput

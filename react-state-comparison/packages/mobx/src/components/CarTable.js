import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {MyContext} from "../App";

const CarTable = observer(() => {
  const { filteredCars } = useContext(MyContext);

  return (
    <table width="100%">
      <tbody>
        { filteredCars()
          .map(({ MakeId, MakeName, VehicleTypeName }) => (
            <tr key={MakeId}>
              <td>{MakeName}</td>
              <td>{VehicleTypeName}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
});

export default CarTable

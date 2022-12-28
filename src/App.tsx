import "./App.css";
import Table from "./components/Table";
import { TableStatus } from "./utils/tableStatus";

const tables = [
   {
      id: 1,
      tableNumber: 1,
      status: TableStatus.AVAILABLE,
   },
   {
      id: 2,
      tableNumber: 2,
      status: TableStatus.OCCUPIED,
   },
   {
      id: 3,
      tableNumber: 3,
      status: TableStatus.AVAILABLE,
   },
];

function App() {
   return (
      <div className="App">
         <div className="flex gap-3">
         {tables.map((table) => (
            <Table 
               key={table.id} 
               tableNumber={table.tableNumber} 
               status={table.status} />
         ))}
         </div>
      </div>
   );
}

export default App;

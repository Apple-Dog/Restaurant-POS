import React from "react";
import { TableStatus } from "../utils/tableStatus";

interface ItableProps {
   tableNumber: number;
   status: string;
}

const Table = ({ tableNumber, status }: ItableProps) => {
   return (
      <div
         className={`${
            status === TableStatus.AVAILABLE ? "bg-green-900" : "bg-gray-700" } 
            p-4 text-center text-white rounded`}>

         <h3 className="text-2xl">{tableNumber}</h3>

         <span>{status}</span>
         
      </div>
   );
};

export default Table;

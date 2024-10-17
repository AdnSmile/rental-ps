/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { Spinner } from "@material-tailwind/react";

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="border-slate-200 w-full overflow-x-auto rounded-xl border-[1px] bg-gray-50 text-base text-blue-gray-700">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <section
      className={`grid ${columns} items-center gap-4 border-b-2 border-gray-100 bg-gray-300 px-6 py-[1rem] font-semibold uppercase`}
    >
      {children}
    </section>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      className={`grid ${columns} border-slate-100 items-center gap-4 border-b-[1px] px-6 py-3`}
    >
      {children}
    </div>
  );
}

function Body({ data, render, isLoading }) {
  if (isLoading) {
    return (
      <div className="my-10 flex items-center justify-center">
        <Spinner color="red" className="text-pink-primary h-16 w-16" />
      </div>
    );
  }
  if (data?.length === 0)
    return (
      <div className="my-10 flex items-center justify-center">
        <p className="text-lg text-gray-500">No Data</p>
      </div>
    );
  return <section>{data.map(render)}</section>;
}

function Footer({ children }) {
  if (!children) return null;
  return (
    <footer className="bg-slate-50 flex items-center justify-center p-5 py-2">
      {children}
    </footer>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;

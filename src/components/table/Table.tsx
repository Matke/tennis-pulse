import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";

const Table = ({ columns, sortKey, rows, handleRowClick }: any) => {
  const [sort, setSort] = useState(sortKey || ""); // column variable name
  const [sortDirection, setSortDirection] = useState("asc"); // 'asc' or 'desc'

  // Sorting
  const descendingComparator = (a: any, b: any, orderBy: any) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = sort === property && sortDirection === "asc";
    setSortDirection(isAsc ? "desc" : "asc");
    setSort(property);
  };

  const createSortHandler = (property: any) => (event: any) => {
    handleRequestSort(event, property);
  };

  const getComparator = (order: any, orderBy: any) =>
    order === "desc"
      ? (a: any, b: any) => descendingComparator(a, b, orderBy)
      : (a: any, b: any) => -descendingComparator(a, b, orderBy);

  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  const stableSort = (array: any, comparator: any) => {
    const stabilizedThis = array?.map((el: any, index: any) => [el, index]);
    stabilizedThis?.sort((a: any, b: any) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis?.map((el: any) => el[0]);
  };

  return (
    <>
      {/* <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-sm font-medium text-gray-900">Projects</h2>
        </div>
        <ul role="list" className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
          {rows.map((row) => (
            <li key={row.id}>
              <a
                href="#"
                className="flex items-center justify-between px-4 py-4 group hover:bg-gray-50 sm:px-6"
              >
                <span className="flex items-center space-x-3 truncate">
                  <span
                    className={classNames(
                      row.bgColorClass,
                      "h-2.5 w-2.5 flex-shrink-0 rounded-full",
                    )}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium leading-6 truncate">
                    {row.title}{" "}
                    <span className="font-normal text-gray-500 truncate">in {row.team}</span>
                  </span>
                </span>
                <ChevronRightIcon
                  className="w-5 h-5 ml-4 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Table table (small breakpoint and up) */}
      <div className="col-span-2 mt-4 hidden overflow-hidden overflow-x-auto sm:block">
        <div className="inline-block min-w-full border-b border-gray-200 align-middle">
          <table className="min-w-full rounded-sm border-r border-l">
            <thead className="z-30">
              <tr className="border-t border-gray-200">
                {columns.map((headCell: any, i: number) => (
                  <th
                    key={i}
                    onClick={createSortHandler(headCell.key)}
                    className={`relative border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 hover:cursor-pointer ${headCell.className}`}
                    scope="col"
                  >
                    <div className="w-auto">
                      {headCell.label}
                      {sort === headCell.key ? (
                        sortDirection === "desc" ? (
                          <i className="fas fa-angle-down absolute top-[50%] right-4 ml-2 translate-y-[-50%]" />
                        ) : (
                          <i className="fas fa-angle-up absolute top-[50%] right-4 ml-2 translate-y-[-50%]" />
                        )
                      ) : null}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {rows &&
                stableSort(rows, getComparator(sortDirection, sort)).map(
                  (row: any) => (
                    <tr
                      className="cursor-pointer duration-200 hover:bg-gray-50"
                      key={row.id}
                      onClick={() =>
                        handleRowClick ? handleRowClick(row.id) : {}
                      }
                    >
                      {/* <td className="w-full px-6 py-3 text-sm font-medium text-gray-900 max-w-0 whitespace-nowrap">
                    <div className="flex items-center space-x-3 lg:pl-2">
                      <div
                        className={classNames(
                          row.bgColorClass,
                          "h-2.5 w-2.5 flex-shrink-0 rounded-full",
                        )}
                        aria-hidden="true"
                      />
                      <a href="#" className="truncate hover:text-gray-600">
                        <span>
                          {row.title} <span className="font-normal text-gray-500">{row.team}</span>
                        </span>
                      </a>
                    </div>
                  </td> */}

                      {/* <td className="px-6 py-3 text-sm font-medium text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="flex flex-shrink-0 -space-x-1">
                        {row.members.map((member) => (
                          <img
                            key={member.handle}
                            className="w-6 h-6 rounded-full max-w-none ring-2 ring-white"
                            src={member.imageUrl}
                            alt={member.name}
                          />
                        ))}
                      </div>
                      {row.totalMembers > row.members.length ? (
                        <span className="flex-shrink-0 text-xs font-medium leading-5">
                          +{row.totalMembers - row.members.length}
                        </span>
                      ) : null}
                    </div>
                  </td> */}

                      {columns.map((column: any, i: number) => {
                        switch (column.type) {
                          case "select":
                            return (
                              <td className="px-6" key={i}>
                                <select
                                  value={row[column.key]}
                                  className="w-32 cursor-pointer rounded-sm border-gray-300 px-2 py-1 text-sm capitalize focus:ring-0"
                                  onClick={(e: any) => {
                                    e.stopPropagation();
                                  }}
                                  onChange={(e) => {
                                    column.action(row.id, e.target.value);
                                  }}
                                >
                                  {column?.options?.map(
                                    (option: any, i: number) => (
                                      <option
                                        key={i}
                                        className="text-text-secondary text-sm"
                                        value={option}
                                      >
                                        {option.toLowerCase()}
                                      </option>
                                    ),
                                  )}
                                </select>
                              </td>
                            );

                          case "button":
                            return (
                              <td className="px-6" key={i}>
                                <button
                                  type="button"
                                  className="rounded border border-gray-400 bg-white px-2 text-gray-800 shadow hover:bg-gray-100"
                                  onClick={() =>
                                    column.action(row.id, row.active)
                                  }
                                >
                                  {row.active
                                    ? column.key.charAt(0).toUpperCase() +
                                      column.key.slice(1)
                                    : "Activate"}
                                </button>
                              </td>
                            );

                          case "boolean":
                            return (
                              <td
                                key={i}
                                className="px-6 py-3 text-sm whitespace-nowrap text-gray-500 md:table-cell"
                              >
                                {row[column.key] ? (
                                  <BiCheck className="text-text-success w-5" />
                                ) : (
                                  <FaXmark className="text-text-warning w-5" />
                                )}
                              </td>
                            );

                          //   case "action_menu":
                          //     return (
                          //       <td key={i}>
                          //         <ActionMenu
                          //           icon={
                          //             <EllipsisVerticalIcon
                          //               className="h-5 w-5"
                          //               aria-hidden="true"
                          //             />
                          //           }
                          //         />
                          //       </td>
                          //     );

                          default:
                            return (
                              <td
                                key={i}
                                className="px-6 py-3 text-sm whitespace-nowrap text-gray-500 md:table-cell"
                              >
                                {row[column.key]}
                              </td>
                            );
                        }
                      })}
                    </tr>
                  ),
                )}
            </tbody>
          </table>
        </div>
        {rows && (
          <div className="text-text-subtitle w-full p-4 text-center">
            {" "}
            No data available
          </div>
        )}
      </div>
    </>
  );
};

export default Table;

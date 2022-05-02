import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const _Table = ({
  columnsName,
  rows,
  propsName,
}: {
  columnsName: string[];
  rows: any;
  propsName: string[];
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {columnsName.map((column: string, i: number) => {
              if (i === 0) return <TableCell key={i}>{column}</TableCell>;
              return (
                <TableCell key={i} align="right">
                  {column}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {propsName.map((prop: string, i: number) => {
                if (i === 0)
                  return (
                    <TableCell key={i} component="th" scope="row">
                      {row[prop]}
                    </TableCell>
                  );
                return (
                  <TableCell key={i} align="right">
                    {row[prop]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { _Table };

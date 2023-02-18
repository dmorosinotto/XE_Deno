import { doExec, doQuery } from "./sql_helper.ts";

export interface ICustomer {
  CustomerId: number;
  Title: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
}

export const getAll = () =>
  doQuery<ICustomer>(
    "SELECT CustomerId, Title, FirstName, MiddleName, LastName FROM SalesLT.Customer",
  );

export const getOne = (id: number) =>
  doQuery<ICustomer>`SELECT CustomerId, Title, FirstName, MiddleName, LastName 
        FROM SalesLT.Customer WHERE CustomerId=${id}`.then((res) =>
    res && res[0]
  );

export function update(cid: ICustomer["CustomerId"], data: Partial<ICustomer>) {
  let s = "UPDATE SalesLT.Customer SET ModifiedDate=@now";
  for (let fld in data) {
    s += ` , ${fld}=@${fld}`;
  }
  s += " WHERE CustomerId=@cid";
  return doExec(s, { ...data, cid, now: new Date() });
}

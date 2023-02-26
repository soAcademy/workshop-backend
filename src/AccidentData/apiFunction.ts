import { db } from "../sql";

export const getAccidentData = (args: {
  yearQuery: Array<number>;
  vehicleQuery: string;
}) => {
  const sql =
    args.yearQuery.length !== 0
      ? args.vehicleQuery !== "ทั้งหมด"
        ? `SELECT * FROM dashboard.accident 
  WHERE "deadyearBudha" >= ${args.yearQuery[0]} AND 
  "deadyearBudha" <= ${args.yearQuery[1]} AND 
  vehicle = '${args.vehicleQuery}'`
        : `SELECT * FROM dashboard.accident 
  WHERE "deadyearBudha" >= ${args.yearQuery[0]} AND 
  "deadyearBudha" <= ${args.yearQuery[1]}`
      : args.vehicleQuery !== "ทั้งหมด"
      ? `SELECT * FROM dashboard.accident WHERE vehicle = '${args.vehicleQuery}'`
      : `SELECT * FROM dashboard.accident `;
  console.log(sql);
  return db.query(sql).then((res) => res.rows);
};

export const getUniqueVehicles = () => {
  const sql = `SELECT distinct vehicle from dashboard.accident`;
  return db.query(sql).then((res) => res.rows.map((e) => e.vehicle));
};
export const getUniqueYears = () => {
  const sql = `SELECT distinct "deadyearBudha" from dashboard.accident`;
  return db
    .query(sql)
    .then((res) => res.rows.map((e) => e.deadyearBudha).sort((a, b) => a - b));
};

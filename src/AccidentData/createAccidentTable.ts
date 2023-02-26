import { db } from "./db";
import jsonData from "../AccidentData/accident.json";
export const createAccidentTable = () => {
  const sql = `CREATE TABLE IF NOT EXISTS dashboard.accident (
      "id" INT,
      "deadyearBudha" INT,
      "deadyear" INT,
      "age" INT,
      "sex" INT,
      "deadDate" DATE,
      "province" TEXT,
      "latitude" FLOAT,
      "longitude" FLOAT,
      "icd10" TEXT,
      "vehicle" TEXT)`;
  db.query(sql).then(
    (jsonData as any).forEach((e: any) => {
      db.query(
        `INSERT INTO dashboard.accident ("id",
        "deadyearBudha",
        "deadyear",
        "age",
        "sex",
        "deadDate",
        "province",
        "latitude",
        "longitude",
        "icd10",
        "vehicle")
        VALUES (
          $1,
          $2,
          $3,
          $4,
          $5,
          $6,
          $7,
          $8,
          $9,
          $10,
          $11
          )`,
        [
          e.id,
          e.deadyearBudha,
          e.deadyear,
          e.age,
          e.sex,
          e.deadDate,
          e.province,
          e.latitude,
          e.longitude,
          e.icd10,
          e.vehicle,
        ]
      );
    })
  );
};

createAccidentTable();

export * from "./handler";
export * from "./mathFunction";
export * from "./mathFunction.interface";

// handler.ts เก็บ func ที่มี request (express) ทำหน้าที่ validate ว่า input ตรง format หรือไม่ จากนั้นเรียก func คำนวณแล้วส่งค่า re.send

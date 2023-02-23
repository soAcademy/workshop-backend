export * from './handler';
export * from './mathFunction';
export * from './mathFunction.interface'

// handler.ts ไว้เก็บ function ที่มี request, response (Express) ทำหน้าที่ validate ว่า input 
// ตรง format หรือไม่ จากนั้น เรียก function คำนวน แล้วก็ส่งค่า res.send

// mathFunction.ts aka (service.ts, controller.ts) ไว้เก็บ business logic +, -, *, / ต่างๆ ไม่ยุ่งกับ express

// mathFunction.interface aka (service.interface.ts) ไว้เก็บ interface, type, codec

# 1. วิธีติดตั้ง typescript + express + tsc + ts-node

```bash
yarn add express ts-node tsconfig-paths
yarn add --dev typescript ts-node-dev @types/node @types/express
npx tsc --init
```

สร้างไฟล์ .gitignore
```.gitignore
node_modules
```

เพิ่มรายละเอียดในไฟล์ package.json
```json
{
  "name": "workshop-backend",
  "version": "1.0.0",
  ...
}
```

เพิ่ม script ใน package.json เพื่อใช้สำหรับ run project
```json
{
  ...
  "scripts": {
    "dev": "ts-node-dev -r tsconfig-paths/register src/main.ts",
    "start": "ts-node -r tsconfig-paths/register src/main"
  },
  ...
}
```

สร้างไฟล์ src/main.ts เพื่อเขียน express server

รันคำสั่งต่อไปนี้ เพื่อ start server

- สำหรับการเขียนโค้ดใน local รัน (จะมีการ hot reload ทุกครั้งที่แก้ไขโค้ด)
```bash
yarn dev
```

- สำหรับการ deploy โค้ดบน server รัน (จะไม่มีการ hot reload)
```bash
yarn start
```

ทดลองเปลี่ยนแปลงค่าใน console.log เพื่อทดสอบความแตกต่างของ `yarn dev` และ `yarn start`
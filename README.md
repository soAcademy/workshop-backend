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

# 2. ทดลองสร้าง Simple API

## GET Method

มักใช้กับ API ที่ดึงข้อมูลจาก Server เพื่ออ่านอย่างเดียว

สามารถเรียก API ผ่าน Browser URL Bar ได้

การส่งข้อมูลเพิ่มไปใน API จะส่งผ่าน query parameters เช่น

`http://localhost:3000/profile?name=Bin&age=30`

## Post Method

มักใช้กับ API ที่ส่งข้อมูลจาก client -> server เพื่อสร้าง หรืออัพเดทข้อมูล

แต่สามารถใช้แทน GET Method ได้ ในหลายๆ กรณีเช่น graphql server ใช้ POST Method แทน GET Method  
  - ข้อดีคือสามารถส่ง query parameters ขนาดใหญ่ได้
  - ข้อเสียคือไม่สามารถเรียก API Post method ได้จาก Browser URL Bar

การส่งข้อมูลเพิ่มไปใน API จะส่งผ่าน body ในรูปแบบ json เช่น
```json
{
  "name": "Bin",
  "age": 30
}
```

## Response
res.send(textData)
res.json(jsonData)
res.status(200).send(textData)
res.status(500).send(textData)
res.status(200).json(jsonData)
res.status(500).json(jsonData)


## Status Code

status code ไว้บอกว่า API ที่เรียก สำเร็จ หรือไม่สำเร็จ
Status Code: 2xx แปลว่าสำเร็จ
Status Code: 3xx server redirect, server connect ไม่ได้
Status Code: 4xx หาข้อมูลไม่เจอ, bad request
Status Code: 5xx แปลว่า Error

## Nested Url
เราสามารถทำ API Endpoint ที่ path nested ได้เช่น
`https://localhost:3000/user/register`

# 3. ต่อ Postgres Database ด้วย pg

รัน postgres database ด้วย docker
เพิ่ม `postgres-data` ใน `.gitignore`

```bash
docker-compose up -d
```

ติดตั้ง library pg สำหรับต่อ postgres
```bash
yarn add pg
```


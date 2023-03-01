-- AlterTable
CREATE SEQUENCE orderitem_id_seq;
ALTER TABLE "orderItem" ALTER COLUMN "id" SET DEFAULT nextval('orderitem_id_seq');
ALTER SEQUENCE orderitem_id_seq OWNED BY "orderItem"."id";

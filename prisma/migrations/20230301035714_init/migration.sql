-- AddForeignKey
ALTER TABLE "BinKitchenMenu" ADD CONSTRAINT "BinKitchenMenu_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "BinKitchenCategory"("name") ON DELETE SET NULL ON UPDATE CASCADE;

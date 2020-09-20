# Migration `20200920001141-convert_consumption`

This migration has been generated at 9/19/2020, 5:11:41 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Meal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "consumption_date" TEXT NOT NULL
);
INSERT INTO "new_Meal" ("id", "user_id", "name", "points", "consumption_date") SELECT "id", "user_id", "name", "points", "consumption_date" FROM "Meal";
DROP TABLE "Meal";
ALTER TABLE "new_Meal" RENAME TO "Meal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200919231959-initial..20200920001141-convert_consumption
--- datamodel.dml
+++ datamodel.dml
@@ -2,18 +2,18 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 model Meal {
-  id               Int      @default(autoincrement()) @id
+  id               Int    @default(autoincrement()) @id
   user_id          Int
   name             String
   points           Int
-  consumption_date DateTime
+  consumption_date String
 }
```



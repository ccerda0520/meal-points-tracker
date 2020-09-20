# Migration `20200919231959-initial`

This migration has been generated at 9/19/2020, 4:19:59 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Meal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "consumption_date" DATETIME NOT NULL
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200919231959-initial
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,19 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Meal {
+  id               Int      @default(autoincrement()) @id
+  user_id          Int
+  name             String
+  points           Int
+  consumption_date DateTime
+}
```



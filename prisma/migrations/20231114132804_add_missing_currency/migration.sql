-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserPreference" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "invoiceFormat" TEXT NOT NULL,
    "taxRate" REAL NOT NULL DEFAULT 0.00,
    "theme" TEXT NOT NULL DEFAULT 'system',
    "currencyIso" TEXT NOT NULL DEFAULT 'MYR',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" DATETIME NOT NULL,
    CONSTRAINT "UserPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserPreference" ("createdAt", "id", "invoiceFormat", "modifiedAt", "taxRate", "theme", "userId") SELECT "createdAt", "id", "invoiceFormat", "modifiedAt", "taxRate", "theme", "userId" FROM "UserPreference";
DROP TABLE "UserPreference";
ALTER TABLE "new_UserPreference" RENAME TO "UserPreference";
CREATE UNIQUE INDEX "UserPreference_userId_key" ON "UserPreference"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

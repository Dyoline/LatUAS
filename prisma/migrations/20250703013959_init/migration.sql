/*
  Warnings:

  - You are about to drop the `customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `paket` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `preorder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "customer";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "paket";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "preorder";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "kegiatan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "judul_kegiatan" TEXT NOT NULL,
    "id_organisasi" TEXT NOT NULL,
    "tanggal_kegiatan" DATETIME NOT NULL,
    "lokasi" TEXT NOT NULL,
    "jenis_kegiatan" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "tautan" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "organisasi" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama_organisasi" TEXT NOT NULL,
    "ketua_organisasi" TEXT NOT NULL,
    "no_kontak" INTEGER NOT NULL,
    "tahun_dibentuk" DATETIME NOT NULL,
    "pembina" TEXT NOT NULL
);

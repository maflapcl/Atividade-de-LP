import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "nextjsdbfatec",
});

const prisma = new PrismaClient({ adapter });

export default prisma;
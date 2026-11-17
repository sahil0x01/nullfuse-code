import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const repos = pgTable("repos", {
  id: uuid("id").primaryKey().defaultRandom(),
  owner: text("owner").notNull(),
  name: text("name").notNull(),
  defaultBranch: text("default_branch").notNull().default("main"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

import { unlink } from "node:fs/promises";

try {
  await unlink("/desktop/hello");
  console.log("successfully deleted /desktop/hello");
} catch (error) {
  console.error("there was an error:", error.message);
}

// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

export function renderItems(list) {
  const container = document.querySelector("#list");
  container.textContent = "";

  for (const item of list) {
    const row = document.createElement("li");
    row.classList.add("goods-item");
    row.textContent = item.name;
    container.append(row);
  }
}

export function matching() {
  return items.filter((item) => item.category === "stationery");
}

export function start() {
  renderItems(items);
  document.querySelector("#pick").addEventListener("click", () => {
    renderItems(matching());
  });
}

import Fuse from "fuse.js";

function sortArrayOfObjects<T>(arr: T[], sortByKey: keyof T): T[] {
  return arr.sort((a, b) => {
    const valA = a[sortByKey];
    const valB = b[sortByKey];

    if (typeof valA === "number" && typeof valB === "number") {
      return valA - valB;
    }

    return String(valA).localeCompare(String(valB));
  });
}

function filterArrayOfObjects<T>(arr: T[], searchTerm: string): T[] {
  const options = {
    keys: Object.keys(arr[0] || {}),
    threshold: 0.4,
  };

  const fuse = new Fuse(arr, options);
  return fuse.search(searchTerm).map((result) => {
    return result.item;
  });
}

export { sortArrayOfObjects, filterArrayOfObjects };

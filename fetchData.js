function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched!"), 0);
  });
}

async function getData() {
  console.log("Fetching data...");
  const result = await fetchData();
  console.log(result);
  console.log("Data fetched successfully!");
}

getData();

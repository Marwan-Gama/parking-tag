async function fetchData() {
  // Get the input element
  const limitInput = document.getElementById("limit");

  // Get the value entered by the user
  const limit = limitInput.value;

  const url = `https://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&limit=${limit}`;
  try {
    let data = await fetch(url);
    if (!data.ok) {
      throw new Error("Network response was not ok");
    }
    let record = await data.json();
    console.log(record.result.records);
    document.getElementById(
      "MISPAR-RECHEV"
    ).innerHTML = record.result.records
      .map((item) => `<li>${item["MISPAR RECHEV"]}</li>`)
      .join("");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Add event listener to the button
document.getElementById("fetchButton").addEventListener("click", fetchData);

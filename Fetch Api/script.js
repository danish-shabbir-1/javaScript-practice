const dataBili = {
  catName: "Billi",
  FatherName: "Billa Khan",
  catName: "Billi",
  FatherName: "Billa Khan",
};

fetch(`https://www.boredapi.com/api/activity`)
  .then((res) => res.json())
  .then((data) => console.log(data));

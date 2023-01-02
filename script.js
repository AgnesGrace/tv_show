const formData = document.querySelector("#formData");
const imgDiv = document.querySelector(".img__container");

formData.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(formData.elements.searchInput.value);
  let searchTerm = formData.elements.searchInput.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  console.log(res.data[0].show.image.medium);

  const info = res.data;
  makeImg(info);
  formData.reset();
});
const makeImg = (data) => {
  for (let i = 0; i < data.length; i++) {
    const img = document.createElement("IMG");
    if (data[i].show.image) {
      img.src = data[i].show.image.medium;
      imgDiv.append(img);
    }
  }
};

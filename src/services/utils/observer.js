const options = {
  rootMargin: "0px",
  threshold: 0.05,
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log("int ratio", entry.intersectionRatio);
    entry.intersectionRatio > 1
      ? (entry.target.style.backgroundColor = "white")
      : (entry.target.style.backgroundColor = "pink");
  });
}, options);
export default observer;

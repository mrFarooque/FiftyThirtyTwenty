// Define the buckets and their corresponding elements
const buckets = {
  1: {
    amountElement: document.getElementById("fifty-percent-amount"),
    fillElement: document.getElementById("fifty-percent-fill"),
    fullAmount: (60000 * 50)/100,
  },
  2: {
    amountElement: document.getElementById("thirty-percent-amount"),
    fillElement: document.getElementById("thirty-percent-fill"),
    fullAmount: (60000 * 30)/100,
  },
  3: {
    amountElement: document.getElementById("twenty-percent-amount"),
    fillElement: document.getElementById("twenty-percent-fill"),
    fullAmount: (60000 * 20)/100,
  },
};

const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const amount = document.getElementById("amount").valueAsNumber;
  const bucket = parseInt(document.getElementById("bucket").value);

  if (buckets[bucket]) {
    const { amountElement, fillElement, fullAmount } = buckets[bucket];
    let displayAmount = parseFloat(amountElement.textContent.split("Rs. ")[1]);
    amountElement.textContent = "Rs. " + (amount + displayAmount);
    const fillPercentage = ((amount + displayAmount) / fullAmount) * 100;
    fillElement.style.width = fillPercentage + "%";
    const hue = (fillPercentage / 100) * 120;
    const color = `hsl(${hue}, 100%, 60%)`;
    fillElement.style.backgroundColor = color;
  }
});

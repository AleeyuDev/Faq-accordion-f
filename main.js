const faqs = document.querySelectorAll("li");
const btns = document.querySelectorAll("button");
btns.forEach((btn, i) =>
  btn.addEventListener("click", (e) => clickOnFAQ(e, btn, i))
);

function clickOnFAQ(e, btn, i) {
  closeOtherFAQs(btn);
  const answer = faqs[i].children[1];
  const toggleFAQ = e.target.ariaExpanded === "true" ? "false" : "true";
  toggleFAQ === "true"
    ? answer.removeAttribute("hidden")
    : answer.setAttribute("hidden", "");
  e.target.setAttribute("aria-expanded", toggleFAQ);
}

function closeOtherFAQs(clicked) {
  btns.forEach((btn, j) => {
    if (btn !== clicked) {
      btn.setAttribute("aria-expanded", "false");
      faqs[j].children[1].setAttribute("hidden", "");
    }
  });
}

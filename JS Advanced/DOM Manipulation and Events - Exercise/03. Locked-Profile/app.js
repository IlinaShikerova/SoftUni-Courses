function lockedProfile() {
  const btns = [...document.getElementsByTagName("button")];
  btns.forEach((btn) => btn.addEventListener("click", showHide));

  function showHide(event) {
    const button = event.target;
    const profile = button.parentNode;
    const moreInformation = profile.getElementsByTagName("div")[0];
    const lockStatus = profile.querySelector(
      'input[type="radio"]:checked'
    ).value;

    if (lockStatus === "unlock") {
      if (button.textContent === "Show more") {
        moreInformation.style.display = "inline-block";
        button.textContent = "Hide it";
      } else if (button.textContent === "Hide it") {
        moreInformation.style.display = "none";
        button.textContent = "Show more";
      }
    }
  }
  const radio = Array.from(document.querySelectorAll('input[type="radio"]'));
  for (let input of radio) {
    input.addEventListener("click", onLockToggle);
  }
  function onLockToggle(e) {
    const button = e.target.parentElement.querySelector("button");
    if (e.target.value == "lock") {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  }
}

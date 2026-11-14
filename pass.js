function unlock() {
  const password = document.getElementById("pass").value;

  if (password === "9312208052") {
    document.getElementById("message").innerText =
      "Access Granted!";
    window.location.href = "tentive.html";
  } else {
    document.getElementById("message").innerText =
      "Incorrect Password!";
  }
}

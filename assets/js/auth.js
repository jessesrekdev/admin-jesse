const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

loginBtn.addEventListener("click", async () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    message.textContent = "Please enter both username/email and password.";
    return;
  }

  message.textContent = "Logging in...";
  loginBtn.disabled = true;

  try {
    const res = await fetch(AUTH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (data.token) {
      // Save token in localStorage
      localStorage.setItem("token", data.token);
      message.style.color = "green";
      message.textContent = "Login successful! Redirecting...";

      setTimeout(() => {
        window.location.href = "../dashboard/index.html";
      }, 800);

    } else {
      message.style.color = "red";
      message.textContent = data.message || "Login failed. Check credentials.";
    }

  } catch (err) {
    console.error(err);
    message.style.color = "red";
    message.textContent = "Network error. Try again later.";
  } finally {
    loginBtn.disabled = false;
  }
});

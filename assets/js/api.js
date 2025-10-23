// API config
// Base API URLs
const WP_URL = "https://jesse-network.site";
const WP_API_BASE = `${WP_URL}/wp-json/wp/v2`;
const AUTH_URL = `${WP_URL}/wp-json/jwt-auth/v1/token`;

// Function to fetch site info
async function getSiteInfo() {
  try {
    const res = await fetch(`${WP_URL}/wp-json`);
    const data = await res.json();
    return {
      name: data.name || "Admin Panel",
      icon: data.icon || "../assets/images/logo.png"
    };
  } catch (err) {
    console.error("Failed to fetch site info", err);
    return {
      name: "Admin Panel",
      icon: "../assets/images/logo.png"
    };
  }
}

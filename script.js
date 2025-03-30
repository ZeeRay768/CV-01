document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Set last updated date
  document.getElementById("last-updated").textContent = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  // Add icons using Lucide
  let lucide // Declare lucide variable
  if (typeof lucide !== "undefined") {
    lucide.createIcons({
      icons: {
        "email-icon": lucide.icons.mail,
        "phone-icon": lucide.icons.phone,
        "linkedin-icon": lucide.icons.linkedin,
        "github-icon": lucide.icons.github,
      },
    })
  } else {
    // Fallback if Lucide is not loaded
    const icons = document.querySelectorAll(".icon")
    icons.forEach((icon) => {
      switch (icon.id) {
        case "email-icon":
          icon.textContent = "📧"
          break
        case "phone-icon":
          icon.textContent = "📱"
          break
        case "linkedin-icon":
          icon.textContent = "🔗"
          break
        case "github-icon":
          icon.textContent = "💻"
          break
      }
    })
  }

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })
})


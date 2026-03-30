// Theme toggle functionality
      const themeToggle = document.getElementById("themeToggle");
      const htmlElement = document.documentElement;

      // Check for saved theme preference or default to 'light'
      const currentTheme = localStorage.getItem("theme") || "dark";
      htmlElement.setAttribute("data-theme", currentTheme);

      themeToggle.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";

        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
      });

      // Article expansion functionality
      const articleHeaders = document.querySelectorAll(".article-header");

      articleHeaders.forEach((header) => {
        header.addEventListener("click", () => {
          const articleItem = header.parentElement;
          articleItem.classList.toggle("expanded");
        });
      });

      const readLessSpans = document.querySelectorAll(".read-less");

      readLessSpans.forEach((span) => {
        span.addEventListener("click", (e) => {
          e.stopPropagation();
          const articleItem = span.closest(".article-item");
          articleItem.classList.remove("expanded");
        });
      });

        // View more/less functionality for sections
        const viewMoreBtns = document.querySelectorAll('.view-more-btn');
        
        viewMoreBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const section = btn.getAttribute('data-section');
                console.log("section: ", section)
                const container = btn.previousElementSibling;
                
                container.classList.toggle('expanded');
                btn.classList.toggle('expanded');
            });
        });

        // Copy email functionality
        const copyEmailBtn = document.querySelector('.copy-email-btn');
        
        if (copyEmailBtn) {
            copyEmailBtn.addEventListener('click', () => {
                const email = 'wwwashutosh225@gmail.com';
                
                navigator.clipboard.writeText(email).then(() => {
                    copyEmailBtn.classList.add('copied');
                    
                    setTimeout(() => {
                        copyEmailBtn.classList.remove('copied');
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy email:', err);
                });
            });
        }
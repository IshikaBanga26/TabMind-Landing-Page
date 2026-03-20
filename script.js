function copyCmd(button, id) {
      const text = document.getElementById(id).innerText;
      navigator.clipboard.writeText(text);

      const copyIcon = button.querySelector(".copy-icon");
      const checkIcon = button.querySelector(".check-icon");

      copyIcon.classList.add("hidden");
      checkIcon.classList.remove("hidden");

      setTimeout(() => {
        copyIcon.classList.remove("hidden");
        checkIcon.classList.add("hidden");
      }, 2000);
    }
    lucide.createIcons();
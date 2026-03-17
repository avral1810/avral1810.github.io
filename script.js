document.body.classList.add("js-enabled");

const emailLink = document.getElementById("email-link");

if (emailLink) {
  const user = "aviralupadhyay18.au";
  const host = "gmail.com";
  emailLink.href = `mailto:${user}@${host}`;
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });
}

var moon = document.getElementById("moon");
moon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        moon.src = "assets/images/sun.png";
    }
    else {
        moon.src = "assets/images/moon.png";
    }
}
// form 
    const form = document.getElementById('myForm');
    const submissionPopup = document.getElementById('hide');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Send form data to PHP script using AJAX (optional, consider server-side processing for complex validation)
      const formData = new FormData(this); // Collect form data
      fetch('../php/data.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text()) // Handle response from PHP
      .then(data => {
        if (data === 'success') {
              Swal.fire({
                title: 'Thank You!',
                text: 'Message Sent Successfully. I will contact you soon.',
                icon: 'success',
                confirmButtonText: 'Cool',
                // customClass: "Custom_btn"
              }); // Show success popup
        } else {
          // Handle submission error (optional, display error message)
          Swal.fire({
            title: 'Oops...',
            text: 'Message is not sent!',
            icon: 'error',
            confirmButtonText: 'Try Agin'
          });
        }
      })
      .catch(error => {
        console.error('Error:', error); // Log errors for debugging
      });
    });

/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    var x = document.getElementById("myNavMenu");
    if (x.className === "nav-menu") {
        x.className += " responsive";
    }
    else {
        x.className = "nav-menu";
    }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};
    function headerShadow() {
        const navHeader = document.getElementById("header");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
            navHeader.style.height = "70px";
            navHeader.style.lineHeight = "70px";
            
        }
        else {
          navHeader.style.boxShadow = "none";
          navHeader.style.height = "90px";
          navHeader.style.lineHeight = "90px";
        }
    }

/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed('.typedText', {
        strings: ["Student", "Designer", "Developer", "Memer Also"],
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
        loop: true
    })

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})
/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})
  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})


/* ----- CHANGE ACTIVE LINK ----- */
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
      const scrollY = window.scrollY

      sections.forEach(current => {
          const sectionHeight = current.offsetHeight,
           sectionTop = current.offsetTop - 50
          sectionId = current.getAttribute('id')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
          }
          else {
              document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
          }
      })
  }

  window.addEventListener('scroll', scrollActive)
  
  
   

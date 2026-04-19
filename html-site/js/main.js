/* ═══════════════════════════════════════════════
   Connect Care Transportation — Main JavaScript
   Vanilla JS, no dependencies
   ═══════════════════════════════════════════════ */

// EmailJS configuration
var EMAILJS_CONFIG = {
  serviceId: 'service_2l35bfk',
  contactTemplateId: 'template_7lsga5j',
  driverTemplateId: 'template_4vtt7ql'
};

document.addEventListener('DOMContentLoaded', function () {

  // ── Lucide Icons ──
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // ══════════════════════════════════════════
  // 1. MOBILE MENU TOGGLE
  // ══════════════════════════════════════════
  var mobileToggle = document.getElementById('mobile-toggle');
  var mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });

    // Close menu when a link inside is clicked
    var menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ══════════════════════════════════════════
  // 2. HERO CAROUSEL (home page)
  // ══════════════════════════════════════════
  var carouselSlides = document.querySelectorAll('.carousel-slide');
  var carouselDots = document.querySelectorAll('.carousel-dot');
  var prevBtn = document.getElementById('carousel-prev');
  var nextBtn = document.getElementById('carousel-next');

  if (carouselSlides.length > 0) {
    var currentSlide = 0;
    var slideCount = carouselSlides.length;
    var autoplayInterval = null;

    function goToSlide(index) {
      // Wrap around
      if (index < 0) index = slideCount - 1;
      if (index >= slideCount) index = 0;

      // Deactivate all slides
      carouselSlides.forEach(function (slide) {
        slide.classList.remove('active');
        // Pause any videos in non-active slides
        var video = slide.querySelector('video');
        if (video) video.pause();
      });

      // Deactivate all dots
      carouselDots.forEach(function (dot) {
        dot.classList.remove('active');
      });

      // Activate target slide
      carouselSlides[index].classList.add('active');
      if (carouselDots[index]) {
        carouselDots[index].classList.add('active');
      }

      // Play video if the active slide contains one
      var activeVideo = carouselSlides[index].querySelector('video');
      if (activeVideo) {
        activeVideo.play().catch(function () {
          // Autoplay may be blocked, that's fine
        });
      }

      currentSlide = index;
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    }

    // Button listeners
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        nextSlide();
        startAutoplay(); // Reset timer after manual nav
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        prevSlide();
        startAutoplay();
      });
    }

    // Dot listeners
    carouselDots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goToSlide(i);
        startAutoplay();
      });
    });

    // Start auto-advance
    startAutoplay();
  }

  // ══════════════════════════════════════════
  // 3. CONTACT FORM (EmailJS)
  // ══════════════════════════════════════════
  var contactForm = document.getElementById('contact-form');
  var formSuccess = document.getElementById('form-success');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var submitBtn = document.getElementById('contact-submit');
      var submitText = document.getElementById('contact-submit-text');
      var errorBox = document.getElementById('form-error');
      if (errorBox) { errorBox.style.display = 'none'; errorBox.textContent = ''; }
      if (submitBtn) submitBtn.disabled = true;
      if (submitText) submitText.textContent = 'Sending...';

      if (typeof emailjs === 'undefined') {
        if (errorBox) { errorBox.textContent = 'Email service unavailable. Please call us instead.'; errorBox.style.display = 'block'; }
        if (submitBtn) submitBtn.disabled = false;
        if (submitText) submitText.textContent = 'Send Message';
        return;
      }

      emailjs.sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.contactTemplateId, contactForm)
        .then(function () {
          contactForm.style.display = 'none';
          formSuccess.style.display = 'block';
          if (typeof lucide !== 'undefined') lucide.createIcons();
        })
        .catch(function (err) {
          console.error('EmailJS error:', err);
          if (errorBox) {
            errorBox.textContent = 'Something went wrong. Please try again or call us directly.';
            errorBox.style.display = 'block';
          }
          if (submitBtn) submitBtn.disabled = false;
          if (submitText) submitText.textContent = 'Send Message';
        });
    });
  }

  // ══════════════════════════════════════════
  // 4. DRIVER REGISTRATION MULTI-STEP FORM
  // ══════════════════════════════════════════
  var registerForm = document.getElementById('driver-register-form');
  var registerSuccess = document.getElementById('register-success');
  var formSteps = document.querySelectorAll('.form-step');
  var stepDots = document.querySelectorAll('.step-dot');
  var stepCircles = document.querySelectorAll('.step-circle');
  var stepLines = document.querySelectorAll('.step-line');
  var stepLabels = document.querySelectorAll('.step-label');
  var btnNext = document.getElementById('btn-next');
  var btnPrev = document.getElementById('btn-prev');
  var btnSubmit = document.getElementById('btn-submit');
  var signInLink = document.getElementById('sign-in-link');

  if (registerForm && formSteps.length > 0) {
    var currentFormStep = 1;
    var totalSteps = formSteps.length;

    // DBS conditional field
    var hasDBS = document.getElementById('hasDBS');
    var dbsNumberGroup = document.getElementById('dbsNumberGroup');
    if (hasDBS && dbsNumberGroup) {
      hasDBS.addEventListener('change', function () {
        dbsNumberGroup.style.display = hasDBS.value === 'yes' ? 'block' : 'none';
      });
    }

    function updateStepUI(step) {
      // Update form steps
      formSteps.forEach(function (el) {
        el.classList.remove('active');
        if (parseInt(el.getAttribute('data-step')) === step) {
          el.classList.add('active');
        }
      });

      // Update step indicator dots
      stepDots.forEach(function (dot) {
        var dotStep = parseInt(dot.getAttribute('data-step'));
        dot.classList.remove('active', 'completed');
        if (dotStep === step) {
          dot.classList.add('active');
        } else if (dotStep < step) {
          dot.classList.add('completed');
        }
      });

      // Update progress circles
      stepCircles.forEach(function (circle) {
        var circleStep = parseInt(circle.getAttribute('data-step'));
        if (circleStep <= step) {
          circle.style.background = 'var(--brand-charcoal)';
          circle.style.color = 'white';
          circle.style.border = 'none';
          circle.style.boxShadow = 'var(--shadow-soft)';
        } else {
          circle.style.background = 'var(--surface)';
          circle.style.color = 'var(--content-muted)';
          circle.style.border = '1px solid var(--edge)';
          circle.style.boxShadow = 'none';
        }
        // Show check icon for completed steps
        if (circleStep < step) {
          circle.innerHTML = '<i data-lucide="check-circle" style="width:20px;height:20px"></i>';
        }
      });

      // Update step lines
      stepLines.forEach(function (line) {
        var lineAfter = parseInt(line.getAttribute('data-after'));
        line.style.background = lineAfter < step ? 'var(--brand-charcoal)' : 'var(--edge)';
      });

      // Update step labels
      stepLabels.forEach(function (label) {
        var labelCircle = label.previousElementSibling || label.closest('div').querySelector('.step-circle');
        // Find the associated step
        var parent = label.parentElement;
        var circle = parent.querySelector('.step-circle');
        if (circle) {
          var labelStep = parseInt(circle.getAttribute('data-step'));
          label.style.color = labelStep <= step ? 'var(--brand-charcoal)' : 'var(--content-muted)';
        }
      });

      // Update nav buttons
      if (btnPrev && signInLink) {
        if (step > 1) {
          btnPrev.style.display = 'inline-flex';
          signInLink.style.display = 'none';
        } else {
          btnPrev.style.display = 'none';
          signInLink.style.display = 'inline';
        }
      }

      if (btnNext && btnSubmit) {
        if (step < totalSteps) {
          btnNext.style.display = 'inline-flex';
          btnSubmit.style.display = 'none';
        } else {
          btnNext.style.display = 'none';
          btnSubmit.style.display = 'inline-flex';
        }
      }

      // If entering step 4 (review), populate review fields
      if (step === totalSteps) {
        populateReview();
      }

      // Re-init Lucide icons for any new icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }

    function populateReview() {
      var firstName = document.getElementById('firstName');
      var lastName = document.getElementById('lastName');
      var email = document.getElementById('email');
      var phone = document.getElementById('phone');
      var city = document.getElementById('city');
      var postcode = document.getElementById('postcode');
      var licenceType = document.getElementById('licenceType');
      var yearsExperience = document.getElementById('yearsExperience');
      var vehicleType = document.getElementById('vehicleType');
      var hasDBS = document.getElementById('hasDBS');

      var nameEl = document.getElementById('review-name');
      var emailEl = document.getElementById('review-email');
      var phoneEl = document.getElementById('review-phone');
      var locationEl = document.getElementById('review-location');
      var licenceEl = document.getElementById('review-licence');
      var experienceEl = document.getElementById('review-experience');
      var vehicleEl = document.getElementById('review-vehicle');
      var dbsEl = document.getElementById('review-dbs');

      if (nameEl) nameEl.textContent = (firstName.value + ' ' + lastName.value).trim() || '-';
      if (emailEl) emailEl.textContent = email.value || '-';
      if (phoneEl) phoneEl.textContent = phone.value || '-';
      if (locationEl) locationEl.textContent = [city.value, postcode.value].filter(Boolean).join(', ') || '-';

      // Use selected option text for selects
      if (licenceEl) licenceEl.textContent = licenceType.selectedOptions[0].text !== 'Select licence type' ? licenceType.selectedOptions[0].text : '-';
      if (experienceEl) experienceEl.textContent = yearsExperience.value ? yearsExperience.selectedOptions[0].text : '-';
      if (vehicleEl) vehicleEl.textContent = vehicleType.value ? vehicleType.selectedOptions[0].text : '-';
      if (dbsEl) dbsEl.textContent = hasDBS.value ? hasDBS.selectedOptions[0].text : '-';
    }

    function validateStep(step) {
      if (step === 1) {
        var firstName = document.getElementById('firstName');
        var lastName = document.getElementById('lastName');
        var phone = document.getElementById('phone');
        if (!firstName.value.trim() || !lastName.value.trim() || !phone.value.trim()) {
          alert('Please fill in your name and phone number before continuing.');
          return false;
        }
      }
      return true;
    }

    // Next button
    if (btnNext) {
      btnNext.addEventListener('click', function () {
        if (!validateStep(currentFormStep)) return;
        currentFormStep++;
        updateStepUI(currentFormStep);
      });
    }

    // Prev button
    if (btnPrev) {
      btnPrev.addEventListener('click', function () {
        if (currentFormStep > 1) {
          currentFormStep--;
          updateStepUI(currentFormStep);
        }
      });
    }

    // Submit button handler (EmailJS)
    function submitRegisterForm(e) {
      if (e) e.preventDefault();

      // Validate consent checkboxes
      var consent1 = document.getElementById('agreeToCriminalCheck');
      var consent2 = document.getElementById('agreeToTerms');
      if (consent1 && !consent1.checked) {
        alert('Please consent to the DBS criminal record check.');
        return;
      }
      if (consent2 && !consent2.checked) {
        alert('Please confirm all information is accurate and agree to terms.');
        return;
      }

      if (btnSubmit) btnSubmit.disabled = true;

      if (typeof emailjs === 'undefined') {
        alert('Email service unavailable. Please call us instead.');
        if (btnSubmit) btnSubmit.disabled = false;
        return;
      }

      // Build template params — match EmailJS template variables
      var params = {
        first_name: document.getElementById('firstName').value,
        last_name: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        postcode: document.getElementById('postcode').value,
        licence_type: document.getElementById('licenceType').value,
        years_experience: document.getElementById('yearsExperience').value,
        vehicle_type: document.getElementById('vehicleType').value,
        has_dbs: document.getElementById('hasDBS').value,
        dbs_number: document.getElementById('dbsNumber') ? document.getElementById('dbsNumber').value : '',
        availability: document.getElementById('availability').value
      };

      emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.driverTemplateId, params)
        .then(function () {
          registerForm.style.display = 'none';
          if (registerSuccess) {
            registerSuccess.style.display = 'block';
            if (typeof lucide !== 'undefined') lucide.createIcons();
          }
        })
        .catch(function (err) {
          console.error('EmailJS error:', err);
          var msg = 'Something went wrong.';
          if (err && err.text) msg += ' (' + err.text + ')';
          else if (err && err.status) msg += ' Status: ' + err.status;
          alert(msg + ' Please call us directly or try again.');
          if (btnSubmit) btnSubmit.disabled = false;
        });
    }

    if (btnSubmit) btnSubmit.addEventListener('click', submitRegisterForm);
    registerForm.addEventListener('submit', submitRegisterForm);
  }

  // ══════════════════════════════════════════
  // 5. SMOOTH SCROLL FOR ANCHOR LINKS
  // ══════════════════════════════════════════
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

});

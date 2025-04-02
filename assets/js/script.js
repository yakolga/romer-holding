document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', checkScroll);
    toggleMobileMenu();

    $('.benefits__inner').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        lazyLoad: 'ondemand',
        variableWidth: true,
    });

    $('.services__wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: true,
                }
            },
            {
              breakpoint: 757,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
            },
        ]
    });

    $('.work__images').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        arrows: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: true,
                }
            },
            {
              breakpoint: 757,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
            },
        ]
    });

    validateForms('.contact__form', 'Please enter your name', 'Please enter your phone number', 'Please enter your E-mail address', 'Please fill in all required fields');

    $('form').submit(function(e) {
        e.preventDefault();
      
        if (!$(this).valid()) {
          return;
        }
      
        var $form = $(this);
        $.ajax({
          type: "POST",
          url: "assets/mailer/smart.php",
          data: $form.serialize()
        }).done(function() {
          $form.find("input").val("");
          $('.contact__success').fadeIn('slow');
      
          setTimeout(function() {
            $('.contact__success').fadeOut('slow');
          }, 10000);
      
          $form.trigger('reset');
        });
        return false;
    });

    AOS.init({
        duration: 1000,
        delay: 300,
        once: true,
    });
});

function checkScroll() {
    const header = document.querySelector('header');
    
    if (window.scrollY > header.offsetHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

function toggleMobileMenu() {
    const hamburger = document.querySelector('.header__hamburger'),
        header = document.querySelector('.header'),
        headerClose = document.querySelector('.header__close');

    hamburger.addEventListener('click', function() {
        header.classList.add('--open');
    });

    headerClose.addEventListener('click', function() {
        header.classList.remove('--open');
    });

    const links = document.querySelectorAll('.header__nav a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            header.classList.remove('--open');
        });
    });
}

function validateForms(form, name, phone, email, privacypolicy) {
    $(form).validate({
    rules: {
    name: {
        required: true,
        minlength: 2
    },
    phone: "required",
    email: {
        required: true,
        email: true
    },
    privacypolicy: "required"
    },
    messages: {
      name: name,
      phone: phone,
      email: email,
      privacypolicy: privacypolicy
    }
  });
};
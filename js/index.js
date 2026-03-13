$(document).ready(function () {
    var showhideElements = document.querySelectorAll("a.showhide");
    // Add the 'aria-label' attribute to each selected element
    showhideElements.forEach(function(element) {
      element.setAttribute("aria-label", "Your desired label");
    });


    function setupFormValidation(formSelector) {
      $(formSelector).validate({
        submitHandler: function (form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';

          $(form_result_div).remove();

          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          
          $(form).ajaxSubmit({
            dataType: 'json',
            success: function (data) {
              if (data.status == 'true') {
                $(form).find('.form-control').val('');
                // Redirect to thanks.php
                window.location.href = 'thanks.php';
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function () {
                $(form_result_div).fadeOut('slow')
              }, 6000);
            }
          });
        }
      });
    }
  
    // Setup form validation for different forms
    setupFormValidation("#callback_form2");
    setupFormValidation("#callback_form");
    setupFormValidation("#contact_form");
  
    // Owl Carousel
    var owl = $(".owl-carousel-1col").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        margin: 0,
        autoplay: true,
        lazyLoad: true,
        smartSpeed: 1000,
        autoplayTimeout: 8000,
        autoplaySpeed: true,
        autoplayHoverPause: true,
     });
  
     var dots = $(".owl-carousel-1col .owl-dot");
        dots.each(function (index) {
            $(this).attr({
            'aria-label': 'Go to slide ' + (index + 1),
            'tabindex': '0',
            });
    
            $(this).on('keydown', function (e) {
            if (e.key === 'Enter' || e.key === 'Spacebar' || e.key === ' ') {
                owl.trigger('to.owl.carousel', index);
                e.preventDefault();
            }
            });
        });
});

$(document).ready(function () {
        if(window.innerWidth > 768){
        const cards = document.querySelectorAll('.process-card');
        const dots = document.querySelectorAll('.client-dot');
        const titles = document.querySelectorAll('.proc-title');
        let currentIndex = 0;
        let intervalDuration = 5000; // 5 seconds

    
        const cardContents = [
            {
                title: "<b>Client<br> Discovery</b>",
                description: "We hold a series of on-boarding calls to become a seamless extension of your team. SALT works as the client—using your company name, and armed with knowledge to accurately represent your business.",
                imgSrc: "images/process/wb/wb-client.png"
            },
            {
                title: "<b>List<br> Building</b>",
                description: "Qualified, dedicated humans at SALT use their expertise and knowledge of world class tools to create a custom prospect list.",
                imgSrc: "images/process/wb/wb-list.png"
            },
            {
                title: "<b>Account<br> Qualification</b>",
                description: "SALT uses our unique categorization system to rapidly prioritize all of the prospects we have added to your list.",
                imgSrc: "images/process/wb/wb-account.png"
            },
            {
                title: "<b>Contact<br> Verification</b>",
                description: "After the account is scored in the SALT qualification process, we need to identify key people with decision making authority.",
                imgSrc: "images/process/wb/wb-contact.png"
            },
            {
                title: "<b>Nurturing<br> Relationship</b>",
                description: "SALT creates trust by exchanging information of value over time. We nurture decision making contacts inside qualified accounts until we find pain, interest or need (PIN).",
                imgSrc: "images/process/wb/wb-relationship.png"
            },
            {
                title: "<b>Opportunity<br> Identification</b>",
                description: "SALT has done everything we can and have set up a Qualified First Time Appointment with the decision maker.",
                imgSrc: "images/process/wb/wb-opportunity.png"
            },
        ]

        function updateDots(index)
        {
        // Remove active class from all dots and reset cards to default images
        dots.forEach(dot => dot.classList.remove('active-dot'));
        titles.forEach(title => title.classList.remove('active-title'));

        cards.forEach(card => {
            const img = card.querySelector('img');
            // Reset the image src to the default source
            img.src = img.getAttribute('data-default-src');
            card.classList.remove('active-card');
        
        });
        // Add active class 
        if (cards[index]) {
            const activeImg = cards[index].querySelector('img');
            dots[index].classList.add('active-dot');
            cards[index].classList.add('active-card');
            titles[index].classList.add('active-title');
            // Set the image src to the active source
            activeImg.src = activeImg.getAttribute('data-active-src');

            const content = cardContents[index];
            const contentTitle = document.querySelector('.card-content .col-md-2 h4');
            const contentDescription = document.querySelector('.card-content .col-md-8 p');
            const contentImage = document.querySelector('.card-content .col-md-2 img');

            contentTitle.innerHTML = content.title;
            contentDescription.innerHTML = content.description;
            contentImage.src = content.imgSrc;
        }
        }

        function scrollDown() {
            currentIndex = (currentIndex + 1) % cards.length;
            updateDots(currentIndex);
        }

        function startAutoScroll() {
            setInterval(scrollDown, intervalDuration);
        }

        cards.forEach(function (card, index) {
            card.addEventListener('click', function () {
                intervalDuration = 0;
                currentIndex = index;
                updateDots(currentIndex);
            });
        });
        startAutoScroll();
    }
});
  
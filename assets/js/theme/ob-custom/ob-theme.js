/*eslint-disable*/
import instafeed from 'instafeed.js/instafeed.min';


export default function () {

  /* ==== Search Close Script ==== */
  $(document).on('click', '.modal-close', function () {
    $('.quickSearchResults').html('');
    $("[data-search-quick]").val("");
  });

  /* ==== Search toggle in mobile ==== */
    $('.mobileView.search a').click(function () {
      $('.dropdown--quickSearch').slideToggle();
    });

    /* ==== User toggle in mobile ==== */
      $('.mobileView.user a').click(function () {
        $('.navPages-list--user.desktop').slideToggle();
      });

      /* ==== Footer toggle in mobile ==== */
    $(".footer-info-col").each(function () {
      $(this).find("h5:first").click(function () {
        if ($(window).width() <= 767) {
          $(this).toggleClass("boxOpen").next("ul").slideToggle(300);
        }
      });
    });

    /* ==== sidebar toggle in mobile ==== */
  $(".page-sidebar").each(function () {
    $(this).find(".sidebarBlock .sidebarBlock-heading").click(function () {
      if ($(window).width() <= 767) {
        $(this).toggleClass("boxOpen").next("ul").slideToggle(300);
      }
    });
  });

  /* ==== Instafeed Script ==== */
  if ($("#instafeed").length) {
    var userFeed = new instafeed({
      get: 'user',
      userId: $("#instafeed").attr("data-id"),
      accessToken: $("#instafeed").attr("data-key"),
      resolution: "low_resolution",
      limit: "20",
      template: '<div class="insta-item-wrap"><div class="insta-item"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></div></div>',
      after: function() {
        $('#instafeed').slick({
          dots: false,
          infinite: true,
          pauseOnFocus:false,
          slidesToShow: 5,
          arrows: false,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [{
              breakpoint: 1901,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5
              }
            },
            {
              breakpoint: 1651,
              settings: {
                slidesToShow: 5,
                slidesToScroll:5
              }
            },
            {
              breakpoint: 1441,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5
              }
            },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 569,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 481,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        });
      }
    });
     if($("#instafeed").length && $("#instafeed").attr("data-id")!="" && $("#instafeed").attr("data-key")!=""){
        userFeed.run();
      }
  }

}
/*eslint-enable*/

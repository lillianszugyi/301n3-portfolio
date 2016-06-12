var projectView = {};

projectView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  })
};

projectView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();

      $('article[data-category=' + $(this).val() + ']').fadeIn('slow');
    } else {
      $('article').show();
      $('article.template').hide();
    };
  });
};


projectView.handleMainNav = function() {
  $('.main-nav').on('click', 'li', function() {
    $('.tab-content').fadeOut();
    $("#" + $(this).data('content')).fadeIn('slow');
  });

  $('.main-nav .navBlock:first').click();
};

projectView.hamburgerToggle = function() {
  $('.icon-menu').on('click', function() {
    $('nav ul').toggle('slow');
  });
  $(window).on('resize', function() {
    if ($(window).width() >= 600) {
      $('nav ul').show();
    } else {
      $('nav ul').hide();
    }
  });
};

  $(document).ready(function(){
    projectView.populateFilters();
    projectView.handleCategoryFilter();
    projectView.handleMainNav();
    projectView.hamburgerToggle();
  });

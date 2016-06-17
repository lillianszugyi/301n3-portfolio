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
  });
};

projectView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();

      $('article[data-category="' + $(this).val() + '"]').fadeIn('slow');
    } else {
      $('article').show();
      // $('article.template').hide();
    }
  });
};


projectView.handleMainNav = function() {
  $('.main-nav').on('click', 'li', function(e) {
    $('.tab-content').fadeOut();
    $('#' + $(this).data('content')).fadeIn('slow');
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

projectView.readMore = function() {
  $('.project-body *:nth-of-type(n+2)').hide();
  $('#projects').on('click', 'article > a', function(e){
    e.preventDefault();
    $(this).parent().find('.project-body').children().show();
    $(this).hide();
  });
}
$(document).ready(function(){
  projectView.populateFilters();
  projectView.handleCategoryFilter();
  projectView.handleMainNav();
  projectView.hamburgerToggle();
  projectView.readMore();
});

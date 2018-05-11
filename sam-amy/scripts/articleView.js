'use strict';

let articleView = {};

// DONE: Where possible, refactor methods into arrow functions, including the document.ready() method at the bottom.

// COMMENTED: How do arrow functions affect the context of "this"? How did you determine if a function could be refactored?
// Arrow functions allow bubbling of the information. However, it will not allow for the use of contextual "this" inside the function. Any function that needs to refer to "this" needs to use a different form of writing the function.


articleView.populateFilters = () => {
  //The following function cannot be refactored due to the use of contextual this.
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      let val = $(this).find('address a').text();
      let optionTag = `<option value="${val}">${val}</option>`;

      if ($(`#author-filter option[value="${val}"]`).length === 0) {
        $('#author-filter').append(optionTag);
      }

      val = $(this).attr('data-category');
      optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#category-filter option[value="${val}"]`).length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

// articleView.populateFilters = function() {
//   $('article').each(function() {
//     if (!$(this).hasClass('template')) {
//       let val = $(this).find('address a').text();
//       let optionTag = `<option value="${val}">${val}</option>`;

//       if ($(`#author-filter option[value="${val}"]`).length === 0) {
//         $('#author-filter').append(optionTag);
//       }

//       val = $(this).attr('data-category');
//       optionTag = `<option value="${val}">${val}</option>`;
//       if ($(`#category-filter option[value="${val}"]`).length === 0) {
//         $('#category-filter').append(optionTag);
//       }
//     }
//   });
// };

articleView.handleAuthorFilter = () => {
  //The following function cannot be refactored due to the use of contextual this.
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-author="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = () => {
  //The following function cannot be refactored due to the use of contextual this.
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-category="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = () => {
  //The following function cannot be refactored due to the use of contextual this.
  $('nav').on('click', '.tab', function(e) {
    e.preventDefault();
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn();
  });

  $('nav .tab:first').click();
};

articleView.setTeasers = () => {
  $('.article-body *:nth-of-type(n+2)').hide();
  //The following function cannot be refactored due to the use of contextual this.
  $('article').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    if ($(this).text() === 'Read on →') {
      $(this).parent().find('*').fadeIn();
      $(this).html('Show Less &larr;');
    } else {
      $('body').animate({
        scrollTop: ($(this).parent().offset().top)
      },200);
      $(this).html('Read on &rarr;');
      $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
    }
  });
};

$(document).ready(function() {
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
});

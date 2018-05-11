'use strict';

let articles = [];

function Article (rawDataObj) {
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.body = rawDataObj.body;
  this.publishedOn = rawDataObj.publishedOn;
}

Article.prototype.toHtml = function() {
  // DONE: Use Handlebars to render your articles. Get your template from the DOM and "compile" your template with Handlebars.
  let template = $('#article-template').html();
  let templateRender = Handlebars.compile(template);
  return templateRender(this);

  // Neighborhood.prototype.toHtml = function() {
  //   // 1. Get the template from the HTML 
  //   let template = $('#neighborhood-template').html();
  //   // 2. Use Handlebars to compile the HTML, returns a function
  //   let templateRender = Handlebars.compile(template);
  //   // 3. Return the compiled HTML
  //   return templateRender(this);
  // }





  // REVIEWED: If your template will use properties that aren't on the object yet, add them.
  // Since your template can't hold any JS logic, we need to execute the logic here.
  // The result is added to the object as a new property, which can then be referenced by key in the template.
  // For example, you might want to display how old a post is, or say "(draft)" if it has no publication date:
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);


  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';

  // REVIEWED: The ternary operator above accomplishes this same logic.
  // if(this.publishedOn) {
  //   this.publishStatus = `published ${this.daysAgo} days ago`;
  // } else {
  //   this.publishStatus = '(draft)';
  // }

  // DONE: Use the method that Handlebars gave you to return your filled-in html template for THIS article.

  rawdata.forEach(articleObject => articles.push(new Article(articleObject)))

  // neighborhoodDataSet.forEach(neighborhoodObject => neighborhoods.push(new Neighborhood(neighborhoodObject)))

};

// COMMENTED: Why are there parentheses around "(a,b)" in the .sort() method, but not around the "articleObject" or "article" arguments in the .forEach() methods?
// Sort performs an action using two parameters, where the forEach method only has one parameter that it uses - hence the for<EACH>, implying each <ONE> at a time.  
rawData.sort((a,b) => {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(articleObject => {
  articles.push(new Article(articleObject));
});

articles.forEach(article => {
  $('#articles').append(article.toHtml());
});

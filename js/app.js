/*!
 * fullPage 2.8.2 - Menu
 * https://github.com/alvarotrigo/fullPage.js
 */
$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#ccddff', 'whitesmoke'],
    anchors: ['one', 'two', 'three', 'four', 'five'],
    menu: '#menu',
    continuousVertical: true,
    responsiveHeight: 600
  });
});

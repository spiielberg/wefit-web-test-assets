$(document).ready(function() {
  // Menu
  $('[role="group"]').removeClass('btn-group-vertical')
  
  // Header
  $('.row > .col-lg-12 > .jumbotron').addClass('text-right bg-secondary text-white')
  
  $('[role="button"]').removeClass('btn-primary').addClass('btn-success')

  // Cards
  const cards = $('.row > .col-lg-3')

  const newOrder = ['Natureza', 'Animais', 'Pessoas', 'Tecnologia']

  newOrder.forEach(function(title) {
      const card = cards.filter(function() {
          return $(this).find('.card-title').text() === title
      })

      card.appendTo(card.parent())

      if (title === 'Animais') {
          card.find('.btn').removeClass('btn-primary').addClass('btn-success')
      }
  })
  
  // List
  $('.list-group').append('<li class="list-group-item">Quarto item</li>')

  $('.list-group').append('<li class="list-group-item">Quinto item</li>')

  $('.list-group-item.active').removeClass('active')

  $('.list-group-item:contains("Quarto item")').addClass('active')
})

$('#jobSearch').submit((event) => {
  event.preventDefault()
  $.ajax({
    method: 'POST',
    url: `/search?q=${$('#searchQuery').val()}`,
  }).then((response) => {
    $('#resultsContainer').html(response)
  })
})

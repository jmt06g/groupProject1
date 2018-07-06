function createButton() {
  $('#map').empty()
  for (let i = 0; i < jobs.length; i++) {
    const a = $('<button>')
    a.attr('data-jobs', jobs[i])
    a.text(jobs[i])
    a.addClass('jobButton')
    a.addClass('btn btn-outline-secondary')
    $('#map').append(a)
  }
}


$('#jobButton').on('click', () => {
  let data = []
  $.ajax({
    method: 'GET',
    dataType: 'jsonp',
    url: 'https://jobs.github.com/positions.json?search=code&page=1',
  }).then((response) => {
    data = response
    console.log(data)
  })
  console.log(data[0])
})

$('#submitPost').on("click", () => {
    console.log('clicked')
    let title = $('#title').val()
    let body = $('#body').val()
    let id = JSON.parse(window.localStorage.user).id
  //  console.log(title, body, id)
    $.post('api/posts', {
        userId: id,
        title: title,
        body: body
    },(post) => {
        console.log('done')
        window.alert('Post ' + post.title + ' added successfully !!')
        $('#content').load('/components/all-posts.html')
    })
})


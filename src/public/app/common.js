$(() => {
    $('#navbar').load('../components/navbar.html', loginIfNeeded) // this callback function is added because earlier it was found that
                                                                //it takes more time to load and by then loginifneeded() is run
    $('#footer').load('../components/footer.html')
    $('#content').load('../components/all-posts.html')
   
   
})

function loginIfNeeded(){
    let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null;
    console.log(currentUser);
    if (!currentUser){
        $.post('/api/users', {}, (user) => {
            console.log(user)
            if (user){
                console.log('registered in as ', user.username)
                window.localStorage.user = JSON.stringify(user)
            }
        })
    }
    else{
        console.log('resuming session as', currentUser.username)
    }
    $('#nav-username').text(currentUser.username)
}

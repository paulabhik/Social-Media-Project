let navLinks = $('.navbar-nav .nav-link')
console.log(navLinks)
navLinks.click((ev) => {
    console.log($(ev.target).attr('data-component'))
    let componentUrl = `/components/${$(ev.target).attr('data-component')}.html`
    console.log(componentUrl)
    $('#content').load(componentUrl)
})
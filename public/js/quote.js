$('document').ready(() => {
    const socket = io()

    socket.on('fserver', ({quote,id}) => {
        console.log(quote,id)
        $('#quotes').append(`<blockquote id=${id}><h2>${quote}</h2></blockquote>`)
    })
    
    socket.on('color', ({color,id}) => {
        const key = 'background-color'
        console.log(color,id)
        $(`#${id}`).css(key,color)
    })
})
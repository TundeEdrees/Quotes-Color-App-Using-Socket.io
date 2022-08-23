$('document').ready(() => {
	
    const socket = io()

    socket.on('welcome', (data) => {
        console.log(data)
    })
		
	  $('#dform').submit( (e) => {

		  quote = $('#quotebox').val()
		  color = $('#color').val()

		  const id = Math.floor(Math.random() * 100000000000)
		  console.log(quote,color,id); 

		  //Emitting the event and passing the quote to the server
		  socket.emit('quote' , {quote,id} )
		  $('#quotebox').val('');

		  socket.emit('col' , {color,id} )
		  $('#color').val('');
	  })
	})
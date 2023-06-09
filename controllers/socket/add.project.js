const Lists = require('../../models/lists')

module.exports = function (socket, io) {

    socket.on('IN_TaskAdd', async (data) => {

        try {

            const name = data.name
            const id = data._id
    
            if (!name) {
                io.to(socket.decoded_token.id).emit('OUT_Message', {
                    message: 'Name empty'
                })
                return
            }
    
            const list = new Lists({
                _id: id,
                name: name,
                author: socket.decoded_token.id,
            })

            await list.save()

            io.to(socket.decoded_token.id).emit('OUT_TaskAdd', list)

        } catch (error) {
            io.to(socket.decoded_token.id).emit('OUT_Message', {
                message: 'Server error: ' + error.message
            })
        }

    })

}
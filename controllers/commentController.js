const { Comment } = require("../models");

const commentController = {

    store: async (req, res) => {
        //const { idPost } = req.params;
        const { idPost, description } = req.body;
        const { user } = req.session;
        const comment = await Comment.create({
            description,
            user_id: user.id,
            publication_id: idPost,
            create_at: new Date(),
            update_at: new Date(),
        });
        if (!comment) {
            console.log("Erro ao comentar");
        }
        return res.redirect("/home");
    },

}

module.exports = commentController;

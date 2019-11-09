module.exports = {
    CreatePost: async (root, parameter, context) => {
        const {
            input: {
                message
            }
        } = parameter

        const {
            Post
        } = context

        try {
            const thePost = await new Post({ message }).save()

            return true
        } catch (err) {
            return false
        }
    }
}
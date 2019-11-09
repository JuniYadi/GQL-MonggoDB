module.exports = {
    getPosts: async (root, parameter, context) => {
        const {
            input: {
                page,
                limit
            },
            order
        } = parameter
        
        const {
            Post
        } = context

        const thePost = await Post.paginate({}, {
            page,
            limit
        })

        return {
            posts: thePost.docs,
            total: thePost.total
        }
    }
}
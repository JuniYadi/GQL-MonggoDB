# GQL + MongoDB

## Playground

### Query
```
{
  getPosts (input:{page: 1, limit:10}, order:"desc") {
    posts {
      message
    },
    total
  }
}
```

### Mutation
```
mutation {
  CreatePost(input: {message: "oke"})
}
```
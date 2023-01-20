# graphql-server-example
Experimenting with GraphQL and Apollo Server

### How to run

```npm install && npm run start```

### Query Examples

```
query Books {
  books {
    id
    title
    author {
      id
      name
    }
  }
}

query Book {
  book(id: "1") {
    id
    title
    author {
      id
      name
    }
  }
}
```

### Team
Thanks to [@andreribeirosilva](https://github.com/andreribeirosilva) for contributing.

Clicky plugin for GitBook
==============

You can use install it via **NPM**:

```shell
$ npm install gitbook-plugin-clicky
```

And use it for your book in the book.json:

```json
{
    "plugins": ["clicky"]
}
```

You can set the clicky Site ID ID using the plugins configuration in the book.json:

```json
{
    "plugins": ["clicky"],
    "pluginsConfig": {
        "clicky": {
            "site_id": "XYXYXY"
        }
    }
}
```



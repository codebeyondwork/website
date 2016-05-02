# Today I Learned (til)

## 2016-05-02

Seems that POSTing to a static page on an nginx server results in a 405 error. The following should be added in the `server` block of the nginx configuration for the site. I placed this below the `server_name` directive:

```bash
error_page 405 =200 $uri
```

This now allows posting to static pages, as is evident in the first iteration of [FV](//codebeyond.work/fv/).

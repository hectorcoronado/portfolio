# Portfolio

#### From the terminal, run:

```
$ yarn run build
```

...which would be equivalent to running the following, if Webpack were installed globally as opposed to locally:

```
$ webpack --watch
```

#### ...and to fire up a barebones dev server:

```
$ yarn run dev-server
```

#### deployment:
```
$ npm run build
```

##### ...and then from the public folder
```
$ surge --domain https://hectorcoronado.codes
```

#### https/certbot/letsencrypt/surge:

https://community.letsencrypt.org/t/adding-certbot-ssl-certification-to-custom-domain-on-surge/88241

https://blogs.msdn.microsoft.com/mihansen/2018/03/15/creating-wildcard-ssl-certificates-with-lets-encrypt/

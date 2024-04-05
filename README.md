

# Running server

```
yarn run server
```

This will compile server and run it on bare node locally. 


# Running app

```
yarn run android
```

Sparks up expo process.


# Snags

## Why the hell don't files outside project root reload?

I don't know. `watchman` is definitely seeing the issues. For now, it seems
that reloading in the CLI works okay. Hit `r` for great win.

## Client doesn't talk to server yet :)

`connect_error due to xhr poll error`. Permissions?

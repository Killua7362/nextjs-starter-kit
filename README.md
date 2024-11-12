# Super important

Be sure to uncomment .env\* in .gitignore

# Steps to use this kit

- Install all the libraries

```
pnpm install --force
```

- Generate auth key and add it to AUTH_SECRET env variable

```
npx auth secret
```

- Run this command to run postgresql in docker locally(Or you can connect your own db then change env variables accordingly)

```
docker-compose up
```

- Goto https://console.cloud.google.com/ and create a project and generate OAuth credentials

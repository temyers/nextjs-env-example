Simple test to demonstrate environment variables with NextJS

## Scenario: Use .env file only

Setup:
```
yarn build
yarn start
```

Output:
```
curl http://localhost:3000/
...whut?<br/>Hello<!-- --> <!-- -->World...
```

```
curl http://localhost:3000/api/hello
{"name":"Secret Squirrel"}
```

## Scenario: Override environment variable in .env

Setup:
```
export WORD=sausages
yarn build
yarn start
```

Output:
```
curl http://localhost:3000/api/hello
{"name":"Secret sausages"}
```

## Scenario: Override browser variable in .env
Setup:
```
export NEXT_PUBLIC_BAR=Cabbages
yarn build
yarn start
```

Output:
```
curl http://localhost:3000/
...whut?<br/>Hello<!-- --> <!-- -->Cabbages...
```
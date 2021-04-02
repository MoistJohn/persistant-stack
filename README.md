# persistant-stack
## Usage
To start the local node server, use CLI command
```
npm run serve
```
## API: Push value into the stack
Method: ```POST```  
URL: ```http://localhost:3000/```  
Body: ```{ value: <value> }```

cURL example:
```
> curl -X POST -d "value=yonatan" http://localhost:3000/
Yonatan
```

## API: Pop value from stack
Method: ```GET```  
URL: ```http://localhost:3000/```

cURL example:
```
(assuming top of stack is "Jimmy")

> curl http://localhost:3000/
Jimmy
```

## API: Peek value from stack
Method: ```GET```  
URL: ```http://localhost:3000/peek```

cURL example:
```
(assuming top of stack is "Jimmy")

> curl http://localhost:3000/peek
Jimmy
```

## API: Revert the stack
Method: ```PUT```  
URL: ```http://localhost:3000/revert```

cURL example:
```
> curl -X PUT http://localhost:3000/revert
Stack was reverted
```
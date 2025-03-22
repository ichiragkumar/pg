



How to run postgres locally on docker machine

```bash
docker run -d --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres
```


How to connect to postgres locally 
```bash
psql -h localhost -p 5432 -U postgres   
```





How to assign custom postgres database host and it's password
```bash
docker run --name my-postgres \
  -e POSTGRES_USER=mycustomuser \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -d -p 5432:5432 postgres
```


How to connect to Database to this prismA


```bash

DATABASE_URL="postgresql://postgres:password@localhost:5432/todoapp"
where, 
    
```
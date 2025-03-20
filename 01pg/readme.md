# 🚀 **PostgreSQL Setup with Docker**  

## 🐳 **Run PostgreSQL with Docker Locally**  
Start a PostgreSQL container using Docker:  
```bash
docker run --name my-postgres \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -d -p 5432:5432 postgres
```

---

## 🍺 **Install `psql` CLI (if not installed)**  
### For macOS (using Homebrew):  
1. Install `libpq`:
```bash
brew install libpq
```

2. Link `libpq` to make `psql` available in your shell:  
```bash
brew link --force libpq
```

3. Verify installation:  
```bash
psql --version
```

---

## 🔌 **Connect to PostgreSQL**  
Connect to the running PostgreSQL container using `psql`:  
```bash
psql -h localhost -p 5432 -U postgres
```

- **Host**: `localhost`  
- **Port**: `5432`  
- **Username**: `postgres`  
- **Password**: `mysecretpassword`  

---

## 🏆 **Example Node.js Connection**  
Connect from a Node.js app using the `pg` library:  

```typescript
import { Client } from 'pg';

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'mysecretpassword',
  database: 'postgres',
});

async function connect() {
  await client.connect();
  console.log('✅ Connected to PostgreSQL');
}

connect();
```

---

✅ **PostgreSQL is now up and running!** 😎

### **Command:**  
```bash
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

### **Explanation:**
1. **`docker run`**  
   This command creates and starts a new container.

2. **`--name my-postgres`**  
   Assigns the name `my-postgres` to the container.  
   - If this option is not provided, Docker assigns a random name.

3. **`-e POSTGRES_PASSWORD=mysecretpassword`**  
   Sets an environment variable (`POSTGRES_PASSWORD`) to `mysecretpassword`.  
   - This sets the password for the default `postgres` user created by the container.

4. **`-d`**  
   Runs the container in **detached mode** (in the background).  
   - Without `-d`, the container will run in the foreground.

5. **`-p 5432:5432`**  
   Maps port `5432` on the host to port `5432` in the container.  
   - `5432` is the default port for PostgreSQL.  
   - Format: `-p <host_port>:<container_port>`

6. **`postgres`**  
   Specifies the Docker image to use (`postgres`).  
   - If the image is not available locally, Docker pulls it from Docker Hub.

---


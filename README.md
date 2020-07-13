### cotabox's full-stack challenge

_This repository was created to store the code for the Cotabox's full-stack challenge_

---

---

### Environment

    Prerequisites:
    	- Docker and docker compose installed in your environment

    Docker containers:
    	- Mongo express
    	- Mongo
    	- Node
    	- Apache

#### :zap: **How to up the Containers?**

:one: Get the your local ip. For that, open your terminal and type this line.

    on linux: ifconfig
    on Windows: ipconfig

:two: Copy your local ip and paste to the "local_ip" value in the **./backend/configs/global.config.json**

    {
      "local_ip": <your_local_ip>
    }

:three: After that, navigate to the project's **root** folder and execute the following command in your terminal:

    sudo docker-compose up --build

    **ps:** Is necessary execute it as super user because will be manipulate folders inside the containers_

#### :zap: **How to create a font-end build**

:first: Navigate to the front-end folder:

    cd ./frontend

:second: Create the React's build bundle and move it to web-server:

    yarn build  &&  mv build ../webserver/public_html/challenge

    **ps:** If you have already gone through this step, be sure to remove the folder ./webserver/public_html/challenge -> rm -r ./webserver/public_html/challenge

---

With that, your api should be running at **http://localhost:3333** and the FRONTEND deployed at **http://localhost/challenge**

###### _extra features_

- Mongo express running at **http://localhost:8081**

---

### Back-end

    Data base: MongoDB

    Deploy with Docker and Docker Compose

    Write with NodeJS using express

    Features:
    	- Authentication routes with sign-up and login
    	- Json Web Token to authenticate requests
    	- CRUD for the People's Collection

    Main Libraries:
    	- express: REST environment
    	- jsonwebtoken: Handle JWT
    	- bcryptjs: encryption
    	- body-parser: Manipulate the requests bodies
    	- cors: enable CORS
    	- express-rate-limit: handle limit rate of requests by IP
    	- helmet: HTTP security
    	- mongoose: Handle MongoDB

---

### Fron-end

    Write with ReactJS

    Features:
    	- Authentication screens with sign-up and login
    	- Log-out
    	- Table with the people's list
    	- Graph with the people's informations
    	- CRUD for the People's Collection
    	- Form error messages
    	- Form validation

    Main Libraries:
    	- Unform: Form validation
    	- Axios: Http requests
    	- Redux and react-redux: global state management
    	- styled-components: creation of stylized components with CSS

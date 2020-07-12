### cotabox's full-stack challenge


_This repository was created to store the code for the Cotabox's full-stack challenge_  
  
---
---
  
  
### Backend

	
	
	pre-requisites:  
		- Docker and docker compose installed in your environment
	
	Data base: MongoDB
	
	Deploy with Docker and Docker Compose
	
	Docker containers:  
		- Mongo express 
		- Mongo
		- Node
	
	Features:
		- Authentication routes with signup and signin
		- Json Web Token to authenticate requests
		- CRUD for the People's Collection
	
	

	
**How to up the local server?**


:one:  Get the your local ip. For that, open your terminal and type this line.

	on linux: ifconfig
	on Windows: ipconfig


:two:  Copy your local ip and paste to the "local_ip" value in the **./backend/configs/global.config.json**

	{
	  "local_ip": <your_local_ip>
	}


:three:  After that, navigate to the folder **./backend** and execute the following command in your terminal:

	docker-compose up --build
  

With that, your api should be running at **http://localhost:3333**

---

###### _extra features_
- Mongo express running at **http://localhost:8081**

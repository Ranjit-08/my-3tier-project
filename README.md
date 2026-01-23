# 3-Tier Web Application (Frontend + Backend + RDS)

This project demonstrates a **three-tier architecture** using:

- **Frontend** (Static UI served by Nginx)
- **Backend API** (Node.js + Express)
- **Database** (AWS RDS MySQL)

This project is designed for learning and interview purposes, and it can be extended to Docker, Terraform, CI/CD, and AWS ECS.

---

## 🏗 Architecture
Frontend (Nginx)
|
v
Backend (Node.js + Express)
|
v
Database (AWS RDS MySQL)


---

## ✅ Features

- Add user (name + email)
- View user list
- Delete user
- Simple REST APIs
- Backend connected with AWS RDS MySQL
- Frontend served using Nginx

---

## 📁 Project Structure

my-3tier-project/
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
└── backend/
├── server.js
├── package.json
└── package-lock.json


---

## 🔧 Backend Setup

### 1. Install Dependencies
install git , mariadb , nodejs , 
# nodejs
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
# git 
yum install git -y 
# mariadb 
yum install mariadb105-server -y
# rds connecction
mysql -h database-1.cwv0y4skwfjn.us-east-1.rds.amazonaws.com -u admin -p
Enter password: 

inside sql

- CREATE DATABASE three_tier_db;
- USE three_tier_db;
-  CREATE TABLE users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100)
   );
- SELECT * FROM users;
- exit 

# git clone https://github.com/Ranjit-08/my-3tier-project.git
cd backend/
npm install

# Update the MySQL connection details in server.js:
# node server.js
- sudo npm install pm2 -g
- pm2 start server.js
- pm2 save
- pm2 startup

### connect frontend #########

- sudo yum install nginx -y
- sudo systemctl start nginx
- cd /usr/share/nginx/html
- rm -rf *
- install git
- git clone
- sudo mv my-3tier-project/* .
- rm -rf my-3tier-project backend/
- sudo mv frontend/* .
- systemctl restart nginx


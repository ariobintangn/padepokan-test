1. Lakukan npm i 
2. Pastikan config pada './config/config.json telah sesuai', disarankan menggunakan setting seperti ini:
            {
        "development": {
            "username": "postgres",
            "password": "postgres",
            "database": "padepokan_test",
            "host": "127.0.0.1",
            "dialect": "postgres"
        },
        "test": {
            "username": "root",
            "password": null,
            "database": "database_test",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "production": {
            "username": "root",
            "password": null,
            "database": "database_production",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
        }

3. lakukan npx sequelize db:create
4. lakukan npx sequelize db:migrate
5. lakukan npx sequelize db:seed:all
6. lakukan koneksi dengan client
7. gunakan perintah "npx nodemon app.js" pada CLI untuk menjalankan Server
8. pastikan port berjalan pada http://localhost:4002
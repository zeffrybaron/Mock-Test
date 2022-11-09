1. Apakah kegunaan JSON pada REST API ?
    - Answer:
    JSON (JavaScript Object Notation) adalah sebuah format data yang digunakan untuk pertukaran dan penyimpanan data. 
    kegunaan JSON pada REST API adalah menyediakan data biasanya dalam format JSON untuk di konsumsi oleh aplikasi lainnya (client).

2. Jelaskan bagaimana REST API bekerja ?
    - Answer:
    Dalam RESTful application akan ada 2 sisi yaitu REST Server dan REST Client.
    1. REST server adalah pihak yang menyediakan data 
    2. REST Client adalah pihak yang melakukan request ke REST Server. 
    
    Cara kerja REST API adalah REST client akan mengakses data/resource ke REST server dimana masing-masing resource atau data tersebut dibedakan oleh sebuah global ID atau URIs (Universal Resource Identifiers).
    Data yang diberikan oleh REST server itu bisa berupa format text, JSON atau XML. dan yang paling populer dipakai saat ini adalah format JSON karena lebih mudah dibaca secara umum. Pertama harus ada sebuah REST server yang akan menyediakan resource/data. Sebuah REST client akan membuat HTTP request ke server melalui sebuah global ID atau URIs dan server akan merespon dengan mengirimkan balik sebuah HTTP response sesuai yang diminta client. 
    # componen dari HTTP Request
     1. Method GET, POST, PUT, DELETE sesuai dengan tugas masing-masing
     2. URI untuk mengetahui lokasi data diserver
     3. Request Header, berisi metadata seperti Authorization, tipe client dan lain.
     4. Request Body, data yang diberikan client ke server seperi URI params.
    # componen dari HTTP Response
     1. Response code, status server terhadap request yang diminta seperti 200, 401, 404 dan lainnya.
     2. HTTP version
     3. Response Header yang berisi meta data seperti contect type, cache tag dan yang lainnya.
     4. Response Body, data/resource yang diberikan oleh server baik itu berupa text, json ataupun xml.

3. Buatlah sebuah website dengan RESTful API (BackEnd Engineer), wajib dalam bentuk Swagger/Postman.
    - Answer:
    1. Aplikasi ini terdapat fitu Regist dan Login
    2. Aplikasi ini dibuat dengan RESTful API (CRUD) untuk User
    4. Aplikasi ini menggunakan Sequelize ORM untuk data base PostgreSQL.
    3. Dokumentasi dapat dilihat dalam bentuk Swagger/postman.

4. Deskripsi Aplikasi
    # Deskripsi App
    repository for the API Using ExpressJS and PostgresSQL (Sequelize ORM) #Mock Test

    First, run the development server:

    ```
    npm install
    npm start
    ```

    ```
    generate all migration
    npx sequelize db:migration:all

    undo all generate migration
    npx sequelize db:migration:undo:all

    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result..
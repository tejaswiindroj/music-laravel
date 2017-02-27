**Favorite Music App**

**Database name:** music
**Laravel version:** 5.4

**Setup:**
1. Run 'cp .env.example .env'.
2. Create a database named 'music' and change DB_DATABASE in .env to 'music'.
3. Update DB_USERNAME and DB_PASSWORD in .env according to the database application setup.
4. Run 'composer install'.
5. Run 'php artisan key:generate' to generate app key.
6. Run 'php artisan migrate' to create the database tables.
7. Run 'php artisan db:seed' to seed example data into the tables.
8. Run 'php artisan serve' to run the server.

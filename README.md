# Features
* CRUD notes
* Beautiful and simple GUI
* login/logut and register system with JWT Token
* API built using Django REST framework
* Reactjs serve as frontend
# Installation
* Clone repository
```
git clone https://github.com/dungtd98/NoteApp.git
```
* Install Dependencies
```
cd NoteApp
pip install -r requirement.txt
```
* Config database in setting.py

For postgreSQL:
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME':'DB_Name',
        'USER':'DB_username',
        'PASSWORD':'DB_password',
        'HOST':'DB_host',
        'PORT':'DB_host'
    }
}
```
For SQLite:
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```
* Make migrations and migrate
Run in terminal
```
python manage.py makemigrations
python manage.py migrate
```
* Run Django server
```
python manage.py runserver
```

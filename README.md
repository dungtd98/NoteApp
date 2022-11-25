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
# App working
* Login/Register/Logout
![Note-App-Login-Register](https://user-images.githubusercontent.com/106716036/204022450-e6b97ba3-e070-4634-9180-f6bc578707c1.gif)
* Create new note
![Add Note](https://user-images.githubusercontent.com/106716036/204023059-48968fb1-7c37-4238-8726-3cec17428f34.gif)
* View Detail, Update, Delete note
![CRUD-Note](https://user-images.githubusercontent.com/106716036/204025986-c3da22bd-0c59-46ad-96ab-b58ab7e61d2e.gif)
* Search note by name
![Search-function](https://user-images.githubusercontent.com/106716036/204025346-39ae5bb7-b442-4dc2-b05b-6d98112f8d41.gif)


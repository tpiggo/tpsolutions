from flask import render_template
from app.basic_blog import basic_blog

@basic_blog.route('/')
def home():
    return render_template('blog-home.html')

@basic_blog.route('/register.html')
def registration():
    return render_template('register.html')
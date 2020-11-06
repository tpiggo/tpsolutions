from flask import render_template
from app import app


@app.route('/', methods=['GET'])
def home():
    """
    Renders home page
    """
    return render_template('home.html')


@app.route('/basic-blog')
def first_project():
    return render_template('blog-description.html')

# TODO: Add this path and the path to the other projects
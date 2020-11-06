"""
This script runs the application using a development server.
It contains the definition of routes and views for the application.
"""

from flask import Flask
from app.basic_blog import basic_blog
#TODO: Add flask Blueprint for some of the webpages.
# Not for Node, just link its GITHUB.


app = Flask(__name__)
app.register_blueprint(basic_blog, url_prefix='/basic-blog-project')

# Make the WSGI interface available at the top level so wfastcgi can get it.
wsgi_app = app.wsgi_app

from app import routes
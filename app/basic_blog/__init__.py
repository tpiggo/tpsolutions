from flask import Blueprint

basic_blog = Blueprint('basic_blog', __name__, template_folder='templates')

from app.basic_blog import routes
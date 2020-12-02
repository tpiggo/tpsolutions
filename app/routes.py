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
    return render_template('blog-description.html', description="Simple blog image capituring beauty!")

# TODO: Add this path and the path to the other projects
@app.route('/user-threads')
def user_threads():
    return render_template('sut-in-c.html', description="Simple User threads diagram.")

@app.route('/rpc-server')
def rpc_server():
    return render_template('rpc-in-c.html', description="Remote procedre calls terminal.")

@app.route('/hosting-error')
def hosting_error():
    return render_template('not-hosting.html', description="Sorry not hosting this project currently!")
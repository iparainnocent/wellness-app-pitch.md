from routes.user_routes import user_routes

def register_routes(app):
    app.register_blueprint(user_routes, url_prefix='/users')



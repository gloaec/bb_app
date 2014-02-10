# -*- coding: utf-8 -*-

from bamboo.model import db
# TODO: Change 'db' to 'db = SQLAlchemy()'

from flask.ext.mail import Mail
mail = Mail()

from flask.ext.cache import Cache
cache = Cache()

from flask.ext.login import LoginManager
login_manager = LoginManager()

from flask.ext.openid import OpenID
oid = OpenID()

from flask.ext.babel import Babel
babel = Babel()

from flask.ext.assets import Environment
assets = Environment()

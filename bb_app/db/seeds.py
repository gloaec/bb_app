from bb_app.models import *

"""
Populate the database with the artificial data below :

"""

user1 = User.create(name='admin', password='$admin&123456$', email='admin@home.com')
user2 = User.create(name='toto', password='totototo', email='toto@toto.com')
post1 = Post.create(title = 'Super post de l\'admin' , content ='blablablabla', author = user1)
post2 = Post.create(title = 'Autre message' , content ='blabla', author = user2)
comment11 = Comment.create(title = 'Vraiment super' , content ='l\'admin fais vraiment des supers posts', author = user2, post = post1)
comment12 = Comment.create(title = 'Merci' , content ='merci toto', author = user1, post = post1)

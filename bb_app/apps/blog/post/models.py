from bamboo.model import *
from bb_app.models import User

class Post(Base):

    __tablename__ = 'posts'
    __public__    = [
            'id', 'title', 'content', 'created_at', 'updated_at',
            'author', 'author_id', 'comments'
    ]

    id          = Column(Integer, primary_key=True)
    title       = Column(String(50))
    content     = Column(Text)
    author_id   = Column(Integer, ForeignKey("users.id"))
    author      = relationship("User", uselist=False, backref="posts")

    @property
    def comments_count(self):
        return len(self.comments)
    #@property
    #def serialize(self):
    #    ret = super(Base, self).serialize
    #    ret['comments'] = [comment.serialize for comment in self.comments]
    #    return ret

    def __repr__(self):
        return '<Post #%s>' % self.id

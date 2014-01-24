"""empty message

Revision ID: 513e305b12d7
Revises: None
Create Date: 2014-01-21 16:45:30.261998

"""

# revision identifiers, used by Alembic.
revision = '513e305b12d7'
down_revision = None

from bamboo.alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user_details',
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('age', sa.Integer(), nullable=True),
    sa.Column('phone', sa.String(length=64), nullable=True),
    sa.Column('url', sa.String(length=64), nullable=True),
    sa.Column('deposit', sa.Numeric(), nullable=True),
    sa.Column('location', sa.String(length=64), nullable=True),
    sa.Column('bio', sa.String(length=64), nullable=True),
    sa.Column('sex_code', sa.Integer(), nullable=True),
    sa.Column('created_time', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('affixes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=64), nullable=False),
    sa.Column('email', sa.String(length=64), nullable=False),
    sa.Column('openid', sa.String(length=64), nullable=True),
    sa.Column('activation_key', sa.String(length=64), nullable=True),
    sa.Column('created_time', sa.DateTime(), nullable=True),
    sa.Column('avatar', sa.String(length=64), nullable=True),
    sa.Column('password', sa.String(length=64), nullable=False),
    sa.Column('role_code', sa.SmallInteger(), nullable=False),
    sa.Column('status_code', sa.SmallInteger(), nullable=True),
    sa.Column('user_detail_id', sa.Integer(), nullable=True),
    sa.Column('followers', sa.DenormalizedText(), nullable=True),
    sa.Column('following', sa.DenormalizedText(), nullable=True),
    sa.ForeignKeyConstraint(['user_detail_id'], ['user_details.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('openid')
    )
    op.create_table('posts',
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=50), nullable=True),
    sa.Column('content', sa.Text(), nullable=True),
    sa.Column('author_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['author_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('posts')
    op.drop_table('users')
    op.drop_table('affixes')
    op.drop_table('user_details')
    ### end Alembic commands ###

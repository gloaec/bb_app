@BambooApp.module "CommentsModule.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Controller extends App.Controllers.Base

    initialize: (options) ->
      {post, region} = options

      comments = App.request "post:comment:entities", post.id
      
      commentsView = @getCommentsView comments

      @show commentsView,
        loading: true

    getCommentsView: (comments) ->
      new List.Comments
        collection: comments
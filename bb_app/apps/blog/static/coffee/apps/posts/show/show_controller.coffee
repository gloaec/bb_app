@BambooApp.module "PostsModule.Show", (Show, App, Backbone, Marionette) ->

  class Show.Controller extends App.Controllers.Base

    initialize: (options) ->
      post = options.post or= App.request "post:entity", options.id
      
      App.execute 'when:fetched', post, =>
        @show @getShowView post
			
    getShowView: (post) ->
      new Show.Post
        model: post
        collection: post.get('comments')


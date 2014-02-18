@BambooApp.module "CommentsModule", (CommentsModule, App, Backbone, Marionette, $, _) ->
		
  API =
    list: (options) ->
      new CommentsModule.List.Controller options
	
  App.commands.setHandler "list:post:comments", (options) ->
    API.list options
    
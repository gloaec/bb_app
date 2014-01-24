@BambooApp.module "EventsApp", (EventsApp, App, Backbone, Marionette, $, _) ->
  @startWithParent = false
	
  class EventsApp.Router extends Marionette.AppRouter
    appRoutes:
      "events": "list"

  API =
    list: ->
      EventsApp.List.Controller.list()
		
    edit: (event) ->
      EventsApp.Edit.Controller.edit event
	
  App.vent.on "edit:event:clicked", (event) ->
    API.edit(event)
		
  App.addInitializer ->
    new EventsApp.Router
      controller: API
	

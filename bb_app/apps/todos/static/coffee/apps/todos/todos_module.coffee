@BambooApp.module "TodosModule", (TodosModule, App, Backbone, Marionette, $, _) ->

  class TodosModule.Router extends Marionette.SubRouter

    prefix: "todos"

    appRoutes:
      ""         : "list"
  API =
    list: (todos=false) ->
      new TodosModule.List.Controller todos: todos

    delete: (id, post=false) ->
      todo.destroy()

  App.vent.on "todos:clicked", (todos) ->
    App.navigate "todos"
    API.list todos

  App.vent.on "delete:todo:clicked", (todo) ->
    #App.navigate "todos/#{todo.id}/delete"
    API.delete todo.id, todo

  App.addInitializer ->
    new TodosModule.Router
      controller: API

@BambooApp.module "TodosModule", (TodosModule, App, Backbone, Marionette, $, _) ->

  class TodosModule.Router extends Marionette.SubRouter

    prefix: "todos"

    appRoutes:
      ""         : "list"

  API =
    list: (todos=false) ->
      new TodosModule.List.Controller todos: todos

    delete: (id, todo=false) ->
      console.log "coucou"
      todo.destroy()

    clearCompleted: (todos=false) ->
      _.each todos.models, (todo) =>
        todo.destroy() if todo.get('is_completed')

  App.vent.on "todos:clicked", (todos) ->
    App.navigate "todos"
    API.list todos

  App.vent.on "destroy:todo:clicked", (todo) ->
    App.navigate "todos"
    API.delete todo.id, todo

  App.vent.on "clear-completed:todos:clicked", (todos) ->
    App.navigate "todos"
    API.clearCompleted todos

  App.addInitializer ->
    new TodosModule.Router
      controller: API

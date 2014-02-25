@BambooApp.module "TodosModule.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Controller extends App.Controllers.Base

    initialize: (options) ->
      todos = options.todos or= App.request "todo:entities"

      @layout = @getLayoutView()
			
      @listenTo @layout, "show", =>
        @newTodoView todos
        @todosView todos
        @footerView todos
			
      @show @layout,
        loading:
          entities: todos
		
    newTodoView: (todos) ->
      newTodoView = @getNewTodoView todos

      newTodoView.on "new:todo:clicked", (todos) ->
        App.vent.trigger "todos:clicked", todos

      @show newTodoView, region: @layout.todosHeaderRegion
		
    todosView: (todos) ->
      todosView = @getTodosView todos
      
      @show todosView, region: @layout.todosMainRegion

    footerView: (todos) ->
      footerView = @getFooterView todos
      @show footerView, region: @layout.todosFooterRegion

    getNewTodoView: (todos) ->
      new List.NewTodo
        model: new todos.model()
        collection: todos

    getTodosView: (todos) ->
      new List.Todos
        collection: todos

    getFooterView: (todos) ->
      new List.Footer
        collection: todos

    getLayoutView: ->
      new List.Layout

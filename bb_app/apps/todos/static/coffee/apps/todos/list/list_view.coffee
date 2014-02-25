@BambooApp.module "TodosModule.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Layout extends App.Views.Layout
    template: "todos/list/list_layout"

    regions:
      todosHeaderRegion: "#todos-header-region"
      todosMainRegion:   "#todos-main-region"
      todosFooterRegion:  "#todos-footer-region"


  class List.Todo extends App.Views.ItemView
    template: "todos/list/_todo"
    tagName: 'li'
    ui:
      checkbox: 'input[type=checkbox]'
      
    onRender: ->
      if @model.get('is_completed')
        @$el.prop('class', 'completed')
        @ui.checkbox.prop('checked', true)
      else
        @$el.prop('class', 'active')
        @ui.checkbox.prop('checked', false)
      @stickit()


  class List.Todos extends App.Views.CompositeView
    template: "todos/list/_todos"
    itemView: List.Todo
    itemViewContainer: "#todo-list"


  class List.NewTodo extends App.Views.ItemView
    template: "todos/list/_newtodo"

    initialize: ->
      @listenTo @model, 'validated', (_, __, attrs) => @showErrors(attrs)
        
    bindings:
      '#new-todo': "content"
    
    events:
      "keypress #new-todo"   : 'onKeyPress'

    onKeyPress : (e) =>
      ENTER = 13
      switch e.which
        when ENTER
          console.log "entrée", @model
          if @model.isValid(true)
            @model.save null,
              success: =>
                @collection.add(@model)
                App.execute 'flash:success', "Todo successfully created"
                @trigger 'new:todo:clicked', @collection
              error: (todo, jqXHR) =>
                @showErrors $.parseJSON(jqXHR.responseText)
    
    onRender: ->
      @stickit()
      @validateit()

  class List.Footer extends App.Views.ItemView
    template: "todos/list/_footer"

    initialize: ->
      @listenTo @collection, 'all', @render, @

    serializeData: ->
      _.extend super(),
        completedCount: @collection.getCompleted().length
        itemsLeft: @collection.size()-@collection.getCompleted().length
      

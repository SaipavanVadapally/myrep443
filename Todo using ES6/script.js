class TodoList {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.editingId = null;
        this.addButton = document.querySelector('#add-todo');
        this.inputField = document.querySelector('#todo-input');
        this.render(); // Render existing todos on initialization
    }

    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    addOrUpdateTodo(text) {
        if (text.trim() === '') {
            alert('Todo text cannot be empty!');
            return;
        }

        if (this.editingId) {
            const todo = this.todos.find(t => t.id === this.editingId);
            todo.text = text;
            this.editingId = null;
            this.addButton.textContent = 'Add Todo';
        } else {
            const todo = {
                text,
                completed: false,
                important: false, // Added important property
                id: Date.now(),
            };
            this.todos.push(todo);
        }
        this.inputField.value = ''; // Clear input field after adding/updating
        this.render();
        this.saveTodos(); // Save todos after adding or updating
    }

    toggleComplete(id) {
        const todo = this.todos.find(t => t.id === id);
        todo.completed = !todo.completed;
        this.render();
        this.saveTodos(); // Save todos after toggling completion
    }

    deleteTodo(id) {
        if (confirm('Are you sure you want to delete this todo?')) {
            this.todos = this.todos.filter(t => t.id !== id);
            this.render();
            this.saveTodos(); // Save todos after deleting
        }
    }

    editTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        this.inputField.value = todo.text;
        this.inputField.focus();
        this.inputField.select();
        this.editingId = id;
        this.addButton.textContent = 'Update';
    }

    toggleImportance(id) {
        const todo = this.todos.find(t => t.id === id);
        todo.important = !todo.important;
        this.render();
        this.saveTodos(); // Save todos after toggling importance
    }

    render() {
        const listElement = document.querySelector('#todo-list');
        listElement.innerHTML = '';
        this.todos.forEach(todo => {
            const highlightClass = todo.important ? 'highlight-important' : ''; // Apply highlight-important class if todo is marked as important
            const completeClass = todo.completed ? 'highlight-complete' : ''; // Apply highlight-complete class if todo is completed
    
            listElement.innerHTML += `
            <li class="${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
            <span class="todo-text displayed-todo-text ${highlightClass} ${completeClass}">${todo.text}</span>
                    <button class="toggle-complete-btn" onclick="todoList.toggleComplete(${todo.id})">Toggle Complete</button>
                    <button class="edit-btn" onclick="todoList.editTodo(${todo.id})">Edit</button>
                    <button class="delete-btn" onclick="todoList.deleteTodo(${todo.id})">Delete</button>
                    <button class="toggle-importance-btn" onclick="todoList.toggleImportance(${todo.id})">Mark as Important</button>
                </li>
            `;
        });
    }
}

const todoList = new TodoList();

todoList.addButton.addEventListener('click', () => {
    const text = todoList.inputField.value;
    todoList.addOrUpdateTodo(text);
});

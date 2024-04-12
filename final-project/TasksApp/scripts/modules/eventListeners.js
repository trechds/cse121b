// eventListeners.js
import { saveTodo, toggleForms, updateTodo, removeTodoLocalStorage, updateTodoStatusLocalStorage } from './todoFunctions.js';

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");
let oldInputValue;

const addEventListeners = () => {
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
      saveTodo(inputValue);
    }
  });

  document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if (parentEl && parentEl.querySelector("h3")) {
      todoTitle = parentEl.querySelector("h3").innerText || "";
    }

    if (targetEl.classList.contains("finish-todo")) {
      parentEl.classList.toggle("done");
      updateTodoStatusLocalStorage(todoTitle);
    }

    if (targetEl.classList.contains("remove-todo")) {
      parentEl.remove();
      removeTodoLocalStorage(todoTitle);
    }

    if (targetEl.classList.contains("edit-todo")) {
      toggleForms();
      editInput.value = todoTitle;
      oldInputValue = todoTitle;
    }
  });

  cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms();
  });

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const editInputValue = editInput.value;

    if (editInputValue) {
      updateTodo(editInputValue);
    }

    toggleForms();
  });

  searchInput.addEventListener("keyup", (e) => {
    const search = e.target.value;
    getSearchedTodos(search);
  });

  eraseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchInput.value = "";
    searchInput.dispatchEvent(new Event("keyup"));
  });

  filterBtn.addEventListener("change", (e) => {
    const filterValue = e.target.value;
    filterTodos(filterValue);
  });
};

export default addEventListeners;

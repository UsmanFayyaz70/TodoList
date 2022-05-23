import React from 'react'

function Header() {
  return (
    <div>
    <ul class="nav nav-pills">
    <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/">Home</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="/todoList">Todo List</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="/About">About</a>
    </li>
    </ul>
</div>
  )
}

export default Header
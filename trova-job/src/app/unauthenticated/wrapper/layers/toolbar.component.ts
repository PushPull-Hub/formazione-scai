import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: ` <div class="toolbar" role="banner">
    <img
      width="40"
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
    />
    <span> {{ 'Trova Job' | uppercase }}</span>
    <div class="spacer"></div>
    <button mat-stroked-button class="access-button">Accedi</button>
    <a
      target="_blank"
      href="https://github.com/PushPull-Hub/formazione-scai/tree/develop/trova-job"
    >
      <svg id="twitter-logo" height="24" viewBox="0 0 400 400">
        <path
          d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
          fill="#fff"
        />
      </svg>
    </a>
  </div>`,
  styles: [
    `
      .spacer {
        flex: 1;
      }

      .toolbar {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 60px;
        display: flex;
        align-items: center;
        background-color: #303f9f;
        color: white;
        font-weight: 600;
      }

      .toolbar img {
        margin: 0 16px;
      }

      .toolbar #twitter-logo {
        height: 40px;
        margin: 0 16px;
      }

      .toolbar #twitter-logo:hover {
        opacity: 0.8;
      }

      .access-button {
        color: #303f9f;
        background: white;
      }
    `,
  ],
})
export class ToolBarComponent {}

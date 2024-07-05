import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/index.tsx");import.meta.env = {"BASE_URL": "/", "MODE": "development", "DEV": true, "PROD": false, "SSR": false};import { createComponent as _$createComponent } from "/node_modules/.vite/deps/solid-js_web.js?v=391c83dd";
import { $$decline as _$$decline } from "/@solid-refresh";
import { render } from "/node_modules/.vite/deps/solid-js_web.js?v=391c83dd";
import "/src/index.css?t=1720169905049";
import { App } from "/src/App.tsx?t=1720169905049";
const root = document.getElementById("root");
if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?");
}
const _cleanup = render(() => _$createComponent(App, {}), root);
if (import.meta.hot)
  import.meta.hot.dispose(_cleanup);
if (import.meta.hot) {
  _$$decline("vite", import.meta.hot);
  import.meta.hot.accept();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7QUFDQSxTQUFTQSxjQUFjO0FBR3ZCLE9BQU87QUFDUCxTQUFTQyxXQUFXO0FBRXBCLE1BQU1DLE9BQU9DLFNBQVNDLGVBQWUsTUFBTTtBQUUzQyxJQUFJQyxZQUFZQyxJQUFJQyxPQUFPLEVBQUVMLGdCQUFnQk0sY0FBYztBQUN6RCxRQUFNLElBQUlDLE1BQ1IsZ0hBQ0Y7QUFDRjtBQUFDLE1BQUFDLFdBRURWLE9BQU8sTUFBQVcsa0JBQU9WLEtBQUcsS0FBS0MsSUFBSztBQUFDLElBQUFHLFlBQUFPO0FBQUFQLGNBQUFPLElBQUFDLFFBQUFILFFBQUE7QUFBQSxJQUFBTCxZQUFBTyxLQUFBO0FBQUFFLGFBQUEsUUFBQVQsWUFBQU8sR0FBQTtBQUFBUCxjQUFBTyxJQUFBRyxPQUFBO0FBQUEiLCJuYW1lcyI6WyJyZW5kZXIiLCJBcHAiLCJyb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImltcG9ydCIsImVudiIsIkRFViIsIkhUTUxFbGVtZW50IiwiRXJyb3IiLCJfY2xlYW51cCIsIl8kY3JlYXRlQ29tcG9uZW50IiwiaG90IiwiZGlzcG9zZSIsIl8kJGRlY2xpbmUiLCJhY2NlcHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIEByZWZyZXNoIHJlbG9hZCAqL1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInNvbGlkLWpzL3dlYlwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBzb2xpZGpzL3JvdXRlclwiO1xuXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vQXBwXCI7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbmlmIChpbXBvcnQubWV0YS5lbnYuREVWICYmICEocm9vdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJSb290IGVsZW1lbnQgbm90IGZvdW5kLiBEaWQgeW91IGZvcmdldCB0byBhZGQgaXQgdG8geW91ciBpbmRleC5odG1sPyBPciBtYXliZSB0aGUgaWQgYXR0cmlidXRlIGdvdCBtaXNzcGVsbGVkP1wiXG4gICk7XG59XG5cbnJlbmRlcigoKSA9PiA8QXBwIC8+LCByb290ISk7XG4iXSwiZmlsZSI6IkM6L1VzZXJzL2xjcy9EZXNrdG9wL0RFVi9CaW5nb0NyeXB0by9zcmMvaW5kZXgudHN4In0=
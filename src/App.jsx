import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Testing React app in mini kube</h1>
      <p className="read-the-docs">
        This is a test app for minikube and ArgoCD
      </p>
    </>
  )
}

export default App

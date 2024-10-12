import './App.css';
import RegisterForm from './components/RegisterForm.tsx';

function App() {
  const handleRegisterSubmit = (value: object) => {
    alert(value);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <RegisterForm
          onSubmit={handleRegisterSubmit}
          theme='dark'
        />
      </div>
    </>
  );
}

export default App;

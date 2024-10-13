import './App.css';
import RegisterForm from './components/RegisterForm.tsx';

function App() {
  const handleRegisterSubmit = (value: object) => {
    console.log(value);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap:'5px', justifyContent: 'center', alignItems: 'center' }}>
        <RegisterForm
          onSubmit={handleRegisterSubmit}
          theme='dark'
        />
          <RegisterForm onSubmit={handleRegisterSubmit} theme='dark' passwordCheck={true}/>
      </div>
    </>
  );
}

export default App;

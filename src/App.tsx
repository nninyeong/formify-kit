import './App.css';
import RegisterForm from './components/RegisterForm.tsx';

function App() {
  const handleRegisterSubmit = (value: object) => {
    console.log(value);
  };

  return (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center', alignItems: 'center' }}
      >
        <div>light 테마</div>
        <RegisterForm
          onSubmit={handleRegisterSubmit}
          theme='light'
        />
        <div>dark 테마</div>
        <RegisterForm
          onSubmit={handleRegisterSubmit}
          theme='dark'
          passwordCheck={true}
        />
        <div>custom 테마</div>
        <RegisterForm
          onSubmit={handleRegisterSubmit}
          theme='custom'
          primaryColor='#bb4a4a'
          textColor='white'
          inputFieldColor='black'
          inputTextColor='white'
        />
      </div>
    </>
  );
}

export default App;

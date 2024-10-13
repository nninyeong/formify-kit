import '../style/formStyle.css';
import { useRef } from 'react';

type RegisterFormPropType = {
  onSubmit: (formValue: object) => void;
  theme?: 'light' | 'dark' | 'custom';
  passwordCheck?: boolean;
  primaryColor?: string;
  secondaryColor?: string;
};

const RegisterForm = ({
  onSubmit,
  theme = 'light',
  passwordCheck = false,
  primaryColor,
  secondaryColor,
}: RegisterFormPropType) => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: 유효성검사

    const formValue = {
      id: idRef.current?.value || '',
      password: passwordRef.current?.value || '',
      nickname: nicknameRef.current?.value || '',
    };

    onSubmit(formValue);
  };

  return (
    <div className='formContainer'>
      <h3>회원가입</h3>
      <form onSubmit={handleSubmit}>
        <input
          ref={idRef}
          placeholder='아이디를 입력해주세요'
        />
        <input
          ref={passwordRef}
          type='password'
          placeholder='비밀번호를 입력해주세요'
        />
        {passwordCheck && (
          <input
            ref={passwordCheckRef}
            type='password'
            placeholder='비밀번호를 다시 한번 입력해주세요'
          />
        )}
        <input
          ref={nicknameRef}
          placeholder='닉네임을 입력해주세요'
        />
        <button>가입하기</button>
      </form>
    </div>
  );
};

export default RegisterForm;

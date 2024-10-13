import '../style/formStyle.css';
import { useRef } from 'react';

type RegisterFormPropType = {
  onSubmit: (formValue: object) => void;
  theme?: 'light' | 'dark' | 'custom';
  passwordCheck?: boolean;
  primaryColor?: string;
  titleColor?: string;
  textColor?: string;
  containerColor?: string;
  inputFieldColor?: string;
  inputTextColor?: string;
};

const RegisterForm = ({
  onSubmit,
  theme = 'light',
  passwordCheck = false,
  primaryColor,
  titleColor,
  textColor,
  containerColor,
  inputFieldColor,
  inputTextColor,
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
    <div
      className={`formContainer ${theme}`}
      style={{ backgroundColor: containerColor }}
    >
      <h3 style={{ color: titleColor }}>회원가입</h3>
      <form onSubmit={handleSubmit}>
        <input
          ref={idRef}
          placeholder='아이디를 입력해주세요'
          style={{ backgroundColor: inputFieldColor, color: inputTextColor }}
        />
        <input
          ref={passwordRef}
          type='password'
          placeholder='비밀번호를 입력해주세요'
          style={{ backgroundColor: inputFieldColor, color: inputTextColor }}
        />
        {passwordCheck && (
          <input
            ref={passwordCheckRef}
            type='password'
            placeholder='비밀번호를 다시 한번 입력해주세요'
            style={{ backgroundColor: inputFieldColor, color: inputTextColor }}
          />
        )}
        <input
          ref={nicknameRef}
          placeholder='닉네임을 입력해주세요'
          style={{ backgroundColor: inputFieldColor, color: inputTextColor }}
        />
        <button style={{ backgroundColor: primaryColor, color: textColor }}>가입하기</button>
      </form>
    </div>
  );
};

export default RegisterForm;

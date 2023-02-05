import { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext, UserType } from '../components/auth/UserContext';
import { PageContainer } from '../components/PageContainer';

export const Login: FC = () => {
  const [input, setInput] = useState<string>('');
  const { userLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = () => {
    const user = userLogin(input);

    if (user !== UserType.NONE) {
      navigate('/');
    }
  };

  return (
    <PageContainer noHeader>
      <div className="w-full h-full flex items-center justify-center">
        <div className=" bg-white w-72">
          <form onSubmit={onSubmit}>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder={'Enter password'}></input>
            <button className="bg-primary p-2 rounded-sm" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

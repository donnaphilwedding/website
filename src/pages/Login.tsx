import { FC, KeyboardEventHandler, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext, UserType } from '../components/auth/UserContext';
import { Loader } from '../components/Loader';
import { PageContainer } from '../components/PageContainer';

export const Login: FC = () => {
  const [input, setInput] = useState<string>('');
  const [pretendingToLoad, setPretendingToLoad] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { userLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = () => {
    const user = userLogin(input);
    setPretendingToLoad(true);
    setError(false);

    if (user !== UserType.NONE) {
      setTimeout(() => navigate('/'), 800);
    } else {
      setTimeout(() => {
        setPretendingToLoad(false);
        setError(true);
      }, 500);
    }
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      onSubmit();
    } 
  }

  return (
    <PageContainer noHeader>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-white w-[350px] rounded-lg overflow-hidden">
          <div className="w-full p-5 bg-primary text-white">
          <p className="font-calligraffitti text-4xl mb-[-6px] w-full text-center">{'D&P'}</p>
            </div>
            <div className="flex flex-col gap-5 p-5">
              <input
                className="border border-gray-300 p-2 rounded-md"
                value={input}
                onKeyDown={onKeyDown}
                onChange={e => setInput(e.target.value)}
                placeholder={'Please enter password'}
              ></input>
              {error && <div className="text-red-500">Incorrect password. Please try again.</div>}
              <button
                className="bg-primary p-2 rounded-md text-gray-100 flex justify-center items-center h-8"
                onClick={onSubmit}
              >
                {pretendingToLoad ? <Loader className="h-5 w-5"></Loader> : 'Enter'}
              </button>
            </div>
        </div>
      </div>
    </PageContainer>
  );
};

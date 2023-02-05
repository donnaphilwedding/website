import { FC, useContext, useState } from 'react';
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

  return (
    <PageContainer noHeader>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-white w-[350px] p-5">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-2">
              <input className="border border-gray-300 p-2 rounded-md" value={input} onChange={e => setInput(e.target.value)} placeholder={'Enter password'}></input>
              {error && <div className="text-red-500">Incorrect password. Please try again.</div>}
              <button className="bg-primary p-2 rounded-md text-gray-100 flex justify-center items-center h-8" type="submit">
                {pretendingToLoad ? <Loader className='h-5 w-5'></Loader> : "Submit" }
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

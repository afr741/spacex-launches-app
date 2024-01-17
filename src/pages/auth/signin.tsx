import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getCsrfToken } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { InfoModal } from '@/components/infoModal';
import { signIn } from 'next-auth/react';

export default function SignIn({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [username, setUsername] = useState('');
  const [job, setJob] = useState('');
  const [isOpenFirstModal, setIsOpenFirstModal] = useState(true);
  const [isOpenSecondModal, setIsOpenSecondModal] = useState(false);
  const [label, setLabel] = useState('username');

  const openSecondModal = () => {
    setIsOpenFirstModal(false);
    setIsOpenSecondModal(true);
  };

  const handleUserNameModal = (inputText: string) => {
    setUsername(inputText);
    setLabel('job title');
    openSecondModal();
  };

  const handleJobModal = (inputText: string) => {
    setJob(inputText);
    signIn('credentials', {
      username: username,
      job: job,
      callbackUrl: '/',
    });
  };

  useEffect(() => {
    setIsOpenFirstModal(true);
  }, []);

  return (
    <div>
      <InfoModal
        isOpen={isOpenFirstModal}
        onClose={openSecondModal}
        handleInfoSubmit={handleUserNameModal}
        label={label}
      />
      <InfoModal
        isOpen={isOpenSecondModal}
        onClose={() => setIsOpenSecondModal(false)}
        handleInfoSubmit={handleJobModal}
        label={label}
      />
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

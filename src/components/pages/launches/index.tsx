import { useQuery } from '@apollo/client';
import { Box, Center, Heading, VStack } from '@chakra-ui/react';
import { GridList } from '@/components/gridList';
import { Spinner } from '@/components/ui';
import { QUERY_GET_LAUNCHES } from '@/services/graphql/launches';
import React, { useEffect } from 'react';
import Launche from './Launche';
import { Launche as LauncheType } from '@/types/launche';

import { LaunchesPast, LaunchesPastVariables } from '@/types/launche';
import { useDisclosure } from '@chakra-ui/react';
import { ModalBox } from '@/components/modal';
import { useState } from 'react';

const LaunchesPageComponent: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeLaunch, setActiveLaunch] = useState<LauncheType | null>(null);
  const { data, loading, error } = useQuery<LaunchesPast, LaunchesPastVariables>(
    QUERY_GET_LAUNCHES,
    {
      variables: { limit: 20 },
    },
  );

  const handleLaunchClick = (item: LauncheType) => {
    setActiveLaunch(item);
    onOpen();
  };

  if (loading)
    return (
      <Center h="calc(100vh - 58px)">
        <Spinner />
      </Center>
    );
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data || !data.launchesPast) return <p>Not found</p>;

  return (
    <Box w="full" py={10}>
      <VStack>
        <Heading size="md" color="gray.500" mb={3}>
          Past SpaceX Launches
        </Heading>
        <ModalBox isOpen={isOpen} onClose={onClose} launche={activeLaunch} />
        <GridList>
          {data.launchesPast.map(launche => {
            if (!launche) return;
            return <Launche key={launche.id} launche={launche} handleClick={handleLaunchClick} />;
          })}
        </GridList>
      </VStack>
    </Box>
  );
};

export default LaunchesPageComponent;

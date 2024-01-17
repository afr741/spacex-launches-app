import { dateShortFormat } from '@/lib/utils';
import { Label } from '@/styles/factory/label';
import { Launche } from '@/types/launche';
import { Badge, Box, Divider, Image, Square, VStack } from '@chakra-ui/react';
import React from 'react';

type Props = {
  launche: Launche;
  handleClick: (e: Launche) => void;
};

const Launche: React.FC<Props> = ({ launche, handleClick }) => {
  if (!launche) return null;
  const imgSource = launche.links.flickr_images[0] || '';
  const isSuccess = launche.launch_success || false;
  const handleBoxClick = () => {
    handleClick(launche);
  };
  return (
    <Box
      minW="xlg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="5"
      bg="cardBg"
      onClick={handleBoxClick}
    >
      <Box display="flex" flexDirection={['column', 'row']}>
        <Image
          src={imgSource}
          boxSize="100px"
          fallback={
            <Box w="full">
              <Square minHeight="full" fontStyle="italic" color="gray.400" background={'gray.200'}>
                No Image
              </Square>
            </Box>
          }
        />
        <VStack w="full" pl="5" align="start">
          <Box fontSize="lg" fontWeight="bold">
            {launche.mission_name}
          </Box>
          <Label>{dateShortFormat(launche.launch_date_utc)}</Label>
          <Badge
            borderRadius="full"
            px="2"
            py="1"
            colorScheme={isSuccess ? 'teal' : 'red'}
            fontSize="xx-small"
          >
            {isSuccess ? 'SUCCESS' : 'FAIL'}
          </Badge>
        </VStack>
      </Box>
      <Divider my="3" />
      <Box>
        <Label>Launch Site</Label>
        <Box fontSize="md" fontWeight="bold">
          {launche.launch_site?.site_name_long}
        </Box>
        <Label mt="5">Rocket</Label>
        <Box fontSize="md" fontWeight="bold">
          {launche.rocket?.rocket_name}
        </Box>
      </Box>
    </Box>
  );
};

export default Launche;

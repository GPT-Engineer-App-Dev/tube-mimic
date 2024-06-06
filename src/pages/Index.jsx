import { Box, Container, Flex, Grid, Heading, HStack, IconButton, Image, Input, Text, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const videos = [
  { id: 1, title: "Video 1", views: "1M views", thumbnail: "https://via.placeholder.com/150" },
  { id: 2, title: "Video 2", views: "500K views", thumbnail: "https://via.placeholder.com/150" },
  { id: 3, title: "Video 3", views: "200K views", thumbnail: "https://via.placeholder.com/150" },
  { id: 4, title: "Video 4", views: "800K views", thumbnail: "https://via.placeholder.com/150" },
  { id: 5, title: "Video 5", views: "300K views", thumbnail: "https://via.placeholder.com/150" },
  { id: 6, title: "Video 6", views: "900K views", thumbnail: "https://via.placeholder.com/150" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center" justify="space-between">
        <Heading size="lg">MyTube</Heading>
        <HStack spacing={4}>
          <Input placeholder="Search" bg="white" color="black" />
          <IconButton aria-label="Search" icon={<FaSearch />} />
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={4}>
        {/* Sidebar */}
        <Box as="aside" w="20%" p={4} bg="gray.100" display={{ base: "none", md: "block" }}>
          <Heading size="md" mb={4}>Categories</Heading>
          <VStack align="start">
            <Text>Category 1</Text>
            <Text>Category 2</Text>
            <Text>Category 3</Text>
            <Text>Category 4</Text>
          </VStack>
        </Box>

        {/* Video Grid */}
        <Box as="main" flex="1" p={4}>
          <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
            {videos.map((video) => (
              <Box key={video.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={video.thumbnail} alt={video.title} />
                <Box p={4}>
                  <Heading size="sm" mb={2}>{video.title}</Heading>
                  <Text fontSize="sm" color="gray.500">{video.views}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
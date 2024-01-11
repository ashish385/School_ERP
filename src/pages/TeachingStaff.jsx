import React from 'react'
import Banner from '../components/common/Banner'
import Footer from '../components/common/Footer'
import ProfileCard from '../components/Miscelleneous/staff/ProfileCard'
import { Box, SimpleGrid } from '@chakra-ui/react'

const TeachingStaff = () => {
  return (
    <div>
      <Banner path={"Teaching Staff"} />
      <section className="w-11/12 mx-auto my-10">
        <SimpleGrid
          templateColumns={{
            base: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          spacingX="40px"
          spacingY="20px"
        >
          <Box>
            <ProfileCard />
          </Box>
          <Box>
            <ProfileCard />
          </Box>
          <Box>
            <ProfileCard />
          </Box>
          <Box>
            <ProfileCard />
          </Box>
          <Box>
            <ProfileCard />
          </Box>
          <Box>
            <ProfileCard />
          </Box>
          <Box>
            <ProfileCard />
          </Box>
        </SimpleGrid>
      </section>
      {/* <ProfileCard /> */}
      <Footer />
    </div>
  );
}

export default TeachingStaff
import { GridItem, SimpleGrid } from "@chakra-ui/react"
import { ChatApp } from "components/chat/ChatApp"
import { LeftSidebar, RightSidebar } from "components/sidebar"
import { Drawer } from '../Drawer'
import { sizes } from "theme/sizes"

export default function MainLayout({ children }) {
  return (
    <>
      <SimpleGrid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={1}>
          <LeftSidebar />
        </GridItem>
        <GridItem colSpan={4}>
          {children}
        </GridItem>
        <GridItem colSpan={1}>
          <RightSidebar />
        </GridItem>
        <Drawer openButtonTitle="open" size={sizes.lg}>
          <ChatApp />
        </Drawer>
      </SimpleGrid>
    </>
  )
}
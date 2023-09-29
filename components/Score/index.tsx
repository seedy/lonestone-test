"use client"
import { useContextStore } from "@/components/Context"
import { Button, Flex, OrderedList, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, Heading } from "@chakra-ui/react";
import styles from './index.module.scss'
import IconChifumi from "@/components/IconChifumi";
import computeWin from "@/utils/computeWin";
import WinText from "@/components/WinText";

const Score = () => {
    const {score, history} = useContextStore();

    const {onOpen, isOpen, onClose} = useDisclosure();

    return (
        <>
        <Flex direction="column" gap={6} className={styles.root}>
            <Heading as="h2">Score</Heading>
            <Flex direction="column">
                <Text>Computer : {score[1]}</Text>
                <Text fontWeight="bold">You : {score[0]}</Text>
            </Flex>
            <Button colorScheme="blackAlpha" onClick={onOpen}>History</Button>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className={styles.modal}>
          <ModalHeader>History</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <OrderedList spacing={6}>
                {history.map(([move, computerMove], index) => (
                    <ListItem key={index}>
                        You : <IconChifumi variant={move}/> Computer : <IconChifumi variant={computerMove} /> <WinText move={move} computerMove={computerMove}/>
                    </ListItem>
                ))}
            </OrderedList>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blackAlpha' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    )
}

export default Score;
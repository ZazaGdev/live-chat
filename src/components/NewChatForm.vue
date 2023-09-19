<template>
    <form>
        <textarea placeholder="Type a message and hit enter" v-model="message" @keypress.enter.prevent="handleSendingMessage"></textarea>
        <div class="error">{{ error }}</div>
    </form>
</template>

<script>
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
import { timestamp } from '../firebase/config'
import { ref } from 'vue'

export default {
    setup() {
        const { user } = getUser()
        const { addDocument, error } = useCollection('messages')

        const message = ref('')

        const handleSendingMessage = async () => {
            const chat = {
                user: user.value.displayName,
                message: message.value,
                sentAt: timestamp(),
            }

            await addDocument(chat)
            if (!error.value) {
                message.value = ''
            }
        }

        return { handleSendingMessage, message, error }
    },
}
</script>

<style scoped>
form {
    padding: 10px;
    border-top: 1px solid rgb(181, 181, 181);
}
textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}
</style>

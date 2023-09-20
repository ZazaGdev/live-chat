<template>
    <div class="chat-window">
        <div class="error" v-if="error">{{ error }}</div>
        <div v-if="documents" class="messages" ref="messagesWrapper">
            <div v-for="doc in formattedDocuments" :key="doc.id" class="single-message">
                <span class="sent-at"> {{ doc.sentAt }}</span>
                <span class="name"> {{ doc.user }}</span>
                <span class="message"> {{ doc.message }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref, onUpdated } from 'vue'
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'

export default {
    setup() {
        const { error, documents } = getCollection('messages')
        const messagesWrapper = ref([])

        const formattedDocuments = computed(() => {
            if (documents.value) {
                return documents.value.map((doc) => {
                    let time = formatDistanceToNow(doc.sentAt.toDate())
                    return { ...doc, sentAt: time }
                })
            }
        })

        onUpdated(() => (messagesWrapper.value.scrollTop = messagesWrapper.value.scrollHeight))

        return { error, documents, formattedDocuments, messagesWrapper }
    },
}
</script>

<style>
.chat-window {
    background: #fafafa;
    padding: 30px 20px;
    border-top: 1px solid rgb(181, 181, 181);
}
.single-message {
    margin: 18px 0;
}
.sent-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}
.name {
    font-weight: bold;
    margin-right: 6px;
}
.messages {
    max-height: 400px;
    overflow: auto;
}
</style>

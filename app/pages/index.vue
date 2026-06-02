<template>
    <div class="p-6 space-y-4">

        <div class="text-3xl text-red-400">
            <span>{{ $t('persian') }}</span>
        </div>

        <!-- INPUT -->
        <input v-model="query" type="text" placeholder="Search..." class="border p-2 w-full rounded" >

        <!-- LOADING -->
        <div v-if="pending">
            loading...
        </div>

        <!-- RESULT -->
        <pre v-else>
{{ data }}
        </pre>

    </div>
</template>

<script setup>
const query = ref('')

let timeout

watch(query, () => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
        if (!query.value) return
        refresh()
    }, 30)
})

const { data, pending, refresh } = useApiFetch('/v2/search/all', {
    method: 'POST',
    body: computed(() => ({
        q: query.value,
    })),
    immediate: false,
})
</script>
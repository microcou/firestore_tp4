<script setup>
import sortKeys from 'sort-keys';
import stringifyObject from 'stringify-object';

const props = defineProps({
    list: { type: Array, required: true }
})
</script>

<template>
    <ul v-if="list.length > 0">
        <li v-for="item in list">
            <pre>{{ stringifyObject(sortKeys(item)) }}</pre>
        </li>
    </ul>
    <div v-else>
        The list is empty.
    </div>
</template>
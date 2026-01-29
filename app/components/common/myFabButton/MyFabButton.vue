import { Button } from '../../../.nuxt/components';
<template>
    <!-- Boton flotante -->
    <Button class="fixed bottom-10 right-10 bg-black hover:opacity-70 cursor-pointer" 
            @click="$emit('click')"
            size="icon-lg">
        <add-icon class="w-8 h-8 text-white"/>
    </Button>
</template>

<script lang="ts" setup>
import AddIcon from '../../icons/AddIcon.vue';


defineEmits(['click']);
</script>
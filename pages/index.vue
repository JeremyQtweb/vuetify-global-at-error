<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Index.vue</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-autocomplete
          :items="[{title: 'boo', value: 'hoo'},{title: 'fred', value: 'flintstone'}]"
          placeholder="Select something"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  
</script>

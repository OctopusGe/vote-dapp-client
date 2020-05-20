<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title primary-title>
      <h1>Signup</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="Email" type="email" prepend-icon="mdi-email" />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-checkbox label="Agree to terms & conditions" />
      <v-spacer></v-spacer>
      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    birthday: '',
    browsers: ['Chrome', 'Firefox', 'Safari', 'Edge', 'Brave']
  })
}
</script>
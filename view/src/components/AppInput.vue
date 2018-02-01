<template lang="pug">
        div
                div(class="uk-margin")
                div(class="uk-inline")
                        span(class="uk-form-icon" uk-icon="icon: user")
                        input(class="uk-input" type="text" placeholder="Введите userID"
                        :value="input" @input="handle")
</template>

<script>
export default {
  props: ["input", "handle"]
};
</script>

<style lang="scss">

</style>

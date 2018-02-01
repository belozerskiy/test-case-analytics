<template lang="pug">
    div
        h3(class="uk-card-title") Сводка
        table(class="uk-table uk-table-striped")
            thead
                tr
                    th Дата
                    th Посещённый
                    th Регистраци
                    th Итог
            tbody(uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500")
                tr
                    td 11.12.2017
                    td 23
                    td 11
                    td 22
                tr
                    td 11.12.2017
                    td 53
                    td 11
                    td 22
                tr
                    td 11.12.2017
                    td 73
                    td 11
                    td 22
                tr
                    td 11.12.2017
                    td 93
                    td 11
                    td 22
                tr
                    td 11.12.20170
                    td 113
                    td 11
                    td 22
                tr
                    td 11.12.20172
                    td 133
                    td 11
                    td 22
                tr
                    td 11.12.20174
                    td 153
                    td 11
                    td 22
</template>

<script>
export default {};
</script>

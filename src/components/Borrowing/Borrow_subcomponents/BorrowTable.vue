<template>
    <v-container>
        <v-data-table v-model="selected" :items="items" item-value="accessionNumber" show-select></v-data-table>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            selected: [],
            items: [
                {
                    accessionNumber: '001',
                    title: 'Book 1',
                    author: 'Author 1',
                    location: 'Library A',
                    edition: '1st',
                    callNo: 'A001',
                },
                {
                    accessionNumber: '002',
                    title: 'Book 2',
                    author: 'Author 2',
                    location: 'Library B',
                    edition: '2nd',
                    callNo: 'B002',
                },
                {
                    accessionNumber: '003',
                    title: 'Book 3',
                    author: 'Author 3',
                    location: 'Library C',
                    edition: '3rd',
                    callNo: 'C003',
                },
                {
                    accessionNumber: '004',
                    title: 'Book 4',
                    author: 'Author 4',
                    location: 'Library D',
                    edition: '4th',
                    callNo: 'D004',
                },
                {
                    accessionNumber: '005',
                    title: 'Book 5',
                    author: 'Author 5',
                    location: 'Library E',
                    edition: '5th',
                    callNo: 'E005',
                },
                {
                    accessionNumber: '006',
                    title: 'Book 6',
                    author: 'Author 6',
                    location: 'Library F',
                    edition: '6th',
                    callNo: 'F006',
                },
                {
                    accessionNumber: '007',
                    title: 'Book 7',
                    author: 'Author 7',
                    location: 'Library G',
                    edition: '7th',
                    callNo: 'G007',
                },
                {
                    accessionNumber: '008',
                    title: 'Book 8',
                    author: 'Author 8',
                    location: 'Library H',
                    edition: '8th',
                    callNo: 'H008',
                },
                {
                    accessionNumber: '009',
                    title: 'Book 9',
                    author: 'Author 9',
                    location: 'Library I',
                    edition: '9th',
                    callNo: 'I009',
                },
                {
                    accessionNumber: '010',
                    title: 'Book 10',
                    author: 'Author 10',
                    location: 'Library J',
                    edition: '10th',
                    callNo: 'J010',
                },
            ],
        }
    },
}
</script>
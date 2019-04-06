<template>
  <div>
    <vue-good-table id="goodTable" style="
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.47);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.47);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.47);"
                    @on-selected-rows-change="selectionChanged"
                    :columns="columns"
                    :rows="rows"
                    max-height="350px"
                    :fixed-header="true"
                    :select-options="{ enabled: true,}"
                    :search-options="{ enabled: true, }">
    </vue-good-table>
    <div slot="selected-row-actions" style="margin-top: 10px">
      <b-form v-on:submit.prevent="onSubmit">
        <vue-ctk-date-time-picker class="datepicker" label="Choose when to book!" v-model="value"
                                  style="width: 200px"></vue-ctk-date-time-picker>
        <md-button type="submit" class="md-raised md-accent" style="color: white">Reserve</md-button>
      </b-form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'my-component',
    data() {
      return {
        value: null,
        columns: [
          {
            label: 'Name',
            field: 'name',
            filterable: true,
          },
          {
            label: 'Description',
            field: 'description',
          },
          {
            label: 'Capacity',
            field: 'capacity',
            type: 'number',
            filterable: true,
          },
          {
            label: 'Equipment',
            field: 'equipment',
            type: 'array',
          },
          {
            label: 'Created On',
            field: 'createdAt',
            type: 'date',
            dateInputFormat: 'YYYY-MM-DD',
            dateOutputFormat: 'MMM Do YY',
            filterable: true,
          },
        ],
        rows: [],
        rowSelected: [],
      };
    },

    async mounted() {
      setInterval(this.doThis, 30000);
      console.log(this.value)
        this.$notify({
          group: 'notify',
          title: 'Welcome back!',
          text: 'Do not forget to check the room before submit.',
        })
    },

    methods: {
      async doThis() {
        axios.get('http://babito.hopto.org:8000/verify')
          .then(response => {
            this.rows = response.data
          })
        axios.get('http://babito.hopto.org:8000/fetch')
          .then(response => {
            this.rows = response.data
          })
      },

      selectionChanged(params) {
        this.rowSelected = params.selectedRows;
      },

      onSubmit(evt) {
        evt.preventDefault()
        if(typeof this.rowSelected === 'undefined' || this.rowSelected === null || this.rowSelected.length === 0){
          this.$notify({
            group: 'notify',
            title: 'Error',
            text: 'Choose the room to book.',
            type: 'error',
          })
        } else if (this.value === null) {
          this.$notify({
            group: 'notify',
            title: 'Error',
            text: 'Choose the date to book',
            type: 'error',
          })
        } else {
          this.rowSelected.push({id: this.value})
          axios.post('http://babito.hopto.org:8000/update', this.rowSelected)
            .catch(error => {
              this.$notify({
                group: 'notify',
                title: 'Error',
                text: error,
                type: 'error',
              })
            })
            .then((res, err) => {
              if (err) {
                this.$notify({
                  group: 'notify',
                  title: 'Error',
                  text: err,
                  type: 'error',
                })
              } else {
                this.$notify({
                  group: 'notify',
                  title: 'Room is now',
                  text: 'Booked',
                  type: 'success',
                })
              }
            }).then(() => {
            axios.get('http://babito.hopto.org:8000/fetch')
              .then(response => {
                this.rows = response.data
              })
          })
        }
      }
    },

    created() {
      axios.get('http://babito.hopto.org:8000/fetch')
        .then(response => {
          this.rows = response.data
        })
      this.doThis()
    },
  };
</script>


<style scoped>
  .datepicker {
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.47);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.47);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.47);
  }

  #goodTable{
    margin-right: 10%;
    margin-left: 10%;
  }

  @media screen and (max-width: 640px) {
    body {
      height: fit-content;
    }
    #goodTable{
      margin-right: 0;
      margin-left: 0;
    }
  }
</style>

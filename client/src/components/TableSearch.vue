<template>
  <div>
    <vue-good-table style="
    margin-top: 2%;
    margin-right: 10%;
    margin-left: 10%;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.47);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.47);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.47);"
      @on-selected-rows-change="selectionChanged"
      :columns="columns"
      :rows="rows"
      max-height="400px"
      :fixed-header="true"
      :select-options="{ enabled: true,}"
      :search-options="{ enabled: true, }">
    </vue-good-table>
    <div slot="selected-row-actions" style="margin-top: 10px">
      <b-form v-on:submit.prevent="onSubmit">
        <vue-ctk-date-time-picker class="datepicker" label="Choose when to book!" v-model="value" style="width: 200px"></vue-ctk-date-time-picker>
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

    methods:{
      selectionChanged(params) {
        this.rowSelected = params.selectedRows;
      },

      onSubmit(evt) {
        this.rowSelected.push({'date':{id: this.value}})
        evt.preventDefault()
        axios.post('http://localhost:8000/update', this.rowSelected)
          .catch(error => {
            this.$notify({
              group: 'notify',
              title: 'Error',
              text: error,
              type: 'error',
            })
          })
          .then((res, err) => {
              if(err){
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
          }).then(() =>{
            function time(){location.reload()}
          setTimeout(time, 3000);
        })
      }
    },

    created() {
      axios.get('http://localhost:8000/fetch')
        .then(response => {
          console.log(response.data)
          this.rows = response.data
          this.$notify({
            group: 'notify',
            title: 'Hello user!',
            text: 'here you can book a room',
          });
        }).catch(error => console.log(error))
    },
  };
</script>


<style scoped>
.datepicker{
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.47);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.47);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.47);
}
</style>

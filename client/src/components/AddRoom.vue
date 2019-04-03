<template>
  <div style="margin-left: 30%; margin-right: 30%;margin-top: 5%">
    <h2 style="margin-top: 5%; margin-bottom: 5%" >Add a new room: </h2>
    <div class="card-body">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Enter room name:"
        label-for="input-1">
        <!--        description="We'll never share your email with anyone else."-->

        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="room name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Enter room description: " label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.description"
          required
          placeholder="description"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="capacity:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.capacity"
          type="number"
          required
          placeholder="0"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Equipment:">
        <b-form-checkbox-group v-model="form.equipment" id="checkboxes-4">
          <b-form-checkbox value="tv">TV</b-form-checkbox>
          <b-form-checkbox value="retro">Retro Projecteur</b-form-checkbox>
          <b-form-checkbox value="tableau">Tableau</b-form-checkbox>
          <b-form-checkbox value="café">Machine a café</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <md-button type="submit" class="md-raised">Submit</md-button>
      <md-button type="reset" class="md-raised md-accent">Reset</md-button>
    </b-form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "AddRoom",
    data() {
      return {
        form: {
          name: '',
          description: '',
          capacity: 0,
          equipment: [],
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
        axios.post('http://localhost:8000/new', this.form)
          .catch(error => {
            console.log(error)
          })
          .then(function () {
          location.reload('http://localhost:8080/#/')
        })

      },
      onReset(evt) {
        evt.preventDefault()
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>


<style scoped>
  h2 {
    color: #eeeeee;
    text-shadow: -1px 0 0 rgba(0, 0, 0, 0.8),
    1px 0 0 rgba(0, 0, 0, 0.8),
    0 -1px 0 rgba(0, 0, 0, 0.8),
    0 1px 0 rgba(0, 0, 0, 0.8);
  }

  .card-body{
    background-color: #eeeeee;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.47);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.47);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.47);
  }
</style>

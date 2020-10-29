<template>
  <div class="card mt-3">
    <div class="card-header">Table</div>
    <div class="card-body">
      <div class="card-text">
        <p>
          <strong>{{ count }}</strong>
          total records
        </p>
        <b-table
          striped
          :items="data"
          responsive
          bordered
          ref="table"
        ></b-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import msgMixin from '../mixins/msg-mixin'

export default {
  name: 'AppTable',
  mixins: [msgMixin],
  data() {
    return {
      count: 0,
      data: [],
      isBusy: false
    }
  },
  methods: {
    getData() {
      this.isBusy = true
      const url = '/jsonplaceholder/todos'
      axios
        .get(url)
        .then((res) => {
          this.data = res.data
          this.count = res.data.length
          this.successMsg(`Loaded ${this.count} records from ${url}`);
        })
        .catch((err) => {
          console.error(err)
          this.errorMsg(err.message)
        })
        .finally(() => {
          this.isBusy = false
        })
    }
  },
  created() {
    this.getData()
  }
}
</script>
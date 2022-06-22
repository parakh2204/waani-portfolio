import { reactive } from 'vue'

export const store = reactive({
  filterValue: 0,
  setFilterValue() {
    this.filterValue++
  }
})
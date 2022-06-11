export default {
  name: 'timeLine',
  data() {
    return {
      is1997Open: false,
      is2019Open: false,
      is2020Open: false,
      is2021Open: false,
      is2022Open: false,
    }
  },
  methods: {
    linkToCourse(link) {
      window.open(link, 'mywindow')
    },
    foldOut(year) {
      if(year == '1997')      { this.is1997Open = !this.is1997Open }
      else if(year == '2019') { this.is2019Open = !this.is2019Open }
      else if(year == '2020') { this.is2020Open = !this.is2020Open }
      else if(year == '2021') { this.is2021Open = !this.is2021Open }
      else if(year == '2022') { this.is2022Open = !this.is2022Open }
    }
  }
}
